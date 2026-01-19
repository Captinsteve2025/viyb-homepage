import { notFound } from 'next/navigation';
import { getListingById } from '@/lib/listings/store';
import MeasurementsForm from './MeasurementsForm';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function MeasurementsPage({ params }: PageProps) {
  const { id } = await params;
  const listing = await getListingById(id);

  if (!listing) {
    notFound();
  }

  return <MeasurementsForm initialListing={listing} />;
}
