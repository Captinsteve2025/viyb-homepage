import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getListingBySlug, getActiveListings } from '@/lib/listings/store';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  Anchor, MapPin, Calendar, Ruler, Ship, Settings, ChevronLeft,
  Phone, Mail, Share2, Printer, Heart
} from 'lucide-react';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const listing = await getListingBySlug(slug);

  if (!listing || listing.status !== 'active') {
    return { title: 'Yacht Not Found' };
  }

  const title = `${listing.year} ${listing.make} ${listing.model} For Sale`;
  const description = listing.description.slice(0, 160) || `${listing.year} ${listing.make} ${listing.model} for sale in ${listing.country}`;

  return {
    title: `${title} - Virgin Islands Yacht Broker`,
    description,
    openGraph: {
      title,
      description,
      type: 'website'
    }
  };
}

export async function generateStaticParams() {
  const listings = await getActiveListings();
  return listings.map(listing => ({ slug: listing.slug }));
}

export const dynamic = 'force-dynamic';

export default async function BoatDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const listing = await getListingBySlug(slug);

  if (!listing || listing.status !== 'active') {
    notFound();
  }

  const photos = listing.media
    .filter(m => m.type === 'photo')
    .sort((a, b) => a.order - b.order);
  const primaryPhoto = photos.find(p => p.isPrimary) || photos[0];
  const videos = listing.media.filter(m => m.type === 'video');

  // Format price
  function formatPrice() {
    if (!listing) return 'Contact for Price';
    if (listing.hidePrice) return 'Price on Request';
    if (listing.price === 0) return 'Contact for Price';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: listing.currency,
      maximumFractionDigits: 0
    }).format(listing.price);
  }

  // Get all features as flat list
  const allFeatures = [
    ...listing.features.electronics,
    ...listing.features.insideEquipment,
    ...listing.features.electricalEquipment,
    ...listing.features.outsideEquipment,
    ...listing.features.covers,
    ...listing.features.additionalEquipment
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link
            href="/boats"
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Back to Listings</span>
          </Link>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm">
              <Heart className="w-4 h-4 mr-2" />
              Save
            </Button>
            <Button variant="ghost" size="sm">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
            <Button variant="ghost" size="sm">
              <Printer className="w-4 h-4 mr-2" />
              Print
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Title Section */}
            <div>
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">
                  {listing.category === 'sail' ? 'Sailboat' : 'Powerboat'}
                </Badge>
                {listing.boatClass && (
                  <Badge variant="outline">{listing.boatClass}</Badge>
                )}
                <Badge className={listing.condition === 'new' ? 'bg-green-100 text-green-800' : 'bg-slate-100 text-slate-800'}>
                  {listing.condition === 'new' ? 'New' : 'Used'}
                </Badge>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">
                {listing.year} {listing.make} {listing.model}
              </h1>
              {listing.boatName && listing.boatNamePrivacy === 'public' && (
                <p className="text-lg text-slate-600 italic">"{listing.boatName}"</p>
              )}
              <div className="flex items-center gap-4 mt-3 text-slate-600">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{listing.city ? `${listing.city}, ` : ''}{listing.country}</span>
                </div>
                {listing.lengthFt > 0 && (
                  <div className="flex items-center gap-1">
                    <Ruler className="w-4 h-4" />
                    <span>{listing.lengthFt}'{listing.lengthIn > 0 ? ` ${listing.lengthIn}"` : ''}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Photo Gallery */}
            <div>
              {primaryPhoto ? (
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-4">
                  <Image
                    src={primaryPhoto.webpUrl || primaryPhoto.url}
                    alt={`${listing.year} ${listing.make} ${listing.model}`}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              ) : (
                <div className="aspect-[16/10] rounded-xl bg-slate-200 flex items-center justify-center mb-4">
                  <Anchor className="w-20 h-20 text-slate-400" />
                </div>
              )}

              {photos.length > 1 && (
                <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                  {photos.slice(0, 6).map((photo, index) => (
                    <div
                      key={photo.id}
                      className="relative aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
                    >
                      <Image
                        src={photo.thumbnailUrl || photo.url}
                        alt={photo.title}
                        fill
                        className="object-cover"
                      />
                      {index === 5 && photos.length > 6 && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white font-medium">
                          +{photos.length - 6}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle>Description</CardTitle>
              </CardHeader>
              <CardContent>
                {listing.description ? (
                  <div className="prose prose-slate max-w-none whitespace-pre-wrap">
                    {listing.description}
                  </div>
                ) : (
                  <p className="text-slate-500 italic">No description available.</p>
                )}
              </CardContent>
            </Card>

            {/* Specifications */}
            <Card>
              <CardHeader>
                <CardTitle>Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-slate-500">Year</p>
                    <p className="font-medium">{listing.year}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Make</p>
                    <p className="font-medium">{listing.make}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Model</p>
                    <p className="font-medium">{listing.model}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Hull Material</p>
                    <p className="font-medium capitalize">{listing.hullMaterial.replace('-', ' ')}</p>
                  </div>
                  {listing.measurements.loa && (
                    <div>
                      <p className="text-sm text-slate-500">LOA</p>
                      <p className="font-medium">{listing.measurements.loa}'</p>
                    </div>
                  )}
                  {listing.measurements.beam && (
                    <div>
                      <p className="text-sm text-slate-500">Beam</p>
                      <p className="font-medium">{listing.measurements.beam}'</p>
                    </div>
                  )}
                  {listing.measurements.draft && (
                    <div>
                      <p className="text-sm text-slate-500">Draft</p>
                      <p className="font-medium">{listing.measurements.draft}'</p>
                    </div>
                  )}
                  {listing.measurements.displacement && (
                    <div>
                      <p className="text-sm text-slate-500">Displacement</p>
                      <p className="font-medium">{listing.measurements.displacement.toLocaleString()} lbs</p>
                    </div>
                  )}
                  {listing.measurements.cabins && (
                    <div>
                      <p className="text-sm text-slate-500">Cabins</p>
                      <p className="font-medium">{listing.measurements.cabins}</p>
                    </div>
                  )}
                  {listing.measurements.heads && (
                    <div>
                      <p className="text-sm text-slate-500">Heads</p>
                      <p className="font-medium">{listing.measurements.heads}</p>
                    </div>
                  )}
                  {listing.measurements.fuelCapacity && (
                    <div>
                      <p className="text-sm text-slate-500">Fuel Capacity</p>
                      <p className="font-medium">{listing.measurements.fuelCapacity} gal</p>
                    </div>
                  )}
                  {listing.measurements.waterCapacity && (
                    <div>
                      <p className="text-sm text-slate-500">Water Capacity</p>
                      <p className="font-medium">{listing.measurements.waterCapacity} gal</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Propulsion */}
            {listing.engines.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="w-5 h-5" />
                    Propulsion
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {listing.engines.map((engine, index) => (
                      <div key={engine.id}>
                        {index > 0 && <Separator className="my-4" />}
                        <h4 className="font-medium mb-2">
                          {listing.engines.length > 1 ? `Engine ${index + 1}` : 'Engine'}
                        </h4>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
                          {engine.make && (
                            <div>
                              <p className="text-slate-500">Make</p>
                              <p className="font-medium">{engine.make}</p>
                            </div>
                          )}
                          {engine.model && (
                            <div>
                              <p className="text-slate-500">Model</p>
                              <p className="font-medium">{engine.model}</p>
                            </div>
                          )}
                          {engine.power && (
                            <div>
                              <p className="text-slate-500">Power</p>
                              <p className="font-medium">{engine.power} hp</p>
                            </div>
                          )}
                          {engine.hours && (
                            <div>
                              <p className="text-slate-500">Hours</p>
                              <p className="font-medium">{engine.hours.toLocaleString()}</p>
                            </div>
                          )}
                          {engine.fuelType && (
                            <div>
                              <p className="text-slate-500">Fuel</p>
                              <p className="font-medium capitalize">{engine.fuelType}</p>
                            </div>
                          )}
                          {engine.year && (
                            <div>
                              <p className="text-slate-500">Year</p>
                              <p className="font-medium">{engine.year}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Features */}
            {allFeatures.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Features & Equipment</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {allFeatures.map(feature => (
                      <Badge key={feature} variant="secondary" className="text-sm">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Additional Descriptions */}
            {listing.additionalDescriptions.length > 0 && (
              <div className="space-y-4">
                {listing.additionalDescriptions.map(block => (
                  <Card key={block.id}>
                    <CardHeader>
                      <CardTitle className="text-lg">{block.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="prose prose-slate max-w-none whitespace-pre-wrap text-sm">
                        {block.content}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 space-y-6">
              {/* Price Card */}
              <Card>
                <CardContent className="pt-6">
                  <p className="text-3xl font-bold text-amber-600 mb-4">
                    {formatPrice()}
                  </p>
                  <div className="space-y-3">
                    <Button className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900" size="lg">
                      <Phone className="w-4 h-4 mr-2" />
                      Contact Broker
                    </Button>
                    <Button variant="outline" className="w-full" size="lg">
                      <Mail className="w-4 h-4 mr-2" />
                      Email Inquiry
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Facts */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Facts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-slate-400" />
                    <div>
                      <p className="text-sm text-slate-500">Year</p>
                      <p className="font-medium">{listing.year}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Ship className="w-5 h-5 text-slate-400" />
                    <div>
                      <p className="text-sm text-slate-500">Type</p>
                      <p className="font-medium">{listing.boatClass || listing.category}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Ruler className="w-5 h-5 text-slate-400" />
                    <div>
                      <p className="text-sm text-slate-500">Length</p>
                      <p className="font-medium">{listing.lengthFt}'{listing.lengthIn > 0 ? ` ${listing.lengthIn}"` : ''}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-slate-400" />
                    <div>
                      <p className="text-sm text-slate-500">Location</p>
                      <p className="font-medium">{listing.city ? `${listing.city}, ` : ''}{listing.country}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Stock Info */}
              {(listing.hin || listing.stockNumber) && (
                <Card>
                  <CardContent className="pt-6 text-sm text-slate-500">
                    {listing.stockNumber && <p>Stock #: {listing.stockNumber}</p>}
                    {listing.hin && <p>HIN: {listing.hin}</p>}
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
