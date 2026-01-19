'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import WizardLayout from '@/components/admin/WizardLayout';
import { useListing } from '@/hooks/use-listing';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Listing, FeatureGroups } from '@/lib/listings/types';
import { FEATURE_OPTIONS } from '@/lib/listings/types';

interface FeaturesFormProps {
  initialListing: Listing;
}

type FeatureGroupKey = keyof FeatureGroups;

const FEATURE_GROUP_LABELS: Record<FeatureGroupKey, string> = {
  electronics: 'Electronics',
  insideEquipment: 'Inside Equipment',
  electricalEquipment: 'Electrical Equipment',
  outsideEquipment: 'Outside Equipment/Extras',
  covers: 'Covers',
  additionalEquipment: 'Additional Equipment'
};

export default function FeaturesForm({ initialListing }: FeaturesFormProps) {
  const router = useRouter();
  const { listing, updateListing, saveListing, isSaving } = useListing(initialListing);
  const [features, setFeatures] = useState<FeatureGroups>(initialListing.features);

  function toggleFeature(group: FeatureGroupKey, feature: string) {
    setFeatures(prev => {
      const groupFeatures = prev[group];
      const newGroupFeatures = groupFeatures.includes(feature)
        ? groupFeatures.filter(f => f !== feature)
        : [...groupFeatures, feature];
      return { ...prev, [group]: newGroupFeatures };
    });
  }

  function toggleAllInGroup(group: FeatureGroupKey, checked: boolean) {
    setFeatures(prev => ({
      ...prev,
      [group]: checked ? [...FEATURE_OPTIONS[group]] : []
    }));
  }

  function isAllChecked(group: FeatureGroupKey): boolean {
    return FEATURE_OPTIONS[group].every(f => features[group].includes(f));
  }

  function isSomeChecked(group: FeatureGroupKey): boolean {
    return FEATURE_OPTIONS[group].some(f => features[group].includes(f)) && !isAllChecked(group);
  }

  async function handleSave() {
    updateListing({ features });
    await saveListing({ features });
  }

  async function handleContinue() {
    await handleSave();
    router.push(`/admin/listings/${listing.id}/descriptions`);
  }

  return (
    <WizardLayout
      listing={{ ...listing, features }}
      onSave={() => saveListing({ features })}
      isSaving={isSaving}
    >
      <div className="max-w-4xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-slate-900">Features</h2>
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
            To add Feature Details, check the Feature box. The more features you add, the better your listing will appear in search results.
          </p>
        </div>

        <div className="space-y-6">
          {(Object.keys(FEATURE_GROUP_LABELS) as FeatureGroupKey[]).map(groupKey => (
            <Card key={groupKey}>
              <CardHeader>
                <CardTitle className="text-lg flex items-center justify-between">
                  <span>{FEATURE_GROUP_LABELS[groupKey]}</span>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id={`${groupKey}-all`}
                      checked={isAllChecked(groupKey)}
                      onCheckedChange={(checked) => toggleAllInGroup(groupKey, checked === true)}
                    />
                    <Label htmlFor={`${groupKey}-all`} className="text-sm font-normal text-slate-600">
                      Check/Uncheck All
                    </Label>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                  {FEATURE_OPTIONS[groupKey].map(feature => (
                    <div key={feature} className="flex items-center gap-2">
                      <Checkbox
                        id={`${groupKey}-${feature}`}
                        checked={features[groupKey].includes(feature)}
                        onCheckedChange={() => toggleFeature(groupKey, feature)}
                      />
                      <Label
                        htmlFor={`${groupKey}-${feature}`}
                        className="text-sm font-normal text-slate-700 cursor-pointer"
                      >
                        {feature}
                      </Label>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
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
