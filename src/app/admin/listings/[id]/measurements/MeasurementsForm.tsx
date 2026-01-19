'use client';

import { useRouter } from 'next/navigation';
import WizardLayout from '@/components/admin/WizardLayout';
import { useListing } from '@/hooks/use-listing';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Listing, Measurements } from '@/lib/listings/types';

interface MeasurementsFormProps {
  initialListing: Listing;
}

export default function MeasurementsForm({ initialListing }: MeasurementsFormProps) {
  const router = useRouter();
  const { listing, updateListing, saveListing, isSaving } = useListing(initialListing);

  function updateMeasurement(key: keyof Measurements, value: number | null) {
    updateListing({
      measurements: {
        ...listing.measurements,
        [key]: value
      }
    });
  }

  async function handleSave() {
    await saveListing();
  }

  async function handleContinue() {
    await saveListing();
    router.push(`/admin/listings/${listing.id}/propulsion`);
  }

  return (
    <WizardLayout listing={listing} onSave={saveListing} isSaving={isSaving}>
      <div className="max-w-4xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-slate-900">Measurements</h2>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleSave} disabled={isSaving}>
              Save
            </Button>
            <Button onClick={handleContinue} disabled={isSaving} className="bg-sky-600 hover:bg-sky-700">
              Continue
            </Button>
          </div>
        </div>

        <div className="space-y-6">
          {/* Dimensions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Dimensions</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="loa">LOA (Length Overall)</Label>
                <div className="flex items-center gap-2">
                  <Input
                    id="loa"
                    type="number"
                    step="0.1"
                    value={listing.measurements.loa ?? ''}
                    onChange={(e) => updateMeasurement('loa', e.target.value ? parseFloat(e.target.value) : null)}
                    placeholder="0"
                  />
                  <span className="text-sm text-slate-500">ft</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="lwl">LWL (Waterline Length)</Label>
                <div className="flex items-center gap-2">
                  <Input
                    id="lwl"
                    type="number"
                    step="0.1"
                    value={listing.measurements.lwl ?? ''}
                    onChange={(e) => updateMeasurement('lwl', e.target.value ? parseFloat(e.target.value) : null)}
                    placeholder="0"
                  />
                  <span className="text-sm text-slate-500">ft</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="beam">Beam</Label>
                <div className="flex items-center gap-2">
                  <Input
                    id="beam"
                    type="number"
                    step="0.1"
                    value={listing.measurements.beam ?? ''}
                    onChange={(e) => updateMeasurement('beam', e.target.value ? parseFloat(e.target.value) : null)}
                    placeholder="0"
                  />
                  <span className="text-sm text-slate-500">ft</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="draft">Draft</Label>
                <div className="flex items-center gap-2">
                  <Input
                    id="draft"
                    type="number"
                    step="0.1"
                    value={listing.measurements.draft ?? ''}
                    onChange={(e) => updateMeasurement('draft', e.target.value ? parseFloat(e.target.value) : null)}
                    placeholder="0"
                  />
                  <span className="text-sm text-slate-500">ft</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="displacement">Displacement</Label>
                <div className="flex items-center gap-2">
                  <Input
                    id="displacement"
                    type="number"
                    value={listing.measurements.displacement ?? ''}
                    onChange={(e) => updateMeasurement('displacement', e.target.value ? parseInt(e.target.value) : null)}
                    placeholder="0"
                  />
                  <span className="text-sm text-slate-500">lbs</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Capacities */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Capacities</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fuelCapacity">Fuel Capacity</Label>
                <div className="flex items-center gap-2">
                  <Input
                    id="fuelCapacity"
                    type="number"
                    value={listing.measurements.fuelCapacity ?? ''}
                    onChange={(e) => updateMeasurement('fuelCapacity', e.target.value ? parseInt(e.target.value) : null)}
                    placeholder="0"
                  />
                  <span className="text-sm text-slate-500">gal</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="waterCapacity">Water Capacity</Label>
                <div className="flex items-center gap-2">
                  <Input
                    id="waterCapacity"
                    type="number"
                    value={listing.measurements.waterCapacity ?? ''}
                    onChange={(e) => updateMeasurement('waterCapacity', e.target.value ? parseInt(e.target.value) : null)}
                    placeholder="0"
                  />
                  <span className="text-sm text-slate-500">gal</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="holdingCapacity">Holding Tank</Label>
                <div className="flex items-center gap-2">
                  <Input
                    id="holdingCapacity"
                    type="number"
                    value={listing.measurements.holdingCapacity ?? ''}
                    onChange={(e) => updateMeasurement('holdingCapacity', e.target.value ? parseInt(e.target.value) : null)}
                    placeholder="0"
                  />
                  <span className="text-sm text-slate-500">gal</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Accommodations */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Accommodations</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="cabins">Cabins</Label>
                <Input
                  id="cabins"
                  type="number"
                  value={listing.measurements.cabins ?? ''}
                  onChange={(e) => updateMeasurement('cabins', e.target.value ? parseInt(e.target.value) : null)}
                  placeholder="0"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="berths">Berths</Label>
                <Input
                  id="berths"
                  type="number"
                  value={listing.measurements.berths ?? ''}
                  onChange={(e) => updateMeasurement('berths', e.target.value ? parseInt(e.target.value) : null)}
                  placeholder="0"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="heads">Heads</Label>
                <Input
                  id="heads"
                  type="number"
                  value={listing.measurements.heads ?? ''}
                  onChange={(e) => updateMeasurement('heads', e.target.value ? parseInt(e.target.value) : null)}
                  placeholder="0"
                />
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
