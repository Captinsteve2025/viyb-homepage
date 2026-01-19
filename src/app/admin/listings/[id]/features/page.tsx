import { notFound } from 'next/navigation';
import { getListingById } from '@/lib/listings/store';
import FeaturesForm from './FeaturesForm';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function FeaturesPage({ params }: PageProps) {
  const { id } = await params;
  const listing = await getListingById(id);

  if (!listing) {
    notFound();
  }

  return <FeaturesForm initialListing={listing} />;
}
