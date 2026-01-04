/**
 * Bali Models Static Data
 *
 * This file contains deterministic, manually verified data for each Bali catamaran model.
 * Main card images are full exterior side profiles (silhouette/side view) - never layouts or interiors.
 * Layout images are floor plans and deck diagrams for the detail pages.
 *
 * Image Selection Rules Applied:
 * Priority A: Images with "silhouette", "side view", "profile", "exterior side" in filename/alt
 * Priority B: Widest exterior photo that is NOT a plan/layout/interior
 */

export type BaliModelData = {
  name: string;
  slug: string;
  loa: string;
  beam: string;
  draft: string;
  cabins?: string;
  modelUrl: string;
  layoutUrl: string;
  brochureUrl: string | null;
  mainImage: string;
  mainImageReason: 'silhouette' | 'side-profile' | 'exterior-starboard' | 'exterior-port' | 'sailing-profile' | 'fallback';
  layoutImages: string[];
  deckLayoutImages: string[];
  galleryImages: string[];
  manualReviewNeeded: boolean;
};

export const BALI_MODELS: BaliModelData[] = [
  {
    name: 'Bali Catsmart',
    slug: 'catsmart',
    loa: '38\'7" / 11.78m',
    beam: '21\'6" / 6.59m',
    draft: '3\'7" / 1.10m',
    cabins: '3',
    modelUrl: 'https://catamaranguru.com/yacht-sales/new-yachts/bali-catamarans/bali-catsmart-sail-catamaran/',
    layoutUrl: 'https://catamaranguru.com/yacht-sales/new-yachts/bali-catamarans/bali-catsmart-sail-catamaran/',
    brochureUrl: 'https://drive.google.com/file/d/1uqnoqkSfztw1gE6F_Lqst97a9iZP7Ja9/view?usp=sharing',
    // Full exterior sailing photo showing complete side profile
    mainImage: 'https://catamaranguru.com/wp-content/uploads/2023/04/Visuel-ext-2.jpg',
    mainImageReason: 'sailing-profile',
    layoutImages: [],
    deckLayoutImages: [
      'https://catamaranguru.com/wp-content/uploads/2023/04/38-ft-catamaran-benchmarks-deck-flybridge-layout.jpg',
      'https://catamaranguru.com/wp-content/uploads/2023/04/38-ft-catamaran-benchmarks-3-cabin-layout.jpg',
      'https://catamaranguru.com/wp-content/uploads/2023/04/38-ft-catamaran-benchmarks-4-cabin-layout.jpg',
    ],
    galleryImages: [
      'https://catamaranguru.com/wp-content/uploads/2023/04/Visuel-ext-4-1.jpg',
      'https://catamaranguru.com/wp-content/uploads/2023/04/Visuel-ext-2.jpg',
    ],
    manualReviewNeeded: false,
  },
  {
    name: 'Bali Catspace',
    slug: 'catspace',
    loa: '40\'5" / 12.33m',
    beam: '21\'6" / 6.59m',
    draft: '3\'7" / 1.10m',
    cabins: '3-4',
    modelUrl: 'https://catamaranguru.com/yacht-sales/new-yachts/bali-catamarans/bali-catspace-sail-catamaran/',
    layoutUrl: 'https://catamaranguru.com/yacht-sales/new-yachts/bali-catamarans/bali-catspace-sail-catamaran/',
    brochureUrl: 'https://catamaranguru.com/wp-content/uploads/2020/08/bali-catspace-brochure.pdf',
    // Full exterior starboard view from "More Bali Catspace Sail Pictures" gallery
    mainImage: 'https://catamaranguru.com/wp-content/uploads/2021/09/Bali-Catspace.jpg',
    mainImageReason: 'exterior-starboard',
    layoutImages: [
      'https://catamaranguru.com/wp-content/uploads/2020/06/bali-catspace-sail-flybridge-layout-scaled.jpg',
      'https://catamaranguru.com/wp-content/uploads/2020/06/bali-catspace-sail-4-cabin-layout-scaled.jpg',
      'https://catamaranguru.com/wp-content/uploads/2020/06/bali-catspace-sail-3-cabin-layout-scaled.jpg',
    ],
    deckLayoutImages: [
      'https://catamaranguru.com/wp-content/uploads/2021/09/40ft-catamaran-bridgedeck-layout.png',
      'https://catamaranguru.com/wp-content/uploads/2021/09/40ft-catamaran-flybridge-deck.png',
    ],
    galleryImages: [
      'https://catamaranguru.com/wp-content/uploads/2021/09/Bali-Catspace-66.jpg',
      'https://catamaranguru.com/wp-content/uploads/2021/09/Bali-Catspace-33.jpg',
      'https://catamaranguru.com/wp-content/uploads/2021/09/Bali-catspace-58-1.jpg',
      'https://catamaranguru.com/wp-content/uploads/2021/09/Bali-Catspace-37.jpg',
    ],
    manualReviewNeeded: false,
  },
  {
    name: 'Bali 4.2',
    slug: '4-2',
    loa: '42\'2" / 12.85m',
    beam: '23\'3" / 7.08m',
    draft: '3\'8" / 1.12m',
    cabins: '3-4',
    modelUrl: 'https://catamaranguru.com/yacht-sales/new-yachts/bali-catamarans/bali-4-2-catamaran/',
    layoutUrl: 'https://catamaranguru.com/yacht-sales/new-yachts/bali-catamarans/bali-4-2-catamaran/',
    brochureUrl: 'https://catamaranguru.com/wp-content/uploads/2020/08/bali-4-2-brochure.pdf',
    // Full sails up, starboard side profile view from "More Bali 4.2 Pictures"
    mainImage: 'https://catamaranguru.com/wp-content/uploads/2021/05/bali-42-full-sails.jpg',
    mainImageReason: 'sailing-profile',
    layoutImages: [
      'https://catamaranguru.com/wp-content/uploads/2022/02/bali-42-owners-suite-3-cabin-layout-rotated.jpg',
      'https://catamaranguru.com/wp-content/uploads/2020/08/bali-4-2-4-cabin-4-bath-symmetric-layout.jpg',
      'https://catamaranguru.com/wp-content/uploads/2020/08/bali-4-2-owners-version-3-cabin-3-bath-layout.jpg',
    ],
    deckLayoutImages: [
      'https://catamaranguru.com/wp-content/uploads/2020/08/Bali-42-8.jpg',
      'https://catamaranguru.com/wp-content/uploads/2020/08/Bali-42-6.jpg',
    ],
    galleryImages: [
      'https://catamaranguru.com/wp-content/uploads/2021/05/bali-42-sails-up.jpg',
      'https://catamaranguru.com/wp-content/uploads/2021/05/bali-42-from-above.jpg',
      'https://catamaranguru.com/wp-content/uploads/2021/05/bali-42-motoring.jpg',
      'https://catamaranguru.com/wp-content/uploads/2021/05/bali-42-catamaran.jpg',
      'https://catamaranguru.com/wp-content/uploads/2021/05/bali-42-anchored.jpg',
    ],
    manualReviewNeeded: false,
  },
  {
    name: 'Bali 4.4',
    slug: '4-4',
    loa: '45\'1" / 13.75m',
    beam: '24\'3" / 7.40m',
    draft: '3\'9" / 1.20m',
    cabins: '3-4',
    modelUrl: 'https://catamaranguru.com/yacht-sales/new-yachts/bali-catamarans/bali-4-4-catamaran/',
    layoutUrl: 'https://catamaranguru.com/yacht-sales/new-yachts/bali-catamarans/bali-4-4-catamaran/',
    brochureUrl: 'https://catamaranguru.com/wp-content/uploads/2021/05/bali-44-open-space-catamaran-brochure.pdf',
    // bali-44-silhouette.jpg - PERFECT side profile silhouette from "More Bali 4.4 Pictures"
    mainImage: 'https://catamaranguru.com/wp-content/uploads/2021/05/bali-44-silhouette.jpg',
    mainImageReason: 'silhouette',
    layoutImages: [
      'https://catamaranguru.com/wp-content/uploads/2021/05/bali-44-3-cabin-layout-plan-e1621953864507.jpg',
      'https://catamaranguru.com/wp-content/uploads/2021/05/bali-44-cabin-layout-plan-e1621953880497.jpg',
    ],
    deckLayoutImages: [
      'https://catamaranguru.com/wp-content/uploads/2021/05/bali-44-nacelle-plan.jpg',
      'https://catamaranguru.com/wp-content/uploads/2021/05/bali-44-bridge-deck-plan.jpg',
    ],
    galleryImages: [
      'https://catamaranguru.com/wp-content/uploads/2022/02/bali-44-starboard-profile.jpg',
      'https://catamaranguru.com/wp-content/uploads/2022/02/bali-44-starboard-profile-sails-up.jpg',
      'https://catamaranguru.com/wp-content/uploads/2022/02/bali-44-port-profile-sails-up.jpg',
      'https://catamaranguru.com/wp-content/uploads/2021/05/bali-44-catamaran-sailing.jpg',
      'https://catamaranguru.com/wp-content/uploads/2021/05/bali-44-catamaran-for-sale.jpg',
    ],
    manualReviewNeeded: false,
  },
  {
    name: 'Bali 4.6',
    slug: '4-6',
    loa: '46\'10" / 14.28m',
    beam: '25\'1" / 7.66m',
    draft: '4\' / 1.22m',
    cabins: '3-5',
    modelUrl: 'https://catamaranguru.com/yacht-sales/new-yachts/bali-catamarans/bali-4-6-catamaran/',
    layoutUrl: 'https://catamaranguru.com/yacht-sales/new-yachts/bali-catamarans/bali-4-6-catamaran/',
    brochureUrl: 'https://catamaranguru.com/wp-content/uploads/2021/06/bali-46-brochure-jun-2021.pdf',
    // Full sailing side profile - bali-46-sails-up.jpg from "More Bali 4.6 Pictures"
    mainImage: 'https://catamaranguru.com/wp-content/uploads/2021/06/bali-46-sails-up.jpg',
    mainImageReason: 'sailing-profile',
    layoutImages: [
      'https://catamaranguru.com/wp-content/uploads/2020/06/bali-4-6-owners-suite-3-cabin-layout-plan-scaled.jpg',
      'https://catamaranguru.com/wp-content/uploads/2020/06/bali-4-6-owners-suite-layout-plan-scaled.jpg',
      'https://catamaranguru.com/wp-content/uploads/2020/06/bali-4-6-four-cabin-symmetrical-layout-scaled.jpg',
      'https://catamaranguru.com/wp-content/uploads/2020/06/bali-4-6-five-cabin-layout-plan-scaled.jpg',
    ],
    deckLayoutImages: [
      'https://catamaranguru.com/wp-content/uploads/2020/06/bali-4-6-layout-saloon-deck-scaled.jpg',
      'https://catamaranguru.com/wp-content/uploads/2020/06/bali-4-6-flybridge-layout-scaled.jpg',
    ],
    galleryImages: [
      'https://catamaranguru.com/wp-content/uploads/2021/06/bali-46-sailing-aft-view.jpg',
      'https://catamaranguru.com/wp-content/uploads/2021/06/bali-46-sailing-port-view.jpg',
      'https://catamaranguru.com/wp-content/uploads/2021/06/bali-46-sailing-bow-view.jpg',
      'https://catamaranguru.com/wp-content/uploads/2021/06/bali-46-anchored.jpg',
    ],
    manualReviewNeeded: false,
  },
  {
    name: 'Bali 4.8',
    slug: '4-8',
    loa: '48\'7" / 14.82m',
    beam: '25\'10" / 7.88m',
    draft: '4\'5" / 1.35m',
    cabins: '3-6',
    modelUrl: 'https://catamaranguru.com/yacht-sales/new-yachts/bali-catamarans/bali-4-8-catamaran/',
    layoutUrl: 'https://catamaranguru.com/yacht-sales/new-yachts/bali-catamarans/bali-4-8-catamaran/',
    brochureUrl: 'https://drive.google.com/file/d/15dO0Gk0jbcpAEViOw4FEdt3Sv5e2vIXy/view?usp=sharing',
    // bali-4-8-catamaran-silhouette - perfect exterior side profile from Deck Layouts section
    mainImage: 'https://catamaranguru.com/wp-content/uploads/2020/08/bali-4-8-catamaran-silhouette-scaled.jpg',
    mainImageReason: 'silhouette',
    layoutImages: [
      'https://catamaranguru.com/wp-content/uploads/2020/08/bali-4-8-3-cabin-layout-scaled.jpg',
      'https://catamaranguru.com/wp-content/uploads/2020/08/bali-4-8-4-cabin-owner-suite-layout-scaled.jpg',
      'https://catamaranguru.com/wp-content/uploads/2020/08/bali-4-8-4-cabin-symmetric-layout-scaled.jpg',
      'https://catamaranguru.com/wp-content/uploads/2020/08/bali-4-8-5-cabin-layout-scaled.jpg',
      'https://catamaranguru.com/wp-content/uploads/2020/08/bali-4-8-6-cabin-layout-scaled.jpg',
    ],
    deckLayoutImages: [
      'https://catamaranguru.com/wp-content/uploads/2020/08/bali-4-8-roof-deck-layout-scaled.jpg',
      'https://catamaranguru.com/wp-content/uploads/2020/08/bali-4-8-nacelle-deck-layout-scaled.jpg',
    ],
    galleryImages: [
      'https://catamaranguru.com/wp-content/uploads/2020/06/bali-4-8-catamaran-sailing-starboard.jpg',
      'https://catamaranguru.com/wp-content/uploads/2020/06/bali-4-8-catamaran-sailing.jpg',
      'https://catamaranguru.com/wp-content/uploads/2020/06/bali-4-8-catamaran-sailing-2.jpg',
      'https://catamaranguru.com/wp-content/uploads/2020/06/bali-4-8-catamaran-motoring.jpg',
    ],
    manualReviewNeeded: false,
  },
  {
    name: 'Bali 5.2',
    slug: '5-2',
    loa: '52\' / 15.85m',
    beam: '27\'3" / 8.30m',
    draft: '4\'3" / 1.30m',
    cabins: '3-6',
    modelUrl: 'https://catamaranguru.com/yacht-sales/new-yachts/bali-catamarans/bali-52-catamaran/',
    layoutUrl: 'https://catamaranguru.com/bali-catamarans-unveils-the-new-bali-5-2-flagship/',
    brochureUrl: null,
    // Full sailing side profile from bali-catamarans.hr - shows complete exterior bow-to-stern
    mainImage: 'https://bali-catamarans.hr/images/ownership/yacht-images/bali-52/bali-52-main.jpg',
    mainImageReason: 'sailing-profile',
    layoutImages: [
      'https://catamaranguru.com/wp-content/uploads/2025/02/BALI-52-LAYOUT-1.jpg',
      'https://catamaranguru.com/wp-content/uploads/2025/02/BALI-52-LAYOUT-2.jpg',
      'https://catamaranguru.com/wp-content/uploads/2025/02/BALI-52-LAYOUT-3.jpg',
      'https://catamaranguru.com/wp-content/uploads/2025/02/BALI-52-LAYOUT-4.jpg',
    ],
    deckLayoutImages: [],
    galleryImages: [
      'https://catamaranguru.com/wp-content/uploads/2025/02/BALI-52-ext01.jpg',
      'https://catamaranguru.com/wp-content/uploads/2025/02/BALI-52-ext02.jpg',
      'https://catamaranguru.com/wp-content/uploads/2025/02/BALI-52-ext03.jpg',
      'https://catamaranguru.com/wp-content/uploads/2025/02/BALI-52-ext04.jpg',
    ],
    manualReviewNeeded: false, // Updated with verified sailing profile image
  },
  {
    name: 'Bali 5.4',
    slug: '5-4',
    loa: '55\'1" / 16.80m',
    beam: '28\'6" / 8.70m',
    draft: '4\'9" / 1.45m',
    cabins: '4-6',
    modelUrl: 'https://catamaranguru.com/yacht-sales/new-yachts/bali-catamarans/bali-5-4-catamarans/',
    layoutUrl: 'https://catamaranguru.com/yacht-sales/new-yachts/bali-catamarans/bali-5-4-catamarans/',
    brochureUrl: 'https://catamaranguru.com/wp-content/uploads/2021/06/bali-54-2020-brochure.pdf',
    // bali-5-4-sails-up-starboard.jpg - Full exterior sailing side profile from Bali 5.4 Pictures
    mainImage: 'https://catamaranguru.com/wp-content/uploads/2020/06/bali-5-4-sails-up-starboard.jpg',
    mainImageReason: 'sailing-profile',
    layoutImages: [
      'https://catamaranguru.com/wp-content/uploads/2021/06/bali-54-layout-4-cabin-e1622811198822.jpg',
      'https://catamaranguru.com/wp-content/uploads/2021/06/bali-54-layout-5-cabin-twin-e1622811186809.jpg',
      'https://catamaranguru.com/wp-content/uploads/2021/06/bali-54-layout-5-cabin-charter-e1622809928623.jpg',
      'https://catamaranguru.com/wp-content/uploads/2021/06/bali-54-layout-6-cabin-charter-e1622809888763.jpg',
    ],
    deckLayoutImages: [
      'https://catamaranguru.com/wp-content/uploads/2021/06/bali-54-layout-saloon-deck-e1622811115579.jpg',
      'https://catamaranguru.com/wp-content/uploads/2021/06/bali-54-layout-flybridge-deck-e1622811132870.jpg',
    ],
    galleryImages: [
      'https://catamaranguru.com/wp-content/uploads/2020/06/bali-5-4-catamaran-ownership-catamaran-guru.jpg',
      'https://catamaranguru.com/wp-content/uploads/2021/06/bali-54-docked.jpg',
      'https://catamaranguru.com/wp-content/uploads/2020/06/bali-5-4-flybridge-sails-up.jpg',
    ],
    manualReviewNeeded: false,
  },
  {
    name: 'Bali 5.8',
    slug: '5-8',
    loa: '58\' / 17.68m',
    beam: '29\'8" / 9.04m',
    draft: '4\'10" / 1.47m',
    cabins: '4-6',
    modelUrl: 'https://catamaranguru.com/yacht-sales/new-yachts/bali-catamarans/bali-5-8-catamarans/',
    layoutUrl: 'https://catamaranguru.com/yacht-sales/new-yachts/bali-catamarans/bali-5-8-catamarans/',
    brochureUrl: 'https://www.bali-catamarans.com/wp-content/uploads/sites/4/2024/02/BROCHURE-BALI-5.8-1.pdf',
    // First gallery image showing full exterior side profile (2-2.jpg)
    mainImage: 'https://catamaranguru.com/wp-content/uploads/2024/02/2-2.jpg',
    mainImageReason: 'exterior-starboard',
    layoutImages: [
      'https://catamaranguru.com/wp-content/uploads/2024/02/Bali_58_salon_layout.png',
      'https://catamaranguru.com/wp-content/uploads/2024/02/Bali_58_4Cabin_layout.png',
    ],
    deckLayoutImages: [
      'https://catamaranguru.com/wp-content/uploads/2024/02/Bali_58_top_deck.png',
      'https://catamaranguru.com/wp-content/uploads/2024/02/Bali_58_twin_bed_layout.png',
    ],
    galleryImages: [
      'https://catamaranguru.com/wp-content/uploads/2024/02/1-2.jpg',
      'https://catamaranguru.com/wp-content/uploads/2024/09/bali-5.8_1.jpg',
      'https://catamaranguru.com/wp-content/uploads/2024/09/bali-5.8_2.jpg',
    ],
    manualReviewNeeded: false,
  },
];

// Validation logging helper
export function logModelImageValidation(): void {
  console.log('[Bali Models Image Validation]');
  for (const model of BALI_MODELS) {
    console.log(`
  Model: ${model.name}
  Slug: ${model.slug}
  Main Image: ${model.mainImage}
  Match Reason: ${model.mainImageReason}
  Manual Review: ${model.manualReviewNeeded}
`);
  }
}

// Get a model by slug
export function getBaliModelBySlug(slug: string): BaliModelData | undefined {
  return BALI_MODELS.find(m => m.slug === slug);
}

// Export as a function for server-side use (replaces scraping)
export function getBaliModels(): BaliModelData[] {
  return BALI_MODELS;
}
