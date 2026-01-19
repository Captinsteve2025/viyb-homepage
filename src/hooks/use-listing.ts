'use client';

import { useState, useCallback, useEffect } from 'react';
import type { Listing } from '@/lib/listings/types';

export function useListing(initialListing: Listing) {
  const [listing, setListing] = useState<Listing>(initialListing);
  const [isSaving, setIsSaving] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);

  // Update listing state locally
  const updateListing = useCallback((data: Partial<Listing>) => {
    setListing(prev => ({ ...prev, ...data }));
    setHasChanges(true);
  }, []);

  // Save listing to server
  const saveListing = useCallback(async (data: Partial<Listing> = {}) => {
    setIsSaving(true);
    try {
      const mergedData = { ...listing, ...data };
      const res = await fetch(`/api/listings/${listing.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(mergedData)
      });

      if (res.ok) {
        const updated = await res.json();
        setListing(updated);
        setHasChanges(false);
        return updated;
      }
      throw new Error('Failed to save');
    } catch (error) {
      console.error('Error saving listing:', error);
      throw error;
    } finally {
      setIsSaving(false);
    }
  }, [listing]);

  // Sync listing when initialListing changes
  useEffect(() => {
    setListing(initialListing);
  }, [initialListing]);

  return {
    listing,
    updateListing,
    saveListing,
    isSaving,
    hasChanges
  };
}
