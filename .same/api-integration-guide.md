# API Integration Guide for VIYB
## Populating Yacht Cards with Live Data

---

## 🎯 Overview

Yes! Your website can be populated with live yacht listing data from API feeds. Here are multiple approaches, from simplest to most advanced.

---

## Option 1: Server-Side Rendering (SSR) ⭐ Recommended

### How It Works
- Data fetched fresh on every page request
- Always shows latest listings
- SEO-friendly (Google sees the yacht data)
- No loading spinners for users

### Example: Dynamic Brokerage Page

```typescript
// src/app/brokerage/page.tsx
import { YachtCard } from '@/components/YachtCard';

// Define your yacht data type
interface Yacht {
  id: string;
  name: string;
  type: string;
  length: string;
  price: number;
  year: number;
  imageUrl: string;
  description: string;
  cabins: number;
  location: string;
}

// This function runs on the SERVER for each request
async function getYachts(): Promise<Yacht[]> {
  const res = await fetch('https://api.yachtworld.com/v1/listings', {
    headers: {
      'Authorization': `Bearer ${process.env.YACHT_API_KEY}`,
      'Content-Type': 'application/json',
    },
    // Optional: Cache for 5 minutes
    next: { revalidate: 300 }
  });

  if (!res.ok) {
    throw new Error('Failed to fetch yachts');
  }

  return res.json();
}

export default async function BrokeragePage() {
  const yachts = await getYachts();

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="mb-12 text-center text-4xl font-bold text-primary">
        Featured Brokerage Yachts
      </h1>

      <div className="grid gap-8 md:grid-cols-3">
        {yachts.map((yacht) => (
          <YachtCard key={yacht.id} yacht={yacht} />
        ))}
      </div>
    </div>
  );
}
```

### Reusable Yacht Card Component

```typescript
// src/components/YachtCard.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface YachtCardProps {
  yacht: {
    id: string;
    name: string;
    type: string;
    length: string;
    price: number;
    year: number;
    imageUrl: string;
    description: string;
    location: string;
  };
}

export function YachtCard({ yacht }: YachtCardProps) {
  return (
    <Card className="group overflow-hidden transition-all hover:shadow-2xl">
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
        <p className="mb-6 text-sm text-muted-foreground line-clamp-2">
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

---

## Option 2: Client-Side Fetching with React Hooks

### When to Use
- When you want loading states/spinners
- When data updates frequently (live availability)
- When you need real-time filtering

### Example Implementation

```typescript
'use client';

import { useState, useEffect } from 'react';
import { YachtCard } from '@/components/YachtCard';

export default function BrokeragePage() {
  const [yachts, setYachts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchYachts() {
      try {
        const response = await fetch('/api/yachts');
        const data = await response.json();
        setYachts(data);
      } catch (err) {
        setError('Failed to load yachts');
      } finally {
        setLoading(false);
      }
    }

    fetchYachts();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-secondary" />
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-600">{error}</div>;
  }

  return (
    <div className="grid gap-8 md:grid-cols-3">
      {yachts.map((yacht) => (
        <YachtCard key={yacht.id} yacht={yacht} />
      ))}
    </div>
  );
}
```

### Create API Route (keeps API keys secure)

```typescript
// src/app/api/yachts/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('https://api.yachtworld.com/v1/listings', {
      headers: {
        'Authorization': `Bearer ${process.env.YACHT_API_KEY}`,
      },
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch yachts' },
      { status: 500 }
    );
  }
}
```

---

## Option 3: Incremental Static Regeneration (ISR) ⭐ Best for Performance

### How It Works
- Pages are pre-built at deploy time
- Auto-regenerate in background every X seconds
- Users get instant page loads
- Data stays fresh

### Example

```typescript
// src/app/brokerage/page.tsx
async function getYachts() {
  const res = await fetch('https://api.yachtworld.com/v1/listings', {
    next: {
      revalidate: 3600  // Refresh every hour
    }
  });

  return res.json();
}

export default async function BrokeragePage() {
  const yachts = await getYachts();

  return (
    <div className="grid gap-8 md:grid-cols-3">
      {yachts.map((yacht) => (
        <YachtCard key={yacht.id} yacht={yacht} />
      ))}
    </div>
  );
}
```

---

## 🔌 Common Yacht Listing API Providers

### 1. YachtWorld API
```
https://api.yachtworld.com/
- Largest yacht listing database
- RESTful API
- Requires API key
```

### 2. Boats.com API
```
https://developer.boats.com/
- Similar to YachtWorld
- Good for US market
```

### 3. YachtCharterFleet API
```
https://www.yachtcharterfleet.com/
- Charter-specific data
- Availability calendars
- Crew information
```

### 4. Custom Bali API
```
If Bali provides dealer API:
- New yacht inventory
- Pricing
- Specifications
- Delivery times
```

### 5. MLS (Multiple Listing Service)
```
Yacht broker MLS systems:
- YATCO (Yacht Brokers Association)
- Private MLS feeds
- Usually requires membership
```

---

## 📊 API Response Mapping

### Typical API Response Structure

```json
{
  "listings": [
    {
      "id": "12345",
      "make": "Bali",
      "model": "4.8",
      "year": 2023,
      "length": {
        "feet": 48,
        "meters": 14.6
      },
      "price": {
        "amount": 925000,
        "currency": "USD"
      },
      "location": {
        "country": "British Virgin Islands",
        "region": "Tortola"
      },
      "images": [
        {
          "url": "https://cdn.yachtworld.com/...",
          "caption": "Main deck"
        }
      ],
      "description": "Beautiful Bali 4.8...",
      "specifications": {
        "cabins": 4,
        "heads": 4,
        "guests": 10
      }
    }
  ],
  "pagination": {
    "total": 156,
    "page": 1,
    "perPage": 20
  }
}
```

### Transform to Your Data Model

```typescript
// src/lib/api/transformYachtData.ts
export function transformYachtData(apiResponse: any) {
  return apiResponse.listings.map((yacht: any) => ({
    id: yacht.id,
    name: `${yacht.make} ${yacht.model}`,
    type: yacht.category || 'Catamaran',
    length: `${yacht.length.feet}'`,
    price: yacht.price.amount,
    year: yacht.year,
    imageUrl: yacht.images[0]?.url || '/placeholder.jpg',
    description: yacht.description,
    cabins: yacht.specifications.cabins,
    location: yacht.location.region,
  }));
}
```

---

## 🔒 Security Best Practices

### 1. Environment Variables

```bash
# .env.local (NEVER commit this file!)
YACHT_API_KEY=your_api_key_here
YACHT_API_SECRET=your_secret_here
YACHTWORLD_API_URL=https://api.yachtworld.com/v1
```

### 2. Use in Server Components

```typescript
// Only works in server components or API routes
const apiKey = process.env.YACHT_API_KEY;
```

### 3. Never Expose Keys to Client

```typescript
// ❌ BAD - Exposes API key to browser
'use client';
const apiKey = process.env.NEXT_PUBLIC_YACHT_API_KEY; // Don't do this!

// ✅ GOOD - API key stays on server
// Create API route instead
fetch('/api/yachts'); // Calls your backend
```

---

## 🚀 Deployment with API Integration

### Netlify Deployment

1. **Add Environment Variables in Netlify Dashboard:**
   ```
   Site Settings → Environment Variables

   YACHT_API_KEY = your_key_here
   YACHT_API_SECRET = your_secret_here
   ```

2. **Deploy Normally:**
   ```bash
   git push origin main
   # Netlify auto-deploys
   ```

3. **For ISR/SSR:**
   - Deploy as **Netlify Functions** (dynamic site)
   - Not static export

---

## 🎨 Advanced Features

### Real-Time Filtering

```typescript
'use client';

import { useState } from 'react';

export function YachtFilters({ yachts }) {
  const [priceRange, setPriceRange] = useState([0, 5000000]);
  const [yachtType, setYachtType] = useState('all');

  const filtered = yachts.filter(yacht => {
    const inPriceRange = yacht.price >= priceRange[0] && yacht.price <= priceRange[1];
    const matchesType = yachtType === 'all' || yacht.type === yachtType;
    return inPriceRange && matchesType;
  });

  return (
    <>
      <div className="mb-8 flex gap-4">
        <select onChange={(e) => setYachtType(e.target.value)}>
          <option value="all">All Types</option>
          <option value="catamaran">Catamaran</option>
          <option value="motor">Motor Yacht</option>
          <option value="sailing">Sailing Yacht</option>
        </select>

        <input
          type="range"
          min="0"
          max="5000000"
          value={priceRange[1]}
          onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
        />
      </div>

      <YachtGrid yachts={filtered} />
    </>
  );
}
```

### Automatic Refresh

```typescript
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export function AutoRefresh() {
  const router = useRouter();

  useEffect(() => {
    // Refresh data every 5 minutes
    const interval = setInterval(() => {
      router.refresh();
    }, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, [router]);

  return null;
}
```

---

## 📱 WordPress Integration

### If Using WordPress as Backend

**Option A: WordPress REST API**

```typescript
// Fetch from WordPress
async function getYachts() {
  const res = await fetch('https://yoursite.com/wp-json/wp/v2/yachts');
  return res.json();
}
```

**Option B: WPGraphQL**

```typescript
const query = `
  query GetYachts {
    yachts {
      nodes {
        id
        title
        yachtDetails {
          price
          length
          year
          images
        }
      }
    }
  }
`;

const res = await fetch('https://yoursite.com/graphql', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ query })
});
```

---

## 🎯 Recommended Setup for VIYB

### For Your Current Next.js Site:

```
1. Use ISR (Incremental Static Regeneration)
   - Fast page loads
   - Fresh data every hour
   - Best user experience

2. Create API routes for sensitive operations
   - Keeps API keys secure
   - Can add custom logic

3. Add real-time filtering on client-side
   - Users can search/filter
   - No page reloads needed

4. Deploy to Netlify as dynamic site
   - Supports server-side rendering
   - Environment variables secure
```

---

## 📦 Quick Start Implementation

Want me to implement this for you? I can:

1. ✅ Create API integration for any yacht listing service
2. ✅ Build dynamic yacht card components
3. ✅ Set up filtering and search
4. ✅ Add pagination
5. ✅ Configure for Netlify deployment
6. ✅ Add loading states and error handling
7. ✅ Implement caching for performance

Just let me know:
- Which API service you have access to (YachtWorld, Boats.com, custom, etc.)
- Whether you have API credentials yet
- Which pages should be dynamic (brokerage, charter, both?)

---

## 💰 API Costs & Considerations

### Typical Pricing:
- **YachtWorld API:** Contact for pricing (usually monthly subscription)
- **Boats.com API:** Similar to YachtWorld
- **WordPress REST API:** Free (if you use WordPress)
- **Custom MLS Feeds:** Often included with broker membership

### Free Alternatives:
- Web scraping (legal gray area, not recommended)
- Manual updates via WordPress CMS
- Google Sheets as "database" (good for small sites)

---

**Ready to make your yacht listings dynamic?** Let me know which approach you prefer and I'll implement it!
