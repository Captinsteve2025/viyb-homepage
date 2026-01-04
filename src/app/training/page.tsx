"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Anchor, Award, Calendar, CheckCircle2, GraduationCap, Mail, MapPin, Navigation, Phone, Ship, Users, Waves, Clock, Target, ArrowRight } from "lucide-react";
import Link from "next/link";
import MobileNav from "@/components/MobileNav";
import Logo from "@/components/Logo";

export default function TrainingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "Course",
        name: "Day Skipper Practical – British Virgin Islands",
        description:
          "RYA-aligned Day Skipper training aboard a Bali catamaran with optional ICC assessment.",
        provider: { "@type": "Organization", name: "Virgin Islands Yacht Broker" },
        url: "https://example.com/training/day-skipper",
      },
      {
        "@type": "Course",
        name: "Caribbean Offshore Passage Training – 10-Day",
        description:
          "Mile-building passages with night watches and multi-country clearances across the Eastern Caribbean.",
        provider: { "@type": "Organization", name: "Virgin Islands Yacht Broker" },
        url: "https://example.com/training/offshore-passages",
      },
      {
        "@type": "Course",
        name: "Catamaran Owner Transition – Charter Ownership Onboarding",
        description:
          "Structured owner training covering vessel systems, operations, and commercial handover.",
        provider: { "@type": "Organization", name: "Virgin Islands Yacht Broker" },
        url: "https://example.com/training/owner-program",
      },
    ],
  };
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
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
          </nav>
          <MobileNav currentPage="Training" variant="light" />
        </div>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=1920&h=1080&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/70" />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center text-white">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-secondary/20 px-6 py-2 backdrop-blur-sm">
            <Ship className="h-5 w-5 text-secondary" />
            <span className="text-sm font-bold uppercase tracking-wide text-secondary">Bali Catamaran Training</span>
          </div>
          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Caribbean Sailing
            <br />
            <span className="text-secondary">Training & Certification</span>
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed md:text-2xl">
            Professional sailing programs aboard modern Bali Catamarans. From Day Skipper certification
            to offshore passages and owner onboarding — build confidence for yacht ownership.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="gold" size="lg" asChild>
              <a href="#programs">Explore Programs</a>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <a href="#contact">Request Information</a>
            </Button>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-4">
            <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
              <p className="text-3xl font-bold text-secondary">3</p>
              <p className="text-sm text-white/80">Training Programs</p>
            </div>
            <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
              <p className="text-3xl font-bold text-secondary">7-20</p>
              <p className="text-sm text-white/80">Days Duration</p>
            </div>
            <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
              <p className="text-3xl font-bold text-secondary">500+</p>
              <p className="text-sm text-white/80">Miles Available</p>
            </div>
            <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
              <p className="text-3xl font-bold text-secondary">ICC</p>
              <p className="text-sm text-white/80">Certification</p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-primary md:text-5xl">Train on Bali Catamarans</h2>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
              Whether you're seeking your first sailing qualification, looking to log offshore miles,
              or transitioning into yacht ownership — our programs deliver hands-on experience aboard
              the innovative Bali catamaran platform in the stunning Caribbean waters.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              All programs align with <strong>RYA standards</strong> and offer practical, real-world
              training that prepares you for confident, independent sailing.
            </p>
          </div>
        </div>
      </section>

      {/* Why Train With Us */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-primary md:text-5xl">Why Train With Us</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">Professional instruction on premium vessels in ideal sailing conditions</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-2 border-primary/10 transition-all hover:border-secondary hover:shadow-lg">
              <CardContent className="p-8">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary/10">
                  <Ship className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-primary">Modern Bali Catamarans</h3>
                <p className="leading-relaxed text-muted-foreground">Train on the latest Bali designs with innovative open-space layouts and advanced systems.</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-primary/10 transition-all hover:border-secondary hover:shadow-lg">
              <CardContent className="p-8">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary/10">
                  <Navigation className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-primary">Caribbean Waters</h3>
                <p className="leading-relaxed text-muted-foreground">Perfect trade wind conditions in the British Virgin Islands and Eastern Caribbean.</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-primary/10 transition-all hover:border-secondary hover:shadow-lg">
              <CardContent className="p-8">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary/10">
                  <Award className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-primary">RYA-Aligned Training</h3>
                <p className="leading-relaxed text-muted-foreground">Curriculum follows Royal Yachting Association standards with ICC certification available.</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-primary/10 transition-all hover:border-secondary hover:shadow-lg">
              <CardContent className="p-8">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary/10">
                  <Users className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-primary">Small Groups</h3>
                <p className="leading-relaxed text-muted-foreground">Maximum 6 participants ensures hands-on time at helm, navigation, and all crew roles.</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-primary/10 transition-all hover:border-secondary hover:shadow-lg">
              <CardContent className="p-8">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary/10">
                  <GraduationCap className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-primary">Experienced Instructors</h3>
                <p className="leading-relaxed text-muted-foreground">Qualified skippers with extensive Caribbean and offshore experience.</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-primary/10 transition-all hover:border-secondary hover:shadow-lg">
              <CardContent className="p-8">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary/10">
                  <Target className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-primary">Ownership Pathway</h3>
                <p className="leading-relaxed text-muted-foreground">Programs designed for sailors considering yacht purchase — try before you buy.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Three Programs */}
      <section id="programs" className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-primary md:text-5xl">Our Training Programs</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">Choose the program that matches your experience level and goals</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Day Skipper Program */}
            <Card className="flex flex-col overflow-hidden border-2 border-primary/10 transition-all hover:border-secondary hover:shadow-xl">
              <div className="relative h-56">
                <img
                  src="https://images.unsplash.com/photo-1500930287596-c1ecaa373bb2?w=800&h=400&fit=crop"
                  alt="Day Skipper Training in BVI"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="rounded-full bg-secondary px-3 py-1 text-xs font-bold uppercase text-primary">7 Days</span>
                </div>
              </div>
              <CardContent className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 text-2xl font-bold text-primary">Day Skipper Program</h3>
                <p className="mb-4 text-sm text-muted-foreground">Sopers Hole, Tortola • ICC Assessment</p>
                <p className="mb-6 flex-1 leading-relaxed text-muted-foreground">
                  Comprehensive 7-day program covering all Day Skipper practical syllabus requirements
                  plus International Certificate of Competence (ICC) assessment. Ideal for sailors
                  ready to skipper in daylight and coastal waters.
                </p>
                <div className="mb-6 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-secondary" />
                    <span>Day Skipper practical completion</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-secondary" />
                    <span>ICC certification assessment</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-secondary" />
                    <span>Close-quarters boat handling</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-secondary" />
                    <span>Navigation and pilotage</span>
                  </div>
                </div>
                <Button variant="gold" className="w-full" asChild>
                  <Link href="/training/day-skipper">
                    View Program Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Offshore Passages */}
            <Card className="flex flex-col overflow-hidden border-2 border-secondary shadow-xl">
              <div className="bg-secondary px-4 py-2 text-center text-sm font-bold uppercase text-primary">Most Popular</div>
              <div className="relative h-56">
                <img
                  src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=400&fit=crop"
                  alt="Offshore Passage Training"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="rounded-full bg-secondary px-3 py-1 text-xs font-bold uppercase text-primary">10 Days</span>
                </div>
              </div>
              <CardContent className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 text-2xl font-bold text-primary">Offshore Passages</h3>
                <p className="mb-4 text-sm text-muted-foreground">St. Martin to Grenada • 500+ NM</p>
                <p className="mb-6 flex-1 leading-relaxed text-muted-foreground">
                  Two distinct 10-day voyages through the Eastern Caribbean. Build offshore confidence
                  with night watches, multi-day passages, and real ocean sailing. Perfect preparation
                  for yacht ownership.
                </p>
                <div className="mb-6 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-secondary" />
                    <span>300-350 NM per leg logged</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-secondary" />
                    <span>Night watches and offshore sailing</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-secondary" />
                    <span>8+ islands visited</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-secondary" />
                    <span>Multi-country clearances</span>
                  </div>
                </div>
                <Button variant="gold" className="w-full" asChild>
                  <Link href="/training/offshore-passages">
                    View Program Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Owner Transition Program */}
            <Card className="flex flex-col overflow-hidden border-2 border-primary/10 transition-all hover:border-secondary hover:shadow-xl">
              <div className="relative h-56">
                <img
                  src="https://bali-catamarans.hr/images/ownership/yacht-images/bali-48-open-space/bali-48-open-space-main.jpg"
                  alt="Owner Transition Training"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="rounded-full bg-secondary px-3 py-1 text-xs font-bold uppercase text-primary">7-10 Days</span>
                </div>
              </div>
              <CardContent className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 text-2xl font-bold text-primary">Owner Transition Program</h3>
                <p className="mb-4 text-sm text-muted-foreground">BVI Base • Charter Ownership Ready</p>
                <p className="mb-6 flex-1 leading-relaxed text-muted-foreground">
                  Comprehensive onboarding for new yacht owners entering charter management.
                  Combines skipper training with vessel systems, operations, and business understanding.
                  Not just sailing — a full ownership transition.
                </p>
                <div className="mb-6 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-secondary" />
                    <span>Vessel systems mastery</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-secondary" />
                    <span>Charter operations training</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-secondary" />
                    <span>Financial & legal briefing</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-secondary" />
                    <span>Optional ICC assessment</span>
                  </div>
                </div>
                <Button variant="gold" className="w-full" asChild>
                  <Link href="/training/owner-program">
                    View Program Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Training Vessel */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative h-96 overflow-hidden rounded-lg shadow-2xl lg:h-[500px]">
              <img src="https://bali-catamarans.hr/images/ownership/yacht-images/bali-48-open-space/bali-48-open-space-main.jpg" alt="Bali Catamaran Training Vessel" className="h-full w-full object-cover" />
            </div>
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2">
                <Ship className="h-5 w-5 text-secondary" />
                <span className="text-sm font-bold uppercase tracking-wide text-secondary">Training Vessel</span>
              </div>
              <h2 className="mb-6 text-4xl font-bold text-primary md:text-5xl">The Bali Advantage</h2>
              <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
                All programs are conducted aboard modern Bali catamarans. Experience the innovative
                open-space design, advanced systems, and exceptional handling that make Bali the
                leading choice for Caribbean sailing.
              </p>
              <div className="mb-8 grid gap-4 sm:grid-cols-2">
                <div className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-secondary" /><span>Open-concept saloon</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-secondary" /><span>Modern navigation electronics</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-secondary" /><span>Full galley & accommodations</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-secondary" /><span>Watermaker & generator</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-secondary" /><span>Complete safety equipment</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-secondary" /><span>Spacious cockpit & flybridge</span></div>
              </div>
              <Button variant="gold" size="lg" asChild>
                <Link href="/bali">Explore Bali Catamarans</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Program Comparison */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-primary md:text-5xl">Compare Programs</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">Find the right training for your goals</p>
          </div>
          <div className="mx-auto max-w-5xl overflow-hidden rounded-lg border bg-white shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wide">Feature</th>
                    <th className="px-6 py-4 text-center text-sm font-bold uppercase tracking-wide">Day Skipper</th>
                    <th className="px-6 py-4 text-center text-sm font-bold uppercase tracking-wide">Offshore Passages</th>
                    <th className="px-6 py-4 text-center text-sm font-bold uppercase tracking-wide">Owner Transition</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-white">
                    <td className="px-6 py-4 font-medium text-primary">Duration</td>
                    <td className="px-6 py-4 text-center text-muted-foreground">7 days</td>
                    <td className="px-6 py-4 text-center text-muted-foreground">10 days per leg</td>
                    <td className="px-6 py-4 text-center text-muted-foreground">7-10 days</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="px-6 py-4 font-medium text-primary">Location</td>
                    <td className="px-6 py-4 text-center text-muted-foreground">BVI</td>
                    <td className="px-6 py-4 text-center text-muted-foreground">Eastern Caribbean</td>
                    <td className="px-6 py-4 text-center text-muted-foreground">BVI</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 font-medium text-primary">Miles Logged</td>
                    <td className="px-6 py-4 text-center text-muted-foreground">100-150 NM</td>
                    <td className="px-6 py-4 text-center text-muted-foreground">300-350 NM/leg</td>
                    <td className="px-6 py-4 text-center text-muted-foreground">Variable</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="px-6 py-4 font-medium text-primary">Night Sailing</td>
                    <td className="px-6 py-4 text-center text-muted-foreground">Optional</td>
                    <td className="px-6 py-4 text-center font-bold text-secondary">Yes</td>
                    <td className="px-6 py-4 text-center text-muted-foreground">Optional</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 font-medium text-primary">ICC Assessment</td>
                    <td className="px-6 py-4 text-center font-bold text-secondary">Included</td>
                    <td className="px-6 py-4 text-center text-muted-foreground">Available</td>
                    <td className="px-6 py-4 text-center text-muted-foreground">Optional</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="px-6 py-4 font-medium text-primary">Systems Training</td>
                    <td className="px-6 py-4 text-center text-muted-foreground">Basic</td>
                    <td className="px-6 py-4 text-center text-muted-foreground">Intermediate</td>
                    <td className="px-6 py-4 text-center font-bold text-secondary">Comprehensive</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 font-medium text-primary">Charter Operations</td>
                    <td className="px-6 py-4 text-center text-muted-foreground">—</td>
                    <td className="px-6 py-4 text-center text-muted-foreground">—</td>
                    <td className="px-6 py-4 text-center font-bold text-secondary">Full Training</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="px-6 py-4 font-medium text-primary">Best For</td>
                    <td className="px-6 py-4 text-center text-muted-foreground">New skippers</td>
                    <td className="px-6 py-4 text-center text-muted-foreground">Mile builders</td>
                    <td className="px-6 py-4 text-center text-muted-foreground">New owners</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-10 text-center">
            <p className="text-sm text-muted-foreground">Related pages:</p>
            <div className="mt-2 flex flex-wrap justify-center gap-3 text-sm">
              <Link href="/training/day-skipper" className="text-secondary hover:underline">Day Skipper (BVI)</Link>
              <span className="text-muted-foreground">•</span>
              <Link href="/training/offshore-passages" className="text-secondary hover:underline">Offshore Passages</Link>
              <span className="text-muted-foreground">•</span>
              <Link href="/training/owner-program" className="text-secondary hover:underline">Owner Training & Charter Onboarding</Link>
              <span className="text-muted-foreground">•</span>
              <Link href="/charter-ownership" className="text-secondary hover:underline">Charter Ownership Overview</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Dates CTA */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Ready to Start Your Training?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
            View upcoming passage dates or enquire about custom training schedules
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="secondary" size="lg" asChild>
              <Link href="/training/offshore-passages#dates">View Passage Dates</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <a href="#contact">Request Custom Dates</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold text-primary md:text-5xl">Get in Touch</h2>
              <p className="text-lg text-muted-foreground">Request more information about our training programs</p>
            </div>
            <Card className="border-2 border-primary/10">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-primary">First Name</label>
                      <input type="text" placeholder="John" className="flex h-11 w-full rounded-[10px] border border-input bg-background px-4 py-2 text-sm" />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-primary">Last Name</label>
                      <input type="text" placeholder="Smith" className="flex h-11 w-full rounded-[10px] border border-input bg-background px-4 py-2 text-sm" />
                    </div>
                  </div>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-primary">Email</label>
                      <input type="email" placeholder="john@example.com" className="flex h-11 w-full rounded-[10px] border border-input bg-background px-4 py-2 text-sm" />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-primary">Phone</label>
                      <input type="tel" placeholder="+1 (555) 123-4567" className="flex h-11 w-full rounded-[10px] border border-input bg-background px-4 py-2 text-sm" />
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-primary">Program Interest</label>
                    <select className="flex h-11 w-full rounded-[10px] border border-input bg-background px-4 py-2 text-sm">
                      <option value="">Select a program</option>
                      <option value="day-skipper">7-Day Day Skipper Program</option>
                      <option value="offshore">10-Day Offshore Passages</option>
                      <option value="owner">Owner Transition Program</option>
                      <option value="custom">Custom Training</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-primary">Message</label>
                    <textarea rows={4} placeholder="Tell us about your sailing experience and goals..." className="flex w-full rounded-[10px] border border-input bg-background px-4 py-3 text-sm" />
                  </div>
                  <Button variant="gold" size="lg" className="w-full">Submit Enquiry</Button>
                </form>
              </CardContent>
            </Card>
            <div className="mt-8 text-center">
              <p className="mb-2 text-muted-foreground">Or contact us directly:</p>
              <div className="flex flex-wrap justify-center gap-6">
                <a href="tel:+17862460809" className="flex items-center gap-2 text-primary hover:text-secondary"><Phone className="h-5 w-5" />+1 786 246 0809</a>
                <a href="mailto:training@virginislandsyachtbroker.com" className="flex items-center gap-2 text-primary hover:text-secondary"><Mail className="h-5 w-5" />training@virginislandsyachtbroker.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>

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
