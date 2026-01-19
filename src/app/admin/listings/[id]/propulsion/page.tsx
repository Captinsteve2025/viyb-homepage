import { notFound } from 'next/navigation';
import { getListingById } from '@/lib/listings/store';
import PropulsionForm from './PropulsionForm';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function PropulsionPage({ params }: PageProps) {
  const { id } = await params;
  const listing = await getListingById(id);

  if (!listing) {
    notFound();
  }

  return <PropulsionForm initialListing={listing} />;
}
