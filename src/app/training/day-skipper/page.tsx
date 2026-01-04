"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, GraduationCap, Mail, MapPin, Phone, Ship, Calendar, Award, Users, ArrowLeft } from "lucide-react";
import Link from "next/link";
import MobileNav from "@/components/MobileNav";
import Logo from "@/components/Logo";
import EnquiryDialog from "../EnquiryDialog";
import { useState } from "react";

export default function DaySkipperPage() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [preset, setPreset] = useState<{ passage?: string; date?: string; pkg?: "standard" | "vip" | "" }>({
    passage: "7-Day Day Skipper Program",
    pkg: "",
  });

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
          </nav>
          <MobileNav currentPage="Training" variant="light" />
        </div>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-[65vh] items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <picture>
            <source
              srcSet="/hero/day-skipper.avif"
              type="image/avif"
            />
            <img
              src="/hero/day-skipper.jpg"
              alt="Sopers Hole, Tortola"
              className="h-full w-full object-cover"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center text-white">
          <Link href="/training" className="mb-6 inline-flex items-center gap-2 text-white/80 transition-colors hover:text-secondary">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm font-medium">Back to Training Programs</span>
          </Link>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-secondary/20 px-6 py-2 backdrop-blur-sm">
            <GraduationCap className="h-5 w-5 text-secondary" />
            <span className="text-sm font-bold uppercase tracking-wide text-secondary">7-Day Program</span>
          </div>
          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Day Skipper
            <br />
            <span className="text-secondary">Program</span>
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed md:text-2xl">
            Complete Day Skipper practical syllabus with ICC assessment aboard a Bali catamaran
            in the beautiful British Virgin Islands.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="gold"
              size="lg"
              onClick={() => {
                setPreset({ passage: "7-Day Day Skipper Program", pkg: "standard" });
                setDialogOpen(true);
              }}
            >
              Reserve Your Spot
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <a href="#schedule">View Schedule</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Overview Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-4">
            <Card className="border-2 border-primary/10">
              <CardContent className="p-6 text-center">
                <Calendar className="mx-auto mb-3 h-8 w-8 text-secondary" />
                <h3 className="mb-1 text-lg font-bold text-primary">Duration</h3>
                <p className="text-muted-foreground">7 Days</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-primary/10">
              <CardContent className="p-6 text-center">
                <MapPin className="mx-auto mb-3 h-8 w-8 text-secondary" />
                <h3 className="mb-1 text-lg font-bold text-primary">Location</h3>
                <p className="text-muted-foreground">Sopers Hole, Tortola</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-primary/10">
              <CardContent className="p-6 text-center">
                <Ship className="mx-auto mb-3 h-8 w-8 text-secondary" />
                <h3 className="mb-1 text-lg font-bold text-primary">Vessel</h3>
                <p className="text-muted-foreground">Bali Catamaran</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-primary/10">
              <CardContent className="p-6 text-center">
                <Award className="mx-auto mb-3 h-8 w-8 text-secondary" />
                <h3 className="mb-1 text-lg font-bold text-primary">Outcome</h3>
                <p className="text-muted-foreground">Day Skipper + ICC</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Program Description */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-center text-4xl font-bold text-primary md:text-5xl">Program Overview</h2>
            <p className="mb-8 text-center text-lg leading-relaxed text-muted-foreground">
              Our 7-Day Day Skipper Program delivers the complete RYA Day Skipper practical syllabus
              plus preparation for the International Certificate of Competence (ICC) assessment.
              You'll learn to skipper a yacht safely in daylight hours within familiar waters.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-xl font-bold text-primary">What You'll Learn</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                    <span className="text-muted-foreground">Catamaran handling under power and sail</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                    <span className="text-muted-foreground">Navigation and pilotage techniques</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                    <span className="text-muted-foreground">Anchoring and mooring procedures</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                    <span className="text-muted-foreground">COLREGs and rules of the road</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                    <span className="text-muted-foreground">Emergency procedures and MOB drills</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-xl font-bold text-primary">Prerequisites</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                    <span className="text-muted-foreground">Some previous sailing experience helpful</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                    <span className="text-muted-foreground">Competent Crew or equivalent recommended</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                    <span className="text-muted-foreground">Minimum age 18 for ICC assessment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                    <span className="text-muted-foreground">Reasonable level of physical fitness</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                    <span className="text-muted-foreground">Enthusiasm and willingness to learn</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section id="schedule" className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-primary md:text-5xl">7-Day Schedule</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">A structured progression from basics to confident skippering</p>
          </div>

          <div className="mx-auto max-w-5xl space-y-6">
            {/* Day 1 */}
            <Card className="border-2 border-primary/10">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-xl font-bold text-primary">1</div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-bold text-primary">Arrival, Induction & First Handling</h3>
                    <p className="mb-3 text-sm text-muted-foreground">Sopers Hole, Tortola</p>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <h4 className="mb-2 font-medium text-primary">Morning / Midday</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Arrival and check-in at Sopers Hole Marina</li>
                          <li>• Vessel orientation and safety briefing</li>
                          <li>• Allocation of cabins and onboard routines</li>
                          <li>• Overview of the week and ICC assessment criteria</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="mb-2 font-medium text-primary">Afternoon</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Familiarisation sail in Sir Francis Drake Channel</li>
                          <li>• Engine handling and prop walk awareness</li>
                          <li>• Close-quarters manoeuvring under instruction</li>
                          <li>• Anchoring practice in a nearby bay</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 rounded-lg bg-secondary/10 px-4 py-2">
                      <span className="text-sm font-medium text-secondary">Focus: Safety at sea, crew roles, basic boat handling</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Day 2 */}
            <Card className="border-2 border-primary/10">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-xl font-bold text-primary">2</div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-bold text-primary">Sail Handling, Helming & Anchoring</h3>
                    <p className="mb-3 text-sm text-muted-foreground">Sopers Hole → Norman Island</p>
                    <ul className="mb-4 grid gap-1 text-sm text-muted-foreground md:grid-cols-2">
                      <li>• Passage planning by students with oversight</li>
                      <li>• Sail hoists, trimming, reefing, points of sail</li>
                      <li>• Helming techniques on a catamaran</li>
                      <li>• Anchoring: scope, holding, anchor watch</li>
                      <li>• Evening theory: COLREGs and lookout</li>
                    </ul>
                    <div className="rounded-lg bg-secondary/10 px-4 py-2">
                      <span className="text-sm font-medium text-secondary">Focus: Sail handling competence, situational awareness, anchoring as skipper</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Day 3 */}
            <Card className="border-2 border-primary/10">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-xl font-bold text-primary">3</div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-bold text-primary">Navigation & Pilotage</h3>
                    <p className="mb-3 text-sm text-muted-foreground">Norman Island → Cooper Island</p>
                    <ul className="mb-4 grid gap-1 text-sm text-muted-foreground md:grid-cols-2">
                      <li>• Chartwork, course to steer, leeway, variation</li>
                      <li>• Visual pilotage into anchorages</li>
                      <li>• GPS and electronic aids with paper charts</li>
                      <li>• Man overboard drills under sail and engine</li>
                      <li>• Evening: passage planning for ICC</li>
                    </ul>
                    <div className="rounded-lg bg-secondary/10 px-4 py-2">
                      <span className="text-sm font-medium text-secondary">Focus: Daytime navigation, pilotage in confined waters, emergency response</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Day 4 */}
            <Card className="border-2 border-primary/10">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-xl font-bold text-primary">4</div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-bold text-primary">Passage Making & Skipper Responsibility</h3>
                    <p className="mb-3 text-sm text-muted-foreground">Cooper Island → Virgin Gorda area</p>
                    <ul className="mb-4 grid gap-1 text-sm text-muted-foreground md:grid-cols-2">
                      <li>• Longer leg with rotating skipper roles</li>
                      <li>• Watchkeeping, lookout, log keeping</li>
                      <li>• Sail changes for wind shifts and angles</li>
                      <li>• Weather interpretation and decision making</li>
                      <li>• Mooring pick-up and close-quarters handling</li>
                    </ul>
                    <div className="rounded-lg bg-secondary/10 px-4 py-2">
                      <span className="text-sm font-medium text-secondary">Focus: Command decision making, passage execution, leadership</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Day 5 */}
            <Card className="border-2 border-primary/10">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-xl font-bold text-primary">5</div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-bold text-primary">Advanced Handling & Emergencies</h3>
                    <p className="mb-3 text-sm text-muted-foreground">Virgin Gorda → Jost Van Dyke</p>
                    <ul className="mb-4 grid gap-1 text-sm text-muted-foreground md:grid-cols-2">
                      <li>• Close-quarters manoeuvring under power</li>
                      <li>• Berthing techniques for catamarans</li>
                      <li>• Emergency procedures: fire, flooding, steering</li>
                      <li>• Towing considerations and risk assessment</li>
                      <li>• ICC oral prep: rules, buoyage, responsibilities</li>
                    </ul>
                    <div className="rounded-lg bg-secondary/10 px-4 py-2">
                      <span className="text-sm font-medium text-secondary">Focus: Boat control, emergency management, skipper judgment</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Day 6 */}
            <Card className="border-2 border-primary/10">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-xl font-bold text-primary">6</div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-bold text-primary">Consolidation & ICC Preparation</h3>
                    <p className="mb-3 text-sm text-muted-foreground">Jost Van Dyke → Outer anchorages → Sopers Hole</p>
                    <ul className="mb-4 grid gap-1 text-sm text-muted-foreground md:grid-cols-2">
                      <li>• Students plan and execute the day's passage</li>
                      <li>• Instructor reduces input to observer role</li>
                      <li>• Final MOB and anchoring exercises</li>
                      <li>• Return sail to Sopers Hole</li>
                      <li>• Evening ICC briefing and readiness checks</li>
                    </ul>
                    <div className="rounded-lg bg-secondary/10 px-4 py-2">
                      <span className="text-sm font-medium text-secondary">Focus: Independent skippering, consistency, final skill polish</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Day 7 */}
            <Card className="border-2 border-secondary">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-xl font-bold text-primary">7</div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-bold text-primary">ICC Practical Assessment & Debrief</h3>
                    <p className="mb-3 text-sm text-muted-foreground">Sopers Hole, Tortola</p>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <h4 className="mb-2 font-medium text-primary">Morning — Assessment</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• ICC practical assessment by qualified examiner</li>
                          <li>• Close-quarters handling demonstration</li>
                          <li>• Navigation questioning</li>
                          <li>• COLREGs and safety knowledge</li>
                          <li>• Command and situational awareness</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="mb-2 font-medium text-primary">Afternoon — Completion</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Individual debriefs and logbook sign-off</li>
                          <li>• ICC paperwork completion (subject to pass)</li>
                          <li>• Course wrap-up and next-steps guidance</li>
                          <li>• Departure</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* ICC Notes */}
          <Card className="mx-auto mt-8 max-w-5xl border-2 border-primary/10">
            <CardContent className="p-6">
              <h3 className="mb-3 text-xl font-bold text-primary">Notes on ICC Delivery in the BVI</h3>
              <ul className="grid gap-2 text-sm text-muted-foreground md:grid-cols-2">
                <li>• ICC assessment can be conducted without tidal waters</li>
                <li>• The BVI offers ideal controlled conditions for assessment</li>
                <li>• Night hours not required for ICC (unlike Yachtmaster)</li>
                <li>• Candidates must be 18+ and demonstrate skipper competence</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-primary md:text-5xl">Program Pricing</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">All-inclusive training with professional instruction</p>
          </div>

          <div className="mx-auto max-w-3xl space-y-8">
            {/* Standard Package */}
            <Card className="border-2 border-secondary shadow-xl">
              <CardContent className="p-8">
                <div className="mb-6 text-center">
                  <p className="text-sm font-bold uppercase tracking-wide text-secondary">7-Day Day Skipper Program</p>
                  <p className="mt-2 text-4xl font-bold text-primary">$4,500 <span className="text-lg font-normal text-muted-foreground">per person</span></p>
                  <p className="mt-1 text-sm text-muted-foreground">Based on shared double cabin</p>
                </div>

                <div className="mb-8 grid gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="mb-3 font-bold text-primary">Included</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-secondary" />7 nights accommodation aboard</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-secondary" />All meals and provisions</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-secondary" />Professional RYA instructor</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-secondary" />ICC assessment fee</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-secondary" />Fuel and marina fees</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-secondary" />Training materials</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-secondary" />Logbook sign-off</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-3 font-bold text-primary">Not Included</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Flights to/from Tortola</li>
                      <li>• Meals ashore</li>
                      <li>• Shore excursions</li>
                      <li>• Personal travel insurance</li>
                    </ul>
                  </div>
                </div>

                <Button
                  variant="gold"
                  size="lg"
                  className="w-full"
                  onClick={() => {
                    setPreset({ passage: "7-Day Day Skipper Program", pkg: "standard" });
                    setDialogOpen(true);
                  }}
                >
                  Reserve Your Spot
                </Button>
              </CardContent>
            </Card>

            {/* VIP Package */}
            <Card className="border-2 border-yellow-400 shadow-xl">
              <CardContent className="p-8">
                <div className="mb-6 text-center">
                  <p className="text-sm font-bold uppercase tracking-wide text-yellow-600">VIP Day Skipper Experience</p>
                  <p className="mt-2 text-4xl font-bold text-primary">$12,000</p>
                  <p className="mt-1 text-sm text-muted-foreground">VIP package details below</p>
                </div>

                <div className="mb-8 grid gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="mb-3 font-bold text-primary">VIP Inclusions</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-yellow-600" />2 people sharing an owner's version cabin</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-yellow-600" />Max 3:1 instructor-to-student ratio</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-3 font-bold text-primary">All Standard Inclusions</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• 7 nights accommodation aboard</li>
                      <li>• All meals and provisions</li>
                      <li>• Professional RYA instructor</li>
                      <li>• ICC assessment fee</li>
                      <li>• Fuel and marina fees</li>
                      <li>• Training materials</li>
                      <li>• Logbook sign-off</li>
                    </ul>
                  </div>
                </div>

                <Button
                  variant="gold"
                  size="lg"
                  className="w-full"
                  onClick={() => {
                    setPreset({ passage: "7-Day Day Skipper Program", pkg: "vip" });
                    setDialogOpen(true);
                  }}
                >
                  Enquire About VIP
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold text-primary md:text-5xl">Day Skipper & ICC FAQs</h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">Clear answers for skippers training in the British Virgin Islands</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-2 border-primary/10">
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-bold text-primary">What's the difference between Day Skipper and ICC?</h3>
                  <p className="text-muted-foreground">Day Skipper is a practical training standard that prepares you to safely skipper in daylight within familiar waters. The ICC is a recognition of competence used internationally for chartering; we can conduct ICC assessment alongside the Day Skipper practical in the BVI.</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary/10">
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-bold text-primary">Do I need tidal waters to take the ICC in the BVI?</h3>
                  <p className="text-muted-foreground">No. ICC assessment can be completed without tidal waters provided you demonstrate navigation, COLREGs, boat handling, and safety standards. The BVI offers ideal controlled conditions for assessing competence.</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary/10">
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-bold text-primary">What are the prerequisites and minimum age?</h3>
                  <p className="text-muted-foreground">Competent Crew or equivalent experience is recommended. For ICC assessment, candidates are typically 18+. A reasonable level of fitness and willingness to learn is expected.</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary/10">
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-bold text-primary">Is this taught on catamarans? Why Bali?</h3>
                  <p className="text-muted-foreground">Yes. Training is conducted aboard modern Bali catamarans. Their open-space design, systems layout, and handling characteristics are ideal for owner-operators and Caribbean charter environments.</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary/10">
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-bold text-primary">What license do I need to charter a yacht in the Caribbean?</h3>
                  <p className="text-muted-foreground">Requirements vary by jurisdiction and charter company. Day Skipper plus ICC is widely accepted for bareboat charter. We can advise on local compliance and insurance expectations.</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary/10">
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-bold text-primary">Is there a VIP option?</h3>
                  <p className="text-muted-foreground">Yes. VIP is $12,000 for two people sharing an owner's version cabin with a max 3:1 instructor-to-student ratio. All standard inclusions apply.</p>
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
                  name: "What's the difference between Day Skipper and ICC?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Day Skipper is practical training preparing you to skipper in daylight within familiar waters. ICC is an international recognition of competence for chartering; we can conduct ICC assessment alongside Day Skipper in the BVI.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do I need tidal waters to take the ICC in the BVI?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No. ICC assessment can be completed without tidal waters provided you meet navigation, COLREGs, boat handling, and safety standards.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the prerequisites and minimum age?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Competent Crew or equivalent experience recommended; ICC candidates are typically 18+. A reasonable level of fitness is expected.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is this taught on catamarans? Why Bali?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes – training is aboard modern Bali catamarans, ideal for owner-operators and Caribbean charter systems and handling.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What license do I need to charter a yacht in the Caribbean?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Day Skipper plus ICC is widely accepted for bareboat charter; specifics vary by island and charter company.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is there a VIP option?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes – VIP is $12,000 for 2 people sharing an owner's version cabin with max 3:1 instructor-to-student ratio, including all standard inclusions.",
                  },
                },
              ],
            }),
          }}
        />
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Ready to Become a Day Skipper?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
            Contact us to check availability and reserve your place on our next program
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="secondary"
              size="lg"
              onClick={() => {
                setPreset({ passage: "7-Day Day Skipper Program", pkg: "" });
                setDialogOpen(true);
              }}
            >
              Enquire Now
            </Button>
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
        preset={preset}
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
