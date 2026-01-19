import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { getAllListings, createListing, exportToCSV } from '@/lib/listings/store';

// Check admin authentication
async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  const adminCookie = cookieStore.get('viyb_admin');
  return adminCookie?.value === '1';
}

// GET - Get all listings
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const format = searchParams.get('format');

  // CSV export requires auth
  if (format === 'csv') {
    if (!(await isAuthenticated())) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const csv = await exportToCSV();
    return new NextResponse(csv, {
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': `attachment; filename="viyb-listings-${new Date().toISOString().split('T')[0]}.csv"`
      }
    });
  }

  // Admin gets all listings, public gets only active
  const authenticated = await isAuthenticated();
  const listings = await getAllListings();

  if (authenticated) {
    return NextResponse.json(listings);
  }

  // Return only active listings for public
  const activeListings = listings.filter(l => l.status === 'active');
  return NextResponse.json(activeListings);
}

// POST - Create new listing (admin only)
export async function POST(request: Request) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const data = await request.json();
    const listing = await createListing(data);
    return NextResponse.json(listing, { status: 201 });
  } catch (error) {
    console.error('Error creating listing:', error);
    return NextResponse.json(
      { error: 'Failed to create listing' },
      { status: 500 }
    );
  }
}
