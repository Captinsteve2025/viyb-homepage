"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Calendar, CheckCircle2, FileText, LogIn, Mail, MapPin, Phone, Ruler, Search, TrendingUp, Users } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import MobileNav from "@/components/MobileNav";
import Logo from "@/components/Logo";

// Sample yacht data
const yachtsForSale = [
  {
    id: 1,
    name: "Lady Alexis",
    year: 2019,
    make: "Sunseeker",
    model: "86 Yacht",
    length: 86,
    price: 4250000,
    location: "Tortola, BVI",
    image: "https://images.northropandjohnson.com/yacht/48efItZiNi/0C04F7AD-6790-ED11-AAD1-000D3A32EB3D/1755516839-1.jpg?auto=format&q=65&h=1&ar=16%3A9&fit=crop",
    cabins: 4,
    description: "Immaculate motor yacht with full-beam master suite and luxury finishes throughout"
  },
  {
    id: 2,
    name: "Caribbean Dream",
    year: 2021,
    make: "Lagoon",
    model: "55",
    length: 55,
    price: 1495000,
    location: "St. Thomas, USVI",
    image: "https://sunreef-charter.com/wp-content/uploads/2023/04/hero_0009_viva-la-vida.jpg",
    cabins: 5,
    description: "Perfect charter catamaran with proven income history and professional management"
  },
  {
    id: 3,
    name: "Serenity",
    year: 2020,
    make: "Oyster",
    model: "885",
    length: 88,
    price: 5750000,
    location: "Virgin Gorda, BVI",
    image: "https://oysteryachts.com/assets/Uploads/Oyster-805-80-foot-yacht-Hero-D__FillMaxWzE5MjAsODEwXQ.png",
    cabins: 4,
    description: "Award-winning bluewater cruiser with exceptional build quality and performance"
  },
  {
    id: 4,
    name: "Ocean Runner",
    year: 2018,
    make: "Princess",
    model: "68 Flybridge",
    length: 68,
    price: 2850000,
    location: "St. Martin",
    image: "https://moranyachts.imgix.net/wp-content/uploads/why-choose-us-yacht-broker-moran-yachts-1.jpg?auto=format&fit=crop&fm=webp&h=700&ixlib=php-3.1.0&w=1800&s=78ef896f187bdcd43836c3b371d41e10",
    cabins: 3,
    description: "Stunning flybridge motor yacht with spacious entertaining areas and modern amenities"
  },
  {
    id: 5,
    name: "Wind Spirit",
    year: 2022,
    make: "Beneteau",
    model: "Oceanis 60",
    length: 60,
    price: 895000,
    location: "Tortola, BVI",
    image: "https://sailtmm.com/assets/images/yacht_sales_hero.jpg",
    cabins: 5,
    description: "Nearly new performance cruiser with excellent sailing characteristics and comfort"
  },
  {
    id: 6,
    name: "Blue Horizon",
    year: 2017,
    make: "Azimut",
    model: "77S",
    length: 77,
    price: 3250000,
    location: "Antigua",
    image: "https://images.northropandjohnson.com/yacht/48efItZiNi/DDF1C472-9354-EC11-8C62-000D3A5BC4E8/1755608586-profile.jpg?auto=format&q=65&h=1&ar=16%3A9&fit=crop",
    cabins: 4,
    description: "Italian elegance meets performance with this exceptional sports yacht"
  },
  {
    id: 7,
    name: "Paradise Found",
    year: 2020,
    make: "Fountaine Pajot",
    model: "Saona 47",
    length: 47,
    price: 725000,
    location: "St. Lucia",
    image: "https://bali-catamarans.hr/images/ownership/yacht-images/bali-43-loft/bali-43-loft-1.jpg",
    cabins: 4,
    description: "Popular cruising catamaran with excellent layout and charter potential"
  },
  {
    id: 8,
    name: "Aquarius",
    year: 2019,
    make: "Hatteras",
    model: "M90 Panacera",
    length: 90,
    price: 6950000,
    location: "St. Maarten",
    image: "https://images.northropandjohnson.com/yacht/48efItZiNi/A45EF0D4-25CD-EC11-A7B5-000D3A3717B7/1729241314-focus-153-north-american-yachts-sales-brochure-page-42-image-0001.jpg?auto=format&q=65&h=1&ar=16%3A9&fit=crop",
    cabins: 5,
    description: "Flagship motor yacht with on-deck master suite and world-class craftsmanship"
  },
  {
    id: 9,
    name: "Trade Winds",
    year: 2021,
    make: "Jeanneau",
    model: "Sun Odyssey 490",
    length: 49,
    price: 485000,
    location: "Grenada",
    image: "https://sunreef-yachts.com/wp-content/uploads/2024/07/80A24-hero.jpg",
    cabins: 4,
    description: "Modern cruising sailboat with excellent performance and comfortable accommodations"
  }
];

export default function BrokeragePage() {
  const [priceRange, setPriceRange] = useState("all");
  const [lengthRange, setLengthRange] = useState("all");
  const [yearRange, setYearRange] = useState("all");
  const [location, setLocation] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Filter yachts based on selected filters
  const filteredYachts = yachtsForSale.filter((yacht) => {
    // Price filter
    if (priceRange !== "all") {
      const [min, max] = priceRange.split("-").map(Number);
      if (max && (yacht.price < min || yacht.price > max)) return false;
      if (!max && yacht.price < min) return false;
    }

    // Length filter
    if (lengthRange !== "all") {
      const [min, max] = lengthRange.split("-").map(Number);
      if (max && (yacht.length < min || yacht.length > max)) return false;
      if (!max && yacht.length < min) return false;
    }

    // Year filter
    if (yearRange !== "all") {
      const [min, max] = yearRange.split("-").map(Number);
      if (max && (yacht.year < min || yacht.year > max)) return false;
      if (!max && yacht.year < min) return false;
    }

    // Location filter
    if (location !== "all" && !yacht.location.toLowerCase().includes(location.toLowerCase())) {
      return false;
    }

    // Search term
    if (searchTerm && !yacht.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !yacht.make.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !yacht.model.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }

    return true;
  });

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-white shadow-sm backdrop-blur">
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          <Link href="/">
            <Logo variant="light" />
          </Link>
          <nav className="hidden gap-8 md:flex">
            <Link href="/brokerage" className="text-sm font-medium uppercase tracking-wide text-secondary">Brokerage</Link>
            <Link href="/bali" className="text-sm font-medium uppercase tracking-wide text-muted-foreground transition-colors hover:text-secondary">New Bali</Link>
            <Link href="/charter" className="text-sm font-medium uppercase tracking-wide text-muted-foreground transition-colors hover:text-secondary">Yacht Charters</Link>
            <Link href="/training" className="text-sm font-medium uppercase tracking-wide text-muted-foreground transition-colors hover:text-secondary">Training</Link>
            <Link href="/charter-ownership" className="text-sm font-medium uppercase tracking-wide text-muted-foreground transition-colors hover:text-secondary">Charter Ownership</Link>
            <Link href="/#contact" className="text-sm font-medium uppercase tracking-wide text-muted-foreground transition-colors hover:text-secondary">Contact</Link>
          <Link href="/admin/login" className="flex items-center gap-1.5 text-sm font-medium uppercase tracking-wide text-muted-foreground transition-colors hover:text-secondary" title="Admin Panel"><LogIn className="h-4 w-4" />Admin</Link>
          </nav>
          <MobileNav currentPage="Brokerage" variant="light" />
        </div>
      </header>

      {/* Back Button */}
      <div className="border-b border-gray-100 bg-white">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-5xl font-bold md:text-6xl">Yachts for Sale in the Caribbean</h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
            Discover your perfect yacht from our curated selection of premium vessels in the Virgin Islands and Caribbean
          </p>
          <div className="mx-auto max-w-xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search by yacht name, make, or model..."
                className="h-14 border-white/20 bg-white pl-12 text-base"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-20 z-40 border-b border-gray-200 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="grid gap-4 md:grid-cols-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-primary">Price Range</label>
              <select
                className="flex h-11 w-full rounded-sm border border-input bg-background px-4 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
              >
                <option value="all">All Prices</option>
                <option value="0-500000">Under $500K</option>
                <option value="500000-1000000">$500K - $1M</option>
                <option value="1000000-2000000">$1M - $2M</option>
                <option value="2000000-5000000">$2M - $5M</option>
                <option value="5000000">Over $5M</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-primary">Length</label>
              <select
                className="flex h-11 w-full rounded-sm border border-input bg-background px-4 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                value={lengthRange}
                onChange={(e) => setLengthRange(e.target.value)}
              >
                <option value="all">All Lengths</option>
                <option value="0-50">Under 50'</option>
                <option value="50-60">50' - 60'</option>
                <option value="60-80">60' - 80'</option>
                <option value="80">Over 80'</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-primary">Year Built</label>
              <select
                className="flex h-11 w-full rounded-sm border border-input bg-background px-4 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                value={yearRange}
                onChange={(e) => setYearRange(e.target.value)}
              >
                <option value="all">All Years</option>
                <option value="2020">2020 or Newer</option>
                <option value="2015-2019">2015 - 2019</option>
                <option value="2010-2014">2010 - 2014</option>
                <option value="0-2009">Before 2010</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-primary">Location</label>
              <select
                className="flex h-11 w-full rounded-sm border border-input bg-background px-4 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option value="all">All Locations</option>
                <option value="bvi">British Virgin Islands</option>
                <option value="usvi">US Virgin Islands</option>
                <option value="antigua">Antigua</option>
                <option value="st. martin">St. Martin/Maarten</option>
                <option value="grenada">Grenada</option>
                <option value="st. lucia">St. Lucia</option>
              </select>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between text-sm">
            <span className="text-muted-foreground">
              Showing {filteredYachts.length} of {yachtsForSale.length} yachts
            </span>
            {(priceRange !== "all" || lengthRange !== "all" || yearRange !== "all" || location !== "all" || searchTerm) && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setPriceRange("all");
                  setLengthRange("all");
                  setYearRange("all");
                  setLocation("all");
                  setSearchTerm("");
                }}
              >
                Clear All Filters
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Yacht Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredYachts.length === 0 ? (
            <div className="py-20 text-center">
              <p className="mb-4 text-xl text-muted-foreground">No yachts match your current filters</p>
              <Button
                variant="outline"
                onClick={() => {
                  setPriceRange("all");
                  setLengthRange("all");
                  setYearRange("all");
                  setLocation("all");
                  setSearchTerm("");
                }}
              >
                Clear All Filters
              </Button>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredYachts.map((yacht) => (
                <Card key={yacht.id} className="group overflow-hidden transition-all hover:shadow-2xl">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={yacht.image}
                      alt={yacht.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute right-4 top-4 rounded-full bg-secondary px-4 py-2 text-sm font-bold text-white shadow-lg">
                      {yacht.year}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="mb-2 text-2xl font-bold text-primary">{yacht.name}</h3>
                    <p className="mb-3 text-muted-foreground">
                      {yacht.make} {yacht.model}
                    </p>

                    <div className="mb-4 grid grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Ruler className="h-4 w-4 text-secondary" />
                        <span>{yacht.length}'</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Users className="h-4 w-4 text-secondary" />
                        <span>{yacht.cabins} Cabins</span>
                      </div>
                      <div className="col-span-2 flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4 text-secondary" />
                        <span>{yacht.location}</span>
                      </div>
                    </div>

                    <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
                      {yacht.description}
                    </p>

                    <div className="mb-4 border-t border-gray-200 pt-4">
                      <p className="text-3xl font-bold text-secondary">
                        ${(yacht.price / 1000000).toFixed(2)}M
                      </p>
                    </div>

                    <Button variant="outline" className="w-full">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Listing Service Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold text-primary md:text-5xl">
                List Your Yacht with VIYB
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Professional brokerage services to sell your yacht quickly and at the best price
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <Card className="border-2 border-primary/10">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="rounded-full bg-secondary/10 p-6">
                      <TrendingUp className="h-12 w-12 text-secondary" />
                    </div>
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-primary">Maximum Exposure</h3>
                  <p className="leading-relaxed text-muted-foreground">
                    Your yacht marketed across major listing platforms, social media, and our extensive network of buyers and brokers worldwide.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/10">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="rounded-full bg-secondary/10 p-6">
                      <FileText className="h-12 w-12 text-secondary" />
                    </div>
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-primary">Full Documentation Support</h3>
                  <p className="leading-relaxed text-muted-foreground">
                    We handle all paperwork, surveys, sea trials, and closing procedures to ensure a smooth transaction from listing to sale.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/10">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="rounded-full bg-secondary/10 p-6">
                      <CheckCircle2 className="h-12 w-12 text-secondary" />
                    </div>
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-primary">Expert Guidance</h3>
                  <p className="leading-relaxed text-muted-foreground">
                    Our experienced brokers provide accurate valuations, strategic pricing, and professional negotiation to maximize your return.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 rounded-lg bg-white p-8 shadow-lg">
              <h3 className="mb-6 text-2xl font-bold text-primary">Our Listing Process</h3>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-bold text-white">
                    1
                  </div>
                  <div>
                    <h4 className="mb-2 font-bold text-primary">Free Valuation</h4>
                    <p className="text-sm text-muted-foreground">
                      We assess your yacht's condition and market position to provide an accurate valuation
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-bold text-white">
                    2
                  </div>
                  <div>
                    <h4 className="mb-2 font-bold text-primary">Professional Photography</h4>
                    <p className="text-sm text-muted-foreground">
                      High-quality photos and video to showcase your yacht's best features
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-bold text-white">
                    3
                  </div>
                  <div>
                    <h4 className="mb-2 font-bold text-primary">Marketing Campaign</h4>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive marketing across multiple platforms and direct outreach to qualified buyers
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-bold text-white">
                    4
                  </div>
                  <div>
                    <h4 className="mb-2 font-bold text-primary">Closing Support</h4>
                    <p className="text-sm text-muted-foreground">
                      Full support through surveys, negotiations, and final documentation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Valuation CTA */}
      <section className="bg-gradient-to-br from-primary to-primary/90 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              Get Your Free Yacht Valuation
            </h2>
            <p className="mb-8 text-lg text-white/90">
              Thinking of selling? Our expert brokers will provide a comprehensive market analysis and valuation of your yacht at no cost or obligation.
            </p>

            <Card className="border-2 border-white/20 bg-white/10 backdrop-blur">
              <CardContent className="p-8">
                <form name="free-valuation" method="POST" className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="text-left">
                      <label className="mb-2 block text-sm font-medium text-white">Your Name</label>
                      <Input name="name" placeholder="John Smith" className="border-white/20 bg-white/10 text-white placeholder:text-white/60" />
                    </div>
                    <div className="text-left">
                      <label className="mb-2 block text-sm font-medium text-white">Email</label>
                      <Input name="email" type="email" placeholder="john@example.com" className="border-white/20 bg-white/10 text-white placeholder:text-white/60" />
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="text-left">
                      <label className="mb-2 block text-sm font-medium text-white">Phone</label>
                      <Input name="phone" type="tel" placeholder="+1 (555) 123-4567" className="border-white/20 bg-white/10 text-white placeholder:text-white/60" />
                    </div>
                    <div className="text-left">
                      <label className="mb-2 block text-sm font-medium text-white">Yacht Location</label>
                      <Input name="location" placeholder="Tortola, BVI" className="border-white/20 bg-white/10 text-white placeholder:text-white/60" />
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-3">
                    <div className="text-left">
                      <label className="mb-2 block text-sm font-medium text-white">Year</label>
                      <Input name="year" placeholder="2020" className="border-white/20 bg-white/10 text-white placeholder:text-white/60" />
                    </div>
                    <div className="text-left">
                      <label className="mb-2 block text-sm font-medium text-white">Make</label>
                      <Input name="make" placeholder="Sunseeker" className="border-white/20 bg-white/10 text-white placeholder:text-white/60" />
                    </div>
                    <div className="text-left">
                      <label className="mb-2 block text-sm font-medium text-white">Model</label>
                      <Input name="model" placeholder="86 Yacht" className="border-white/20 bg-white/10 text-white placeholder:text-white/60" />
                    </div>
                  </div>

                  <div className="text-left">
                    <label className="mb-2 block text-sm font-medium text-white">Additional Details</label>
                    <textarea name="details"
                      className="flex min-h-[100px] w-full rounded-sm border border-white/20 bg-white/10 px-4 py-2 text-sm text-white placeholder:text-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      placeholder="Tell us about your yacht's condition, recent upgrades, and why you're considering selling..."
                    />
                  </div>

                  <Button type="submit" variant="secondary" size="lg" className="w-full">
                    Request Free Valuation
                  </Button>
                </form>

                <p className="mt-4 text-sm text-white/70">
                  We'll respond within 24 hours with a detailed market analysis
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-4">
            <div>
              <Logo variant="dark" />
              <p className="mt-4 leading-relaxed text-white/80">
                Your trusted partner for yacht sales and charter ownership in the Virgin Islands
              </p>
            </div>

            <div>
              <h3 className="mb-4 font-bold uppercase tracking-wide">Quick Links</h3>
              <ul className="space-y-2 text-white/80">
                <li><Link href="/brokerage" className="transition-colors hover:text-secondary">Brokerage Yachts</Link></li>
                <li><Link href="/bali" className="transition-colors hover:text-secondary">New Bali Catamarans</Link></li>
                <li><Link href="/#charter" className="transition-colors hover:text-secondary">Charter Ownership</Link></li>
                <li><Link href="/" className="transition-colors hover:text-secondary">Home</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-bold uppercase tracking-wide">Services</h3>
              <ul className="space-y-2 text-white/80">
                <li><a href="#" className="transition-colors hover:text-secondary">Yacht Brokerage</a></li>
                <li><a href="#" className="transition-colors hover:text-secondary">New Yacht Sales</a></li>
                <li><a href="#" className="transition-colors hover:text-secondary">Charter Management</a></li>
                <li><Link href="/training" className="transition-colors hover:text-secondary">Training Programs</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-bold uppercase tracking-wide">Contact Us</h3>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start gap-2">
                  <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>VIYB LTD, International House<br />10 Beaufort Court, Admirals Way<br />Canary Wharf, London, E14 9XL</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>1654 Calle Tulipan, Ste 100<br />San Juan, PR 00927</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>1500 Cordova Rd, Suite 200<br />Fort Lauderdale, FL 33316</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-secondary" />
                  <span>+44 7340 482091</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-secondary" />
                  <span>+1 786 246 0809</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-secondary" />
                  <span>info@virginislandsyachtbroker.com</span>
                </li>
                <li className="mt-4">
                  <img
                    src="/iyba-logo-white.png"
                    alt="IYBA Member"
                    className="h-10 w-auto opacity-80"
                  />
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/60">
            <p>© {new Date().getFullYear()} Virgin Islands Yacht Broker. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
