'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
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
import { Plus, Copy, Trash2 } from 'lucide-react';
import type { Listing, Engine } from '@/lib/listings/types';

interface PropulsionFormProps {
  initialListing: Listing;
}

function createEmptyEngine(): Engine {
  return {
    id: uuidv4(),
    power: null,
    make: '',
    model: '',
    year: null,
    hours: null,
    engineType: '',
    driveType: '',
    fuelType: '',
    location: '',
    propellerType: '',
    propellerMaterial: ''
  };
}

export default function PropulsionForm({ initialListing }: PropulsionFormProps) {
  const router = useRouter();
  const { listing, updateListing, saveListing, isSaving } = useListing(initialListing);
  const [engines, setEngines] = useState<Engine[]>(
    initialListing.engines.length > 0 ? initialListing.engines : []
  );

  function addEngine() {
    setEngines(prev => [...prev, createEmptyEngine()]);
  }

  function duplicateEngine(index: number) {
    const engine = engines[index];
    setEngines(prev => [
      ...prev,
      { ...engine, id: uuidv4() }
    ]);
  }

  function removeEngine(index: number) {
    setEngines(prev => prev.filter((_, i) => i !== index));
  }

  function updateEngine(index: number, data: Partial<Engine>) {
    setEngines(prev =>
      prev.map((engine, i) => (i === index ? { ...engine, ...data } : engine))
    );
  }

  async function handleSave() {
    updateListing({ engines });
    await saveListing({ engines });
  }

  async function handleContinue() {
    await handleSave();
    router.push(`/admin/listings/${listing.id}/features`);
  }

  return (
    <WizardLayout
      listing={{ ...listing, engines }}
      onSave={() => saveListing({ engines })}
      isSaving={isSaving}
    >
      <div className="max-w-4xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-slate-900">Propulsion</h2>
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
          {/* Global Settings */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="joystick" className="font-medium">Joystick Controls</Label>
                  <p className="text-sm text-slate-500">Does this vessel have joystick controls?</p>
                </div>
                <Switch
                  id="joystick"
                  checked={listing.joystickControls}
                  onCheckedChange={(v) => updateListing({ joystickControls: v })}
                />
              </div>
            </CardContent>
          </Card>

          {/* Engines */}
          {engines.map((engine, index) => (
            <Card key={engine.id}>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-lg">Engine {index + 1}</CardTitle>
                <div className="flex gap-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => duplicateEngine(index)}
                    title="Duplicate"
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeEngine(index)}
                    title="Remove"
                    className="text-red-500 hover:text-red-600 hover:bg-red-50"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Power</Label>
                  <div className="flex items-center gap-2">
                    <Input
                      type="number"
                      value={engine.power ?? ''}
                      onChange={(e) => updateEngine(index, { power: e.target.value ? parseInt(e.target.value) : null })}
                      placeholder="0"
                    />
                    <span className="text-sm text-slate-500">hp</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Engine Make</Label>
                  <Input
                    value={engine.make}
                    onChange={(e) => updateEngine(index, { make: e.target.value })}
                    placeholder="e.g., Yanmar"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Engine Model</Label>
                  <Input
                    value={engine.model}
                    onChange={(e) => updateEngine(index, { model: e.target.value })}
                    placeholder="e.g., 4JH5E"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Engine Hours</Label>
                  <Input
                    type="number"
                    value={engine.hours ?? ''}
                    onChange={(e) => updateEngine(index, { hours: e.target.value ? parseInt(e.target.value) : null })}
                    placeholder="0"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Engine Year</Label>
                  <Input
                    type="number"
                    value={engine.year ?? ''}
                    onChange={(e) => updateEngine(index, { year: e.target.value ? parseInt(e.target.value) : null })}
                    placeholder="e.g., 2020"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Engine Type</Label>
                  <Select
                    value={engine.engineType}
                    onValueChange={(v) => updateEngine(index, { engineType: v as Engine['engineType'] })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="inboard">Inboard</SelectItem>
                      <SelectItem value="outboard">Outboard</SelectItem>
                      <SelectItem value="inboard/outboard">Inboard/Outboard</SelectItem>
                      <SelectItem value="jet">Jet</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Drive Type</Label>
                  <Select
                    value={engine.driveType}
                    onValueChange={(v) => updateEngine(index, { driveType: v as Engine['driveType'] })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="direct">Direct Drive</SelectItem>
                      <SelectItem value="v-drive">V-Drive</SelectItem>
                      <SelectItem value="sail-drive">Sail Drive</SelectItem>
                      <SelectItem value="pod-drive">Pod Drive</SelectItem>
                      <SelectItem value="jet">Jet</SelectItem>
                      <SelectItem value="surface">Surface</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Fuel Type</Label>
                  <Select
                    value={engine.fuelType}
                    onValueChange={(v) => updateEngine(index, { fuelType: v as Engine['fuelType'] })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="diesel">Diesel</SelectItem>
                      <SelectItem value="gasoline">Gasoline</SelectItem>
                      <SelectItem value="electric">Electric</SelectItem>
                      <SelectItem value="hybrid">Hybrid</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Location on Vessel</Label>
                  <Select
                    value={engine.location}
                    onValueChange={(v) => updateEngine(index, { location: v as Engine['location'] })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="port">Port</SelectItem>
                      <SelectItem value="starboard">Starboard</SelectItem>
                      <SelectItem value="center">Center</SelectItem>
                      <SelectItem value="twin">Twin</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Propeller Type</Label>
                  <Select
                    value={engine.propellerType}
                    onValueChange={(v) => updateEngine(index, { propellerType: v as Engine['propellerType'] })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fixed">Fixed</SelectItem>
                      <SelectItem value="folding">Folding</SelectItem>
                      <SelectItem value="feathering">Feathering</SelectItem>
                      <SelectItem value="controllable-pitch">Controllable Pitch</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Propeller Material</Label>
                  <Select
                    value={engine.propellerMaterial}
                    onValueChange={(v) => updateEngine(index, { propellerMaterial: v as Engine['propellerMaterial'] })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select material" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bronze">Bronze</SelectItem>
                      <SelectItem value="stainless-steel">Stainless Steel</SelectItem>
                      <SelectItem value="aluminum">Aluminum</SelectItem>
                      <SelectItem value="composite">Composite</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Add Engine Button */}
          <Button variant="outline" onClick={addEngine} className="w-full">
            <Plus className="w-4 h-4 mr-2" />
            Add Engine
          </Button>
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
