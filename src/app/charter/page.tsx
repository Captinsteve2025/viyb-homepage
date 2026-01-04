"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Anchor, Calendar, CheckCircle2, DollarSign, Mail, MapPin, Phone, Sailboat, Ship, TrendingUp, Users, Waves } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import MobileNav from "@/components/MobileNav";
import Logo from "@/components/Logo";

// Sample charter yacht data
const charterYachts = [
  {
    id: 1,
    name: "Caribbean Dream",
    type: "Sailing Catamaran",
    category: "catamaran",
    length: "62'",
    cabins: 5,
    guests: 10,
    crew: "Captain + Chef",
    price: "$18,500",
    priceUnit: "per week",
    location: "British Virgin Islands",
    image: "https://sunreef-charter.com/wp-content/uploads/2023/04/hero_0009_viva-la-vida.jpg",
    description: "Luxury sailing catamaran perfect for family charters with spacious deck areas and modern amenities.",
    features: ["Full air conditioning", "Water toys included", "Professional chef", "Premium sound system"]
  },
  {
    id: 2,
    name: "Island Breeze",
    type: "Motor Yacht",
    category: "motor",
    length: "75'",
    cabins: 4,
    guests: 8,
    crew: "Captain + Chef + Deckhand",
    price: "$28,000",
    priceUnit: "per week",
    location: "US Virgin Islands",
    image: "https://images.northropandjohnson.com/yacht/48efItZiNi/0C04F7AD-6790-ED11-AAD1-000D3A32EB3D/1755516839-1.jpg?auto=format&q=65&h=1&ar=16%3A9&fit=crop",
    description: "Stunning motor yacht offering speed and luxury for island hopping in ultimate comfort.",
    features: ["Jet skis included", "Full bar setup", "Entertainment system", "Jacuzzi on deck"]
  },
  {
    id: 3,
    name: "Trade Winds",
    type: "Classic Sailboat",
    category: "sailing",
    length: "65'",
    cabins: 3,
    guests: 6,
    crew: "Captain + Chef",
    price: "$14,500",
    priceUnit: "per week",
    location: "British Virgin Islands",
    image: "https://oysteryachts.com/assets/Uploads/Oyster-805-80-foot-yacht-Hero-D__FillMaxWzE5MjAsODEwXQ.png",
    description: "Traditional sailing experience with modern comforts and excellent sailing performance.",
    features: ["Authentic sailing", "Snorkeling gear", "Paddleboards", "Fishing equipment"]
  },
  {
    id: 4,
    name: "Azure Escape",
    type: "Power Catamaran",
    category: "power-catamaran",
    length: "55'",
    cabins: 4,
    guests: 8,
    crew: "Captain + Chef",
    price: "$22,000",
    priceUnit: "per week",
    location: "British Virgin Islands",
    image: "https://bali-catamarans.hr/images/ownership/yacht-images/bali-48-open-space/bali-48-open-space-main.jpg",
    description: "Modern power catamaran combining stability, speed, and spacious entertaining areas.",
    features: ["Flybridge lounge", "Beach club", "Underwater lights", "Premium water toys"]
  },
  {
    id: 5,
    name: "Serenity Now",
    type: "Sailing Catamaran",
    category: "catamaran",
    length: "50'",
    cabins: 4,
    guests: 8,
    crew: "Captain + Chef",
    price: "$15,500",
    priceUnit: "per week",
    location: "British Virgin Islands",
    image: "https://bali-catamarans.hr/images/ownership/yacht-images/bali-43-loft/bali-43-loft-1.jpg",
    description: "Perfect blend of sailing performance and comfort for memorable Caribbean adventures.",
    features: ["Spacious cockpit", "Full galley", "Water maker", "Solar panels"]
  },
  {
    id: 6,
    name: "Ocean Pearl",
    type: "Motor Yacht",
    category: "motor",
    length: "85'",
    cabins: 5,
    guests: 10,
    crew: "Captain + Chef + 2 Deckhands",
    price: "$35,000",
    priceUnit: "per week",
    location: "US Virgin Islands",
    image: "https://moranyachts.imgix.net/wp-content/uploads/why-choose-us-yacht-broker-moran-yachts-1.jpg?auto=format&fit=crop&fm=webp&h=700&ixlib=php-3.1.0&w=1800&s=78ef896f187bdcd43836c3b371d41e10",
    description: "Flagship luxury motor yacht with 5-star service and premium amenities throughout.",
    features: ["Master suite", "Sky lounge", "Professional crew", "Full water sports"]
  }
];

const categories = [
  { id: "all", name: "All Yachts", icon: Ship },
  { id: "catamaran", name: "Catamarans", icon: Sailboat },
  { id: "motor", name: "Motor Yachts", icon: Anchor },
  { id: "sailing", name: "Sailing Yachts", icon: Sailboat },
  { id: "power-catamaran", name: "Power Catamarans", icon: Waves }
];

export default function CharterPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateIn: "",
    dateOut: "",
    guests: "",
    message: ""
  });

  const filteredYachts = selectedCategory === "all"
    ? charterYachts
    : charterYachts.filter(yacht => yacht.category === selectedCategory);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-white shadow-sm backdrop-blur">
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          <Link href="/">
            <Logo variant="light" />
          </Link>
          <nav className="hidden gap-8 md:flex">
            <Link href="/brokerage" className="text-sm font-medium uppercase tracking-wide text-muted-foreground transition-colors hover:text-secondary">Brokerage</Link>
            <Link href="/bali" className="text-sm font-medium uppercase tracking-wide text-muted-foreground transition-colors hover:text-secondary">New Bali</Link>
            <Link href="/charter" className="text-sm font-medium uppercase tracking-wide text-secondary">Yacht Charters</Link>
            <Link href="/training" className="text-sm font-medium uppercase tracking-wide text-muted-foreground transition-colors hover:text-secondary">Training</Link>
            <Link href="/charter-ownership" className="text-sm font-medium uppercase tracking-wide text-muted-foreground transition-colors hover:text-secondary">Charter Ownership</Link>
            <Link href="/#contact" className="text-sm font-medium uppercase tracking-wide text-muted-foreground transition-colors hover:text-secondary">Contact</Link>
          </nav>
          <MobileNav currentPage="Yacht Charters" variant="light" />
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
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://sunreef-charter.com/wp-content/uploads/2023/04/hero_0009_viva-la-vida.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/95" />
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center text-white">
          <div className="mb-6 inline-block rounded-full bg-secondary/20 px-6 py-2 backdrop-blur-sm">
            <span className="text-sm font-bold uppercase tracking-wide text-secondary">Leading Exclusively-Crewed Charter Specialists</span>
          </div>
          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Luxury Crewed Yacht Charters
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed md:text-2xl">
            Experience unforgettable, bespoke Caribbean sailing vacations with professional crew, gourmet cuisine, and personal service beyond compare
          </p>

          {/* Quick Search */}
          <Card className="mx-auto max-w-4xl border-2 border-white/20 bg-white/95 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="grid gap-4 md:grid-cols-4">
                <div className="text-left">
                  <label className="mb-2 block text-sm font-medium text-primary">Where to charter</label>
                  <select className="flex h-11 w-full rounded-sm border border-input bg-background px-4 py-2 text-sm">
                    <option>British Virgin Islands</option>
                    <option>US Virgin Islands</option>
                    <option>Both BVI & USVI</option>
                  </select>
                </div>
                <div className="text-left">
                  <label className="mb-2 block text-sm font-medium text-primary">When</label>
                  <Input type="date" />
                </div>
                <div className="text-left">
                  <label className="mb-2 block text-sm font-medium text-primary">Yacht type</label>
                  <select className="flex h-11 w-full rounded-sm border border-input bg-background px-4 py-2 text-sm">
                    <option>All Types</option>
                    <option>Catamaran</option>
                    <option>Motor Yacht</option>
                    <option>Sailing Yacht</option>
                  </select>
                </div>
                <div className="text-left">
                  <label className="mb-2 block text-sm font-medium text-primary">Guests</label>
                  <Input type="number" placeholder="How many" min="1" max="12" />
                </div>
              </div>
              <div className="mt-4">
                <Button variant="gold" size="lg" className="w-full md:w-auto">
                  Search Yachts
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-8 text-4xl font-bold text-primary md:text-5xl">
              What Type of Luxury Charter Are You Looking For?
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                The Caribbean is indeed one of the most beautiful places on earth. With its mesmerizing aura and sights to behold, more and more people are planning to go on Caribbean sailing vacations. The British Virgin Islands is renowned for its sapphire-blue waters so stunning that their brilliant colors can be seen from miles away.
              </p>
              <p>
                For people who live busy and stressful lives, luxury sailing vacations are one of the most effective ways of relaxation. This is because everything will be provided on a silver platter once they have decided to go on a luxurious sailing break.
              </p>
              <p>
                Many of the yachts combine their cruising areas during seasons. So do not hesitate to ask if one of your favorite yachts can meet you at a destination of your preference. Just ask!
              </p>
              <p className="font-semibold text-primary">
                We are here to hold your hand and walk you through searching for the best yacht that checks all boxes and the crew that will care for you and your family and friends!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-y border-gray-200 bg-gradient-to-br from-secondary/5 via-white to-primary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-center text-4xl font-bold text-primary md:text-5xl">
              How Your Charter Works
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="border-2 border-primary/10">
                <CardContent className="p-8 text-center">
                  <div className="mb-4 text-4xl font-bold text-secondary">1</div>
                  <h3 className="mb-4 text-xl font-bold text-primary">Inquiry & Selection</h3>
                  <p className="leading-relaxed text-muted-foreground">
                    Contact us with your dates, group size, and preferences. We'll recommend yachts that perfectly match your needs and budget.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary/10">
                <CardContent className="p-8 text-center">
                  <div className="mb-4 text-4xl font-bold text-secondary">2</div>
                  <h3 className="mb-4 text-xl font-bold text-primary">Booking & Planning</h3>
                  <p className="leading-relaxed text-muted-foreground">
                    Reserve your yacht with a deposit. Work with your crew to plan the perfect itinerary, activities, and gourmet menus.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary/10">
                <CardContent className="p-8 text-center">
                  <div className="mb-4 text-4xl font-bold text-secondary">3</div>
                  <h3 className="mb-4 text-xl font-bold text-primary">Embark & Enjoy</h3>
                  <p className="leading-relaxed text-muted-foreground">
                    Step aboard your luxury yacht and let your professional crew handle everything while you relax in paradise.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="border-y border-gray-200 bg-muted py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 rounded-sm px-6 py-3 font-semibold uppercase tracking-wide transition-all ${
                    selectedCategory === category.id
                      ? 'bg-secondary text-white shadow-lg'
                      : 'bg-white text-primary hover:bg-primary/5'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Yacht Listings */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary">
              {selectedCategory === "all" ? "All Available Yachts" : `${categories.find(c => c.id === selectedCategory)?.name}`}
            </h2>
            <p className="text-muted-foreground">
              {filteredYachts.length} yacht{filteredYachts.length !== 1 ? 's' : ''} available
            </p>
          </div>

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
                    {yacht.type}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-2xl font-bold text-primary">{yacht.name}</h3>
                  <p className="mb-4 text-muted-foreground">{yacht.location}</p>

                  <div className="mb-4 grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2">
                      <Sailboat className="h-4 w-4 text-secondary" />
                      <span className="text-muted-foreground">{yacht.length}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-secondary" />
                      <span className="text-muted-foreground">{yacht.guests} Guests</span>
                    </div>
                    <div className="col-span-2 flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-secondary" />
                      <span className="text-muted-foreground">{yacht.crew}</span>
                    </div>
                  </div>

                  <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
                    {yacht.description}
                  </p>

                  <div className="mb-4 border-t border-gray-200 pt-4">
                    <p className="text-sm text-muted-foreground">From</p>
                    <p className="text-3xl font-bold text-secondary">{yacht.price}</p>
                    <p className="text-sm text-muted-foreground">{yacht.priceUnit}</p>
                  </div>

                  <Button variant="outline" className="w-full">
                    View Details & Enquire
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Crewed Charter */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-center text-4xl font-bold text-primary md:text-5xl">
              Why Choose a Crewed Charter?
            </h2>

            <div className="grid gap-8 md:grid-cols-2">
              <Card className="border-2 border-primary/10">
                <CardContent className="p-8">
                  <div className="mb-4 flex justify-center">
                    <div className="rounded-full bg-secondary/10 p-6">
                      <Users className="h-12 w-12 text-secondary" />
                    </div>
                  </div>
                  <h3 className="mb-4 text-center text-xl font-bold text-primary">Professional Crew</h3>
                  <p className="text-center leading-relaxed text-muted-foreground">
                    Your experienced captain knows the best anchorages, hidden beaches, and local secrets. Your chef prepares gourmet meals tailored to your preferences.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/10">
                <CardContent className="p-8">
                  <div className="mb-4 flex justify-center">
                    <div className="rounded-full bg-secondary/10 p-6">
                      <Anchor className="h-12 w-12 text-secondary" />
                    </div>
                  </div>
                  <h3 className="mb-4 text-center text-xl font-bold text-primary">Stress-Free Experience</h3>
                  <p className="text-center leading-relaxed text-muted-foreground">
                    No sailing experience required. Relax and enjoy while your crew handles navigation, docking, provisioning, and all yacht operations.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/10">
                <CardContent className="p-8">
                  <div className="mb-4 flex justify-center">
                    <div className="rounded-full bg-secondary/10 p-6">
                      <Ship className="h-12 w-12 text-secondary" />
                    </div>
                  </div>
                  <h3 className="mb-4 text-center text-xl font-bold text-primary">Customized Itinerary</h3>
                  <p className="text-center leading-relaxed text-muted-foreground">
                    Your charter, your way. Whether you want adventure, relaxation, or both, your crew creates the perfect itinerary for your group.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/10">
                <CardContent className="p-8">
                  <div className="mb-4 flex justify-center">
                    <div className="rounded-full bg-secondary/10 p-6">
                      <Waves className="h-12 w-12 text-secondary" />
                    </div>
                  </div>
                  <h3 className="mb-4 text-center text-xl font-bold text-primary">All-Inclusive Luxury</h3>
                  <p className="text-center leading-relaxed text-muted-foreground">
                    Most charters include meals, beverages, water sports equipment, and more. Just bring yourself and enjoy paradise.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 text-center text-4xl font-bold text-primary md:text-5xl">
              Our Charter Services
            </h2>

            <div className="mb-20">
              <h3 className="mb-8 text-center text-3xl font-bold text-primary">For Charter Guests</h3>
              <div className="grid gap-6 md:grid-cols-3">
                <Card className="border-2 border-secondary/20">
                  <CardContent className="p-6">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="rounded-full bg-secondary/10 p-2">
                        <Ship className="h-6 w-6 text-secondary" />
                      </div>
                      <h4 className="font-bold text-primary">Yacht Selection</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Expert guidance finding the perfect yacht for your group size, preferences, and budget
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-2 border-secondary/20">
                  <CardContent className="p-6">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="rounded-full bg-secondary/10 p-2">
                        <Calendar className="h-6 w-6 text-secondary" />
                      </div>
                      <h4 className="font-bold text-primary">Custom Itineraries</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Personalized sailing routes, activity planning, and destination recommendations
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-2 border-secondary/20">
                  <CardContent className="p-6">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="rounded-full bg-secondary/10 p-2">
                        <Users className="h-6 w-6 text-secondary" />
                      </div>
                      <h4 className="font-bold text-primary">Concierge Service</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      On-board chef, water sports, excursions, and VIP arrangements throughout your charter
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="mb-8 text-center text-3xl font-bold text-primary">For Yacht Owners</h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Card className="border-2 border-primary/20">
                  <CardContent className="p-6">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="rounded-full bg-primary/10 p-2">
                        <TrendingUp className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="font-bold text-primary">Marketing</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Global exposure, professional photography, and targeted promotion of your yacht
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-2 border-primary/20">
                  <CardContent className="p-6">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="rounded-full bg-primary/10 p-2">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="font-bold text-primary">Crew Management</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Vetting, placement, payroll, and ongoing support for professional crews
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-2 border-primary/20">
                  <CardContent className="p-6">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="rounded-full bg-primary/10 p-2">
                        <CheckCircle2 className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="font-bold text-primary">Operations</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Booking coordination, maintenance scheduling, and compliance oversight
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-2 border-primary/20">
                  <CardContent className="p-6">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="rounded-full bg-primary/10 p-2">
                        <DollarSign className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="font-bold text-primary">Financial</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Transparent reporting, accounting, and revenue optimization strategies
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-4xl font-bold text-primary md:text-5xl">
            What Our Clients Say
          </h2>
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="border-2 border-primary/10">
                <CardContent className="p-8">
                  <div className="mb-4 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-secondary">★</span>
                    ))}
                  </div>
                  <p className="mb-6 italic leading-relaxed text-muted-foreground">
                    "The best vacation we've ever had! The crew was incredible, the yacht was pristine, and VIYB made the entire booking process effortless."
                  </p>
                  <div>
                    <p className="font-bold text-primary">David & Lisa Martinez</p>
                    <p className="text-sm text-muted-foreground">Catamaran Charter, February 2024</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/10">
                <CardContent className="p-8">
                  <div className="mb-4 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-secondary">★</span>
                    ))}
                  </div>
                  <p className="mb-6 italic leading-relaxed text-muted-foreground">
                    "VIYB's charter management program has exceeded our expectations. Professional service and excellent charter revenue!"
                  </p>
                  <div>
                    <p className="font-bold text-primary">Captain James Thompson</p>
                    <p className="text-sm text-muted-foreground">Yacht Owner, BVI</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/10">
                <CardContent className="p-8">
                  <div className="mb-4 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-secondary">★</span>
                    ))}
                  </div>
                  <p className="mb-6 italic leading-relaxed text-muted-foreground">
                    "The captain knew all the secret spots and the chef's meals were restaurant-quality. Can't wait to book again!"
                  </p>
                  <div>
                    <p className="font-bold text-primary">Emily & Robert Chen</p>
                    <p className="text-sm text-muted-foreground">Motor Yacht Charter, June 2024</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 grid gap-6 text-center md:grid-cols-3">
              <div>
                <p className="mb-2 text-5xl font-bold text-secondary">15+</p>
                <p className="text-lg font-medium text-primary">Years in Business</p>
              </div>
              <div>
                <p className="mb-2 text-5xl font-bold text-secondary">500+</p>
                <p className="text-lg font-medium text-primary">Successful Charters</p>
              </div>
              <div>
                <p className="mb-2 text-5xl font-bold text-secondary">92%</p>
                <p className="text-lg font-medium text-primary">Repeat Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destination & Experience Highlights */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 text-center text-4xl font-bold text-primary md:text-5xl">
              Explore the Virgin Islands
            </h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="group overflow-hidden border-2 border-primary/10 transition-all hover:shadow-2xl">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop"
                    alt="The Baths, Virgin Gorda"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="mb-3 text-xl font-bold text-primary">The Baths</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Explore stunning granite boulder formations and hidden tidal pools on Virgin Gorda's famous beach
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary">Snorkeling</span>
                    <span className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary">Swimming</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="group overflow-hidden border-2 border-primary/10 transition-all hover:shadow-2xl">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?w=800&h=600&fit=crop"
                    alt="Jost Van Dyke"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="mb-3 text-xl font-bold text-primary">Jost Van Dyke</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Visit the legendary Soggy Dollar Bar and enjoy pristine beaches and laid-back island vibes
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary">Beach Bars</span>
                    <span className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary">Dining</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="group overflow-hidden border-2 border-primary/10 transition-all hover:shadow-2xl">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop"
                    alt="Anegada Reef"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="mb-3 text-xl font-bold text-primary">Anegada</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Discover untouched beaches, world-class bonefishing, and fresh Caribbean lobster on this coral island
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary">Fishing</span>
                    <span className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary">Lobster</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <Button variant="outline" size="lg">
                View Full Destination Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold text-primary md:text-5xl">
                Reservation Enquiry
              </h2>
              <p className="text-lg text-muted-foreground">
                Not sure what boat or type of charter you are looking for? Drop us a line with your highlights and we'll send you a proposal.
              </p>
            </div>

            <Card className="border-2 border-primary/10">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-primary">First Name *</label>
                      <Input
                        placeholder="John"
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-primary">Last Name *</label>
                      <Input
                        placeholder="Smith"
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-primary">Email *</label>
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-primary">Phone Number *</label>
                      <Input
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-primary">Date of Visit *</label>
                      <Input
                        type="date"
                        value={formData.dateIn}
                        onChange={(e) => setFormData({...formData, dateIn: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-primary">Date Out *</label>
                      <Input
                        type="date"
                        value={formData.dateOut}
                        onChange={(e) => setFormData({...formData, dateOut: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-primary">Number of Guests *</label>
                    <Input
                      type="number"
                      placeholder="2"
                      min="1"
                      max="12"
                      value={formData.guests}
                      onChange={(e) => setFormData({...formData, guests: e.target.value})}
                      required
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-primary">Tell Us About Your Group, Destination, Preferences *</label>
                    <textarea
                      className="flex min-h-[150px] w-full rounded-sm border border-input bg-background px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      placeholder="Tell us about your ideal charter vacation..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                    />
                  </div>

                  <div className="text-center">
                    <Button variant="gold" size="lg" className="w-full sm:w-auto">
                      <Calendar className="mr-2 h-5 w-5" />
                      Submit Enquiry
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            <div className="mt-8 text-center">
              <p className="mb-2 text-sm text-muted-foreground">
                Or contact us directly:
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <a href="tel:+17862460809" className="flex items-center gap-2 font-medium text-primary hover:text-secondary">
                  <Phone className="h-4 w-4" />
                  +1 786 246 0809
                </a>
                <a href="mailto:charter@virginislandsyachtbroker.com" className="flex items-center gap-2 font-medium text-primary hover:text-secondary">
                  <Mail className="h-4 w-4" />
                  charter@virginislandsyachtbroker.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Charter Guides & Newsletter */}
      <section className="bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold text-primary md:text-5xl">
                Charter Planning Resources
              </h2>
              <p className="text-lg text-muted-foreground">
                Expert guides and insider tips for planning the perfect Caribbean yacht charter
              </p>
            </div>

            <div className="mb-12 grid gap-6 md:grid-cols-3">
              <Card className="border-2 border-secondary/20 transition-all hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="mb-4 rounded-full bg-secondary/10 p-3 w-12">
                    <Ship className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-primary">First-Time Charter Guide</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Everything you need to know about booking your first crewed yacht charter in the Virgin Islands
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Read Guide
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-secondary/20 transition-all hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="mb-4 rounded-full bg-secondary/10 p-3 w-12">
                    <Calendar className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-primary">Best Time to Charter</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Seasonal insights, weather patterns, and insider tips on when to visit the Caribbean
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    View Calendar
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-secondary/20 transition-all hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="mb-4 rounded-full bg-secondary/10 p-3 w-12">
                    <Waves className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-primary">Charter Cost Breakdown</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Understand pricing, what's included, and how to budget for your perfect charter vacation
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Newsletter Signup */}
            <Card className="border-2 border-secondary">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="rounded-full bg-secondary/10 p-4">
                      <Mail className="h-8 w-8 text-secondary" />
                    </div>
                  </div>
                  <h3 className="mb-3 text-2xl font-bold text-primary">Get Charter Tips & Special Offers</h3>
                  <p className="mb-6 text-muted-foreground">
                    Join our newsletter for insider destination guides, exclusive yacht deals, and seasonal charter tips
                  </p>
                  <div className="mx-auto flex max-w-md gap-2">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      className="flex-1"
                    />
                    <Button variant="gold">Subscribe</Button>
                  </div>
                  <p className="mt-3 text-xs text-muted-foreground">
                    We respect your privacy. Unsubscribe anytime.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            Ready to Start Planning Your Dream Charter?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
            Our charter specialists are here to help you find the perfect yacht and create an unforgettable vacation experience
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="secondary" size="lg">
              Request a Proposal
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link href="/try-before-buy">Try Before You Buy</Link>
            </Button>
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
                <li><Link href="/charter" className="transition-colors hover:text-secondary">Yacht Charters</Link></li>
                <li><Link href="/" className="transition-colors hover:text-secondary">Home</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-bold uppercase tracking-wide">Services</h3>
              <ul className="space-y-2 text-white/80">
                <li><Link href="/brokerage" className="transition-colors hover:text-secondary">Yacht Brokerage</Link></li>
                <li><Link href="/bali" className="transition-colors hover:text-secondary">New Yacht Sales</Link></li>
                <li><Link href="/charter" className="transition-colors hover:text-secondary">Crewed Charters</Link></li>
                <li><Link href="/#charter" className="transition-colors hover:text-secondary">Charter Management</Link></li>
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
