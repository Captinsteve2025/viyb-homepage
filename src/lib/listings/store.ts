// File-backed storage layer for listings
// This can be swapped for Prisma/database later

import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import type { Listing } from './types';
import { createEmptyListing, generateSlug } from './types';

const DATA_DIR = path.join(process.cwd(), 'data');
const LISTINGS_FILE = path.join(DATA_DIR, 'listings.json');

// Ensure data directory exists
function ensureDataDir(): void {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

// Read all listings from file
function readListingsFile(): Listing[] {
  ensureDataDir();
  if (!fs.existsSync(LISTINGS_FILE)) {
    fs.writeFileSync(LISTINGS_FILE, JSON.stringify([], null, 2));
    return [];
  }
  try {
    const data = fs.readFileSync(LISTINGS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

// Write all listings to file
function writeListingsFile(listings: Listing[]): void {
  ensureDataDir();
  fs.writeFileSync(LISTINGS_FILE, JSON.stringify(listings, null, 2));
}

// Create a new listing
export async function createListing(data: Partial<Listing> = {}): Promise<Listing> {
  const listings = readListingsFile();

  const id = uuidv4();
  const now = new Date().toISOString();
  const emptyListing = createEmptyListing();

  const newListing: Listing = {
    ...emptyListing,
    ...data,
    id,
    slug: generateSlug(data.year || emptyListing.year, data.make || 'new', data.model || 'listing'),
    createdAt: now,
    updatedAt: now
  };

  // Ensure unique slug
  const slugBase = newListing.slug;
  let slugCounter = 1;
  while (listings.some(l => l.slug === newListing.slug)) {
    newListing.slug = `${slugBase}-${slugCounter}`;
    slugCounter++;
  }

  listings.push(newListing);
  writeListingsFile(listings);

  return newListing;
}

// Get all listings
export async function getAllListings(): Promise<Listing[]> {
  return readListingsFile();
}

// Get listing by ID
export async function getListingById(id: string): Promise<Listing | null> {
  const listings = readListingsFile();
  return listings.find(l => l.id === id) || null;
}

// Get listing by slug
export async function getListingBySlug(slug: string): Promise<Listing | null> {
  const listings = readListingsFile();
  return listings.find(l => l.slug === slug) || null;
}

// Update listing
export async function updateListing(id: string, data: Partial<Listing>): Promise<Listing | null> {
  const listings = readListingsFile();
  const index = listings.findIndex(l => l.id === id);

  if (index === -1) {
    return null;
  }

  const updatedListing: Listing = {
    ...listings[index],
    ...data,
    id, // Preserve ID
    createdAt: listings[index].createdAt, // Preserve created date
    updatedAt: new Date().toISOString()
  };

  // Update slug if year/make/model changed
  if (data.year !== undefined || data.make !== undefined || data.model !== undefined) {
    const newSlug = generateSlug(
      updatedListing.year,
      updatedListing.make,
      updatedListing.model
    );

    // Only update if different and ensure uniqueness
    if (newSlug !== listings[index].slug) {
      const slugBase = newSlug;
      let slugCounter = 1;
      let finalSlug = newSlug;
      while (listings.some(l => l.slug === finalSlug && l.id !== id)) {
        finalSlug = `${slugBase}-${slugCounter}`;
        slugCounter++;
      }
      updatedListing.slug = finalSlug;
    }
  }

  listings[index] = updatedListing;
  writeListingsFile(listings);

  return updatedListing;
}

// Delete listing
export async function deleteListing(id: string): Promise<boolean> {
  const listings = readListingsFile();
  const index = listings.findIndex(l => l.id === id);

  if (index === -1) {
    return false;
  }

  listings.splice(index, 1);
  writeListingsFile(listings);

  return true;
}

// Duplicate listing
export async function duplicateListing(id: string): Promise<Listing | null> {
  const original = await getListingById(id);

  if (!original) {
    return null;
  }

  const { id: _id, slug: _slug, createdAt: _createdAt, updatedAt: _updatedAt, ...data } = original;

  return createListing({
    ...data,
    status: 'inactive',
    boatName: `${original.boatName} (Copy)`
  });
}

// Get active listings for public view
export async function getActiveListings(): Promise<Listing[]> {
  const listings = readListingsFile();
  return listings.filter(l => l.status === 'active');
}

// Search listings
export async function searchListings(query: string): Promise<Listing[]> {
  const listings = readListingsFile();
  const lowerQuery = query.toLowerCase();

  return listings.filter(l =>
    l.make.toLowerCase().includes(lowerQuery) ||
    l.model.toLowerCase().includes(lowerQuery) ||
    l.boatName.toLowerCase().includes(lowerQuery) ||
    l.city.toLowerCase().includes(lowerQuery) ||
    l.country.toLowerCase().includes(lowerQuery) ||
    String(l.year).includes(lowerQuery)
  );
}

// Export to CSV
export async function exportToCSV(): Promise<string> {
  const listings = await getAllListings();

  const headers = [
    'ID', 'Status', 'Year', 'Make', 'Model', 'Length (ft)', 'Price', 'Currency',
    'Condition', 'Category', 'Class', 'Country', 'City', 'HIN', 'Boat Name',
    'Photos', 'Description Length', 'Created', 'Updated'
  ];

  const rows = listings.map(l => [
    l.id,
    l.status,
    l.year,
    l.make,
    l.model,
    l.lengthFt,
    l.price,
    l.currency,
    l.condition,
    l.category,
    l.boatClass,
    l.country,
    l.city,
    l.hin,
    l.boatName,
    l.media.filter(m => m.type === 'photo').length,
    l.description.length,
    l.createdAt,
    l.updatedAt
  ]);

  const csvContent = [
    headers.join(','),
    ...rows.map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(','))
  ].join('\n');

  return csvContent;
}
