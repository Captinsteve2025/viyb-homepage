import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { getListingById } from '@/lib/listings/store';
import type { Listing } from '@/lib/listings/types';

// Check admin authentication
async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  const adminCookie = cookieStore.get('viyb_admin');
  return adminCookie?.value === '1';
}

interface RouteParams {
  params: Promise<{ id: string }>;
}

// Template-based description generator
// Structured so an LLM can be added later
function generateDescription(listing: Listing): string {
  const parts: string[] = [];

  // Opening line
  const yearMakeModel = `${listing.year} ${listing.make} ${listing.model}`;
  const lengthStr = listing.lengthFt > 0
    ? `${listing.lengthFt}${listing.lengthIn > 0 ? `'${listing.lengthIn}"` : "'"}`
    : '';

  if (listing.condition === 'new') {
    parts.push(`Introducing the brand new ${yearMakeModel}${lengthStr ? ` at ${lengthStr}` : ''} – a stunning addition to any fleet.`);
  } else {
    parts.push(`Presenting this well-maintained ${yearMakeModel}${lengthStr ? ` at ${lengthStr}` : ''} – ready for your next adventure.`);
  }

  // Category/Class description
  if (listing.boatClass) {
    const classDescriptions: Record<string, string> = {
      'catamaran - sail': 'This sailing catamaran offers exceptional stability and spacious living areas, perfect for extended cruising.',
      'catamaran - power': 'This power catamaran combines the stability of a multihull with the performance of power cruising.',
      'motor yacht': 'This motor yacht delivers the perfect blend of performance and luxury for discerning owners.',
      'center console': 'This center console design provides excellent fishing capability and open deck space.',
      'sloop': 'This sloop-rigged sailboat offers excellent performance and ease of handling for cruising.',
      'trawler': 'This trawler is designed for long-range cruising with fuel efficiency and comfort in mind.'
    };

    const classDesc = classDescriptions[listing.boatClass.toLowerCase()];
    if (classDesc) {
      parts.push(classDesc);
    }
  }

  // Location
  if (listing.country) {
    parts.push(`Currently located in ${listing.city ? `${listing.city}, ` : ''}${listing.country}.`);
  }

  // Measurements
  const measurements: string[] = [];
  if (listing.measurements.beam) {
    measurements.push(`${listing.measurements.beam}' beam`);
  }
  if (listing.measurements.draft) {
    measurements.push(`${listing.measurements.draft}' draft`);
  }
  if (listing.measurements.cabins) {
    measurements.push(`${listing.measurements.cabins} cabin${listing.measurements.cabins > 1 ? 's' : ''}`);
  }
  if (listing.measurements.heads) {
    measurements.push(`${listing.measurements.heads} head${listing.measurements.heads > 1 ? 's' : ''}`);
  }

  if (measurements.length > 0) {
    parts.push(`Features include ${measurements.join(', ')}.`);
  }

  // Engines
  if (listing.engines.length > 0) {
    const engine = listing.engines[0];
    const engineParts: string[] = [];

    if (listing.engines.length === 1) {
      if (engine.make && engine.model) {
        engineParts.push(`Powered by a ${engine.make} ${engine.model}`);
      } else if (engine.power) {
        engineParts.push(`Powered by a ${engine.power}hp engine`);
      }
    } else {
      if (engine.make && engine.model) {
        engineParts.push(`Powered by twin ${engine.make} ${engine.model} engines`);
      } else if (engine.power) {
        engineParts.push(`Powered by twin ${engine.power}hp engines`);
      }
    }

    if (engine.hours) {
      engineParts.push(`with ${engine.hours} hours`);
    }

    if (engineParts.length > 0) {
      parts.push(engineParts.join(' ') + '.');
    }
  }

  // Features highlights
  const allFeatures = [
    ...listing.features.electronics,
    ...listing.features.insideEquipment,
    ...listing.features.electricalEquipment,
    ...listing.features.outsideEquipment
  ];

  if (allFeatures.length > 0) {
    const highlights = allFeatures.slice(0, 6).join(', ');
    parts.push(`Equipped with ${highlights}, and more.`);
  }

  // Closing
  if (listing.category === 'sail') {
    parts.push('Whether you are planning blue water passages or coastal cruising, this vessel is ready to take you there in style.');
  } else {
    parts.push('Perfect for weekend getaways or extended cruising, this vessel offers everything you need for life on the water.');
  }

  parts.push('Contact us today to schedule a viewing or request additional information.');

  return parts.join('\n\n');
}

// POST - Generate description
export async function POST(request: Request, { params }: RouteParams) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await params;
  const listing = await getListingById(id);

  if (!listing) {
    return NextResponse.json({ error: 'Listing not found' }, { status: 404 });
  }

  try {
    // In the future, this can be replaced with an LLM API call
    // For now, we use template-based generation
    const description = generateDescription(listing);

    return NextResponse.json({ description });
  } catch (error) {
    console.error('Error generating description:', error);
    return NextResponse.json(
      { error: 'Failed to generate description' },
      { status: 500 }
    );
  }
}
