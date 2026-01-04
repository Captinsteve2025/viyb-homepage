import * as cheerio from 'cheerio'
import { writeFile, existsSync } from 'fs'
import { join } from 'path'

export type BaliModel = {
  modelName: string
  modelUrl: string
  heroImage: string | null
  brochureUrl: string | null
  specs: {loa?: string, beam?: string, draft?: string, cabins?: string}
  layouts: string[]
  deckLayouts: string[]
  galleryImages: string[]
  comparisons: {title: string, url: string}[]
  description?: string
  length?: string
  price?: string
  slug?: string
  // Optionally: interiorGallery?: string[] // For Catspace, see note at end
}

const BALI_INDEX_URL = 'https://catamaranguru.com/yacht-sales/new-yachts/bali-catamarans/'

// Image URL business rules:
const VALID_IMG_EXT = ['jpg', 'jpeg', 'png', 'webp']
const IMG_PATH_REQ = ['/wp-content/uploads/']
const IMG_EXCLUDE = ['CG_Icon','CG-Logo','iyba','avatar','logo','icon','newsletter','author']

const CATSPACE_URL = "https://catamaranguru.com/yacht-sales/new-yachts/bali-catspace-catamaran/";
const CATSPACE_MORE_SAIL_PICS = "More Bali Catspace Sail Pictures";
const PLACEHOLDER_CATSPACE = "/img/placeholder-catspace.jpg";

function isValidImgUrl(url: string) {
  if (!url) return false
  if (!IMG_PATH_REQ.some(p=>url.includes(p))) return false
  if (!VALID_IMG_EXT.some(ext=>url.toLowerCase().endsWith(ext))) return false
  if (IMG_EXCLUDE.some(ex=>url.toLowerCase().includes(ex.toLowerCase()))) return false
  return true
}

// Reverted: Only negative filters, no must-have keywords. Accept if not forbidden; scoring will prioritize exterior/side/profile.
function validateExteriorProfileHeroImage(url: string, alt?: string): boolean {
  if (!isValidImgUrl(url)) return false;
  if (!url) return false;
  const forbidden = ['interior','cockpit','saloon','galley','cabin','flybridge','bow','stern','detail','close','lifestyle','people','promo','dining','couple','author','logo','icon','avatar','layout'];
  const altLower = (alt||'').toLowerCase();
  const fn = url.split('/').pop()?.toLowerCase()||'';
  if (forbidden.some(term => altLower.includes(term) || fn.includes(term))) return false;
  // No must-have keywords: accept if not forbidden; scoring will prioritize exterior/side/profile
  return true;
}

function getModelSlugCandidates(modelName: string): string[] {
  const re = /Bali\s*(\d+[.]?\d*)/i
  const match = re.exec(modelName)
  if (!match) return []
  const base = match[1].replace('.','-')
  return [
    `bali-${base}`.toLowerCase(),
    `bali-${base.replace('.','')}`.toLowerCase(),
    `bali${base.replace(/[-.]/,'')}`.toLowerCase(),
    `${base.replace(/[-.]/,'')}`.toLowerCase()
  ]
}

async function downloadBrochurePdf(pdfUrl: string, slug: string): Promise<string|null> {
  // If no slug, default to model-brochure.pdf
  const fileName = slug ? `${slug}-brochure.pdf` : `model-brochure.pdf`
  const filePath = join(process.cwd(), 'public/PDFs', fileName)
  const localUrl = `/PDFs/${fileName}`
  // If already exists, return local
  if (existsSync(filePath)) return localUrl
  try {
    const res = await fetch(pdfUrl)
    if (!res.ok) return null
    const buf = Buffer.from(await res.arrayBuffer())
    await new Promise((resolve, reject) => writeFile(filePath, buf, err => err ? reject(err) : resolve(null)))
    return localUrl
  } catch(e) {
    console.warn('Brochure PDF download failed:', pdfUrl, e)
    return null
  }
}

function catspaceExteriorFilter(url: string, alt?: string) {
  const bad = [/lifestyle/i, /dining/i, /couple/i, /people/i, /interior/i, /promo/i];
  if (!isValidImgUrl(url)) return false;
  if (alt && bad.some((r) => r.test(alt))) return false;
  const fn = url.split("/").pop() || "";
  if (bad.some((r) => r.test(fn))) return false;
  // Must visually show hull/mast/sails (imperfect, but checked by filename keywords)
  const valid = /(exterior|sail|hull|deck|profile|underway)/i;
  return valid.test(fn) || valid.test(url);
}

// Helper for non-Catspace models
function sectionImgs(sectionHdrMatch: string, $: cheerio.CheerioAPI): string[] {
  const hdr = $(`h2:contains('${sectionHdrMatch}')`).first()
  const imgs: string[] = []
  if (hdr.length) {
    hdr.nextAll('a').each((_: any, a: any)=>{
      const href = $(a).attr('href')||''
      if(isValidImgUrl(href)) imgs.push(href)
    })
    hdr.nextAll('img').each((_: any, img: any)=>{
      const src = $(img).attr('src')||''
      if(isValidImgUrl(src)) imgs.push(src)
    })
  }
  return imgs
}

// SCORING: Still prefers exterior/profile/underway, but no threshold
function scoreHeroCandidate(url: string, alt?: string): number {
  if (!validateExteriorProfileHeroImage(url, alt)) return -Infinity;
  const text = `${url.toLowerCase()} ${(alt||'').toLowerCase()}`;
  let score = 0;
  const bonus = [
    {kw:'profile', s:5}, {kw:'side', s:4}, {kw:'exterior', s:4},
    {kw:'underway', s:4}, {kw:'sail', s:4}, {kw:'anchored', s:2},
    {kw:'starboard', s:2}, {kw:'port', s:2}, {kw:'hull', s:1}
  ];
  for (const b of bonus) if (text.includes(b.kw)) score += b.s;
  const penalty = [
    {kw:'deck', s:-3}, {kw:'flybridge', s:-5}, {kw:'bow', s:-3}, {kw:'stern', s:-3},
    {kw:'detail', s:-5}, {kw:'close', s:-6}, {kw:'layout', s:-8}
  ];
  for (const p of penalty) if (text.includes(p.kw)) score += p.s;
  return score;
}

async function scrapeModelPage(modelUrl: string): Promise<BaliModel> {
  const res = await fetch(modelUrl, { next: { revalidate: 86400 } });
  const html = await res.text();
  const $ = cheerio.load(html);

  const modelName = $('h1').first().text().trim();

  let brochureUrl: string | null = null;
  let brochureRemoteUrl: string | null = null;
  let slug = '';
  // Extract slug to match detail page routes: catsmart, catspace, 4-2, 4-4, etc.
  // URL patterns: bali-catsmart-sail-catamaran, bali-4-2-catamaran, bali-52-catamaran,
  // bali-catspace-catamaran, bali-5-4-our-new-cruising-catamaran
  const slugMatch = /bali-([\w.-]+?)(?:-sail|-our-new-cruising)?-?catamarans?/i.exec(modelUrl);
  if (slugMatch) {
    slug = slugMatch[1].toLowerCase();
    // Normalize: convert dots to dashes (e.g., 4.2 -> 4-2)
    slug = slug.replace(/\./g, '-');
    // Handle numeric slugs without separator (e.g., "52" -> "5-2", "48" -> "4-8")
    if (/^\d{2}$/.test(slug)) {
      slug = slug[0] + '-' + slug[1];
    }
    // Handle catspace-sail -> catspace
    if (slug === 'catspace-sail') {
      slug = 'catspace';
    }
  }

  $('a').each((_: any, a: any) => {
    const txt = $(a).text();
    const href = $(a).attr('href') || '';
    if (/brochure/i.test(txt) && /pdf/i.test(href)) {
      brochureRemoteUrl = href;
    }
  });

  const specs: BaliModel['specs'] = {};
  $('ul li').each((_: any, li: any) => {
    const txt = $(li).text();
    if (/overall length|length.*overall/i.test(txt)) specs.loa = txt.replace(/[^\d.]+/g, '').trim();
    if (/beam/i.test(txt)) specs.beam = txt.replace(/[^\d.]+/g, '').trim();
    if (/draft/i.test(txt)) specs.draft = txt.replace(/[^\d.]+/g, '').trim();
    if (/cabins/i.test(txt)) specs.cabins = txt.replace(/[^\d]+/g, '').trim();
  });

  let heroImage: string | null = null;
  const galleryImages: string[] = [];
  const interiorGallery: string[] = [];
  let layouts: string[] = [];
  let deckLayouts: string[] = [];

  if (modelUrl === CATSPACE_URL || modelName.toLowerCase().includes("catspace")) {
    // --- STRICT CATSPACE EXTERIOR GALLERY ---
    const moreHdr = $(`h2:contains('${CATSPACE_MORE_SAIL_PICS}')`).first();
    const exterior: string[] = [];
    if (moreHdr.length) {
      moreHdr.nextAll("img,a").each((_: any, el: any) => {
        const url = $(el).attr("href")||$(el).attr("src")||"";
        const alt = $(el).attr("alt")||"";
        if (catspaceExteriorFilter(url, alt)) exterior.push(url);
      });
    }
    galleryImages.push(...exterior);

    // Relaxed hero selection: only negative filters, no reachability, no must-have
    const validExterior = exterior.filter(img => validateExteriorProfileHeroImage(img));
    heroImage = validExterior[0] || null;
    if (!heroImage) {
      const og = $('meta[property="og:image"]').attr('content')||'';
      const tw = $('meta[name="twitter:image"]').attr('content')||'';
      const meta = [og, tw].filter(u => u && isValidImgUrl(u) && validateExteriorProfileHeroImage(u));
      heroImage = meta[0] || null;
    }
    if (!heroImage) {
      console.warn(`[MANUAL REVIEW NEEDED] No valid hero/exterior profile for Catspace: ${modelName}`);
    }

    // --- INTERIOR IMAGES ABOVE THE SAIL PICTURES HEADER ---
    if (moreHdr.length) {
      moreHdr.prevAll('img,a').each((_: any, el: any) => {
        const url = $(el).attr('href')||$(el).attr('src')||'';
        const alt = $(el).attr('alt')||'';
        if (isValidImgUrl(url) && !/lifestyle|dining|couple|people|promo/i.test(alt)) {
          interiorGallery.push(url);
        }
      });
    }

    // --- LAYOUTS ---
    layouts = (() => {
      const layoutsSection = $(`h2:contains('Layout Options')`).first();
      const imgs: string[] = [];
      if (layoutsSection.length) {
        layoutsSection.nextAll('img,a').each((_: any, el: any) => {
          const url = $(el).attr('href')||$(el).attr('src')||'';
          if(isValidImgUrl(url)) imgs.push(url);
        });
      }
      return imgs;
    })();

    // --- DECK LAYOUTS ---
    deckLayouts = (() => {
      const deckSection = $(`h2:contains('Deck Layout')`).first();
      const imgs: string[] = [];
      if (deckSection.length) {
        deckSection.nextAll('img,a').each((_: any, el: any) => {
          const url = $(el).attr('href')||$(el).attr('src')||'';
          if(isValidImgUrl(url)) imgs.push(url);
        });
      }
      return imgs;
    })();
  } else {
    // Generic (non-Catspace) parsing logic
    layouts = sectionImgs('Layout Options', $);
    deckLayouts = sectionImgs('Deck Layout', $);
    const gallerySection = $(`h2:contains('More')`).first();
    galleryImages.length = 0;
    if(gallerySection.length){
      gallerySection.nextAll('img,a').each((_: any, el: any)=>{
        const url = $(el).attr('href')||$(el).attr('src')||'';
        if(isValidImgUrl(url)) galleryImages.push(url);
      });
    }
    // Build candidate set: meta images + gallery + early content images
    const candidates: {url:string, alt:string}[] = [];
    const og = $('meta[property="og:image"]').attr('content')||'';
    const tw = $('meta[name="twitter:image"]').attr('content')||'';
    for (const u of [og, tw]) { if (u && isValidImgUrl(u)) candidates.push({url:u, alt:''}); }
    for (const u of galleryImages) { candidates.push({url:u, alt:''}); }
    $('.entry-content img, .post-content img, article img').each((_, el:any) => {
      const url = $(el).attr('src')||''; const alt = $(el).attr('alt')||'';
      if (isValidImgUrl(url)) candidates.push({url, alt});
    });
    // Score & select highest-scoring candidate, no threshold, no reachability
    let best:{url:string, alt:string}|null = null; let bestScore = -Infinity;
    for (const c of candidates) {
      const sc = scoreHeroCandidate(c.url, c.alt);
      if (sc > bestScore) { bestScore = sc; best = c; }
    }
    heroImage = best ? best.url : null;
    if (!heroImage) {
      console.warn(`[MANUAL REVIEW NEEDED] No valid hero/exterior profile for: ${modelName}`);
    }
  }

  // Comparisons
  const comparisons: {title:string,url:string}[] = []
  $(`h2:contains('RELATED INFORMATION')`).nextAll('a').each((_: any,a: any)=>{
    const href = $(a).attr('href')||''
    if(href && !href.startsWith('#')) {
      comparisons.push({title: $(a).text().trim(), url: href})
    }
  })
  // Always add general Bali comparison tool link if present
  if(html.includes('bali-catamarans-comparison/')) {
    comparisons.unshift({
      title:'Bali Catamarans Comparison Tool',
      url:'https://catamaranguru.com/yacht-sales/new-yachts/bali-catamarans-comparison/'
    })
  }

  // Download local brochure file if needed
  if (brochureRemoteUrl) {
    brochureUrl = await downloadBrochurePdf(brochureRemoteUrl, slug)
    // If download fails, fallback to original URL
    if (!brochureUrl) brochureUrl = brochureRemoteUrl
  }

  if (!heroImage) console.warn(`[Bali scraper] No hero for model: ${modelName}`);
  if (!layouts.length) console.warn(`[Bali scraper] No layouts for model: ${modelName}`);
  if (!deckLayouts.length) console.warn(`[Bali scraper] No deck layouts for model: ${modelName}`);

  return {
    modelName,
    modelUrl,
    heroImage,
    brochureUrl,
    specs,
    layouts,
    deckLayouts,
    galleryImages,
    comparisons,
    slug
    // Optionally: interiorGallery // If you want to surface this in UI, add to BaliModel type
  };
}

// Additional model URLs that may not be in the standard index listing
const ADDITIONAL_MODEL_URLS = [
  'https://catamaranguru.com/bali-4-6-catamaran/',
  'https://catamaranguru.com/bali-5-4-our-new-cruising-catamaran/',
  'https://catamaranguru.com/bali-catspace-sail-catamaran/',
  'https://catamaranguru.com/yacht-sales/new-yachts/bali-catamarans/bali-4-8-catamaran/',
];

// Fetch index page to get all models
export async function scrapeBaliModels(): Promise<BaliModel[]> {
  const res = await fetch(BALI_INDEX_URL,{ next: { revalidate: 86400 } })
  const html = await res.text()
  const $ = cheerio.load(html)
  const models: string[] = []

  // Extract model links robustly (includes Catspace and trailing-slash URLs)
  const seen = new Set<string>()
  $('a').each((_: any, a: any)=>{
    const hrefRaw = $(a).attr('href')||''
    if(!hrefRaw) return
    const href = hrefRaw.trim()
    const normalized = href.replace(/\/$/,'')
    // Match both /yacht-sales/new-yachts/bali- and root-level /bali- URLs
    if(/bali-[\w.-]+catamaran/i.test(normalized) && /catamaranguru\.com/i.test(normalized)){
      if(!seen.has(normalized)){
        seen.add(normalized)
        models.push(normalized)
      }
    }
  })

  // Add additional model URLs that may not be linked on the index page
  for (const url of ADDITIONAL_MODEL_URLS) {
    const normalized = url.replace(/\/$/, '');
    if (!seen.has(normalized)) {
      seen.add(normalized);
      models.push(normalized);
    }
  }

  // Scrape each model
  const results: BaliModel[] = []
  for(const url of models) {
    try {
      results.push(await scrapeModelPage(url))
    } catch(e) {
      console.warn('Bali model scrape failed',url,e)
    }
  }
  return results
}

// NOTE: To use interiorGallery in UI, you may want to extend BaliModel type and surface it in detail page.
// Placeholder image: ensure /img/placeholder-catspace.jpg exists in /public/img.
// END OF CATSPACE STRICT SECTION LOGIC
