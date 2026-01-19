import { notFound } from 'next/navigation';
import { getListingById } from '@/lib/listings/store';
import DetailsForm from './DetailsForm';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function DetailsPage({ params }: PageProps) {
  const { id } = await params;
  const listing = await getListingById(id);

  if (!listing) {
    notFound();
  }

  return <DetailsForm initialListing={listing} />;
}
