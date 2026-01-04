# Converting Static Pages to Dynamic API-Powered Pages

## Example: Brokerage Page Conversion

---

## BEFORE (Current Static Code)

Your current homepage has hardcoded yacht data:

```tsx
// src/app/page.tsx (current)
<div className="grid gap-8 md:grid-cols-3">
  <Card className="group overflow-hidden">
    <div className="relative h-64">
      <img src="https://..." alt="Luxury Motor Yacht" />
      <div className="absolute right-4 top-4">2019</div>
    </div>
    <CardContent className="p-6">
      <h3>85' Motor Yacht</h3>
      <p className="text-3xl font-bold">$2,850,000</p>
      <p>Stunning motor yacht with luxury amenities...</p>
      <Button variant="outline">View Details</Button>
    </CardContent>
  </Card>

  {/* Repeated for each yacht - HARDCODED */}
</div>
```

**Problems:**
- ❌ Must edit code to update listings
- ❌ No real-time inventory
- ❌ Can't filter or search
- ❌ Manual work for each yacht

---

## AFTER (Dynamic API-Powered)

### Step 1: Update Homepage to Fetch Data

```tsx
// src/app/page.tsx (dynamic version)
import { getYachts } from '@/lib/api/yachts';
import { YachtCard } from '@/components/YachtCard';

export default async function Home() {
  // Fetch yacht data from API
  const yachts = await getYachts();

  return (
    <div className="flex min-h-screen flex-col">
      {/* ... navigation ... */}

      {/* Featured Brokerage Yachts - NOW DYNAMIC */}
      <section id="brokerage" className="bg-muted py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-primary md:text-5xl">
              Featured Brokerage Yachts
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Live inventory - {yachts.length} yachts available
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {yachts.slice(0, 6).map((yacht) => (
              <YachtCard key={yacht.id} yacht={yacht} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="default" size="lg" asChild>
              <a href="/brokerage">View All {yachts.length} Listings</a>
            </Button>
          </div>
        </div>
      </section>

      {/* ... rest of page ... */}
    </div>
  );
}
```

### Step 2: Create Reusable YachtCard Component

```tsx
// src/components/YachtCard.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Yacht } from "@/lib/api/yachts";

interface YachtCardProps {
  yacht: Yacht;
}

export function YachtCard({ yacht }: YachtCardProps) {
  return (
    <Card className="group overflow-hidden border-2 transition-all hover:border-secondary hover:shadow-2xl">
      <div className="relative h-64 overflow-hidden">
        <img
          src={yacht.imageUrl}
          alt={yacht.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute right-4 top-4 rounded-full bg-secondary px-4 py-2 text-sm font-bold text-white shadow-lg">
          {yacht.year}
        </div>
      </div>

      <CardContent className="p-6">
        <h3 className="mb-2 text-2xl font-bold text-primary">{yacht.name}</h3>
        <p className="mb-2 text-sm text-muted-foreground">{yacht.location}</p>
        <p className="mb-4 text-3xl font-bold text-secondary">
          ${yacht.price.toLocaleString()}
        </p>
        <p className="mb-6 text-muted-foreground line-clamp-2">
          {yacht.description}
        </p>
        <Button variant="outline" className="w-full" asChild>
          <Link href={`/yacht/${yacht.id}`}>View Details</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
```

### Step 3: Create Full Brokerage Page with Filtering

```tsx
// src/app/brokerage/page.tsx
import { getYachts, filterYachtsByType, sortYachtsByPrice } from '@/lib/api/yachts';
import { YachtGrid } from '@/components/YachtGrid';
import { YachtFilters } from '@/components/YachtFilters';

export default async function BrokeragePage() {
  const allYachts = await getYachts();

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-20">
        <h1 className="mb-8 text-center text-5xl font-bold text-primary">
          Brokerage Yachts
        </h1>
        <p className="mb-12 text-center text-lg text-muted-foreground">
          {allYachts.length} Premium Yachts Available
        </p>

        {/* Client-side filtering component */}
        <YachtFilters yachts={allYachts} />
      </div>
    </div>
  );
}
```

### Step 4: Add Client-Side Filtering

```tsx
// src/components/YachtFilters.tsx
'use client';

import { useState } from 'react';
import { YachtCard } from './YachtCard';
import type { Yacht } from '@/lib/api/yachts';
import { Button } from './ui/button';

interface YachtFiltersProps {
  yachts: Yacht[];
}

export function YachtFilters({ yachts }: YachtFiltersProps) {
  const [typeFilter, setTypeFilter] = useState('all');
  const [priceSort, setPriceSort] = useState<'asc' | 'desc'>('desc');
  const [maxPrice, setMaxPrice] = useState(5000000);

  // Apply filters
  const filtered = yachts
    .filter(yacht => typeFilter === 'all' || yacht.type === typeFilter)
    .filter(yacht => yacht.price <= maxPrice)
    .sort((a, b) => priceSort === 'asc' ? a.price - b.price : b.price - a.price);

  return (
    <>
      {/* Filter Controls */}
      <div className="mb-8 flex flex-wrap gap-4 rounded-lg bg-muted p-6">
        <div className="flex-1">
          <label className="mb-2 block text-sm font-medium">Yacht Type</label>
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="w-full rounded-sm border border-input bg-background px-4 py-2"
          >
            <option value="all">All Types</option>
            <option value="Motor Yacht">Motor Yachts</option>
            <option value="Sailing Catamaran">Sailing Catamarans</option>
            <option value="Sailing Yacht">Sailing Yachts</option>
          </select>
        </div>

        <div className="flex-1">
          <label className="mb-2 block text-sm font-medium">Sort by Price</label>
          <select
            value={priceSort}
            onChange={(e) => setPriceSort(e.target.value as 'asc' | 'desc')}
            className="w-full rounded-sm border border-input bg-background px-4 py-2"
          >
            <option value="desc">Highest First</option>
            <option value="asc">Lowest First</option>
          </select>
        </div>

        <div className="flex-1">
          <label className="mb-2 block text-sm font-medium">
            Max Price: ${maxPrice.toLocaleString()}
          </label>
          <input
            type="range"
            min="0"
            max="5000000"
            step="100000"
            value={maxPrice}
            onChange={(e) => setMaxPrice(parseInt(e.target.value))}
            className="w-full"
          />
        </div>

        <div className="flex items-end">
          <Button
            variant="outline"
            onClick={() => {
              setTypeFilter('all');
              setPriceSort('desc');
              setMaxPrice(5000000);
            }}
          >
            Reset Filters
          </Button>
        </div>
      </div>

      {/* Results */}
      <p className="mb-6 text-muted-foreground">
        Showing {filtered.length} of {yachts.length} yachts
      </p>

      {/* Yacht Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((yacht) => (
          <YachtCard key={yacht.id} yacht={yacht} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="py-20 text-center">
          <p className="text-xl text-muted-foreground">
            No yachts match your criteria. Try adjusting your filters.
          </p>
        </div>
      )}
    </>
  );
}
```

---

## Configuration Steps

### 1. Add Environment Variables

Create `.env.local` file:

```bash
# Choose ONE of these options:

# Option A: YachtWorld API
YACHTWORLD_API_KEY=your_api_key_here

# Option B: WordPress
WORDPRESS_URL=https://your-wp-site.com

# Option C: Custom JSON Feed
CUSTOM_YACHT_FEED_URL=https://yoursite.com/api/yachts.json

# Option D: Leave empty to use mock data during development
# (No variables needed)
```

### 2. Install (if needed)

No additional packages needed! Uses existing Next.js features.

### 3. Deploy to Netlify

```bash
# Deploy as DYNAMIC site (not static)
# Netlify will auto-detect Next.js

# Add environment variables in Netlify dashboard:
# Site Settings → Environment Variables
```

---

## Benefits of This Approach

✅ **Automatic Updates**: Add yachts via API, they appear instantly
✅ **Real-Time Inventory**: Always shows current availability
✅ **Client-Side Filtering**: Fast, no page reloads
✅ **SEO-Friendly**: Server-rendered with real data
✅ **Fallback to Mock Data**: Works during development
✅ **Type-Safe**: Full TypeScript support
✅ **Performance**: Cached for 1 hour, then refreshes

---

## Testing Locally

```bash
# Without API (uses mock data)
bun run dev
# Visit http://localhost:3000

# With API
# 1. Add API key to .env.local
# 2. Run dev server
bun run dev
```

---

## Next Level: Individual Yacht Pages

```tsx
// src/app/yacht/[id]/page.tsx
import { getYachts } from '@/lib/api/yachts';
import { notFound } from 'next/navigation';

export default async function YachtDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const yachts = await getYachts();
  const yacht = yachts.find(y => y.id === params.id);

  if (!yacht) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="mb-6 text-5xl font-bold text-primary">{yacht.name}</h1>
      <div className="grid gap-8 lg:grid-cols-2">
        <img
          src={yacht.imageUrl}
          alt={yacht.name}
          className="rounded-lg"
        />
        <div>
          <p className="mb-4 text-4xl font-bold text-secondary">
            ${yacht.price.toLocaleString()}
          </p>
          <p className="mb-6 text-lg">{yacht.description}</p>

          <dl className="space-y-2">
            <div className="flex justify-between border-b pb-2">
              <dt className="font-medium">Length:</dt>
              <dd>{yacht.length}</dd>
            </div>
            <div className="flex justify-between border-b pb-2">
              <dt className="font-medium">Year:</dt>
              <dd>{yacht.year}</dd>
            </div>
            <div className="flex justify-between border-b pb-2">
              <dt className="font-medium">Cabins:</dt>
              <dd>{yacht.cabins}</dd>
            </div>
            <div className="flex justify-between border-b pb-2">
              <dt className="font-medium">Location:</dt>
              <dd>{yacht.location}</dd>
            </div>
          </dl>

          <Button variant="gold" size="lg" className="mt-8 w-full">
            Request More Information
          </Button>
        </div>
      </div>
    </div>
  );
}
```

---

## Summary

**To make your site dynamic:**

1. ✅ API utility already created: `src/lib/api/yachts.ts`
2. ✅ Add environment variable (or use mock data)
3. ✅ Replace static arrays with `await getYachts()`
4. ✅ Use `<YachtCard>` component
5. ✅ Deploy to Netlify (dynamic mode)

**Want me to implement this for your site?** I can:
- Convert your existing pages to use API data
- Set up the yacht card components
- Add filtering and search
- Configure for your preferred API provider
- Test with mock data first

Just say the word! 🚀
