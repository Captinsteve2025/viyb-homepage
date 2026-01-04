"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Bed, Check, Gauge, Mail, MapPin, Phone, Ruler, Users, Waves, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import MobileNav from "@/components/MobileNav";
import Logo from "@/components/Logo";

const baliModelsData = [
  {
    id: "5-8",
    name: "Bali 5.8",
    price: "$1,595,000",
    image: "/bali/bali-5-8.jpg",
    specs: {
      length: "58'0\"",
      beam: "32'2\"",
      draft: "5'3\"",
      displacement: "61,729 lbs",
      cabins: "6-8",
      berths: "14-16",
      heads: "6-8",
      water: "396 gal",
      fuel: "264 gal",
      engine: "2 x 110 HP"
    },
    features: ["Unmatched living space", "Master suite with terrace", "Professional chef's galley", "Smart home systems", "Custom furniture options"]
  },
  {
    id: "5-2",
    name: "Bali 5.2",
    price: "$1,055,000",
    image: "/bali/bali-5-2.jpg",
    specs: {
      length: "52'0\"",
      beam: "28'6\"",
      draft: "4'9\"",
      displacement: "44,092 lbs",
      cabins: "3-6",
      berths: "8-16",
      heads: "3-6",
      water: "290 gal",
      fuel: "198 gal",
      engine: "2 x 80 HP"
    },
    features: ["Unmatched modularity", "Up to 16 berths", "U-shaped galley", "Innovative layouts", "Premium finishes"]
  },
  {
    id: "4-6",
    name: "Bali 4.6",
    price: "$695,000",
    image: "/bali/bali-4-6.jpg",
    specs: {
      length: "46'0\"",
      beam: "25'3\"",
      draft: "4'3\"",
      displacement: "28,660 lbs",
      cabins: "4-6",
      berths: "10-14",
      heads: "4-6",
      water: "238 gal",
      fuel: "159 gal",
      engine: "2 x 50 HP"
    },
    features: ["Exceptional interior volume", "Electric tilting platform", "Premium audio system", "Washer/dryer option", "Air conditioning throughout"]
  },
  {
    id: "4-4",
    name: "Bali 4.4",
    price: "$625,000",
    image: "/bali/bali-4-4.jpg",
    specs: {
      length: "44'3\"",
      beam: "24'3\"",
      draft: "4'3\"",
      displacement: "24,251 lbs",
      cabins: "4-5",
      berths: "10-12",
      heads: "4",
      water: "211 gal",
      fuel: "132 gal",
      engine: "2 x 40 HP"
    },
    features: ["Award-winning design", "Rigid forward cockpit", "Panoramic windows", "Multiple layout options", "Premium finish quality"]
  },
  {
    id: "4-2",
    name: "Bali 4.2",
    price: "$490,000",
    image: "/bali/bali-4-2.jpg",
    specs: {
      length: "42'8\"",
      beam: "23'7\"",
      draft: "3'11\"",
      displacement: "22,046 lbs",
      cabins: "4",
      berths: "8-10",
      heads: "2-4",
      water: "185 gal",
      fuel: "106 gal",
      engine: "2 x 30 HP"
    },
    features: ["Tilting saloon door", "Rigid forward cockpit", "Large flybridge", "Electric windlass", "Bow thruster included"]
  },
  {
    id: "catspace",
    name: "Bali Catspace",
    price: "$405,000",
    image: "/bali/bali-catspace.jpg",
    specs: {
      length: "40'0\"",
      beam: "22'4\"",
      draft: "4'3\"",
      displacement: "18,739 lbs",
      cabins: "4-6",
      berths: "8-12",
      heads: "4",
      water: "211 gal",
      fuel: "132 gal",
      engine: "2 x 30 HP"
    },
    features: ["Tilting aft platform", "Rigid forward cockpit", "Full-height windows", "Retractable saloon windows", "Premium teak decking"]
  },
  {
    id: "catsmart",
    name: "Bali Catsmart",
    price: "$365,000",
    image: "/bali/bali-catsmart.jpg",
    specs: {
      length: "39'0\"",
      beam: "21'2\"",
      draft: "3'11\"",
      displacement: "16,535 lbs",
      cabins: "4",
      berths: "8",
      heads: "2",
      water: "158 gal",
      fuel: "79 gal",
      engine: "2 x 20 HP"
    },
    features: ["Open Space concept", "Compact yet spacious", "Signature Bali DNA", "Easy handling", "Perfect entry model"]
  }
];

export default function ComparePage() {
  const [selectedModels, setSelectedModels] = useState<string[]>([]);

  const handleModelSelect = (modelId: string) => {
    if (selectedModels.includes(modelId)) {
      setSelectedModels(selectedModels.filter(id => id !== modelId));
    } else if (selectedModels.length < 3) {
      setSelectedModels([...selectedModels, modelId]);
    }
  };

  const selectedModelData = selectedModels.map(id =>
    baliModelsData.find(model => model.id === id)
  ).filter(Boolean);

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
            <Link href="/bali" className="text-sm font-medium uppercase tracking-wide text-secondary">New Bali</Link>
            <Link href="/charter" className="text-sm font-medium uppercase tracking-wide text-muted-foreground transition-colors hover:text-secondary">Yacht Charters</Link>
            <Link href="/training" className="text-sm font-medium uppercase tracking-wide text-muted-foreground transition-colors hover:text-secondary">Training</Link>
            <Link href="/charter-ownership" className="text-sm font-medium uppercase tracking-wide text-muted-foreground transition-colors hover:text-secondary">Charter Ownership</Link>
            <Link href="/#contact" className="text-sm font-medium uppercase tracking-wide text-muted-foreground transition-colors hover:text-secondary">Contact</Link>
          </nav>
          <MobileNav currentPage="Compare Bali Models" variant="light" />
        </div>
      </header>

      {/* Back Button */}
      <div className="border-b border-gray-100 bg-white">
        <div className="container mx-auto px-4 py-4">
          <Link href="/bali" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            <ArrowLeft className="h-4 w-4" />
            Back to Bali Range
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-muted py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-5xl font-bold text-primary md:text-6xl">Compare Bali Models</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Select up to 3 models to compare specifications, features, and pricing side by side
          </p>
        </div>
      </section>

      {/* Model Selection */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-2xl font-bold text-primary">Select Models to Compare</h2>
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
            {baliModelsData.map((model) => (
              <Card
                key={model.id}
                className={`cursor-pointer transition-all ${
                  selectedModels.includes(model.id)
                    ? 'border-2 border-secondary shadow-lg'
                    : 'border-2 border-transparent hover:border-primary/20'
                }`}
                onClick={() => handleModelSelect(model.id)}
              >
                <CardContent className="p-4">
                  <div className="relative mb-3 h-32 overflow-hidden rounded">
                    <img
                      src={model.image}
                      alt={model.name}
                      className="h-full w-full object-cover"
                    />
                    {selectedModels.includes(model.id) && (
                      <div className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-secondary">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                    )}
                  </div>
                  <h3 className="mb-1 font-bold text-primary">{model.name}</h3>
                  <p className="text-sm font-semibold text-secondary">{model.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {selectedModels.length > 0 && (
            <div className="mt-6 flex items-center justify-between rounded-lg bg-muted p-4">
              <span className="text-sm font-medium text-primary">
                {selectedModels.length} model{selectedModels.length > 1 ? 's' : ''} selected
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSelectedModels([])}
              >
                Clear Selection
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Comparison Table */}
      {selectedModelData.length > 0 && (
        <section className="bg-white py-12">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-2xl font-bold text-primary">Comparison</h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="p-4 text-left text-sm font-bold text-primary">Specification</th>
                    {selectedModelData.map((model) => (
                      <th key={model!.id} className="p-4 text-center">
                        <div className="mb-2 h-32 overflow-hidden rounded">
                          <img
                            src={model!.image}
                            alt={model!.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <p className="mb-1 font-bold text-primary">{model!.name}</p>
                        <p className="text-sm font-semibold text-secondary">{model!.price}</p>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="mt-2"
                          onClick={() => handleModelSelect(model!.id)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {/* Dimensions */}
                  <tr className="border-b border-gray-100 bg-muted/50">
                    <td colSpan={selectedModelData.length + 1} className="p-3 text-sm font-bold uppercase tracking-wide text-primary">
                      Dimensions
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Ruler className="h-4 w-4 text-secondary" />
                        Length Overall
                      </div>
                    </td>
                    {selectedModelData.map((model) => (
                      <td key={model!.id} className="p-4 text-center font-semibold text-primary">
                        {model!.specs.length}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Waves className="h-4 w-4 text-secondary" />
                        Beam
                      </div>
                    </td>
                    {selectedModelData.map((model) => (
                      <td key={model!.id} className="p-4 text-center font-semibold text-primary">
                        {model!.specs.beam}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Gauge className="h-4 w-4 text-secondary" />
                        Draft
                      </div>
                    </td>
                    {selectedModelData.map((model) => (
                      <td key={model!.id} className="p-4 text-center font-semibold text-primary">
                        {model!.specs.draft}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 text-sm text-muted-foreground">Displacement</td>
                    {selectedModelData.map((model) => (
                      <td key={model!.id} className="p-4 text-center font-semibold text-primary">
                        {model!.specs.displacement}
                      </td>
                    ))}
                  </tr>

                  {/* Accommodations */}
                  <tr className="border-b border-gray-100 bg-muted/50">
                    <td colSpan={selectedModelData.length + 1} className="p-3 text-sm font-bold uppercase tracking-wide text-primary">
                      Accommodations
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Bed className="h-4 w-4 text-secondary" />
                        Cabins
                      </div>
                    </td>
                    {selectedModelData.map((model) => (
                      <td key={model!.id} className="p-4 text-center font-semibold text-primary">
                        {model!.specs.cabins}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-secondary" />
                        Berths
                      </div>
                    </td>
                    {selectedModelData.map((model) => (
                      <td key={model!.id} className="p-4 text-center font-semibold text-primary">
                        {model!.specs.berths}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 text-sm text-muted-foreground">Heads</td>
                    {selectedModelData.map((model) => (
                      <td key={model!.id} className="p-4 text-center font-semibold text-primary">
                        {model!.specs.heads}
                      </td>
                    ))}
                  </tr>

                  {/* Capacities */}
                  <tr className="border-b border-gray-100 bg-muted/50">
                    <td colSpan={selectedModelData.length + 1} className="p-3 text-sm font-bold uppercase tracking-wide text-primary">
                      Capacities & Power
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 text-sm text-muted-foreground">Water Capacity</td>
                    {selectedModelData.map((model) => (
                      <td key={model!.id} className="p-4 text-center font-semibold text-primary">
                        {model!.specs.water}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 text-sm text-muted-foreground">Fuel Capacity</td>
                    {selectedModelData.map((model) => (
                      <td key={model!.id} className="p-4 text-center font-semibold text-primary">
                        {model!.specs.fuel}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 text-sm text-muted-foreground">Engine</td>
                    {selectedModelData.map((model) => (
                      <td key={model!.id} className="p-4 text-center font-semibold text-primary">
                        {model!.specs.engine}
                      </td>
                    ))}
                  </tr>

                  {/* Key Features */}
                  <tr className="border-b border-gray-100 bg-muted/50">
                    <td colSpan={selectedModelData.length + 1} className="p-3 text-sm font-bold uppercase tracking-wide text-primary">
                      Key Features
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm text-muted-foreground">Notable Features</td>
                    {selectedModelData.map((model) => (
                      <td key={model!.id} className="p-4">
                        <ul className="space-y-2 text-left text-sm">
                          {model!.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                              <span className="text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {selectedModelData.map((model) => (
                <Link key={model!.id} href={`/bali/${model!.id}`}>
                  <Button variant="outline">View {model!.name} Details</Button>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-gradient-to-br from-primary to-primary/90 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-4xl font-bold">Need Help Choosing?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
            Our Bali specialists can help you select the perfect catamaran for your needs and budget
          </p>
          <Button variant="secondary" size="lg">Schedule a Consultation</Button>
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
                <li><Link href="/#brokerage" className="transition-colors hover:text-secondary">Brokerage Yachts</Link></li>
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
