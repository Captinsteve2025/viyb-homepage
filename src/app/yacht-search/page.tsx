'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { mockYachts } from "@/lib/data/mock-yachts";
import { getTopResults, type SearchCriteria, type ScoredYacht } from "@/lib/ai-yacht-search";
import { Award, Check, ChevronRight, Search, Sparkles, X } from "lucide-react";
import Link from "next/link";
import Logo from "@/components/Logo";
import MobileNav from "@/components/MobileNav";

export default function YachtSearchPage() {
  const [criteria, setCriteria] = useState<SearchCriteria>({
    mustHaves: {
      soundHullAndDeck: true,
      reliableEngine: true,
      functionalSystems: true,
      adequateTankage: true,
      safeElectrical: true
    },
    highPriority: {
      watermaker: false,
      solarPower: false,
      goodSailInventory: false,
      navigationElectronics: false,
      refrigeration: false
    },
    niceToHave: {
      autopilot: false,
      dinghyDavits: false,
      inMastFurling: false,
      airConditioning: false,
      bowThruster: false
    },
    requirements: {}
  });

  const [results, setResults] = useState<ScoredYacht[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [searching, setSearching] = useState(false);

  const handleSearch = () => {
    setSearching(true);

    // Simulate AI processing delay
    setTimeout(() => {
      const topResults = getTopResults(mockYachts, criteria, 5);
      setResults(topResults);
      setShowResults(true);
      setSearching(false);

      // Scroll to results
      document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-muted via-white to-secondary/5">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-white shadow-sm backdrop-blur">
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          <Link href="/">
            <Logo variant="light" />
          </Link>
          <nav className="hidden gap-8 md:flex">
            <Link href="/brokerage" className="text-sm font-medium uppercase tracking-wide text-muted-foreground transition-colors hover:text-secondary">Brokerage</Link>
            <Link href="/bali" className="text-sm font-medium uppercase tracking-wide text-muted-foreground transition-colors hover:text-secondary">New Bali</Link>
            <Link href="/charter" className="text-sm font-medium uppercase tracking-wide text-muted-foreground transition-colors hover:text-secondary">Yacht Charters</Link>
            <Link href="/training" className="text-sm font-medium uppercase tracking-wide text-muted-foreground transition-colors hover:text-secondary">Training</Link>
            <Link href="/charter-ownership" className="text-sm font-medium uppercase tracking-wide text-muted-foreground transition-colors hover:text-secondary">Charter Ownership</Link>
            <Link href="/#contact" className="text-sm font-medium uppercase tracking-wide text-muted-foreground transition-colors hover:text-secondary">Contact</Link>
          </nav>
          <MobileNav currentPage="AI Yacht Search" variant="light" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary via-primary/95 to-primary py-20">
        <div className="container relative mx-auto px-4 text-center text-white">
          <div className="mb-4 flex items-center justify-center gap-2">
            <Sparkles className="h-8 w-8 text-secondary" />
            <span className="text-sm font-bold uppercase tracking-wide text-secondary">AI-Powered Search</span>
          </div>
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">
            Find Your Perfect Yacht
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/90 md:text-xl">
            Our AI analyzes hundreds of criteria to match you with yachts that truly meet your needs
          </p>
        </div>
      </section>

      {/* Search Form */}
      <section className="container mx-auto px-4 py-16">
        <Card className="border-2 border-primary/10 shadow-2xl">
          <CardContent className="p-8">
            <h2 className="mb-8 text-3xl font-bold text-primary">Search Criteria</h2>

            {/* Basic Filters */}
            <div className="mb-10">
              <h3 className="mb-4 text-xl font-bold text-primary">Basic Filters</h3>
              <div className="grid gap-6 md:grid-cols-3">
                <div>
                  <Label htmlFor="priceMin">Min Price ($)</Label>
                  <Input
                    id="priceMin"
                    type="number"
                    placeholder="e.g. 400000"
                    onChange={(e) => setCriteria({...criteria, priceMin: parseInt(e.target.value) || undefined})}
                  />
                </div>
                <div>
                  <Label htmlFor="priceMax">Max Price ($)</Label>
                  <Input
                    id="priceMax"
                    type="number"
                    placeholder="e.g. 1000000"
                    onChange={(e) => setCriteria({...criteria, priceMax: parseInt(e.target.value) || undefined})}
                  />
                </div>
                <div>
                  <Label htmlFor="yearMin">Min Year</Label>
                  <Input
                    id="yearMin"
                    type="number"
                    placeholder="e.g. 2015"
                    onChange={(e) => setCriteria({...criteria, yearMin: parseInt(e.target.value) || undefined})}
                  />
                </div>
                <div>
                  <Label htmlFor="lengthMin">Min Length (ft)</Label>
                  <Input
                    id="lengthMin"
                    type="number"
                    placeholder="e.g. 40"
                    onChange={(e) => setCriteria({...criteria, lengthMin: parseInt(e.target.value) || undefined})}
                  />
                </div>
                <div>
                  <Label htmlFor="lengthMax">Max Length (ft)</Label>
                  <Input
                    id="lengthMax"
                    type="number"
                    placeholder="e.g. 55"
                    onChange={(e) => setCriteria({...criteria, lengthMax: parseInt(e.target.value) || undefined})}
                  />
                </div>
              </div>
            </div>

            {/* Must-Haves */}
            <div className="mb-10">
              <h3 className="mb-2 text-xl font-bold text-primary">Must-Haves</h3>
              <p className="mb-4 text-sm text-muted-foreground">Essential requirements (heavily weighted)</p>
              <div className="space-y-3 rounded-lg bg-green-50 p-6">
                <div className="flex items-center space-x-3">
                  <Checkbox
                    id="soundHull"
                    checked={criteria.mustHaves.soundHullAndDeck}
                    onCheckedChange={(checked: boolean) => setCriteria({
                      ...criteria,
                      mustHaves: {...criteria.mustHaves, soundHullAndDeck: checked}
                    })}
                  />
                  <label htmlFor="soundHull" className="text-sm font-medium">
                    Sound hull and deck condition
                  </label>
                </div>
                <div className="flex items-center space-x-3">
                  <Checkbox
                    id="reliableEngine"
                    checked={criteria.mustHaves.reliableEngine}
                    onCheckedChange={(checked: boolean) => setCriteria({
                      ...criteria,
                      mustHaves: {...criteria.mustHaves, reliableEngine: checked as boolean}
                    })}
                  />
                  <label htmlFor="reliableEngine" className="text-sm font-medium">
                    Reliable engine with good hours
                  </label>
                </div>
                <div className="flex items-center space-x-3">
                  <Checkbox
                    id="functionalSystems"
                    checked={criteria.mustHaves.functionalSystems}
                    onCheckedChange={(checked: boolean) => setCriteria({
                      ...criteria,
                      mustHaves: {...criteria.mustHaves, functionalSystems: checked as boolean}
                    })}
                  />
                  <label htmlFor="functionalSystems" className="text-sm font-medium">
                    Functional water and power systems
                  </label>
                </div>
                <div className="flex items-center space-x-3">
                  <Checkbox
                    id="adequateTankage"
                    checked={criteria.mustHaves.adequateTankage}
                    onCheckedChange={(checked: boolean) => setCriteria({
                      ...criteria,
                      mustHaves: {...criteria.mustHaves, adequateTankage: checked as boolean}
                    })}
                  />
                  <label htmlFor="adequateTankage" className="text-sm font-medium">
                    Adequate tankage (water, fuel, holding)
                  </label>
                </div>
                <div className="flex items-center space-x-3">
                  <Checkbox
                    id="safeElectrical"
                    checked={criteria.mustHaves.safeElectrical}
                    onCheckedChange={(checked: boolean) => setCriteria({
                      ...criteria,
                      mustHaves: {...criteria.mustHaves, safeElectrical: checked as boolean}
                    })}
                  />
                  <label htmlFor="safeElectrical" className="text-sm font-medium">
                    Safe electrical system
                  </label>
                </div>
              </div>
            </div>

            {/* High Priority */}
            <div className="mb-10">
              <h3 className="mb-2 text-xl font-bold text-primary">High Priority</h3>
              <p className="mb-4 text-sm text-muted-foreground">Important features you want</p>
              <div className="space-y-3 rounded-lg bg-blue-50 p-6">
                <div className="flex items-center space-x-3">
                  <Checkbox
                    id="watermaker"
                    checked={criteria.highPriority.watermaker}
                    onCheckedChange={(checked: boolean) => setCriteria({
                      ...criteria,
                      highPriority: {...criteria.highPriority, watermaker: checked as boolean}
                    })}
                  />
                  <label htmlFor="watermaker" className="text-sm font-medium">
                    Watermaker (or capacity to add one)
                  </label>
                </div>
                <div className="flex items-center space-x-3">
                  <Checkbox
                    id="solarPower"
                    checked={criteria.highPriority.solarPower}
                    onCheckedChange={(checked: boolean) => setCriteria({
                      ...criteria,
                      highPriority: {...criteria.highPriority, solarPower: checked as boolean}
                    })}
                  />
                  <label htmlFor="solarPower" className="text-sm font-medium">
                    Solar/wind power generation
                  </label>
                </div>
                <div className="flex items-center space-x-3">
                  <Checkbox
                    id="sailInventory"
                    checked={criteria.highPriority.goodSailInventory}
                    onCheckedChange={(checked: boolean) => setCriteria({
                      ...criteria,
                      highPriority: {...criteria.highPriority, goodSailInventory: checked as boolean}
                    })}
                  />
                  <label htmlFor="sailInventory" className="text-sm font-medium">
                    Good sail inventory and rigging
                  </label>
                </div>
                <div className="flex items-center space-x-3">
                  <Checkbox
                    id="navElectronics"
                    checked={criteria.highPriority.navigationElectronics}
                    onCheckedChange={(checked: boolean) => setCriteria({
                      ...criteria,
                      highPriority: {...criteria.highPriority, navigationElectronics: checked as boolean}
                    })}
                  />
                  <label htmlFor="navElectronics" className="text-sm font-medium">
                    Navigation electronics
                  </label>
                </div>
                <div className="flex items-center space-x-3">
                  <Checkbox
                    id="refrigeration"
                    checked={criteria.highPriority.refrigeration}
                    onCheckedChange={(checked: boolean) => setCriteria({
                      ...criteria,
                      highPriority: {...criteria.highPriority, refrigeration: checked as boolean}
                    })}
                  />
                  <label htmlFor="refrigeration" className="text-sm font-medium">
                    Refrigeration/freezer
                  </label>
                </div>
              </div>
            </div>

            {/* Nice to Have */}
            <div className="mb-10">
              <h3 className="mb-2 text-xl font-bold text-primary">Nice to Have</h3>
              <p className="mb-4 text-sm text-muted-foreground">Bonus features</p>
              <div className="space-y-3 rounded-lg bg-secondary/10 p-6">
                <div className="flex items-center space-x-3">
                  <Checkbox
                    id="autopilot"
                    checked={criteria.niceToHave.autopilot}
                    onCheckedChange={(checked: boolean) => setCriteria({
                      ...criteria,
                      niceToHave: {...criteria.niceToHave, autopilot: checked as boolean}
                    })}
                  />
                  <label htmlFor="autopilot" className="text-sm font-medium">
                    Autopilot (highly recommended)
                  </label>
                </div>
                <div className="flex items-center space-x-3">
                  <Checkbox
                    id="dinghyDavits"
                    checked={criteria.niceToHave.dinghyDavits}
                    onCheckedChange={(checked: boolean) => setCriteria({
                      ...criteria,
                      niceToHave: {...criteria.niceToHave, dinghyDavits: checked as boolean}
                    })}
                  />
                  <label htmlFor="dinghyDavits" className="text-sm font-medium">
                    Dinghy davits
                  </label>
                </div>
                <div className="flex items-center space-x-3">
                  <Checkbox
                    id="inMastFurling"
                    checked={criteria.niceToHave.inMastFurling}
                    onCheckedChange={(checked: boolean) => setCriteria({
                      ...criteria,
                      niceToHave: {...criteria.niceToHave, inMastFurling: checked as boolean}
                    })}
                  />
                  <label htmlFor="inMastFurling" className="text-sm font-medium">
                    In-mast furling
                  </label>
                </div>
                <div className="flex items-center space-x-3">
                  <Checkbox
                    id="airConditioning"
                    checked={criteria.niceToHave.airConditioning}
                    onCheckedChange={(checked: boolean) => setCriteria({
                      ...criteria,
                      niceToHave: {...criteria.niceToHave, airConditioning: checked as boolean}
                    })}
                  />
                  <label htmlFor="airConditioning" className="text-sm font-medium">
                    Air conditioning
                  </label>
                </div>
                <div className="flex items-center space-x-3">
                  <Checkbox
                    id="bowThruster"
                    checked={criteria.niceToHave.bowThruster}
                    onCheckedChange={(checked: boolean) => setCriteria({
                      ...criteria,
                      niceToHave: {...criteria.niceToHave, bowThruster: checked as boolean}
                    })}
                  />
                  <label htmlFor="bowThruster" className="text-sm font-medium">
                    Bow thruster
                  </label>
                </div>
              </div>
            </div>

            {/* Specific Requirements */}
            <div className="mb-10">
              <h3 className="mb-2 text-xl font-bold text-primary">Specific Requirements</h3>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id="blueWater"
                      checked={criteria.requirements.blueWaterCapable === true}
                      onCheckedChange={(checked: boolean) => setCriteria({
                        ...criteria,
                        requirements: {...criteria.requirements, blueWaterCapable: checked ? true : undefined}
                      })}
                    />
                    <label htmlFor="blueWater" className="text-sm font-medium">
                      Blue water capable (offshore construction)
                    </label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id="cruisingReady"
                      checked={criteria.requirements.cruisingReady === true}
                      onCheckedChange={(checked: boolean) => setCriteria({
                        ...criteria,
                        requirements: {...criteria.requirements, cruisingReady: checked ? true : undefined}
                      })}
                    />
                    <label htmlFor="cruisingReady" className="text-sm font-medium">
                      Cruising ready (ready to go now)
                    </label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id="shallowDraft"
                      checked={criteria.requirements.shallowDraft === true}
                      onCheckedChange={(checked: boolean) => setCriteria({
                        ...criteria,
                        requirements: {...criteria.requirements, shallowDraft: checked ? true : undefined}
                      })}
                    />
                    <label htmlFor="shallowDraft" className="text-sm font-medium">
                      Shallow draft (for coastal/ICW cruising)
                    </label>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="minCabins">Minimum Cabins</Label>
                    <Input
                      id="minCabins"
                      type="number"
                      placeholder="e.g. 3"
                      onChange={(e) => setCriteria({
                        ...criteria,
                        requirements: {...criteria.requirements, minCabins: parseInt(e.target.value) || undefined}
                      })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="minHeads">Minimum Heads</Label>
                    <Input
                      id="minHeads"
                      type="number"
                      placeholder="e.g. 2"
                      onChange={(e) => setCriteria({
                        ...criteria,
                        requirements: {...criteria.requirements, minHeads: parseInt(e.target.value) || undefined}
                      })}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Search Button */}
            <div className="text-center">
              <Button
                variant="gold"
                size="lg"
                className="text-lg"
                onClick={handleSearch}
                disabled={searching}
              >
                {searching ? (
                  <>
                    <Sparkles className="mr-2 h-5 w-5 animate-spin" />
                    AI Analyzing Yachts...
                  </>
                ) : (
                  <>
                    <Search className="mr-2 h-5 w-5" />
                    Search with AI
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Results Section */}
      {showResults && (
        <section id="results" className="container mx-auto px-4 py-16">
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-4xl font-bold text-primary">
              Top {results.length} Matches
            </h2>
            <p className="text-lg text-muted-foreground">
              AI-ranked based on your criteria
            </p>
          </div>

          {results.length === 0 ? (
            <Card className="border-2 border-yellow-200 bg-yellow-50 p-12 text-center">
              <p className="text-xl text-muted-foreground">
                No yachts match all your criteria. Try adjusting your requirements.
              </p>
            </Card>
          ) : (
            <div className="space-y-8">
              {results.map((result, index) => (
                <Card key={result.yacht.id} className="overflow-hidden border-2 border-primary/10 shadow-xl transition-all hover:shadow-2xl">
                  <div className="grid md:grid-cols-5">
                    {/* Image */}
                    <div className="relative h-64 md:col-span-2 md:h-auto">
                      <img
                        src={result.yacht.images[0]}
                        alt={result.yacht.name}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute left-4 top-4 flex flex-col gap-2">
                        <div className="rounded-full bg-secondary px-4 py-2 text-sm font-bold text-white shadow-lg">
                          #{index + 1} Match
                        </div>
                        <div className="rounded-full bg-primary px-4 py-2 text-sm font-bold text-white shadow-lg">
                          Score: {result.totalScore}
                        </div>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="p-6 md:col-span-3">
                      <div className="mb-4">
                        <h3 className="mb-2 text-3xl font-bold text-primary">{result.yacht.name}</h3>
                        <p className="text-xl text-muted-foreground">
                          {result.yacht.year} {result.yacht.make} {result.yacht.model}
                        </p>
                        <p className="mt-2 text-3xl font-bold text-secondary">
                          ${result.yacht.price.toLocaleString()}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {result.yacht.length}' • {result.yacht.location}
                        </p>
                      </div>

                      <p className="mb-4 text-muted-foreground">{result.yacht.description}</p>

                      {/* Score Breakdown */}
                      <div className="mb-4 grid grid-cols-3 gap-4 rounded-lg bg-muted p-4">
                        <div className="text-center">
                          <p className="text-2xl font-bold text-green-600">{result.mustHaveScore}</p>
                          <p className="text-xs text-muted-foreground">Must-Haves</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-blue-600">{result.highPriorityScore}</p>
                          <p className="text-xs text-muted-foreground">High Priority</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-secondary">{result.niceToHaveScore}</p>
                          <p className="text-xs text-muted-foreground">Nice to Have</p>
                        </div>
                      </div>

                      {/* Match Details */}
                      <div className="mb-4">
                        <h4 className="mb-2 font-bold text-primary">Why This Yacht Matches:</h4>
                        <div className="grid gap-2 md:grid-cols-2">
                          {result.matchDetails.slice(0, 6).map((detail, i) => (
                            <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>
                        {result.matchDetails.length > 6 && (
                          <p className="mt-2 text-xs text-muted-foreground">
                            +{result.matchDetails.length - 6} more features
                          </p>
                        )}
                      </div>

                      {/* CTA */}
                      <div className="flex flex-wrap gap-3">
                        <Button variant="gold">
                          Request Details
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button variant="outline">Schedule Survey</Button>
                        <Button variant="outline">Contact Broker</Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}

          <div className="mt-12 text-center">
            <Card className="border-2 border-secondary/20 bg-secondary/5 p-8">
              <h3 className="mb-4 text-2xl font-bold text-primary">
                Want to see more options?
              </h3>
              <p className="mb-6 text-muted-foreground">
                Our brokers can provide access to hundreds of additional listings from YachtWorld, Boats.com, and private sellers
              </p>
              <Button variant="gold" size="lg">
                Speak with a Broker
              </Button>
            </Card>
          </div>
        </section>
      )}

      {/* Footer CTA */}
      <section className="bg-gradient-to-r from-primary to-primary/90 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">Ready to Find Your Perfect Yacht?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-white/90">
            This is a demo of our AI search capabilities. Contact VIYB for access to live inventory and personalized recommendations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="secondary" size="lg" asChild>
              <Link href="/#contact">Contact VIYB</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link href="/brokerage">View Current Listings</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
