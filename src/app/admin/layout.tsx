import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Listings Manager - VIYB Admin',
  description: 'Virgin Islands Yacht Broker Listings Manager',
  robots: 'noindex, nofollow'
};

export default function AdminLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return children;
}
