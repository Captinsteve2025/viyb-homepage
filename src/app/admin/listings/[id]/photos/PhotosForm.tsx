'use client';

import { useState, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import WizardLayout from '@/components/admin/WizardLayout';
import { useListing } from '@/hooks/use-listing';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Plus, Trash2, Star, Upload, Video, Image as ImageIcon,
  Link as LinkIcon, GripVertical
} from 'lucide-react';
import type { Listing, Media } from '@/lib/listings/types';

interface PhotosFormProps {
  initialListing: Listing;
}

export default function PhotosForm({ initialListing }: PhotosFormProps) {
  const router = useRouter();
  const { listing, saveListing, isSaving } = useListing(initialListing);
  const [uploading, setUploading] = useState(false);
  const [localMedia, setLocalMedia] = useState<Media[]>(initialListing.media);
  const [videoUrl, setVideoUrl] = useState('');
  const [photo360Url, setPhoto360Url] = useState(initialListing.photo360Url);
  const [virtualTourUrl, setVirtualTourUrl] = useState(initialListing.virtualTourUrl);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Get photos and videos separately
  const photos = localMedia.filter(m => m.type === 'photo').sort((a, b) => a.order - b.order);
  const videos = localMedia.filter(m => m.type === 'video');

  // Handle file upload
  const handleFileUpload = useCallback(async (files: FileList) => {
    if (files.length === 0) return;

    setUploading(true);
    try {
      for (const file of Array.from(files)) {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('type', 'photo');

        const res = await fetch(`/api/listings/${listing.id}/media`, {
          method: 'POST',
          body: formData
        });

        if (res.ok) {
          const newMedia = await res.json();
          setLocalMedia(prev => [...prev, newMedia]);
        }
      }
    } catch (error) {
      console.error('Error uploading files:', error);
    } finally {
      setUploading(false);
    }
  }, [listing.id]);

  // Handle video URL add
  async function handleAddVideo() {
    if (!videoUrl.trim()) return;

    try {
      const formData = new FormData();
      formData.append('type', 'video');
      formData.append('videoUrl', videoUrl);

      const res = await fetch(`/api/listings/${listing.id}/media`, {
        method: 'POST',
        body: formData
      });

      if (res.ok) {
        const newMedia = await res.json();
        setLocalMedia(prev => [...prev, newMedia]);
        setVideoUrl('');
      }
    } catch (error) {
      console.error('Error adding video:', error);
    }
  }

  // Handle delete media
  async function handleDeleteMedia(mediaId: string) {
    try {
      const res = await fetch(`/api/listings/${listing.id}/media?mediaId=${mediaId}`, {
        method: 'DELETE'
      });

      if (res.ok) {
        setLocalMedia(prev => prev.filter(m => m.id !== mediaId));
      }
    } catch (error) {
      console.error('Error deleting media:', error);
    }
  }

  // Handle set primary
  async function handleSetPrimary(mediaId: string) {
    try {
      const res = await fetch(`/api/listings/${listing.id}/media`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mediaId, action: 'setPrimary' })
      });

      if (res.ok) {
        setLocalMedia(prev =>
          prev.map(m => ({ ...m, isPrimary: m.id === mediaId }))
        );
      }
    } catch (error) {
      console.error('Error setting primary:', error);
    }
  }

  async function handleSave() {
    await saveListing({
      photo360Url,
      virtualTourUrl
    });
  }

  async function handleContinue() {
    await handleSave();
    router.push(`/admin/listings/${listing.id}/measurements`);
  }

  return (
    <WizardLayout listing={{ ...listing, media: localMedia }} onSave={saveListing} isSaving={isSaving}>
      <div className="max-w-4xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-slate-900">Photos & Videos</h2>
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
          <p className="text-sm text-sky-800 font-medium mb-2">Photo Tips for Best Display</p>
          <ul className="text-sm text-sky-700 list-disc list-inside space-y-1">
            <li>Use landscape orientation and center the boat in a 3:2 aspect ratio.</li>
            <li>Supported formats: JPG, PNG, HEIC, WEBP. Max file size: 10MB.</li>
            <li>Images are automatically optimized for web display.</li>
          </ul>
        </div>

        <div className="space-y-6">
          {/* Photos Section */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg flex items-center gap-2">
                <ImageIcon className="w-5 h-5" />
                Photos *
              </CardTitle>
              <Button
                variant="outline"
                size="sm"
                onClick={() => fileInputRef.current?.click()}
                disabled={uploading}
              >
                <Plus className="w-4 h-4 mr-2" />
                {uploading ? 'Uploading...' : 'Add'}
              </Button>
            </CardHeader>
            <CardContent>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={(e) => e.target.files && handleFileUpload(e.target.files)}
              />

              {photos.length === 0 ? (
                <div
                  className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center cursor-pointer hover:border-sky-400 transition-colors"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Upload className="w-10 h-10 text-slate-400 mx-auto mb-3" />
                  <p className="text-slate-600 mb-1">Drop images here or click to upload</p>
                  <p className="text-sm text-slate-500">JPG, PNG, HEIC, WEBP up to 10MB</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {photos.map((photo) => (
                    <div
                      key={photo.id}
                      className="relative group aspect-[3/2] rounded-lg overflow-hidden border border-slate-200"
                    >
                      <Image
                        src={photo.thumbnailUrl || photo.url}
                        alt={photo.title}
                        fill
                        className="object-cover"
                      />
                      {photo.isPrimary && (
                        <div className="absolute top-2 left-2 bg-amber-500 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                          <Star className="w-3 h-3" /> Primary
                        </div>
                      )}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                        <button
                          className="p-2 bg-white rounded-full hover:bg-slate-100"
                          title="Set as primary"
                          onClick={() => handleSetPrimary(photo.id)}
                        >
                          <Star className={`w-4 h-4 ${photo.isPrimary ? 'text-amber-500 fill-amber-500' : 'text-slate-600'}`} />
                        </button>
                        <button
                          className="p-2 bg-white rounded-full hover:bg-slate-100"
                          title="Reorder"
                        >
                          <GripVertical className="w-4 h-4 text-slate-600" />
                        </button>
                        <button
                          className="p-2 bg-white rounded-full hover:bg-red-50"
                          title="Delete"
                          onClick={() => handleDeleteMedia(photo.id)}
                        >
                          <Trash2 className="w-4 h-4 text-red-500" />
                        </button>
                      </div>
                    </div>
                  ))}

                  {/* Add more button */}
                  <button
                    className="aspect-[3/2] rounded-lg border-2 border-dashed border-slate-300 flex flex-col items-center justify-center text-slate-400 hover:border-sky-400 hover:text-sky-500 transition-colors"
                    onClick={() => fileInputRef.current?.click()}
                    disabled={uploading}
                  >
                    <Plus className="w-6 h-6 mb-1" />
                    <span className="text-sm">{uploading ? 'Uploading...' : 'Add'}</span>
                  </button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Videos Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Video className="w-5 h-5" />
                Videos
              </CardTitle>
            </CardHeader>
            <CardContent>
              {videos.length === 0 ? (
                <p className="text-slate-500 text-sm mb-4">- No video has been added for this listing -</p>
              ) : (
                <div className="space-y-2 mb-4">
                  {videos.map(video => (
                    <div key={video.id} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                      <Video className="w-5 h-5 text-slate-400" />
                      <a
                        href={video.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-sm text-sky-600 hover:underline truncate"
                      >
                        {video.url}
                      </a>
                      <button
                        onClick={() => handleDeleteMedia(video.id)}
                        className="p-1 text-red-500 hover:bg-red-50 rounded"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex gap-2">
                <Input
                  placeholder="YouTube or Vimeo URL"
                  value={videoUrl}
                  onChange={(e) => setVideoUrl(e.target.value)}
                  className="flex-1"
                />
                <Button variant="outline" onClick={handleAddVideo}>
                  <Plus className="w-4 h-4 mr-2" />
                  Add
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* 360 Photos */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <ImageIcon className="w-5 h-5" />
                360 Photos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-500 text-sm mb-4">- No 360 photo has been added for this listing -</p>
              <div className="space-y-2">
                <Label htmlFor="photo360">360 Photo URL</Label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <Input
                      id="photo360"
                      placeholder="Enter 360 photo URL"
                      value={photo360Url}
                      onChange={(e) => setPhoto360Url(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 3D Virtual Tour */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <LinkIcon className="w-5 h-5" />
                3D Virtual Tour
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-500 text-sm mb-4">- No tour has been added for this listing -</p>
              <div className="space-y-2">
                <Label htmlFor="virtualTour">Virtual Tour URL (Matterport, etc.)</Label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <Input
                      id="virtualTour"
                      placeholder="Enter virtual tour URL"
                      value={virtualTourUrl}
                      onChange={(e) => setVirtualTourUrl(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
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
