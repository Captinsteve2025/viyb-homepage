import Link from 'next/link';
import Image from 'next/image';
import { getActiveListings } from '@/lib/listings/store';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Search, MapPin, Anchor, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Yachts For Sale - Virgin Islands Yacht Broker',
  description: 'Browse our selection of quality yachts for sale in the Caribbean. Power boats, sailboats, and catamarans available in the Virgin Islands.'
};

export const dynamic = 'force-dynamic';

export default async function BoatsPage() {
  const listings = await getActiveListings();

  // Sort by updated date
  const sortedListings = [...listings].sort(
    (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  );

  // Format price
  function formatPrice(price: number, currency: string, hidePrice: boolean) {
    if (hidePrice) return 'Price on Request';
    if (price === 0) return 'Contact for Price';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
      maximumFractionDigits: 0
    }).format(price);
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-16 sm:py-24">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/hero-catamaran.jpg"
            alt="Yachts for Sale"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Yachts For Sale
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-8">
            Explore our curated selection of quality yachts available in the Caribbean
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input
                placeholder="Search by make, model, or location..."
                className="pl-12 h-12 bg-white text-slate-900 border-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Listings Grid */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        {sortedListings.length === 0 ? (
          <div className="text-center py-16">
            <Anchor className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-slate-700 mb-2">
              No Listings Available
            </h2>
            <p className="text-slate-500 mb-6">
              Check back soon for new yacht listings.
            </p>
            <Button asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-semibold text-slate-900">
                {sortedListings.length} Yacht{sortedListings.length !== 1 ? 's' : ''} Available
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedListings.map(listing => {
                const primaryPhoto = listing.media.find(m => m.type === 'photo' && m.isPrimary);
                const firstPhoto = listing.media.find(m => m.type === 'photo');
                const photo = primaryPhoto || firstPhoto;

                return (
                  <Link key={listing.id} href={`/boats/${listing.slug}`}>
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
                      <div className="relative aspect-[4/3]">
                        {photo ? (
                          <Image
                            src={photo.webpUrl || photo.url}
                            alt={`${listing.year} ${listing.make} ${listing.model}`}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        ) : (
                          <div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
                            <Anchor className="w-12 h-12 text-slate-400" />
                          </div>
                        )}
                        <div className="absolute top-3 left-3 flex gap-2">
                          <Badge className="bg-white/90 text-slate-900 hover:bg-white/90">
                            {listing.condition === 'new' ? 'New' : 'Used'}
                          </Badge>
                          <Badge className="bg-amber-500/90 text-white hover:bg-amber-500/90">
                            {listing.category === 'sail' ? 'Sail' : 'Power'}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-lg text-slate-900 mb-1 group-hover:text-sky-600 transition-colors">
                          {listing.year} {listing.make} {listing.model}
                        </h3>
                        <p className="text-xl font-bold text-amber-600 mb-2">
                          {formatPrice(listing.price, listing.currency, listing.hidePrice)}
                        </p>
                        <div className="flex items-center justify-between text-sm text-slate-500">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{listing.city || listing.country}</span>
                          </div>
                          <span>{listing.lengthFt > 0 ? `${listing.lengthFt}'` : ''}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </>
        )}
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Looking for Something Specific?
          </h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Our team has access to exclusive listings and can help you find the perfect yacht for your needs.
          </p>
          <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900">
            <Link href="/contact">
              Contact Our Brokers
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
