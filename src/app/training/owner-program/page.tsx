"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Mail, MapPin, Phone, Ship, Calendar, Award, Users, ArrowLeft, Briefcase, Settings, FileText, Handshake, Download } from "lucide-react";
import Link from "next/link";
import MobileNav from "@/components/MobileNav";
import Logo from "@/components/Logo";
import EnquiryDialog from "../EnquiryDialog";
import { useState } from "react";
import { generateOwnerTransitionPDF } from "@/lib/pdf/owner-transition";

export default function OwnerProgramPage() {
  const [dialogOpen, setDialogOpen] = useState(false);

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
            <Link href="/training" className="text-sm font-medium uppercase tracking-wide text-foreground transition-colors hover:text-secondary">Training</Link>
            <Link href="/charter-ownership" className="text-sm font-medium uppercase tracking-wide text-foreground transition-colors hover:text-secondary">Charter Ownership</Link>
            <Link href="/#contact" className="text-sm font-medium uppercase tracking-wide text-foreground transition-colors hover:text-secondary">Contact</Link>
          </nav>
          <MobileNav currentPage="Training" variant="light" />
        </div>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://bali-catamarans.hr/images/ownership/yacht-images/bali-48-open-space/bali-48-open-space-main.jpg)',
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
            <Briefcase className="h-5 w-5 text-secondary" />
            <span className="text-sm font-bold uppercase tracking-wide text-secondary">Charter Ownership</span>
          </div>
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Owner Transition
            <br />
            <span className="text-secondary">Program</span>
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-base leading-relaxed sm:text-lg md:text-2xl">
            Structured owner training combined with charter ownership onboarding —
            commercially realistic, not just recreational sailing.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <Button variant="gold" size="lg" onClick={() => setDialogOpen(true)}>Request Program Details</Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <a href="#phases">View Program Phases</a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary"
              onClick={() => generateOwnerTransitionPDF()}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Program PDF
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
                <p className="text-muted-foreground">7-10 Days (Modular)</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-primary/10">
              <CardContent className="p-6 text-center">
                <MapPin className="mx-auto mb-3 h-8 w-8 text-secondary" />
                <h3 className="mb-1 text-lg font-bold text-primary">Location</h3>
                <p className="text-muted-foreground">British Virgin Islands</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-primary/10">
              <CardContent className="p-6 text-center">
                <Ship className="mx-auto mb-3 h-8 w-8 text-secondary" />
                <h3 className="mb-1 text-lg font-bold text-primary">Vessel</h3>
                <p className="text-muted-foreground">Your Cat or Charter-Spec</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-primary/10">
              <CardContent className="p-6 text-center">
                <Handshake className="mx-auto mb-3 h-8 w-8 text-secondary" />
                <h3 className="mb-1 text-lg font-bold text-primary">Outcome</h3>
                <p className="text-muted-foreground">Charter-Ready Transition</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Program Description */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-center text-4xl font-bold text-primary md:text-5xl">More Than Sailing Lessons</h2>
            <p className="mb-8 text-center text-lg leading-relaxed text-muted-foreground">
              This is not a "course" — it is a transition into ownership and revenue operation.
              Our Owner Transition Program prepares you for the commercial realities of charter
              yacht ownership, combining practical skipper training with comprehensive business onboarding.
            </p>

            <Card className="border-2 border-primary/10">
              <CardContent className="p-8">
                <h3 className="mb-4 text-xl font-bold text-primary">Program Outcomes</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                    <span className="text-muted-foreground">Owner confidence as skipper or informed non-skipper</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                    <span className="text-muted-foreground">Safe, insurable charter-ready vessel</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                    <span className="text-muted-foreground">Seamless handover into charter operations</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                    <span className="text-muted-foreground">Clear understanding of financial, legal, and operational realities</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Program Phases */}
      <section id="phases" className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-primary md:text-5xl">Program Phases</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">A structured transition from purchase to profitable operation</p>
          </div>

          <div className="mx-auto max-w-5xl space-y-6">
            {/* Phase 1 */}
            <Card className="border-2 border-primary/10">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-xl font-bold text-primary">1</div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-bold text-primary">Owner Orientation & Expectations (Day 1)</h3>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <h4 className="mb-2 font-medium text-primary">Objectives</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Align owner goals with commercial reality</li>
                          <li>• Establish roles, authority, and decision boundaries</li>
                          <li>• Remove surprises early</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="mb-2 font-medium text-primary">Content</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Charter ownership models: owner-use vs revenue-first</li>
                          <li>• Realistic income expectations and seasonality</li>
                          <li>• Owner vs charter manager responsibilities</li>
                          <li>• Charter standards, inspections, and audits</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 rounded-lg bg-secondary/10 px-4 py-2">
                      <span className="text-sm font-medium text-secondary">Key Outcome: Owner understands how charter boats are actually run, not how brochures describe them.</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Phase 2 */}
            <Card className="border-2 border-primary/10">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-xl font-bold text-primary">2</div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-bold text-primary">Vessel Systems & Risk Awareness (Days 2–3)</h3>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <h4 className="mb-2 font-medium text-primary">Systems Training (Hands-on)</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Engines, sail drives, and fuel systems</li>
                          <li>• Electrical systems, batteries, charging, inverters</li>
                          <li>• Watermakers, pumps, heads, and plumbing</li>
                          <li>• Navigation systems, autopilot, radar, AIS</li>
                          <li>• Safety systems: fire, bilge, life-saving equipment</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="mb-2 font-medium text-primary">Risk and Cost Awareness</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• What breaks first on charter boats and why</li>
                          <li>• Preventative maintenance vs reactive repair</li>
                          <li>• Charter wear-and-tear expectations</li>
                          <li>• Owner-caused damage vs charter liability</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 rounded-lg bg-secondary/10 px-4 py-2">
                      <span className="text-sm font-medium text-secondary">Key Outcome: Owner can speak intelligently with engineers, crew, and managers.</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Phase 3 */}
            <Card className="border-2 border-primary/10">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-xl font-bold text-primary">3</div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-bold text-primary">Owner as Skipper (Optional; Days 4–6)</h3>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <h4 className="mb-2 font-medium text-primary">Core Skipper Competencies</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Close-quarters handling on a catamaran</li>
                          <li>• Anchoring, mooring, and med-moor briefing</li>
                          <li>• Sail handling with charter loads</li>
                          <li>• Emergency drills: MOB, fire, loss of systems</li>
                          <li>• Passage planning for charter itineraries</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="mb-2 font-medium text-primary">Charter-Specific Focus</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Guest safety briefings</li>
                          <li>• Decision making with paying guests onboard</li>
                          <li>• Managing fatigue, weather, and guest expectations</li>
                          <li>• Knowing when not to sail</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 rounded-lg bg-secondary/10 px-4 py-2">
                      <span className="text-sm font-medium text-secondary">Key Outcome: Owner is safe, credible, and insurable as skipper — or clearly understands why not to skipper.</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Phase 4 */}
            <Card className="border-2 border-primary/10">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-xl font-bold text-primary">4</div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-bold text-primary">Charter Operations Reality (Days 4–6)</h3>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <h4 className="mb-2 font-medium text-primary">Operational Reality Training</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Charter turnarounds and timelines</li>
                          <li>• Cleaning, laundry, presentation standards</li>
                          <li>• Provisioning systems and cost control</li>
                          <li>• Guest handovers and check-in process</li>
                          <li>• Incident reporting and documentation</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="mb-2 font-medium text-primary">Crew Integration</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• How professional crew operate</li>
                          <li>• Owner interference pitfalls</li>
                          <li>• Performance expectations and boundaries</li>
                          <li>• When owners should and should not intervene</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 rounded-lg bg-secondary/10 px-4 py-2">
                      <span className="text-sm font-medium text-secondary">Key Outcome: Owner becomes an asset to the operation, not a liability.</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Phase 5 */}
            <Card className="border-2 border-primary/10">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-xl font-bold text-primary">5</div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-bold text-primary">Financial, Legal & Tax Briefing (Day 7 or separate)</h3>
                    <div className="grid gap-6 md:grid-cols-3">
                      <div>
                        <h4 className="mb-2 font-medium text-primary">Financial Structure</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Charter income flows</li>
                          <li>• Expense categories and cash calls</li>
                          <li>• Maintenance reserves</li>
                          <li>• CapEx vs OpEx</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="mb-2 font-medium text-primary">Legal & Compliance</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Flag state requirements</li>
                          <li>• Charter licensing and local compliance</li>
                          <li>• Insurance conditions and exclusions</li>
                          <li>• Owner liability exposure</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="mb-2 font-medium text-primary">Tax & Structuring</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Depreciation concepts</li>
                          <li>• Business vs personal use</li>
                          <li>• Documentation discipline</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 rounded-lg bg-secondary/10 px-4 py-2">
                      <span className="text-sm font-medium text-secondary">Key Outcome: Owner understands business mechanics to ask the right questions.</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Phase 6 */}
            <Card className="border-2 border-secondary">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-xl font-bold text-primary">6</div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-bold text-primary">Handover to Charter Management (Final Day)</h3>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <h4 className="mb-2 font-medium text-primary">Final Checks</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Vessel condition sign-off</li>
                          <li>• Inventory and spares confirmation</li>
                          <li>• Owner-use calendar rules</li>
                          <li>• Communication protocols agreed</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="mb-2 font-medium text-primary">Transition</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Introduction to management team</li>
                          <li>• Defined reporting schedule</li>
                          <li>• First charter readiness confirmation</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 rounded-lg bg-secondary/10 px-4 py-2">
                      <span className="text-sm font-medium text-secondary">Key Outcome: Boat enters charter service cleanly and professionally.</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Optional Enhancements */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-8 lg:grid-cols-2">
              <Card className="border-2 border-secondary">
                <CardContent className="p-8">
                  <h3 className="mb-4 text-xl font-bold text-primary">Optional Enhancements</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                      <span>ICC or Day Skipper assessment during training</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                      <span>Owner logbook sign-off</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                      <span>Post-season performance review session</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                      <span>Annual owner refresher sail</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                      <span>Remote quarterly financial and maintenance review</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/10">
                <CardContent className="p-8">
                  <h3 className="mb-4 text-xl font-bold text-primary">Program Benefits</h3>
                  <p className="mb-4 text-sm text-muted-foreground">This program directly reduces:</p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                      <span>Insurance issues and liability exposure</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                      <span>Crew turnover and management friction</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                      <span>Owner frustration and unrealistic expectations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                      <span>Unexpected costs and maintenance surprises</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                      <span>Reputation damage from unprepared ownership</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Positioning */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-primary md:text-5xl">A Premium Onboarding Service</h2>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
              This is positioned as an "Owner Transition Program", not sailing lessons.
              It's a risk-reduction investment, a requirement for first-time charter owners,
              and a premium onboarding service bundled with charter management.
            </p>
            <div className="grid gap-6 sm:grid-cols-3">
              <Card className="border-2 border-primary/10">
                <CardContent className="p-6 text-center">
                  <Settings className="mx-auto mb-3 h-8 w-8 text-secondary" />
                  <h4 className="mb-2 font-bold text-primary">Risk Reduction</h4>
                  <p className="text-sm text-muted-foreground">Protect your investment from day one</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary/10">
                <CardContent className="p-6 text-center">
                  <FileText className="mx-auto mb-3 h-8 w-8 text-secondary" />
                  <h4 className="mb-2 font-bold text-primary">Compliance Ready</h4>
                  <p className="text-sm text-muted-foreground">Meet insurance and regulatory requirements</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary/10">
                <CardContent className="p-6 text-center">
                  <Handshake className="mx-auto mb-3 h-8 w-8 text-secondary" />
                  <h4 className="mb-2 font-bold text-primary">Smooth Handover</h4>
                  <p className="text-sm text-muted-foreground">Professional transition to charter ops</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold text-primary md:text-5xl">Owner Transition FAQs</h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">What first-time charter owners ask before handover</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-2 border-primary/10">
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-bold text-primary">Is this program required for charter ownership?</h3>
                  <p className="text-muted-foreground">While not always mandatory, it's strongly recommended by charter managers and insurers to reduce risk and ensure a smooth onboarding into commercial operations.</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary/10">
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-bold text-primary">What's covered beyond sailing skills?</h3>
                  <p className="text-muted-foreground">Vessel systems, operations, crew standards, financial structure, legal and insurance requirements, and communication protocols with the charter manager.</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary/10">
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-bold text-primary">Can I become insurable as skipper?</h3>
                  <p className="text-muted-foreground">The program helps you meet competence standards. Final approval is at the discretion of insurers and charter management; we provide guidance and documentation.</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary/10">
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-bold text-primary">If I don't skipper, is it still useful?</h3>
                  <p className="text-muted-foreground">Yes. Non-skipper owners gain vital knowledge about systems, risk, and commercial expectations, enabling better decisions and communication with the crew and manager.</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary/10">
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-bold text-primary">How do finances and tax considerations factor in?</h3>
                  <p className="text-muted-foreground">We cover high-level financial and tax structure considerations to help you ask the right questions with your CPA and legal advisors.</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary/10">
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-bold text-primary">What defines readiness for first charter?</h3>
                  <p className="text-muted-foreground">A signed-off vessel condition, inventory verification, agreed communication and reporting standards, and confirmation from the management team.</p>
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
                  name: "Is this program required for charter ownership?",
                  acceptedAnswer: { "@type": "Answer", text: "Not always mandatory but often recommended by charter managers and insurers to reduce risk and ensure a smooth onboarding." },
                },
                {
                  "@type": "Question",
                  name: "What's covered beyond sailing skills?",
                  acceptedAnswer: { "@type": "Answer", text: "Vessel systems, operations, crew standards, financial and legal structure, insurance, and communication protocols." },
                },
                {
                  "@type": "Question",
                  name: "Can I become insurable as skipper?",
                  acceptedAnswer: { "@type": "Answer", text: "The program helps you meet competence standards. Final skipper approval is at insurer and management discretion." },
                },
                {
                  "@type": "Question",
                  name: "If I don't skipper, is it still useful?",
                  acceptedAnswer: { "@type": "Answer", text: "Yes. Non-skipper owners gain systems, risk, and operational knowledge to make better decisions and communicate with crew and managers." },
                },
                {
                  "@type": "Question",
                  name: "How do finances and tax considerations factor in?",
                  acceptedAnswer: { "@type": "Answer", text: "We cover high-level financial and tax structure considerations so you can engage your CPA and legal advisors effectively." },
                },
                {
                  "@type": "Question",
                  name: "What defines readiness for first charter?",
                  acceptedAnswer: { "@type": "Answer", text: "Signed-off vessel condition, inventory, agreed communications, and management confirmation of readiness." },
                },
              ],
            }),
          }}
        />
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Ready to Transition into Ownership?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
            Contact us to discuss your yacht purchase and custom onboarding program
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="secondary" size="lg" onClick={() => setDialogOpen(true)}>Request Program Details</Button>
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
        preset={{ passage: "Owner Transition Program" }}
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
                <li><Link href="/charter" className="transition-colors hover:text-secondary">Yacht Charters</Link></li>
                <li><Link href="/charter/ownership" className="transition-colors hover:text-secondary">Charter Ownership</Link></li>
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
