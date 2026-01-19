import { notFound } from 'next/navigation';
import { getListingById } from '@/lib/listings/store';
import DescriptionsForm from './DescriptionsForm';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function DescriptionsPage({ params }: PageProps) {
  const { id } = await params;
  const listing = await getListingById(id);

  if (!listing) {
    notFound();
  }

  return <DescriptionsForm initialListing={listing} />;
}
