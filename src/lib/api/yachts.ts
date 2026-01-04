/**
 * Yacht API Integration
 * Supports multiple yacht listing providers
 */

// Yacht data type
export interface Yacht {
  id: string;
  name: string;
  type: string;
  length: string;
  price: number;
  year: number;
  imageUrl: string;
  description: string;
  cabins?: number;
  guests?: number;
  crew?: string;
  location: string;
  features?: string[];
}

// ===========================================
// OPTION 1: YachtWorld API
// ===========================================
export async function fetchFromYachtWorld(): Promise<Yacht[]> {
  const apiKey = process.env.YACHTWORLD_API_KEY;

  if (!apiKey) {
    console.warn('YachtWorld API key not found, using mock data');
    return getMockYachts();
  }

  try {
    const response = await fetch('https://api.yachtworld.com/v1/listings', {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      next: { revalidate: 3600 } // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error('YachtWorld API request failed');
    }

    const data = await response.json();
    return transformYachtWorldData(data);
  } catch (error) {
    console.error('YachtWorld API error:', error);
    return getMockYachts(); // Fallback to mock data
  }
}

function transformYachtWorldData(apiData: any): Yacht[] {
  return apiData.listings?.map((yacht: any) => ({
    id: yacht.id.toString(),
    name: `${yacht.make} ${yacht.model}`,
    type: yacht.type || 'Yacht',
    length: `${yacht.length.feet}'`,
    price: yacht.price.amount,
    year: yacht.year,
    imageUrl: yacht.images?.[0]?.url || '/placeholder-yacht.jpg',
    description: yacht.description || '',
    cabins: yacht.specs?.cabins,
    guests: yacht.specs?.guests,
    location: yacht.location?.region || 'Caribbean',
    features: yacht.features || []
  })) || [];
}

// ===========================================
// OPTION 2: WordPress REST API
// ===========================================
export async function fetchFromWordPress(): Promise<Yacht[]> {
  const wpUrl = process.env.WORDPRESS_URL || 'https://your-wp-site.com';

  try {
    const response = await fetch(`${wpUrl}/wp-json/wp/v2/yachts?per_page=20`, {
      next: { revalidate: 1800 } // Cache for 30 minutes
    });

    if (!response.ok) {
      throw new Error('WordPress API request failed');
    }

    const data = await response.json();
    return transformWordPressData(data);
  } catch (error) {
    console.error('WordPress API error:', error);
    return getMockYachts();
  }
}

function transformWordPressData(wpData: any[]): Yacht[] {
  return wpData.map((post) => ({
    id: post.id.toString(),
    name: post.title.rendered,
    type: post.acf?.yacht_type || 'Yacht',
    length: post.acf?.length || '',
    price: post.acf?.price || 0,
    year: post.acf?.year || new Date().getFullYear(),
    imageUrl: post.featured_media_url || post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '',
    description: post.excerpt.rendered.replace(/<[^>]*>/g, ''),
    cabins: post.acf?.cabins,
    guests: post.acf?.max_guests,
    location: post.acf?.location || 'Caribbean',
    features: post.acf?.features || []
  }));
}

// ===========================================
// OPTION 3: Custom JSON Feed
// ===========================================
export async function fetchFromCustomFeed(feedUrl: string): Promise<Yacht[]> {
  try {
    const response = await fetch(feedUrl, {
      next: { revalidate: 600 } // Cache for 10 minutes
    });

    if (!response.ok) {
      throw new Error('Custom feed request failed');
    }

    const data = await response.json();
    return data.yachts || data; // Flexible format support
  } catch (error) {
    console.error('Custom feed error:', error);
    return getMockYachts();
  }
}

// ===========================================
// MAIN FUNCTION: Get Yachts (Auto-detects source)
// ===========================================
export async function getYachts(): Promise<Yacht[]> {
  // Check which API is configured
  if (process.env.YACHTWORLD_API_KEY) {
    return fetchFromYachtWorld();
  }

  if (process.env.WORDPRESS_URL) {
    return fetchFromWordPress();
  }

  if (process.env.CUSTOM_YACHT_FEED_URL) {
    return fetchFromCustomFeed(process.env.CUSTOM_YACHT_FEED_URL);
  }

  // No API configured, use mock data for development
  console.warn('No yacht API configured. Using mock data. Set YACHTWORLD_API_KEY, WORDPRESS_URL, or CUSTOM_YACHT_FEED_URL in .env');
  return getMockYachts();
}

// ===========================================
// FILTERING UTILITIES
// ===========================================
export function filterYachtsByPrice(yachts: Yacht[], minPrice: number, maxPrice: number): Yacht[] {
  return yachts.filter(yacht => yacht.price >= minPrice && yacht.price <= maxPrice);
}

export function filterYachtsByType(yachts: Yacht[], type: string): Yacht[] {
  if (type === 'all') return yachts;
  return yachts.filter(yacht => yacht.type.toLowerCase() === type.toLowerCase());
}

export function sortYachtsByPrice(yachts: Yacht[], order: 'asc' | 'desc'): Yacht[] {
  return [...yachts].sort((a, b) => {
    return order === 'asc' ? a.price - b.price : b.price - a.price;
  });
}

// ===========================================
// MOCK DATA (for development/testing)
// ===========================================
export function getMockYachts(): Yacht[] {
  return [
    {
      id: '1',
      name: '85\' Motor Yacht',
      type: 'Motor Yacht',
      length: '85\'',
      price: 2850000,
      year: 2019,
      imageUrl: 'https://images.northropandjohnson.com/yacht/48efItZiNi/0C04F7AD-6790-ED11-AAD1-000D3A32EB3D/1755516839-1.jpg?auto=format&q=65&h=1&ar=16%3A9&fit=crop',
      description: 'Stunning motor yacht with luxury amenities, 4 staterooms, and professional crew quarters',
      cabins: 4,
      guests: 8,
      crew: 'Captain + Deckhand',
      location: 'British Virgin Islands',
      features: ['Air conditioning', 'Generator', 'Water maker', 'Tender']
    },
    {
      id: '2',
      name: '62\' Sailing Catamaran',
      type: 'Sailing Catamaran',
      length: '62\'',
      price: 1495000,
      year: 2021,
      imageUrl: 'https://sunreef-charter.com/wp-content/uploads/2023/04/hero_0009_viva-la-vida.jpg',
      description: 'Performance cruising catamaran with spacious layout, perfect for Caribbean adventures',
      cabins: 4,
      guests: 10,
      crew: 'Captain + Chef',
      location: 'US Virgin Islands',
      features: ['Solar panels', 'Water maker', 'Full electronics', 'Dive compressor']
    },
    {
      id: '3',
      name: '80\' Luxury Sailboat',
      type: 'Sailing Yacht',
      length: '80\'',
      price: 3750000,
      year: 2020,
      imageUrl: 'https://oysteryachts.com/assets/Uploads/Oyster-805-80-foot-yacht-Hero-D__FillMaxWzE5MjAsODEwXQ.png',
      description: 'Impeccable blue-water cruiser with unmatched craftsmanship and offshore capability',
      cabins: 5,
      guests: 10,
      crew: 'Captain + Chef + Engineer',
      location: 'British Virgin Islands',
      features: ['Advanced navigation', 'Stabilizers', 'Premium interior', 'Full refit 2023']
    }
  ];
}
