// Listing Types for VIYB Listings Manager

export type ListingStatus = 'active' | 'inactive';
export type ListingCategory = 'power' | 'sail';
export type ListingCondition = 'new' | 'used';
export type HullMaterial = 'fiberglass' | 'aluminum' | 'steel' | 'wood' | 'composite' | 'carbon-fiber' | 'other';
export type BoatNamePrivacy = 'public' | 'private';

export interface Engine {
  id: string;
  power: number | null; // hp
  make: string;
  model: string;
  year: number | null;
  hours: number | null;
  engineType: 'inboard' | 'outboard' | 'inboard/outboard' | 'jet' | '';
  driveType: 'direct' | 'v-drive' | 'sail-drive' | 'pod-drive' | 'jet' | 'surface' | '';
  fuelType: 'diesel' | 'gasoline' | 'electric' | 'hybrid' | '';
  location: 'port' | 'starboard' | 'center' | 'twin' | '';
  propellerType: 'fixed' | 'folding' | 'feathering' | 'controllable-pitch' | '';
  propellerMaterial: 'bronze' | 'stainless-steel' | 'aluminum' | 'composite' | '';
}

export interface Measurements {
  loa: number | null; // Length Overall (ft)
  lwl: number | null; // Length at Waterline (ft)
  beam: number | null; // ft
  draft: number | null; // ft
  displacement: number | null; // lbs
  fuelCapacity: number | null; // gallons
  waterCapacity: number | null; // gallons
  holdingCapacity: number | null; // gallons
  cabins: number | null;
  berths: number | null;
  heads: number | null;
}

export interface Media {
  id: string;
  type: 'photo' | 'video';
  url: string; // For photos: path relative to /public, for videos: YouTube/Vimeo URL
  title: string;
  caption: string;
  isPrimary: boolean;
  order: number;
  // For optimized images
  webpUrl?: string;
  avifUrl?: string;
  thumbnailUrl?: string;
}

export interface FeatureGroups {
  electronics: string[];
  insideEquipment: string[];
  electricalEquipment: string[];
  outsideEquipment: string[];
  covers: string[];
  additionalEquipment: string[];
}

export interface AdditionalDescriptionBlock {
  id: string;
  title: 'Disclaimer' | 'Mechanical' | 'Accommodations' | 'Layout' | 'Electronics' | 'Deck Equipment' | 'Safety' | 'Navigation' | 'Other';
  content: string;
  order: number;
}

export interface Listing {
  id: string;
  slug: string;
  status: ListingStatus;

  // Basic Details
  year: number;
  make: string;
  model: string;
  lengthFt: number;
  lengthIn: number;
  hullMaterial: HullMaterial;
  category: ListingCategory;
  boatClass: string;
  additionalClass: string;
  condition: ListingCondition;

  // Pricing
  price: number;
  currency: 'USD' | 'EUR' | 'GBP';
  hidePrice: boolean;

  // Location
  country: string;
  city: string;
  marina: string;

  // Identification
  hin: string;
  boatName: string;
  boatNamePrivacy: BoatNamePrivacy;
  stockNumber: string;

  // Measurements
  measurements: Measurements;

  // Propulsion
  engines: Engine[];
  joystickControls: boolean;

  // Features
  features: FeatureGroups;

  // Media
  media: Media[];
  photo360Url: string;
  virtualTourUrl: string;

  // Descriptions
  description: string;
  additionalDescriptions: AdditionalDescriptionBlock[];

  // Metadata
  createdAt: string;
  updatedAt: string;
}

// Default disclaimer text
export const DEFAULT_DISCLAIMER = `The Company offers the details of this vessel in good faith but cannot guarantee or warrant the accuracy of this information nor warrant the condition of the vessel. A buyer should instruct his agents, or his surveyors, to investigate such details as the buyer desires validated. This vessel is offered subject to prior sale, price change, or withdrawal without notice.`;

// Feature options
export const FEATURE_OPTIONS = {
  electronics: [
    'AIS', 'Autopilot', 'CD Player', 'Cockpit Speakers', 'Compass', 'Computer',
    'Depthsounder', 'DVD Player', 'Flat Screen TV', 'GPS', 'Log-Speedometer',
    'Navigation Center', 'Plotter', 'Radar', 'Radar Detector', 'Radio',
    'Repeater(s)', 'TV Set', 'VCR', 'VHF', 'Wi-Fi', 'Wind Speed and Direction'
  ],
  insideEquipment: [
    'Air Compressor', 'Air Conditioning', 'Battery Charger', 'Bow Thruster',
    'Chemical Head', 'Deep Freezer', 'Dishwasher', 'Electric Bilge Pump',
    'Electric Head', 'Fresh Water Maker', 'Heating', 'Hot Water',
    'Manual Bilge Pump', 'Marine Head', 'Microwave Oven', 'Oven',
    'Refrigerator', 'Sea Water Pump', 'Seakeeper', 'Stern Thruster', 'Washing Machine'
  ],
  electricalEquipment: [
    'Generator', 'Inverter', 'Shore Power Inlet'
  ],
  outsideEquipment: [
    'Cockpit Cushions', 'Cockpit Shower', 'Cockpit Table', 'Davit(s)',
    'Electric Winch', 'Fin Stabilizer', 'Gangway', 'Gyroscopic Stabilizer',
    'Helipad', 'Hydraulic Bathing Platform', 'Hydraulic Gangway', 'Hydraulic Swim Step',
    'Hydraulic Winch', 'Liferaft', 'Outboard Engine Brackets', 'Outriggers',
    'Power Poles', 'Radar Reflector', 'Solar Panel', 'Surf System',
    'Swimming Ladder', 'Teak Cockpit', 'Teak Sidedecks', 'Tender',
    'Tiller', 'Wind Generator'
  ],
  covers: [
    'Bimini Top', 'Camper Cover', 'Cockpit Cover', 'Genoa Cover',
    'Hard Top', 'Lazy Bag', 'Lazyjacks', 'Mainsail Cover', 'Spray Hood'
  ],
  additionalEquipment: [
    'Beaching Legs', 'Cinema', 'Crane', 'Dance Floor', 'Elevator', 'Garage',
    'Gym', 'Jacuzzi', 'Launching Trailer', 'Office', 'Pool', 'PWC',
    'Road Trailer', 'Sauna', 'Scuba Equipment', 'Touch & Go', 'Touch Screen',
    'Underwater Lights', 'Walk Around', 'Water Toys', 'Wheelchair Friendly', 'Wine Cellar'
  ]
};

// Boat class options
export const BOAT_CLASS_OPTIONS = [
  'Center Console', 'Express Cruiser', 'Motor Yacht', 'Trawler', 'Sport Fishing',
  'Catamaran - Power', 'Catamaran - Sail', 'Cruiser Racer', 'Daysailer',
  'Ketch', 'Sloop', 'Cutter', 'Yawl', 'Schooner', 'Trimaran',
  'Mega Yacht', 'Pilothouse', 'Flybridge', 'Bowrider', 'Cruiser',
  'Deck Boat', 'Pontoon', 'Rigid Inflatable', 'Runabout', 'Ski/Wake',
  'Sport Yacht', 'Walkaround', 'Other'
];

// Country options
export const COUNTRY_OPTIONS = [
  'United States', 'British Virgin Islands', 'US Virgin Islands', 'Puerto Rico',
  'Bahamas', 'Turks and Caicos', 'Antigua and Barbuda', 'St. Maarten',
  'St. Lucia', 'Grenada', 'Martinique', 'Guadeloupe', 'Barbados',
  'Trinidad and Tobago', 'Jamaica', 'Cayman Islands', 'Mexico', 'Canada',
  'United Kingdom', 'France', 'Italy', 'Spain', 'Greece', 'Croatia',
  'Montenegro', 'Turkey', 'Other'
];

// Listing Score calculation
export interface ListingScoreItem {
  key: string;
  label: string;
  completed: boolean;
}

export function calculateListingScore(listing: Partial<Listing>): { score: number; items: ListingScoreItem[] } {
  const items: ListingScoreItem[] = [
    {
      key: 'price',
      label: 'Price',
      completed: !!listing.price && listing.price > 0
    },
    {
      key: 'additionalClass',
      label: 'Additional Class',
      completed: !!listing.additionalClass && listing.additionalClass.length > 0
    },
    {
      key: 'description',
      label: 'Description',
      completed: !!listing.description && listing.description.length > 50
    },
    {
      key: 'hin',
      label: 'HIN',
      completed: !!listing.hin && listing.hin.length > 0
    },
    {
      key: 'photos',
      label: 'Photos',
      completed: (listing.media?.filter(m => m.type === 'photo').length ?? 0) > 0
    },
    {
      key: 'videos',
      label: 'Videos',
      completed: (listing.media?.filter(m => m.type === 'video').length ?? 0) > 0
    },
    {
      key: 'engineHours',
      label: 'Engine Hours',
      completed: listing.engines?.some(e => e.hours !== null && e.hours > 0) ?? false
    }
  ];

  const completed = items.filter(item => item.completed).length;
  const score = Math.round((completed / items.length) * 100);

  return { score, items };
}

// Create empty listing
export function createEmptyListing(): Omit<Listing, 'id' | 'slug' | 'createdAt' | 'updatedAt'> {
  return {
    status: 'inactive',
    year: new Date().getFullYear(),
    make: '',
    model: '',
    lengthFt: 0,
    lengthIn: 0,
    hullMaterial: 'fiberglass',
    category: 'power',
    boatClass: '',
    additionalClass: '',
    condition: 'used',
    price: 0,
    currency: 'USD',
    hidePrice: false,
    country: 'British Virgin Islands',
    city: '',
    marina: '',
    hin: '',
    boatName: '',
    boatNamePrivacy: 'public',
    stockNumber: '',
    measurements: {
      loa: null,
      lwl: null,
      beam: null,
      draft: null,
      displacement: null,
      fuelCapacity: null,
      waterCapacity: null,
      holdingCapacity: null,
      cabins: null,
      berths: null,
      heads: null
    },
    engines: [],
    joystickControls: false,
    features: {
      electronics: [],
      insideEquipment: [],
      electricalEquipment: [],
      outsideEquipment: [],
      covers: [],
      additionalEquipment: []
    },
    media: [],
    photo360Url: '',
    virtualTourUrl: '',
    description: '',
    additionalDescriptions: [
      {
        id: 'default-disclaimer',
        title: 'Disclaimer',
        content: DEFAULT_DISCLAIMER,
        order: 0
      }
    ]
  };
}

// Generate slug from listing
export function generateSlug(year: number, make: string, model: string): string {
  const base = `${year}-${make}-${model}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
  return base;
}
