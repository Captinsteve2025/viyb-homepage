import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { getListingById, updateListing } from '@/lib/listings/store';
import { v4 as uuidv4 } from 'uuid';
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

// Check admin authentication
async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  const adminCookie = cookieStore.get('viyb_admin');
  return adminCookie?.value === '1';
}

interface RouteParams {
  params: Promise<{ id: string }>;
}

const UPLOAD_DIR = path.join(process.cwd(), 'public', 'uploads', 'listings');
const MAX_WIDTH = 2400;

// Ensure upload directory exists
function ensureUploadDir(listingId: string): string {
  const dir = path.join(UPLOAD_DIR, listingId);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  return dir;
}

// POST - Upload media
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
    const formData = await request.formData();
    const file = formData.get('file') as File | null;
    const mediaType = formData.get('type') as 'photo' | 'video' | null;
    const title = formData.get('title') as string || '';
    const caption = formData.get('caption') as string || '';
    const videoUrl = formData.get('videoUrl') as string || '';

    // Handle video URL
    if (mediaType === 'video' && videoUrl) {
      const mediaId = uuidv4();
      const newMedia = {
        id: mediaId,
        type: 'video' as const,
        url: videoUrl,
        title: title || 'Video',
        caption,
        isPrimary: false,
        order: listing.media.length
      };

      const updatedMedia = [...listing.media, newMedia];
      await updateListing(id, { media: updatedMedia });

      return NextResponse.json(newMedia, { status: 201 });
    }

    // Handle photo upload
    if (file && mediaType === 'photo') {
      const uploadDir = ensureUploadDir(id);
      const mediaId = uuidv4();
      const fileExt = path.extname(file.name).toLowerCase() || '.jpg';
      const baseName = `${mediaId}`;

      // Read file buffer
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      // Process with sharp
      const sharpInstance = sharp(buffer);
      const metadata = await sharpInstance.metadata();

      // Resize if needed
      const needsResize = metadata.width && metadata.width > MAX_WIDTH;
      const resized = needsResize
        ? sharpInstance.resize(MAX_WIDTH, undefined, { withoutEnlargement: true })
        : sharpInstance;

      // Save original format (for compatibility)
      const originalPath = path.join(uploadDir, `${baseName}${fileExt}`);
      await resized.clone().toFile(originalPath);

      // Save WebP version
      const webpPath = path.join(uploadDir, `${baseName}.webp`);
      await resized.clone().webp({ quality: 85 }).toFile(webpPath);

      // Save AVIF version
      const avifPath = path.join(uploadDir, `${baseName}.avif`);
      await resized.clone().avif({ quality: 75 }).toFile(avifPath);

      // Create thumbnail
      const thumbPath = path.join(uploadDir, `${baseName}-thumb.webp`);
      await sharp(buffer)
        .resize(400, 300, { fit: 'cover' })
        .webp({ quality: 80 })
        .toFile(thumbPath);

      // Build URLs (relative to public)
      const baseUrl = `/uploads/listings/${id}/${baseName}`;

      const isPrimary = listing.media.filter(m => m.type === 'photo').length === 0;

      const newMedia = {
        id: mediaId,
        type: 'photo' as const,
        url: `${baseUrl}${fileExt}`,
        webpUrl: `${baseUrl}.webp`,
        avifUrl: `${baseUrl}.avif`,
        thumbnailUrl: `${baseUrl}-thumb.webp`,
        title: title || `Photo ${listing.media.filter(m => m.type === 'photo').length + 1}`,
        caption,
        isPrimary,
        order: listing.media.length
      };

      const updatedMedia = [...listing.media, newMedia];
      await updateListing(id, { media: updatedMedia });

      return NextResponse.json(newMedia, { status: 201 });
    }

    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  } catch (error) {
    console.error('Error uploading media:', error);
    return NextResponse.json(
      { error: 'Failed to upload media' },
      { status: 500 }
    );
  }
}

// PUT - Update media order or set primary
export async function PUT(request: Request, { params }: RouteParams) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await params;
  const listing = await getListingById(id);

  if (!listing) {
    return NextResponse.json({ error: 'Listing not found' }, { status: 404 });
  }

  try {
    const { mediaId, action, order } = await request.json();

    if (action === 'setPrimary') {
      const updatedMedia = listing.media.map(m => ({
        ...m,
        isPrimary: m.id === mediaId
      }));
      await updateListing(id, { media: updatedMedia });
      return NextResponse.json({ success: true });
    }

    if (action === 'reorder' && Array.isArray(order)) {
      const updatedMedia = listing.media.map(m => ({
        ...m,
        order: order.indexOf(m.id)
      }));
      updatedMedia.sort((a, b) => a.order - b.order);
      await updateListing(id, { media: updatedMedia });
      return NextResponse.json({ success: true });
    }

    if (action === 'update' && mediaId) {
      const { title, caption } = await request.json();
      const updatedMedia = listing.media.map(m =>
        m.id === mediaId ? { ...m, title: title ?? m.title, caption: caption ?? m.caption } : m
      );
      await updateListing(id, { media: updatedMedia });
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
  } catch (error) {
    console.error('Error updating media:', error);
    return NextResponse.json(
      { error: 'Failed to update media' },
      { status: 500 }
    );
  }
}

// DELETE - Remove media
export async function DELETE(request: Request, { params }: RouteParams) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await params;
  const listing = await getListingById(id);

  if (!listing) {
    return NextResponse.json({ error: 'Listing not found' }, { status: 404 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const mediaId = searchParams.get('mediaId');

    if (!mediaId) {
      return NextResponse.json({ error: 'Media ID required' }, { status: 400 });
    }

    const mediaToDelete = listing.media.find(m => m.id === mediaId);
    if (!mediaToDelete) {
      return NextResponse.json({ error: 'Media not found' }, { status: 404 });
    }

    // Delete files if it's a photo
    if (mediaToDelete.type === 'photo') {
      const uploadDir = path.join(UPLOAD_DIR, id);
      const baseName = mediaId;

      // Try to delete all versions
      const extensions = ['.jpg', '.jpeg', '.png', '.webp', '.avif', '-thumb.webp'];
      for (const ext of extensions) {
        const filePath = path.join(uploadDir, `${baseName}${ext}`);
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }
      }
    }

    const updatedMedia = listing.media.filter(m => m.id !== mediaId);

    // Set new primary if needed
    if (mediaToDelete.isPrimary && updatedMedia.length > 0) {
      const firstPhoto = updatedMedia.find(m => m.type === 'photo');
      if (firstPhoto) {
        firstPhoto.isPrimary = true;
      }
    }

    await updateListing(id, { media: updatedMedia });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting media:', error);
    return NextResponse.json(
      { error: 'Failed to delete media' },
      { status: 500 }
    );
  }
}
