import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { getListingById, updateListing, deleteListing, duplicateListing } from '@/lib/listings/store';

// Check admin authentication
async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  const adminCookie = cookieStore.get('viyb_admin');
  return adminCookie?.value === '1';
}

interface RouteParams {
  params: Promise<{ id: string }>;
}

// GET - Get single listing
export async function GET(request: Request, { params }: RouteParams) {
  const { id } = await params;
  const listing = await getListingById(id);

  if (!listing) {
    return NextResponse.json({ error: 'Listing not found' }, { status: 404 });
  }

  // Non-active listings require auth
  if (listing.status !== 'active') {
    if (!(await isAuthenticated())) {
      return NextResponse.json({ error: 'Listing not found' }, { status: 404 });
    }
  }

  return NextResponse.json(listing);
}

// PUT - Update listing (admin only)
export async function PUT(request: Request, { params }: RouteParams) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await params;

  try {
    const data = await request.json();
    const listing = await updateListing(id, data);

    if (!listing) {
      return NextResponse.json({ error: 'Listing not found' }, { status: 404 });
    }

    return NextResponse.json(listing);
  } catch (error) {
    console.error('Error updating listing:', error);
    return NextResponse.json(
      { error: 'Failed to update listing' },
      { status: 500 }
    );
  }
}

// DELETE - Delete listing (admin only)
export async function DELETE(request: Request, { params }: RouteParams) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await params;
  const success = await deleteListing(id);

  if (!success) {
    return NextResponse.json({ error: 'Listing not found' }, { status: 404 });
  }

  return NextResponse.json({ success: true });
}

// POST - Duplicate listing (admin only)
export async function POST(request: Request, { params }: RouteParams) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await params;
  const { searchParams } = new URL(request.url);
  const action = searchParams.get('action');

  if (action === 'duplicate') {
    const listing = await duplicateListing(id);

    if (!listing) {
      return NextResponse.json({ error: 'Listing not found' }, { status: 404 });
    }

    return NextResponse.json(listing, { status: 201 });
  }

  return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
}
