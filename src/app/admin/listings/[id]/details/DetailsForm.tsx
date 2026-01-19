'use client';

import { useRouter } from 'next/navigation';
import WizardLayout from '@/components/admin/WizardLayout';
import { useListing } from '@/hooks/use-listing';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Listing } from '@/lib/listings/types';
import { BOAT_CLASS_OPTIONS, COUNTRY_OPTIONS } from '@/lib/listings/types';

interface DetailsFormProps {
  initialListing: Listing;
}

export default function DetailsForm({ initialListing }: DetailsFormProps) {
  const router = useRouter();
  const { listing, updateListing, saveListing, isSaving } = useListing(initialListing);

  // Generate year options (current year + 2 to 1960)
  const currentYear = new Date().getFullYear();
  const yearOptions = Array.from({ length: currentYear - 1960 + 3 }, (_, i) => currentYear + 2 - i);

  async function handleSave() {
    await saveListing();
  }

  async function handleContinue() {
    await saveListing();
    router.push(`/admin/listings/${listing.id}/photos`);
  }

  return (
    <WizardLayout listing={listing} onSave={saveListing} isSaving={isSaving}>
      <div className="max-w-4xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-slate-900">Basic Details</h2>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleSave} disabled={isSaving}>
              Save
            </Button>
            <Button onClick={handleContinue} disabled={isSaving} className="bg-sky-600 hover:bg-sky-700">
              Continue
            </Button>
          </div>
        </div>

        {/* Info Banner */}
        <div className="bg-sky-50 border border-sky-200 rounded-lg p-4 mb-6">
          <p className="text-sm text-sky-800">
            <strong>Tip:</strong> Listings with higher scores receive more exposure and engagement.
            Fill out as many fields as possible, especially price, photos, and description.
          </p>
        </div>

        <div className="space-y-6">
          {/* Basic Info */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Vessel Information</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="year" className="text-red-600">Year *</Label>
                <Select
                  value={String(listing.year)}
                  onValueChange={(v) => updateListing({ year: parseInt(v) })}
                >
                  <SelectTrigger id="year">
                    <SelectValue placeholder="Select year" />
                  </SelectTrigger>
                  <SelectContent>
                    {yearOptions.map(year => (
                      <SelectItem key={year} value={String(year)}>{year}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="condition">Condition</Label>
                <Select
                  value={listing.condition}
                  onValueChange={(v) => updateListing({ condition: v as 'new' | 'used' })}
                >
                  <SelectTrigger id="condition">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="used">Used</SelectItem>
                    <SelectItem value="new">New</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="make" className="text-red-600">Make *</Label>
                <Input
                  id="make"
                  value={listing.make}
                  onChange={(e) => updateListing({ make: e.target.value })}
                  placeholder="e.g., Beneteau"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="model" className="text-red-600">Model *</Label>
                <Input
                  id="model"
                  value={listing.model}
                  onChange={(e) => updateListing({ model: e.target.value })}
                  placeholder="e.g., Oceanis 45"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-red-600">Length *</Label>
                <div className="flex gap-2">
                  <Input
                    type="number"
                    value={listing.lengthFt || ''}
                    onChange={(e) => updateListing({ lengthFt: parseInt(e.target.value) || 0 })}
                    placeholder="ft"
                    className="w-20"
                  />
                  <Input
                    type="number"
                    value={listing.lengthIn || ''}
                    onChange={(e) => updateListing({ lengthIn: parseInt(e.target.value) || 0 })}
                    placeholder="in"
                    className="w-20"
                    max={11}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="hullMaterial" className="text-red-600">Hull Material *</Label>
                <Select
                  value={listing.hullMaterial}
                  onValueChange={(v) => updateListing({ hullMaterial: v as typeof listing.hullMaterial })}
                >
                  <SelectTrigger id="hullMaterial">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fiberglass">Fiberglass</SelectItem>
                    <SelectItem value="aluminum">Aluminum</SelectItem>
                    <SelectItem value="steel">Steel</SelectItem>
                    <SelectItem value="wood">Wood</SelectItem>
                    <SelectItem value="composite">Composite</SelectItem>
                    <SelectItem value="carbon-fiber">Carbon Fiber</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="category" className="text-red-600">Category *</Label>
                <Select
                  value={listing.category}
                  onValueChange={(v) => updateListing({ category: v as 'power' | 'sail' })}
                >
                  <SelectTrigger id="category">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="power">Power</SelectItem>
                    <SelectItem value="sail">Sail</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="boatClass" className="text-red-600">Class *</Label>
                <Select
                  value={listing.boatClass}
                  onValueChange={(v) => updateListing({ boatClass: v })}
                >
                  <SelectTrigger id="boatClass">
                    <SelectValue placeholder="Select class" />
                  </SelectTrigger>
                  <SelectContent>
                    {BOAT_CLASS_OPTIONS.map(opt => (
                      <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="additionalClass">Additional Class</Label>
                <Input
                  id="additionalClass"
                  value={listing.additionalClass}
                  onChange={(e) => updateListing({ additionalClass: e.target.value })}
                  placeholder="Optional"
                />
              </div>
            </CardContent>
          </Card>

          {/* Pricing */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Pricing</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="price" className="text-red-600">Price *</Label>
                <div className="flex gap-2">
                  <Input
                    id="price"
                    type="number"
                    value={listing.price || ''}
                    onChange={(e) => updateListing({ price: parseInt(e.target.value) || 0 })}
                    placeholder="Enter price"
                    className="flex-1"
                  />
                  <Select
                    value={listing.currency}
                    onValueChange={(v) => updateListing({ currency: v as 'USD' | 'EUR' | 'GBP' })}
                  >
                    <SelectTrigger className="w-24">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="USD">USD</SelectItem>
                      <SelectItem value="EUR">EUR</SelectItem>
                      <SelectItem value="GBP">GBP</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-6">
                <Switch
                  id="hidePrice"
                  checked={listing.hidePrice}
                  onCheckedChange={(v) => updateListing({ hidePrice: v })}
                />
                <Label htmlFor="hidePrice">Hide Price (Show "Price on Request")</Label>
              </div>
            </CardContent>
          </Card>

          {/* Location */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Boat Location</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="country" className="text-red-600">Country *</Label>
                <Select
                  value={listing.country}
                  onValueChange={(v) => updateListing({ country: v })}
                >
                  <SelectTrigger id="country">
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    {COUNTRY_OPTIONS.map(opt => (
                      <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  value={listing.city}
                  onChange={(e) => updateListing({ city: e.target.value })}
                  placeholder="e.g., Road Town"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="marina">Marina</Label>
                <Input
                  id="marina"
                  value={listing.marina}
                  onChange={(e) => updateListing({ marina: e.target.value })}
                  placeholder="e.g., Nanny Cay"
                />
              </div>
            </CardContent>
          </Card>

          {/* Identification */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Identification</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="hin">HIN (Hull Identification Number)</Label>
                <Input
                  id="hin"
                  value={listing.hin}
                  onChange={(e) => updateListing({ hin: e.target.value })}
                  placeholder="Optional"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="stockNumber">Stock Number</Label>
                <Input
                  id="stockNumber"
                  value={listing.stockNumber}
                  onChange={(e) => updateListing({ stockNumber: e.target.value })}
                  placeholder="Optional"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="boatName">Boat Name</Label>
                <Input
                  id="boatName"
                  value={listing.boatName}
                  onChange={(e) => updateListing({ boatName: e.target.value })}
                  placeholder="Optional"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="boatNamePrivacy">Boat Name Privacy</Label>
                <Select
                  value={listing.boatNamePrivacy}
                  onValueChange={(v) => updateListing({ boatNamePrivacy: v as 'public' | 'private' })}
                >
                  <SelectTrigger id="boatNamePrivacy">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="public">Public</SelectItem>
                    <SelectItem value="private">Private</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Actions */}
        <div className="flex justify-end gap-2 mt-6 pt-6 border-t border-slate-200">
          <Button variant="outline" onClick={handleSave} disabled={isSaving}>
            Save
          </Button>
          <Button onClick={handleContinue} disabled={isSaving} className="bg-sky-600 hover:bg-sky-700">
            Continue
          </Button>
        </div>
      </div>
    </WizardLayout>
  );
}
