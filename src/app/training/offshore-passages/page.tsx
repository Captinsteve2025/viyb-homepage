"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, GraduationCap, Mail, MapPin, Phone, Ship, Calendar, Navigation, Users, ArrowLeft, Anchor, Waves , LogIn} from "lucide-react";
import Link from "next/link";
import MobileNav from "@/components/MobileNav";
import Logo from "@/components/Logo";
import EnquiryDialog from "../EnquiryDialog";
import { useState } from "react";

type ItineraryItem = {
  day: number | string;
  passage: string;
  activity: string;
  modules: string;
  distance: string;
};

const leg1Itinerary: ItineraryItem[] = [
  { day: 1, passage: "St. Martin (Marigot / Simpson Bay)", activity: "Crew change, provisioning, safety drills", modules: "Vessel readiness, float plan, customs exit St. Martin", distance: "5-10 nm local" },
  { day: 2, passage: "St. Martin to St. Barths", activity: "Open water passage", modules: "Customs entry St. Barths, pilotage, mooring", distance: "15-20 nm" },
  { day: 3, passage: "St. Barths to Nevis", activity: "Longer passage", modules: "Watch rotation, log keeping", distance: "85-90 nm" },
  { day: 4, passage: "Nevis to Guadeloupe (Les Saintes / Deshaies)", activity: "Island arrival", modules: "Customs entry Guadeloupe, navigation rules", distance: "85-95 nm" },
  { day: 5, passage: "Guadeloupe (Lay day / local sailing)", activity: "Harbor practice", modules: "Docking drills, leadership, safety management", distance: "5-10 nm local" },
  { day: 6, passage: "Guadeloupe to Dominica", activity: "Coastal/offshore run", modules: "Pilotage, mooring, COLREGs reinforcement", distance: "50-55 nm" },
  { day: 7, passage: "Dominica (Portsmouth / Roseau)", activity: "Harbor operations", modules: "Harbor entry, mooring techniques", distance: "5-10 nm local" },
  { day: 8, passage: "Dominica to Martinique", activity: "Final crossing", modules: "Fuel/water management, AIS monitoring, collision avoidance", distance: "45-50 nm" },
  { day: 9, passage: "Martinique (Le Marin / Fort-de-France)", activity: "Seamanship review", modules: "Celestial recap, crew-led local passage", distance: "5-10 nm local" },
  { day: 10, passage: "Martinique", activity: "Closing day", modules: "Debrief and log sign-offs", distance: "n/a" },
];

const leg2Itinerary: ItineraryItem[] = [
  { day: 1, passage: "Martinique (Le Marin)", activity: "Welcome, safety briefing, shakedown sail", modules: "Skipper responsibilities, crew safety, vessel checks", distance: "5-10 nm" },
  { day: 2, passage: "Martinique to St. Lucia", activity: "First passage", modules: "Anchoring practice, harbor entry, clearance procedures", distance: "25-30 nm" },
  { day: 3, passage: "St. Lucia to St. Vincent", activity: "Coastal passage", modules: "Pilotage, buoyage, coastal navigation", distance: "55-60 nm" },
  { day: 4, passage: "St. Vincent → Bequia → Tobago Cays", activity: "Island hopping", modules: "Sail trim, reefing, COLREGs introduction", distance: "35-40 nm" },
  { day: 5, passage: "Tobago Cays to Union Island (SVG)", activity: "Border operations", modules: "Customs procedures, mooring drills", distance: "12-15 nm" },
  { day: 6, passage: "Union Island to Carriacou (Tyrell Bay)", activity: "Short passage", modules: "Pilotage, harbor entry", distance: "12-15 nm" },
  { day: 7, passage: "Carriacou (Crew-led local sail)", activity: "Island exploration", modules: "Docking/undocking, leadership, heavy weather tactics", distance: "10-20 nm local" },
  { day: 8, passage: "Carriacou to Grenada", activity: "Final crossing", modules: "AIS watch, collision avoidance", distance: "35 nm" },
  { day: 9, passage: "Grenada (Main Island)", activity: "Seamanship review", modules: "Log entries, practical drills", distance: "5-10 nm local" },
  { day: 10, passage: "Grenada", activity: "Closing day", modules: "Debrief and log sign-offs", distance: "n/a" },
];

const upcomingPassages = [
  { month: "FEB", day: "07", leg: 1, dates: "February 7–16, 2025", route: "St. Martin to Martinique" },
  { month: "FEB", day: "21", leg: 2, dates: "February 21 – March 2, 2025", route: "Martinique to Grenada" },
  { month: "MAR", day: "07", leg: 1, dates: "March 7–16, 2025", route: "St. Martin to Martinique" },
  { month: "MAR", day: "21", leg: 2, dates: "March 21–30, 2025", route: "Martinique to Grenada" },
  { month: "APR", day: "04", leg: 1, dates: "April 4–13, 2025", route: "St. Martin to Martinique" },
  { month: "APR", day: "18", leg: 2, dates: "April 18–27, 2025", route: "Martinique to Grenada" },
  { month: "MAY", day: "02", leg: 1, dates: "May 2–11, 2025", route: "St. Martin to Martinique" },
  { month: "MAY", day: "16", leg: 2, dates: "May 16–25, 2025", route: "Martinique to Grenada" },
];

export default function OffshorePassagesPage() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedPassage, setSelectedPassage] = useState<{ passage: string; date: string }>({ passage: "", date: "" });

  const openDialog = (passage: string, date: string) => {
    setSelectedPassage({ passage, date });
    setDialogOpen(true);
  };

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Navigation */}
      <header className="fixed top-0 z-50 w-full border-b border-border bg-white shadow-sm">
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          <Link href="/">
            <Logo variant="light" />
          </Link>
          <nav className="hidden gap-8 md:flex">
            <Link href="/brokerage" className="text-sm font-medium uppercase tracking-wide text-foreground transition-colors hover:text-secondary">Brokerage</Link>
            <Link href="/bali" className="text-sm font-medium uppercase tracking-wide text-foreground transition-colors hover:text-secondary">New Bali</Link>
            <Link href="/charter" className="text-sm font-medium uppercase tracking-wide text-foreground transition-colors hover:text-secondary">Yacht Charters</Link>
            <Link href="/training" className="text-sm font-medium uppercase tracking-wide text-secondary">Training</Link>
            <Link href="/charter-ownership" className="text-sm font-medium uppercase tracking-wide text-foreground transition-colors hover:text-secondary">Charter Ownership</Link>
            <Link href="/#contact" className="text-sm font-medium uppercase tracking-wide text-foreground transition-colors hover:text-secondary">Contact</Link>
          <Link href="/admin/login" className="flex items-center gap-1.5 text-sm font-medium uppercase tracking-wide text-muted-foreground transition-colors hover:text-secondary" title="Admin Panel"><LogIn className="h-4 w-4" />Admin</Link>
          </nav>
          <MobileNav currentPage="Training" variant="light" />
        </div>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&h=1080&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/70" />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center text-white">
          <Link href="/training" className="mb-6 inline-flex items-center gap-2 text-white/80 transition-colors hover:text-secondary">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm font-medium">Back to Training Programs</span>
          </Link>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-secondary/20 px-6 py-2 backdrop-blur-sm">
            <Navigation className="h-5 w-5 text-secondary" />
            <span className="text-sm font-bold uppercase tracking-wide text-secondary">10-Day Passages</span>
          </div>
          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Offshore Passage
            <br />
            <span className="text-secondary">Training</span>
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed md:text-2xl">
            Two distinct 10-day voyages through the Eastern Caribbean. Build offshore confidence
            with night watches, multi-day passages, and real ocean sailing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="gold" size="lg" asChild>
              <a href="#dates">View Upcoming Dates</a>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <a href="#itinerary">See Itineraries</a>
            </Button>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-4">
            <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
              <p className="text-3xl font-bold text-secondary">10</p>
              <p className="text-sm text-white/80">Days Per Leg</p>
            </div>
            <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
              <p className="text-3xl font-bold text-secondary">500+</p>
              <p className="text-sm text-white/80">Total Miles</p>
            </div>
            <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
              <p className="text-3xl font-bold text-secondary">8+</p>
              <p className="text-sm text-white/80">Islands</p>
            </div>
            <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
              <p className="text-3xl font-bold text-secondary">6</p>
              <p className="text-sm text-white/80">Max Crew</p>
            </div>
          </div>
        </div>
      </section>

      {/* Two Legs Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-primary md:text-5xl">Two Distinct Voyages</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">Choose one leg or complete both for the ultimate offshore experience</p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <Card className="overflow-hidden border-2 border-secondary">
              <div className="relative h-64">
                <img src="https://images.unsplash.com/photo-1500930287596-c1ecaa373bb2?w=800&h=400&fit=crop" alt="St. Martin to Martinique" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-sm font-bold uppercase tracking-wide text-secondary">Leg 1</p>
                  <h3 className="text-3xl font-bold">St. Martin to Martinique</h3>
                  <p className="mt-1 text-white/80">10 Days | 300–350 Nautical Miles</p>
                </div>
              </div>
              <CardContent className="p-8">
                <p className="mb-6 leading-relaxed text-muted-foreground">Island hopping through the Leewards and Windwards with clearances, anchoring, and coastal navigation.</p>
                <div className="mb-6 space-y-3">
                  <div className="flex items-start gap-3"><CheckCircle2 className="mt-1 h-5 w-5 text-secondary" /><span className="text-muted-foreground">Leeward and Windward chain exploration</span></div>
                  <div className="flex items-start gap-3"><CheckCircle2 className="mt-1 h-5 w-5 text-secondary" /><span className="text-muted-foreground">Multi-country customs and immigration</span></div>
                  <div className="flex items-start gap-3"><CheckCircle2 className="mt-1 h-5 w-5 text-secondary" /><span className="text-muted-foreground">Anchoring and mooring practice</span></div>
                  <div className="flex items-start gap-3"><CheckCircle2 className="mt-1 h-5 w-5 text-secondary" /><span className="text-muted-foreground">Foundations of passage making</span></div>
                </div>
                <Button variant="gold" className="w-full" onClick={() => openDialog("Leg 1: St. Martin to Martinique", "")}>
                  Reserve Leg 1
                </Button>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-2 border-secondary">
              <div className="relative h-64">
                <img src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=400&fit=crop" alt="Martinique to Grenada" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-sm font-bold uppercase tracking-wide text-secondary">Leg 2</p>
                  <h3 className="text-3xl font-bold">Martinique to Grenada</h3>
                  <p className="mt-1 text-white/80">10 Days | 190–225 Nautical Miles</p>
                </div>
              </div>
              <CardContent className="p-8">
                <p className="mb-6 leading-relaxed text-muted-foreground">Continue through the Windwards to Grenada with the beautiful Grenadines along the way.</p>
                <div className="mb-6 space-y-3">
                  <div className="flex items-start gap-3"><CheckCircle2 className="mt-1 h-5 w-5 text-secondary" /><span className="text-muted-foreground">Overnight passages with watch systems</span></div>
                  <div className="flex items-start gap-3"><CheckCircle2 className="mt-1 h-5 w-5 text-secondary" /><span className="text-muted-foreground">Tobago Cays and Grenadines</span></div>
                  <div className="flex items-start gap-3"><CheckCircle2 className="mt-1 h-5 w-5 text-secondary" /><span className="text-muted-foreground">Advanced navigation and weather routing</span></div>
                  <div className="flex items-start gap-3"><CheckCircle2 className="mt-1 h-5 w-5 text-secondary" /><span className="text-muted-foreground">Crew-led passage planning</span></div>
                </div>
                <Button variant="gold" className="w-full" onClick={() => openDialog("Leg 2: Martinique to Grenada", "")}>
                  Reserve Leg 2
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leg 1 Itinerary */}
      <section id="itinerary" className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-primary">Leg 1: St. Martin to Martinique</h2>
            <p className="text-lg text-muted-foreground">10-Day Detailed Itinerary</p>
          </div>
          <div className="mx-auto max-w-5xl overflow-hidden rounded-lg border bg-white shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wide">Day</th>
                    <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wide">Passage</th>
                    <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wide">Training Modules</th>
                    <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wide">Distance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {leg1Itinerary.map((item, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-muted/30"}>
                      <td className="px-6 py-4 font-bold text-secondary">{item.day}</td>
                      <td className="px-6 py-4">
                        <p className="font-medium text-primary">{item.passage}</p>
                        <p className="text-sm text-muted-foreground">{item.activity}</p>
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{item.modules}</td>
                      <td className="px-6 py-4 font-medium text-primary">{item.distance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="border-t bg-secondary/10 px-6 py-4">
              <p className="font-bold text-primary">Leg 1 Total: <span className="text-secondary">Approximately 300–350 nautical miles logged</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* Leg 2 Itinerary */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-primary">Leg 2: Martinique to Grenada</h2>
            <p className="text-lg text-muted-foreground">10-Day Detailed Itinerary</p>
          </div>
          <div className="mx-auto max-w-5xl overflow-hidden rounded-lg border bg-white shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wide">Day</th>
                    <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wide">Passage</th>
                    <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wide">Training Modules</th>
                    <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wide">Distance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {leg2Itinerary.map((item, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-muted/30"}>
                      <td className="px-6 py-4 font-bold text-secondary">{item.day}</td>
                      <td className="px-6 py-4">
                        <p className="font-medium text-primary">{item.passage}</p>
                        <p className="text-sm text-muted-foreground">{item.activity}</p>
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{item.modules}</td>
                      <td className="px-6 py-4 font-medium text-primary">{item.distance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="border-t bg-secondary/10 px-6 py-4">
              <p className="font-bold text-primary">Leg 2 Total: <span className="text-secondary">Approximately 190–225 nautical miles logged</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Passages */}
      <section id="dates" className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-primary md:text-5xl">Upcoming Passages</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">Limited spots available — reserve early</p>
          </div>
          <div className="mx-auto max-w-4xl space-y-4">
            {upcomingPassages.map((passage, idx) => (
              <Card key={idx} className="border-2 border-primary/10 transition-all hover:border-secondary">
                <CardContent className="flex flex-wrap items-center justify-between gap-4 p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 flex-col items-center justify-center rounded-lg bg-secondary text-white">
                      <span className="text-sm font-bold">{passage.month}</span>
                      <span className="text-2xl font-bold">{passage.day}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-primary">Leg {passage.leg}: {passage.route}</h3>
                      <p className="text-sm text-muted-foreground">{passage.dates} | Spots available</p>
                    </div>
                  </div>
                  <Button variant="gold" onClick={() => openDialog(`Leg ${passage.leg}: ${passage.route}`, passage.dates)}>
                    Reserve Spot
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-muted-foreground">Don't see dates that work for you? <button onClick={() => setDialogOpen(true)} className="font-medium text-secondary hover:underline">Contact us</button> to discuss custom training options.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-primary md:text-5xl">Program Pricing</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">Pricing is per person, based on sharing a double cabin</p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
            <Card className="border-2 border-primary/10">
              <CardContent className="p-8">
                <div className="mb-2 text-xs font-bold uppercase tracking-wide text-secondary">Standard Package</div>
                <h3 className="mb-4 text-2xl font-bold text-primary">$9,000 <span className="text-lg font-normal text-muted-foreground">per person</span></h3>
                <ul className="mb-6 space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-secondary" />Sharing a standard double cabin with A/C</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-secondary" />10 days live-aboard training per leg</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-secondary" />Professional skipper/instructor</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-secondary" />Logged miles certificate</li>
                </ul>
                <Button variant="outline" className="w-full" onClick={() => openDialog("Standard Package", "")}>
                  Enquire About Standard
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary shadow-xl">
              <div className="bg-secondary px-6 py-2 text-center text-sm font-bold uppercase text-white">VIP Package</div>
              <CardContent className="p-8">
                <h3 className="mb-4 text-2xl font-bold text-primary">$12,000 <span className="text-lg font-normal text-muted-foreground">per person</span></h3>
                <ul className="mb-6 space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-secondary" />Owners version double cabin</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-secondary" />3:1 instructor ratio</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-secondary" />45'+ catamaran</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-secondary" />All training inclusions from Standard</li>
                </ul>
                <Button variant="gold" className="w-full" onClick={() => openDialog("VIP Package", "")}>
                  Reserve VIP
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mx-auto mt-12 max-w-3xl rounded-lg bg-muted p-8">
            <h3 className="mb-4 text-xl font-bold text-primary">What's Included</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="flex items-center gap-2 text-muted-foreground"><CheckCircle2 className="h-4 w-4 text-secondary" />Accommodation aboard the yacht</div>
              <div className="flex items-center gap-2 text-muted-foreground"><CheckCircle2 className="h-4 w-4 text-secondary" />All meals and provisions</div>
              <div className="flex items-center gap-2 text-muted-foreground"><CheckCircle2 className="h-4 w-4 text-secondary" />Professional skipper/instructor</div>
              <div className="flex items-center gap-2 text-muted-foreground"><CheckCircle2 className="h-4 w-4 text-secondary" />Fuel and marina fees</div>
              <div className="flex items-center gap-2 text-muted-foreground"><CheckCircle2 className="h-4 w-4 text-secondary" />Training materials and charts</div>
              <div className="flex items-center gap-2 text-muted-foreground"><CheckCircle2 className="h-4 w-4 text-secondary" />Logged miles certificate</div>
            </div>

            <h3 className="mt-8 mb-3 text-xl font-bold text-primary">Not Included</h3>
            <ul className="grid gap-2 sm:grid-cols-2 text-sm text-muted-foreground">
              <li>• Flights</li>
              <li>• Dinner ashore and trips ashore</li>
              <li>• Exam fees</li>
              <li>• Personal travel insurance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold text-primary md:text-5xl">Offshore Passage FAQs</h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">Answers for mile-builders and future charter owners</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-2 border-primary/10">
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-bold text-primary">How many miles will I log per leg?</h3>
                  <p className="text-muted-foreground">Expect approximately 300–350 NM on Leg 1 and 190–225 NM on Leg 2, depending on conditions and routing.</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary/10">
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-bold text-primary">Are night watches included?</h3>
                  <p className="text-muted-foreground">Yes. Night watches are part of offshore confidence-building with proper rotation, lookout, and safety protocols.</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary/10">
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-bold text-primary">Do we practice customs and clearances?</h3>
                  <p className="text-muted-foreground">Yes. Multi-country customs and immigration, plus entry/exit procedures, are part of the practical learning during passages.</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary/10">
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-bold text-primary">Is this suitable preparation for charter ownership?</h3>
                  <p className="text-muted-foreground">Absolutely. Offshore passages deliver real-world seamanship and decision-making, forming a strong base before the Owner Transition Program.</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary/10">
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-bold text-primary">Will I get an ICC here?</h3>
                  <p className="text-muted-foreground">ICC assessment is available separately or in conjunction with the Day Skipper program; we can advise best timing based on your experience.</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary/10">
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-bold text-primary">What's included vs not included?</h3>
                  <p className="text-muted-foreground">Accommodation, meals, skipper/instructor, fuel/marina fees, and training materials are included. Flights, meals ashore, excursions, and exam fees are not.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        {/* FAQ JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How many miles will I log per leg?",
                  acceptedAnswer: { "@type": "Answer", text: "Approx. 300–350 NM on Leg 1 and 190–225 NM on Leg 2, subject to conditions." },
                },
                {
                  "@type": "Question",
                  name: "Are night watches included?",
                  acceptedAnswer: { "@type": "Answer", text: "Yes. Night watches are part of the program with proper rotation and safety protocols." },
                },
                {
                  "@type": "Question",
                  name: "Do we practice customs and clearances?",
                  acceptedAnswer: { "@type": "Answer", text: "Yes. Multi-country customs and immigration are included during the passages." },
                },
                {
                  "@type": "Question",
                  name: "Is this suitable preparation for charter ownership?",
                  acceptedAnswer: { "@type": "Answer", text: "Yes. Offshore passages deliver real-world seamanship ahead of the Owner Transition Program." },
                },
                {
                  "@type": "Question",
                  name: "Will I get an ICC here?",
                  acceptedAnswer: { "@type": "Answer", text: "ICC assessment is available separately or alongside Day Skipper; we'll advise on best timing." },
                },
                {
                  "@type": "Question",
                  name: "What's included vs not included?",
                  acceptedAnswer: { "@type": "Answer", text: "Included: accommodation, meals, skipper/instructor, fuel/marina fees, training materials. Not included: flights, meals ashore, excursions, exam fees." },
                },
              ],
            }),
          }}
        />
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Ready for Your Offshore Adventure?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
            Reserve your spot on an upcoming passage or enquire about both legs
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="secondary" size="lg" onClick={() => setDialogOpen(true)}>Enquire Now</Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link href="/training">View All Programs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Enquiry Dialog */}
      <EnquiryDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        preset={{ passage: selectedPassage.passage || "Offshore Passages", date: selectedPassage.date }}
      />

      {/* Footer */}
      <footer className="bg-primary py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-4">
            <div>
              <Logo variant="dark" />
              <p className="mt-4 leading-relaxed text-white/80">Your trusted partner for yacht sales, training, and charter ownership in the Virgin Islands</p>
            </div>
            <div>
              <h3 className="mb-4 font-bold uppercase tracking-wide">Quick Links</h3>
              <ul className="space-y-2 text-white/80">
                <li><Link href="/brokerage" className="transition-colors hover:text-secondary">Brokerage Yachts</Link></li>
                <li><Link href="/bali" className="transition-colors hover:text-secondary">New Bali Catamarans</Link></li>
                <li><Link href="/training" className="transition-colors hover:text-secondary">Sailing Training</Link></li>
                <li><Link href="/" className="transition-colors hover:text-secondary">Home</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-bold uppercase tracking-wide">Training Programs</h3>
              <ul className="space-y-2 text-white/80">
                <li><Link href="/training/day-skipper" className="transition-colors hover:text-secondary">Day Skipper Program</Link></li>
                <li><Link href="/training/offshore-passages" className="transition-colors hover:text-secondary">Offshore Passages</Link></li>
                <li><Link href="/training/owner-program" className="transition-colors hover:text-secondary">Owner Transition</Link></li>
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
