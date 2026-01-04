"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calculator, CheckCircle2, DollarSign, Mail, MapPin, Phone, Ship, Star, TrendingUp, Users, Building2, FileText, AlertTriangle, Briefcase } from "lucide-react";
import Link from "next/link";
import MobileNav from "@/components/MobileNav";
import Logo from "@/components/Logo";
import ParallaxHero from "@/components/ParallaxHero";
import { useState } from "react";

export default function CharterOwnershipPage() {
  const [open, setOpen] = useState(false);

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
            <Link href="/charter" className="text-sm font-medium uppercase tracking-wide text-muted-foreground transition-colors hover:text-secondary">Yacht Charters</Link>
            <Link href="/training" className="text-sm font-medium uppercase tracking-wide text-muted-foreground transition-colors hover:text-secondary">Training</Link>
            <Link href="/charter-ownership" className="text-sm font-medium uppercase tracking-wide text-secondary">Charter Ownership</Link>
            <Link href="/#contact" className="text-sm font-medium uppercase tracking-wide text-muted-foreground transition-colors hover:text-secondary">Contact</Link>
          </nav>
          <MobileNav currentPage="Charter Ownership" variant="light" />
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

      {/* Hero Section with Parallax */}
      <ParallaxHero
        imageSrc="/hero/charter-ownership.jpg"
        imageAlt="Family aboard Bali catamaran in the BVI"
        title="BVI Charter Ownership Program"
        subtitle="Turn your Bali catamaran into a profitable charter business in the British Virgin Islands. Professional charter management, proven income potential, and significant tax advantages."
        minHeight="75vh"
      >
        <div className="mb-6 inline-block rounded-full bg-secondary/20 px-6 py-2 backdrop-blur-sm">
          <span className="text-sm font-bold uppercase tracking-wide text-secondary">BVI Charter Catamaran Investment</span>
        </div>
        <div className="mx-auto mb-8 max-w-2xl text-base text-white/80">
          Partner with My Caribbean Charters (MCC) Clearinghouse for secure bookings and transparent financial handling
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="secondary" size="lg" asChild>
            <Link href="/charter-calculator">Calculate Your Charter ROI</Link>
          </Button>
          <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-primary" onClick={() => setOpen(true)}>
            Request Investment Guide
          </Button>
        </div>
      </ParallaxHero>

      {/* Investment Guide Dialog - Netlify Forms compatible */}
      {open && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4" role="dialog" aria-modal="true">
          <div className="w-full max-w-xl rounded-lg bg-white p-6 shadow-2xl">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-bold text-primary">Request Investment Guide</h3>
              <button aria-label="Close" className="rounded p-2 text-muted-foreground hover:text-primary" onClick={() => setOpen(false)}>✕</button>
            </div>
            <form name="investment-guide" method="POST" action="/api/investment-guide" className="space-y-4">
              <input type="hidden" name="_source" value="Charter Ownership Investment Guide" />
              <input type="text" name="website" className="hidden" tabIndex={-1} aria-hidden="true" />

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-primary">First Name *</label>
                  <input className="flex h-11 w-full rounded-sm border border-input bg-background px-4 py-2 text-sm" name="firstName" required />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-primary">Last Name *</label>
                  <input className="flex h-11 w-full rounded-sm border border-input bg-background px-4 py-2 text-sm" name="lastName" required />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-primary">Email *</label>
                  <input type="email" className="flex h-11 w-full rounded-sm border border-input bg-background px-4 py-2 text-sm" name="email" required />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-primary">Phone</label>
                  <input type="tel" className="flex h-11 w-full rounded-sm border border-input bg-background px-4 py-2 text-sm" name="phone" />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-primary">Message</label>
                <textarea className="flex min-h-[120px] w-full rounded-sm border border-input bg-background px-4 py-2 text-sm" name="message" placeholder="Tell us about your goals and timeline..." />
              </div>

              <div className="flex items-start gap-2">
                <input type="checkbox" id="privacy-consent" className="mt-1 h-4 w-4 rounded border-gray-300 text-secondary" name="consent" required />
                <label htmlFor="privacy-consent" className="text-sm text-muted-foreground">I agree to receive communications about charter ownership. Privacy respected.</label>
              </div>

              <div className="flex gap-3">
                <Button type="submit" variant="gold" className="flex-1">Submit</Button>
                <Button type="button" variant="outline" className="flex-1" onClick={() => setOpen(false)}>Cancel</Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* How It Works */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-primary md:text-5xl">
              How the MCC Clearinghouse Program Works
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Professional charter management designed to complement your yacht ownership
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <Card className="border-2 border-primary/10">
              <CardContent className="p-8">
                <div className="mb-4 text-4xl font-bold text-secondary">1</div>
                <h3 className="mb-4 text-xl font-bold text-primary">List Your Yacht</h3>
                <p className="leading-relaxed text-muted-foreground">
                  Your yacht is professionally promoted through CYA (Central Yacht Agent), Charter Index, Ankor database, MCC's website, social media, newsletters, and broker networks. We create professional e-brochures showcasing your yacht, crew, specs, and guest reviews.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/10">
              <CardContent className="p-8">
                <div className="mb-4 text-4xl font-bold text-secondary">2</div>
                <h3 className="mb-4 text-xl font-bold text-primary">Secure Bookings & Payments</h3>
                <p className="leading-relaxed text-muted-foreground">
                  MCC manages your calendar, handles all charter contracts using industry-standard CYBA E-Contracts, and collects payments through secure CYBA escrow accounts in American banks. You retain the right to book charters independently without fees if you manage contracts and payments directly.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/10">
              <CardContent className="p-8">
                <div className="mb-4 text-4xl font-bold text-secondary">3</div>
                <h3 className="mb-4 text-xl font-bold text-primary">Receive Payment & Support</h3>
                <p className="leading-relaxed text-muted-foreground">
                  Charter funds are released 45 days before charter start or upon receipt of final payment. You receive monthly income/expense statements and future booking schedules. MCC provides crew training assistance, provisioning support, and operational guidance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-primary md:text-5xl">
              MCC Clearinghouse Program Benefits
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Professional charter management designed to complement your yacht ownership with peace of mind
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-2 border-primary/10">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-secondary/10 p-4">
                    <TrendingUp className="h-8 w-8 text-secondary" />
                  </div>
                </div>
                <h3 className="mb-3 text-lg font-bold text-primary">Exclusive Clearinghouse</h3>
                <p className="text-sm text-muted-foreground">
                  MCC acts as your exclusive clearinghouse for charter bookings, ensuring professional representation in the Caribbean market.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/10">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-secondary/10 p-4">
                    <Ship className="h-8 w-8 text-secondary" />
                  </div>
                </div>
                <h3 className="mb-3 text-lg font-bold text-primary">Maximum Visibility</h3>
                <p className="text-sm text-muted-foreground">
                  Featured in CYA, Charter Index, Ankor database, plus MCC's website, social media, and professional broker networks.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/10">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-secondary/10 p-4">
                    <DollarSign className="h-8 w-8 text-secondary" />
                  </div>
                </div>
                <h3 className="mb-3 text-lg font-bold text-primary">Secure CYBA Escrow</h3>
                <p className="text-sm text-muted-foreground">
                  All charter funds collected via CYBA escrow accounts in American banks, ensuring full transparency and security.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/10">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-secondary/10 p-4">
                    <Users className="h-8 w-8 text-secondary" />
                  </div>
                </div>
                <h3 className="mb-3 text-lg font-bold text-primary">Owner Flexibility</h3>
                <p className="text-sm text-muted-foreground">
                  Retain the right to book charters independently without fees, as long as you handle contracts and funds directly.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 rounded-lg bg-gradient-to-r from-primary to-primary/90 p-8 text-white md:p-12">
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div>
                <h3 className="mb-6 text-2xl font-bold">Services Included</h3>
                <ul className="grid gap-3 md:grid-cols-2">
                  <li className="flex items-start gap-3">
                    <Star className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                    <span>Professional e-brochures with photos, video, crew profiles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                    <span>Full calendar & reservation management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                    <span>CYBA E-Contract standard contracts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                    <span>Monthly income/expense statements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                    <span>Crew training & provisioning assistance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                    <span>Operational support for smooth charters</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  Download Program Guide
                </Button>
                <Button variant="outline" size="lg" className="w-full border-white text-white hover:bg-white hover:text-primary sm:w-auto" asChild>
                  <Link href="/charter-calculator">Calculate Your ROI</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Yacht As A Business Section - NEW */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <div className="mb-4 inline-block rounded-full bg-secondary/10 px-6 py-2">
                <span className="text-sm font-bold uppercase tracking-wide text-secondary">Smart Ownership Strategy</span>
              </div>
              <h2 className="mb-4 text-4xl font-bold text-primary md:text-5xl">
                Yacht As A Business Program
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
                Structure your yacht ownership as a legitimate business to access substantial tax advantages while generating charter income. This is the smartest way to own a yacht for US buyers in high income tax brackets.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h3 className="mb-6 text-2xl font-bold text-primary">What Is A Yacht Business?</h3>
                <p className="mb-6 leading-relaxed text-muted-foreground">
                  A yacht business is structured much like any other for-profit business. By placing your yacht into a corporation (usually an LLC) and operating it actively for profit—either directly or through a charter management company like MCC—you can generate substantial tax advantages that offset the cost of ownership.
                </p>
                <p className="mb-6 leading-relaxed text-muted-foreground">
                  Most yacht owners use this program as an avenue to acquire their dream cruising catamaran at a huge discount. Others use the charter revenue together with business tax deductions to reduce the costs of owning a luxury yacht they can enjoy now.
                </p>

                <div className="rounded-lg border-2 border-secondary/20 bg-secondary/5 p-6">
                  <h4 className="mb-4 flex items-center gap-2 text-lg font-bold text-primary">
                    <Briefcase className="h-5 w-5 text-secondary" />
                    Key Benefits
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                      <span className="text-muted-foreground">Cover all ownership costs including mortgage payments with income and tax advantages</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                      <span className="text-muted-foreground">Enjoy owner use of your vessel while generating charter revenue</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                      <span className="text-muted-foreground">Asset protection through LLC ownership structure</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                      <span className="text-muted-foreground">"Owner Operator" option for those wanting a career change</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="mb-6 text-2xl font-bold text-primary">How To Set Up A Yacht Business</h3>
                <div className="space-y-4">
                  <Card className="border-2 border-primary/10">
                    <CardContent className="flex items-start gap-4 p-5">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-secondary/10 text-lg font-bold text-secondary">1</div>
                      <div>
                        <h4 className="mb-1 font-bold text-primary">Establish Business Purpose</h4>
                        <p className="text-sm text-muted-foreground">Define your charter operation: luxury bareboat, crewed charter, dive/adventure charters, or educational charters.</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-primary/10">
                    <CardContent className="flex items-start gap-4 p-5">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-secondary/10 text-lg font-bold text-secondary">2</div>
                      <div>
                        <h4 className="mb-1 font-bold text-primary">Form an LLC</h4>
                        <p className="text-sm text-muted-foreground">Create a limited liability company to hold the yacht, providing asset protection and business structure for tax benefits.</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-primary/10">
                    <CardContent className="flex items-start gap-4 p-5">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-secondary/10 text-lg font-bold text-secondary">3</div>
                      <div>
                        <h4 className="mb-1 font-bold text-primary">Partner With Charter Management</h4>
                        <p className="text-sm text-muted-foreground">Work with MCC Clearinghouse or similar professional management to ensure active business operation and compliance.</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-primary/10">
                    <CardContent className="flex items-start gap-4 p-5">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-secondary/10 text-lg font-bold text-secondary">4</div>
                      <div>
                        <h4 className="mb-1 font-bold text-primary">Maintain Proper Documentation</h4>
                        <p className="text-sm text-muted-foreground">Keep detailed business records demonstrating active charter operations as required by the IRS for active LLCs.</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Important Warning */}
                <div className="mt-6 rounded-lg border-2 border-amber-200 bg-amber-50 p-5">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="mt-0.5 h-6 w-6 flex-shrink-0 text-amber-600" />
                    <div>
                      <h4 className="mb-2 font-bold text-amber-800">Important IRS Compliance</h4>
                      <p className="text-sm text-amber-700">
                        The goal is to structure your yacht business with the <strong>intent and ability to make a profit</strong>. You cannot structure the business with a flawed plan of "limited charter" and purposely run it at a loss to avoid wear while taking tax deductions. The IRS requires genuine business activity that can withstand scrutiny.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 179 & Tax Benefits - Enhanced */}
      <section className="bg-gradient-to-br from-primary to-primary/95 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <div className="mb-4 inline-block rounded-full bg-secondary/20 px-6 py-2">
                <span className="text-sm font-bold uppercase tracking-wide text-secondary">2025 Tax Year</span>
              </div>
              <h2 className="mb-4 text-4xl font-bold md:text-5xl">
                Section 179 & Bonus Depreciation
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-white/80">
                The IRS allows businesses to deduct operating expenses and depreciate qualifying equipment purchased or financed during the tax year
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* Section 179 Details */}
              <Card className="border-0 bg-white/10 backdrop-blur">
                <CardContent className="p-8">
                  <div className="mb-6 flex items-center gap-3">
                    <FileText className="h-10 w-10 text-secondary" />
                    <h3 className="text-2xl font-bold">Section 179 Deduction</h3>
                  </div>
                  <p className="mb-6 text-white/80">
                    Section 179 of the IRS tax code allows businesses to deduct the full purchase price of qualifying equipment in the year it's placed into service, rather than depreciating it over many years.
                  </p>

                  <div className="space-y-4 rounded-lg bg-white/10 p-5">
                    <h4 className="font-bold text-secondary">2025 Tax Year Limits</h4>
                    <div className="flex justify-between border-b border-white/20 pb-3">
                      <span>Maximum Deduction Limit:</span>
                      <span className="font-bold text-secondary">$2,500,000</span>
                    </div>
                    <div className="flex justify-between border-b border-white/20 pb-3">
                      <span>Equipment Purchase Limit:</span>
                      <span className="font-bold text-secondary">$4,050,000</span>
                    </div>
                    <div className="flex justify-between pb-2">
                      <span>Deadline to Place in Service:</span>
                      <span className="font-bold text-secondary">12/31/2025</span>
                    </div>
                  </div>

                  <p className="mt-4 text-sm text-white/70">
                    * Congress made the Section 179 deduction limit permanent, providing predictability for yacht business planning.
                  </p>
                </CardContent>
              </Card>

              {/* Tax Savings Example */}
              <Card className="border-0 bg-white/10 backdrop-blur">
                <CardContent className="p-8">
                  <div className="mb-6 flex items-center gap-3">
                    <Calculator className="h-10 w-10 text-secondary" />
                    <h3 className="text-2xl font-bold">Tax Savings Example</h3>
                  </div>
                  <p className="mb-6 text-white/80">
                    Example calculation for a $1,500,000 yacht purchase placed into active charter service:
                  </p>

                  <div className="space-y-4 rounded-lg bg-white/10 p-5">
                    <div className="flex justify-between border-b border-white/20 pb-3">
                      <span>Yacht Purchase Price:</span>
                      <span className="font-bold">$1,500,000</span>
                    </div>
                    <div className="flex justify-between border-b border-white/20 pb-3">
                      <span>100% Bonus Depreciation:</span>
                      <span className="font-bold text-secondary">$1,500,000</span>
                    </div>
                    <div className="flex justify-between border-b border-white/20 pb-3">
                      <span>Tax Bracket (Example):</span>
                      <span className="font-bold">37%</span>
                    </div>
                    <div className="flex justify-between pt-2">
                      <span className="text-lg font-bold">Potential Tax Savings:</span>
                      <span className="text-2xl font-bold text-secondary">$555,000</span>
                    </div>
                  </div>

                  <div className="mt-6 rounded-lg bg-secondary/20 p-4">
                    <p className="text-center text-sm font-medium">
                      Effective Cost After Tax Savings: <span className="text-xl font-bold text-secondary">$945,000</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Deductible Expenses */}
            <div className="mt-12 rounded-lg bg-white/10 p-8 backdrop-blur">
              <h3 className="mb-6 text-center text-2xl font-bold">Deductible Business Expenses</h3>
              <p className="mb-6 text-center text-white/80">
                When your yacht serves legitimate business purposes, various expenses can be deducted:
              </p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="flex items-center gap-3 rounded-lg bg-white/10 p-4">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>Depreciation</span>
                </div>
                <div className="flex items-center gap-3 rounded-lg bg-white/10 p-4">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>Maintenance & Repairs</span>
                </div>
                <div className="flex items-center gap-3 rounded-lg bg-white/10 p-4">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>Fuel & Dockage</span>
                </div>
                <div className="flex items-center gap-3 rounded-lg bg-white/10 p-4">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>Insurance Premiums</span>
                </div>
                <div className="flex items-center gap-3 rounded-lg bg-white/10 p-4">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>Crew Wages</span>
                </div>
                <div className="flex items-center gap-3 rounded-lg bg-white/10 p-4">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>Marketing & Advertising</span>
                </div>
                <div className="flex items-center gap-3 rounded-lg bg-white/10 p-4">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>Management Fees</span>
                </div>
                <div className="flex items-center gap-3 rounded-lg bg-white/10 p-4">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>Mortgage Interest</span>
                </div>
              </div>
              <p className="mt-6 text-center text-sm italic text-white/60">
                * Tax benefits vary by individual circumstances. VIYB is not a licensed tax attorney or CPA. Consult with your tax advisor for specific benefits applicable to your situation.
              </p>
            </div>

            <div className="mt-8 text-center">
              <Button variant="secondary" size="lg" asChild>
                <Link href="/bonus-depreciation">
                  Learn More About Tax Benefits
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Benefits - Charter Income */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-bold text-primary md:text-5xl">
                Charter Income Potential
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Generate substantial revenue from your yacht when you're not using it
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <Card className="border-2 border-secondary/20">
                <CardContent className="p-8">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-full bg-secondary/10 p-3">
                      <TrendingUp className="h-8 w-8 text-secondary" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary">BVI Charter Market</h3>
                  </div>
                  <p className="mb-6 leading-relaxed text-muted-foreground">
                    The British Virgin Islands is one of the world's premier sailing destinations with strong year-round demand. Well-maintained luxury catamarans command premium rates in this market.
                  </p>
                  <div className="space-y-3">
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="font-medium text-primary">Typical Weekly Rate:</span>
                      <span className="font-bold text-secondary">$15K - $100K</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="font-medium text-primary">Charter Weeks/Year:</span>
                      <span className="font-bold text-secondary">15-30 weeks</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="font-medium text-primary">Your Revenue Share:</span>
                      <span className="font-bold text-secondary">70-80%</span>
                    </div>
                    <div className="flex justify-between pb-2">
                      <span className="font-medium text-primary">Peak Season:</span>
                      <span className="font-bold text-secondary">Dec - Apr</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-secondary/20">
                <CardContent className="p-8">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-full bg-secondary/10 p-3">
                      <Building2 className="h-8 w-8 text-secondary" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary">Combined Benefits</h3>
                  </div>
                  <p className="mb-6 leading-relaxed text-muted-foreground">
                    The "Yacht As A Business" program combines charter income with tax advantages to dramatically reduce the true cost of ownership:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                      <span className="text-muted-foreground">Charter revenue offsets operating costs</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                      <span className="text-muted-foreground">Tax deductions reduce your tax burden</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                      <span className="text-muted-foreground">Bonus depreciation provides first-year savings</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                      <span className="text-muted-foreground">Equity builds while the boat pays for itself</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                      <span className="text-muted-foreground">Personal use weeks for your own enjoyment</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <Card className="border-2 border-primary/20 bg-gradient-to-br from-secondary/5 to-primary/5">
                <CardContent className="p-8">
                  <div className="mb-4 flex justify-center">
                    <Calculator className="h-12 w-12 text-secondary" />
                  </div>
                  <h3 className="mb-3 text-2xl font-bold text-primary">Calculate Your Potential ROI</h3>
                  <p className="mb-6 text-muted-foreground">
                    Use our interactive calculator to estimate charter income, tax benefits, and return on investment
                  </p>
                  <Button variant="gold" size="lg" asChild>
                    <Link href="/charter-calculator">
                      <Calculator className="mr-2 h-5 w-5" />
                      Try the ROI Calculator
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Owner Testimonials */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-primary md:text-5xl">
              What Yacht Owners Say
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Real experiences from VIYB charter ownership program participants
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-2 border-primary/10">
              <CardContent className="p-8">
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="mb-6 italic leading-relaxed text-muted-foreground">
                  "VIYB made our dream of yacht ownership a reality. Their expertise in the charter ownership program has turned our investment into a profitable venture. We couldn't be happier!"
                </p>
                <div>
                  <p className="font-bold text-primary">Michael & Sarah Thompson</p>
                  <p className="text-sm text-muted-foreground">Bali 4.8 Owners, 2023</p>
                  <p className="mt-2 text-xs text-muted-foreground">Charter revenue: $180K/year</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/10">
              <CardContent className="p-8">
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="mb-6 italic leading-relaxed text-muted-foreground">
                  "The professionalism and attention to detail from the VIYB team was exceptional. They guided us through every step of purchasing our catamaran and setting up with MCC."
                </p>
                <div>
                  <p className="font-bold text-primary">Robert Chen</p>
                  <p className="text-sm text-muted-foreground">Charter Owner, BVI</p>
                  <p className="mt-2 text-xs text-muted-foreground">Positive ROI in year 2</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/10">
              <CardContent className="p-8">
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="mb-6 italic leading-relaxed text-muted-foreground">
                  "We used the 'Try Before You Buy' program and it was invaluable. Spending a week on the Bali 4.5 convinced us it was the perfect yacht for our family. Highly recommend VIYB!"
                </p>
                <div>
                  <p className="font-bold text-primary">Jennifer & David Martinez</p>
                  <p className="text-sm text-muted-foreground">Bali 4.5 Owners, 2024</p>
                  <p className="mt-2 text-xs text-muted-foreground">6 weeks personal use/year</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section - SEO Optimized for Featured Snippets */}
      <section className="bg-white py-20" id="faq">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-bold text-primary md:text-5xl">
                BVI Charter Ownership FAQ
              </h2>
              <p className="text-lg text-muted-foreground">
                Common questions about Bali catamaran charter investment in the British Virgin Islands
              </p>
            </div>

            <div className="space-y-6">
              <Card className="border-2 border-primary/10">
                <CardContent className="p-6">
                  <h3 className="mb-3 text-lg font-bold text-primary">How much can I earn from charter revenue?</h3>
                  <p className="leading-relaxed text-muted-foreground">
                    Charter revenue varies based on yacht size, amenities, season, and market conditions. Weekly charter rates typically range from $15K to $100K depending on the vessel. With 15-30 charter weeks annually and a 70-80% revenue share after MCC's management fee, well-maintained yachts can generate substantial income. Luxury catamarans and motor yachts in the 50'+ range with premium amenities command the highest rates.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/10">
                <CardContent className="p-6">
                  <h3 className="mb-3 text-lg font-bold text-primary">What are my responsibilities as a charter owner?</h3>
                  <p className="leading-relaxed text-muted-foreground">
                    MCC handles marketing, bookings, secure payments through CYBA escrow, calendar management, and provides operational support. As an owner, you're responsible for yacht maintenance, crew management, and ensuring your vessel meets charter standards. You'll receive monthly financial reports and maintain full control of your yacht. You can also book charters independently without MCC fees if you manage contracts and payments directly.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/10">
                <CardContent className="p-6">
                  <h3 className="mb-3 text-lg font-bold text-primary">How many weeks can I use my yacht personally?</h3>
                  <p className="leading-relaxed text-muted-foreground">
                    With the MCC Clearinghouse Program, you maintain full control of your yacht's calendar. You can block dates for personal use as needed, coordinating with MCC to manage charter bookings around your schedule. The program offers flexibility to balance charter income with personal enjoyment based on your priorities.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/10">
                <CardContent className="p-6">
                  <h3 className="mb-3 text-lg font-bold text-primary">What are the tax benefits for US owners?</h3>
                  <p className="leading-relaxed text-muted-foreground">
                    US taxpayers may qualify for 100% bonus depreciation in the first year, mortgage interest deductions, and operating expense deductions. The specific benefits depend on your tax situation and how you structure ownership. We recommend consulting with a tax advisor familiar with yacht charter businesses. Learn more on our <Link href="/bonus-depreciation" className="font-medium text-secondary hover:underline">Bonus Depreciation page</Link>.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/10">
                <CardContent className="p-6">
                  <h3 className="mb-3 text-lg font-bold text-primary">What happens when I want to sell my yacht?</h3>
                  <p className="leading-relaxed text-muted-foreground">
                    You can sell your yacht on the open market at any time—charter yachts with proven revenue history and professional management often command premium prices. VIYB will assist with the sale process, provide documentation of charter income history, and can help transition the yacht to a new owner who may continue with the MCC program if desired.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/10">
                <CardContent className="p-6">
                  <h3 className="mb-3 text-lg font-bold text-primary">Can I try charter ownership before committing?</h3>
                  <p className="leading-relaxed text-muted-foreground">
                    Yes! Our <Link href="/try-before-buy" className="font-medium text-secondary hover:underline">Try Before You Buy program</Link> lets you charter the yacht model you're considering for 7-14 days. Charter fees are credited toward your purchase if you proceed. It's the best way to experience the yacht and understand the charter guest experience.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Bali Models for Charter - Internal Linking */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-4 text-center text-3xl font-bold text-primary">
              Popular Bali Catamarans for BVI Charter
            </h2>
            <p className="mb-8 text-center text-muted-foreground">
              Explore our range of Bali catamarans optimized for Caribbean charter business
            </p>
            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
              <Link href="/bali/4-2" className="group">
                <Card className="h-full transition-all hover:border-secondary hover:shadow-lg">
                  <CardContent className="p-4 text-center">
                    <p className="font-bold text-primary group-hover:text-secondary">Bali 4.2</p>
                    <p className="text-xs text-muted-foreground">$65K-95K/year</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/bali/4-4" className="group">
                <Card className="h-full transition-all hover:border-secondary hover:shadow-lg">
                  <CardContent className="p-4 text-center">
                    <p className="font-bold text-primary group-hover:text-secondary">Bali 4.4</p>
                    <p className="text-xs text-muted-foreground">$85K-120K/year</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/bali/4-6" className="group">
                <Card className="h-full transition-all hover:border-secondary hover:shadow-lg">
                  <CardContent className="p-4 text-center">
                    <p className="font-bold text-primary group-hover:text-secondary">Bali 4.6</p>
                    <p className="text-xs text-muted-foreground">$100K-140K/year</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/bali/4-8" className="group">
                <Card className="h-full transition-all hover:border-secondary hover:shadow-lg">
                  <CardContent className="p-4 text-center">
                    <p className="font-bold text-primary group-hover:text-secondary">Bali 4.8</p>
                    <p className="text-xs text-muted-foreground">$120K-175K/year</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/bali/5-8" className="group">
                <Card className="h-full transition-all hover:border-secondary hover:shadow-lg">
                  <CardContent className="p-4 text-center">
                    <p className="font-bold text-primary group-hover:text-secondary">Bali 5.8</p>
                    <p className="text-xs text-muted-foreground">$200K-300K/year</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
            <div className="mt-6 text-center">
              <Link href="/bali">
                <Button variant="outline">View All Bali Charter Catamarans</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            Start Your BVI Charter Business Today
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
            Schedule a consultation with our charter ownership specialists to discuss your goals, review available yachts, and create a customized ownership plan
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="secondary" size="lg">
              Schedule a Consultation
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link href="/charter-calculator">Calculate Your ROI</Link>
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
                <li><Link href="/charter-ownership" className="transition-colors hover:text-secondary">Charter Ownership</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-bold uppercase tracking-wide">Services</h3>
              <ul className="space-y-2 text-white/80">
                <li><Link href="/brokerage" className="transition-colors hover:text-secondary">Yacht Brokerage</Link></li>
                <li><Link href="/bali" className="transition-colors hover:text-secondary">New Yacht Sales</Link></li>
                <li><Link href="/charter" className="transition-colors hover:text-secondary">Crewed Charters</Link></li>
                <li><Link href="/charter-ownership" className="transition-colors hover:text-secondary">Charter Management</Link></li>
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
