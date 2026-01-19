'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
import WizardLayout from '@/components/admin/WizardLayout';
import { useListing } from '@/hooks/use-listing';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Plus, Trash2, ChevronUp, ChevronDown } from 'lucide-react';
import type { Listing, AdditionalDescriptionBlock } from '@/lib/listings/types';

interface DescriptionsFormProps {
  initialListing: Listing;
}

const DESCRIPTION_TITLES: AdditionalDescriptionBlock['title'][] = [
  'Disclaimer',
  'Mechanical',
  'Accommodations',
  'Layout',
  'Electronics',
  'Deck Equipment',
  'Safety',
  'Navigation',
  'Other'
];

export default function DescriptionsForm({ initialListing }: DescriptionsFormProps) {
  const router = useRouter();
  const { listing, updateListing, saveListing, isSaving } = useListing(initialListing);
  const [description, setDescription] = useState(initialListing.description);
  const [additionalDescriptions, setAdditionalDescriptions] = useState<AdditionalDescriptionBlock[]>(
    initialListing.additionalDescriptions
  );
  const [generating, setGenerating] = useState(false);

  // Generate AI description
  async function handleGenerateDescription() {
    setGenerating(true);
    try {
      const res = await fetch(`/api/listings/${listing.id}/generate-description`, {
        method: 'POST'
      });

      if (res.ok) {
        const data = await res.json();
        setDescription(data.description);
      }
    } catch (error) {
      console.error('Error generating description:', error);
    } finally {
      setGenerating(false);
    }
  }

  // Add new description block
  function addDescriptionBlock() {
    const newBlock: AdditionalDescriptionBlock = {
      id: uuidv4(),
      title: 'Other',
      content: '',
      order: additionalDescriptions.length
    };
    setAdditionalDescriptions(prev => [...prev, newBlock]);
  }

  // Update description block
  function updateBlock(id: string, data: Partial<AdditionalDescriptionBlock>) {
    setAdditionalDescriptions(prev =>
      prev.map(block => (block.id === id ? { ...block, ...data } : block))
    );
  }

  // Remove description block
  function removeBlock(id: string) {
    setAdditionalDescriptions(prev => prev.filter(block => block.id !== id));
  }

  // Move block up
  function moveBlockUp(index: number) {
    if (index === 0) return;
    setAdditionalDescriptions(prev => {
      const newList = [...prev];
      [newList[index - 1], newList[index]] = [newList[index], newList[index - 1]];
      return newList.map((block, i) => ({ ...block, order: i }));
    });
  }

  // Move block down
  function moveBlockDown(index: number) {
    if (index === additionalDescriptions.length - 1) return;
    setAdditionalDescriptions(prev => {
      const newList = [...prev];
      [newList[index], newList[index + 1]] = [newList[index + 1], newList[index]];
      return newList.map((block, i) => ({ ...block, order: i }));
    });
  }

  // Count words
  function countWords(text: string): number {
    return text.trim().split(/\s+/).filter(Boolean).length;
  }

  async function handleSave() {
    updateListing({ description, additionalDescriptions });
    await saveListing({ description, additionalDescriptions });
  }

  async function handleContinue() {
    await handleSave();
    router.push(`/admin/listings`);
  }

  return (
    <WizardLayout
      listing={{ ...listing, description, additionalDescriptions }}
      onSave={() => saveListing({ description, additionalDescriptions })}
      isSaving={isSaving}
    >
      <div className="max-w-4xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-slate-900">Descriptions</h2>
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
          <p className="text-sm text-sky-800 font-medium mb-2">
            NEW! Descriptions now have their own dedicated section.
          </p>
          <p className="text-sm text-sky-700">
            Complete a few required fields (Class, Condition, Year, Make, Model, Length, and Hull Material),
            then use AI to instantly generate your description.
          </p>
          <p className="text-sm text-sky-600 mt-2">
            <strong>Tip:</strong> The more fields you fill out, the better your description will be.
          </p>
        </div>

        <div className="space-y-6">
          {/* Main Description */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg text-red-600 flex items-center gap-1">
                Description *
              </CardTitle>
              <Button
                variant="outline"
                size="sm"
                onClick={handleGenerateDescription}
                disabled={generating}
              >
                <Sparkles className="w-4 h-4 mr-2" />
                {generating ? 'Generating...' : 'AI Generate'}
              </Button>
            </CardHeader>
            <CardContent>
              <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Type something or click AI Generate to create a description based on your listing details..."
                className="min-h-[200px]"
              />
              <div className="flex justify-end mt-2 text-sm text-slate-500">
                Words: {countWords(description)} | Characters: {description.length}
              </div>
            </CardContent>
          </Card>

          {/* Additional Descriptions */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-slate-900">Additional Descriptions</h3>
              <Button variant="outline" size="sm" onClick={addDescriptionBlock}>
                <Plus className="w-4 h-4 mr-2" />
                Add
              </Button>
            </div>

            {additionalDescriptions.map((block, index) => (
              <Card key={block.id}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col gap-1">
                      <button
                        onClick={() => moveBlockUp(index)}
                        disabled={index === 0}
                        className="p-1 text-slate-400 hover:text-slate-600 disabled:opacity-30"
                      >
                        <ChevronUp className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => moveBlockDown(index)}
                        disabled={index === additionalDescriptions.length - 1}
                        className="p-1 text-slate-400 hover:text-slate-600 disabled:opacity-30"
                      >
                        <ChevronDown className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex-1 space-y-4">
                      <div className="flex gap-4">
                        <div className="flex-1">
                          <Label>Title</Label>
                          <Select
                            value={block.title}
                            onValueChange={(v) => updateBlock(block.id, { title: v as AdditionalDescriptionBlock['title'] })}
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {DESCRIPTION_TITLES.map(title => (
                                <SelectItem key={title} value={title}>{title}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeBlock(block.id)}
                          className="mt-6 text-red-500 hover:text-red-600 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>

                      <div>
                        <Label>Content</Label>
                        <Textarea
                          value={block.content}
                          onChange={(e) => updateBlock(block.id, { content: e.target.value })}
                          placeholder="Enter description content..."
                          className="min-h-[100px]"
                        />
                        <div className="flex justify-end mt-1 text-xs text-slate-500">
                          Words: {countWords(block.content)} | Characters: {block.content.length}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {additionalDescriptions.length === 0 && (
              <div className="text-center py-8 text-slate-500">
                <p className="mb-2">No additional descriptions yet.</p>
                <Button variant="outline" size="sm" onClick={addDescriptionBlock}>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Description Block
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="flex justify-end gap-2 mt-6 pt-6 border-t border-slate-200">
          <Button variant="outline" onClick={handleSave} disabled={isSaving}>
            Save
          </Button>
          <Button onClick={handleContinue} disabled={isSaving} className="bg-sky-600 hover:bg-sky-700">
            Finish
          </Button>
        </div>
      </div>
    </WizardLayout>
  );
}
