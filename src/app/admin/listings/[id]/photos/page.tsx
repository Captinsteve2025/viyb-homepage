import { notFound } from 'next/navigation';
import { getListingById } from '@/lib/listings/store';
import PhotosForm from './PhotosForm';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function PhotosPage({ params }: PageProps) {
  const { id } = await params;
  const listing = await getListingById(id);

  if (!listing) {
    notFound();
  }

  return <PhotosForm initialListing={listing} />;
}
