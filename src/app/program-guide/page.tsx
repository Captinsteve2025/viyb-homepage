"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Download, FileText, CheckCircle2, Ship, DollarSign, TrendingUp, Users, Shield, Calendar, Award, ExternalLink } from "lucide-react";
import Link from "next/link";
import MobileNav from "@/components/MobileNav";
import Logo from "@/components/Logo";

export default function ProgramGuidePage() {
  const downloadPDF = (filename: string) => {
    // In production, this would link to actual PDF files
    console.log(`Downloading: ${filename}`);
    alert(`PDF Download: ${filename}\n\nIn production, this would download the actual PDF file.`);
  };

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
            <Link href="/charter-ownership" className="text-sm font-medium uppercase tracking-wide text-muted-foreground transition-colors hover:text-secondary">Charter Ownership</Link>
            <Link href="/#contact" className="text-sm font-medium uppercase tracking-wide text-muted-foreground transition-colors hover:text-secondary">Contact</Link>
          </nav>
          <MobileNav currentPage="Program Guide" variant="light" />
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
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/90 py-20 text-white">
        <div className="container relative mx-auto px-4 text-center">
          <div className="mb-6 inline-block rounded-full bg-secondary/20 px-6 py-2 backdrop-blur-sm">
            <span className="text-sm font-bold uppercase tracking-wide text-secondary">Complete Program Guide</span>
          </div>
          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-6xl">
            MCC Charter Management Program
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed md:text-2xl">
            Your comprehensive guide to professional yacht charter management with My Caribbean Charters / VIYB
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="secondary" size="lg" onClick={() => downloadPDF("MCC-Complete-Program-Guide.pdf")}>
              <Download className="mr-2 h-5 w-5" />
              Download Complete Guide
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-primary">
              View Sample Documents
            </Button>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-primary">Program Overview</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-2 border-primary/10">
                <CardContent className="p-6">
                  <h3 className="mb-3 flex items-center gap-2 text-lg font-bold text-primary">
                    <Ship className="h-5 w-5 text-secondary" />
                    How MCC Works
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Clearinghouse representation</li>
                    <li>• Professional marketing</li>
                    <li>• Secure payment processing</li>
                    <li>• Ongoing support</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/10">
                <CardContent className="p-6">
                  <h3 className="mb-3 flex items-center gap-2 text-lg font-bold text-primary">
                    <DollarSign className="h-5 w-5 text-secondary" />
                    Financial Benefits
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Charter income potential</li>
                    <li>• Tax advantages</li>
                    <li>• ROI calculations</li>
                    <li>• Cost breakdowns</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/10">
                <CardContent className="p-6">
                  <h3 className="mb-3 flex items-center gap-2 text-lg font-bold text-primary">
                    <Users className="h-5 w-5 text-secondary" />
                    Owner Responsibilities
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Yacht maintenance standards</li>
                    <li>• Crew management</li>
                    <li>• Insurance requirements</li>
                    <li>• Calendar management</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/10">
                <CardContent className="p-6">
                  <h3 className="mb-3 flex items-center gap-2 text-lg font-bold text-primary">
                    <Award className="h-5 w-5 text-secondary" />
                    Getting Started
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Application process</li>
                    <li>• Yacht requirements</li>
                    <li>• Documentation needed</li>
                    <li>• Timeline to launch</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 text-center text-4xl font-bold text-primary md:text-5xl">
              Program Details
            </h2>

            {/* How It Works */}
            <div className="mb-16">
              <h3 className="mb-8 text-2xl font-bold text-primary">How the MCC Clearinghouse Program Works</h3>
              <div className="grid gap-8 lg:grid-cols-3">
                <Card className="border-2 border-secondary/20">
                  <CardContent className="p-6">
                    <div className="mb-4 text-4xl font-bold text-secondary">1</div>
                    <h4 className="mb-3 text-xl font-bold text-primary">Professional Marketing</h4>
                    <p className="mb-4 text-muted-foreground">
                      Your yacht is promoted through CYA (Central Yacht Agent), Charter Index, Ankor database, and MCC's extensive broker network.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                        <span>Professional e-brochures with photos and videos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                        <span>Crew profiles and guest reviews</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                        <span>Social media promotion</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 border-secondary/20">
                  <CardContent className="p-6">
                    <div className="mb-4 text-4xl font-bold text-secondary">2</div>
                    <h4 className="mb-3 text-xl font-bold text-primary">Secure Bookings</h4>
                    <p className="mb-4 text-muted-foreground">
                      MCC handles all charter bookings with industry-standard CYBA contracts and secure escrow accounts.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                        <span>CYBA E-Contract standard agreements</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                        <span>CYBA escrow accounts in US banks</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                        <span>Complete calendar management</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 border-secondary/20">
                  <CardContent className="p-6">
                    <div className="mb-4 text-4xl font-bold text-secondary">3</div>
                    <h4 className="mb-3 text-xl font-bold text-primary">Ongoing Support</h4>
                    <p className="mb-4 text-muted-foreground">
                      Receive monthly financial reports, operational support, and professional guidance throughout the year.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                        <span>Monthly income/expense statements</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                        <span>Crew training assistance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                        <span>Provisioning and operations support</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Financial Structure */}
            <div className="mb-16">
              <h3 className="mb-8 text-2xl font-bold text-primary">Financial Structure</h3>
              <div className="grid gap-8 lg:grid-cols-2">
                <Card className="border-2 border-primary/10">
                  <CardContent className="p-6">
                    <h4 className="mb-4 flex items-center gap-2 text-xl font-bold text-primary">
                      <TrendingUp className="h-6 w-6 text-secondary" />
                      Revenue Potential
                    </h4>
                    <div className="space-y-4">
                      <div className="flex justify-between border-b pb-2">
                        <span className="font-medium">Weekly Charter Rates:</span>
                        <span className="font-bold text-secondary">$15K - $100K</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="font-medium">Typical Charter Weeks:</span>
                        <span className="font-bold text-secondary">15-30 per year</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="font-medium">Owner Revenue Share:</span>
                        <span className="font-bold text-secondary">70-80%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Annual Potential:</span>
                        <span className="font-bold text-secondary">$200K - $2M+</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-primary/10">
                  <CardContent className="p-6">
                    <h4 className="mb-4 flex items-center gap-2 text-xl font-bold text-primary">
                      <DollarSign className="h-6 w-6 text-secondary" />
                      Management Fee
                    </h4>
                    <div className="space-y-4">
                      <div className="rounded-lg bg-secondary/10 p-4">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-secondary">$1,000 - $10,000</div>
                          <div className="text-sm text-muted-foreground">per month</div>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Fixed monthly fee regardless of charter activity. Includes all marketing, booking management, contract processing, and operational support.
                      </p>
                      <div className="rounded-lg bg-blue-50 p-4">
                        <p className="text-sm font-medium text-primary">
                          💡 Tip: Use our ROI Calculator to estimate your specific costs and returns
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Owner Responsibilities */}
            <div className="mb-16">
              <h3 className="mb-8 text-2xl font-bold text-primary">Owner Responsibilities</h3>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h4 className="flex items-center gap-2 text-lg font-bold text-primary">
                    <Ship className="h-5 w-5 text-secondary" />
                    Yacht Maintenance
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                      <span className="text-sm">Maintain yacht to charter standards</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                      <span className="text-sm">Regular inspections and surveys</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                      <span className="text-sm">Keep safety equipment current</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                      <span className="text-sm">Address repairs promptly</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="flex items-center gap-2 text-lg font-bold text-primary">
                    <Users className="h-5 w-5 text-secondary" />
                    Crew Management
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                      <span className="text-sm">Hire and manage professional crew</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                      <span className="text-sm">Ensure proper certifications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                      <span className="text-sm">Support crew training needs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                      <span className="text-sm">Maintain high service standards</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="flex items-center gap-2 text-lg font-bold text-primary">
                    <Shield className="h-5 w-5 text-secondary" />
                    Insurance & Compliance
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                      <span className="text-sm">Maintain charter insurance coverage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                      <span className="text-sm">Keep vessel registration current</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                      <span className="text-sm">Comply with local regulations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                      <span className="text-sm">Provide required documentation</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="flex items-center gap-2 text-lg font-bold text-primary">
                    <Calendar className="h-5 w-5 text-secondary" />
                    Calendar Coordination
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                      <span className="text-sm">Coordinate personal use dates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                      <span className="text-sm">Block maintenance periods</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                      <span className="text-sm">Communicate availability changes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                      <span className="text-sm">Plan seasonal positioning</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="bg-gradient-to-br from-secondary/5 to-primary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold text-primary md:text-5xl">
                Downloadable Program Guides
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Access comprehensive documentation, forms, and resources for MCC program participants
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Complete Program Guide */}
              <Card className="border-2 border-secondary/20 transition-all hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-start justify-between">
                    <FileText className="h-12 w-12 text-secondary" />
                    <span className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-bold text-secondary">ESSENTIAL</span>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-primary">Complete Program Guide</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Comprehensive 40-page guide covering all aspects of the MCC program, requirements, and benefits.
                  </p>
                  <div className="mb-4 text-xs text-muted-foreground">
                    PDF • 4.2 MB • 40 pages
                  </div>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => downloadPDF("MCC-Complete-Program-Guide.pdf")}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Start Guide */}
              <Card className="border-2 border-primary/10 transition-all hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-start justify-between">
                    <FileText className="h-12 w-12 text-primary" />
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">POPULAR</span>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-primary">Quick Start Guide</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Essential information to get started quickly. Perfect for new yacht owners entering the program.
                  </p>
                  <div className="mb-4 text-xs text-muted-foreground">
                    PDF • 1.8 MB • 12 pages
                  </div>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => downloadPDF("MCC-Quick-Start-Guide.pdf")}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>

              {/* Financial Overview */}
              <Card className="border-2 border-primary/10 transition-all hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <FileText className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-primary">Financial Overview</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Detailed breakdown of revenue potential, expenses, ROI calculations, and tax benefits.
                  </p>
                  <div className="mb-4 text-xs text-muted-foreground">
                    PDF • 2.1 MB • 16 pages
                  </div>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => downloadPDF("MCC-Financial-Overview.pdf")}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>

              {/* Application Package */}
              <Card className="border-2 border-primary/10 transition-all hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <FileText className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-primary">Application Package</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Complete application forms, required documentation checklist, and submission guidelines.
                  </p>
                  <div className="mb-4 text-xs text-muted-foreground">
                    PDF • 1.5 MB • 8 pages
                  </div>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => downloadPDF("MCC-Application-Package.pdf")}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>

              {/* Yacht Requirements */}
              <Card className="border-2 border-primary/10 transition-all hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <FileText className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-primary">Yacht Requirements</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Detailed specifications, safety standards, equipment requirements, and inspection guidelines.
                  </p>
                  <div className="mb-4 text-xs text-muted-foreground">
                    PDF • 2.3 MB • 14 pages
                  </div>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => downloadPDF("MCC-Yacht-Requirements.pdf")}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>

              {/* Tax Benefits Guide */}
              <Card className="border-2 border-primary/10 transition-all hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <FileText className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-primary">Tax Benefits Guide</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    US tax advantages including bonus depreciation, deductions, and charter business taxation.
                  </p>
                  <div className="mb-4 text-xs text-muted-foreground">
                    PDF • 1.9 MB • 10 pages
                  </div>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => downloadPDF("MCC-Tax-Benefits-Guide.pdf")}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>

              {/* Marketing Materials */}
              <Card className="border-2 border-primary/10 transition-all hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <FileText className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-primary">Marketing Materials Kit</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Examples of e-brochures, photo guidelines, crew profile templates, and promotional content.
                  </p>
                  <div className="mb-4 text-xs text-muted-foreground">
                    PDF • 5.7 MB • 24 pages
                  </div>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => downloadPDF("MCC-Marketing-Materials-Kit.pdf")}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>

              {/* Owner Manual */}
              <Card className="border-2 border-primary/10 transition-all hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <FileText className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-primary">Owner's Manual</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Day-to-day operations, best practices, communication protocols, and support resources.
                  </p>
                  <div className="mb-4 text-xs text-muted-foreground">
                    PDF • 3.2 MB • 28 pages
                  </div>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => downloadPDF("MCC-Owners-Manual.pdf")}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>

              {/* FAQ Document */}
              <Card className="border-2 border-primary/10 transition-all hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <FileText className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-primary">Frequently Asked Questions</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Comprehensive FAQ covering common questions from prospective and current yacht owners.
                  </p>
                  <div className="mb-4 text-xs text-muted-foreground">
                    PDF • 1.2 MB • 18 pages
                  </div>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => downloadPDF("MCC-FAQ.pdf")}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Download All */}
            <div className="mt-12 text-center">
              <Card className="border-2 border-secondary bg-gradient-to-br from-secondary/5 to-secondary/10">
                <CardContent className="p-8">
                  <h3 className="mb-4 text-2xl font-bold text-primary">Download Complete Resource Package</h3>
                  <p className="mb-6 text-muted-foreground">
                    Get all program guides, forms, and resources in one convenient ZIP file
                  </p>
                  <Button
                    variant="gold"
                    size="lg"
                    onClick={() => downloadPDF("MCC-Complete-Resource-Package.zip")}
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download All Resources (15.8 MB)
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            Ready to Get Started?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
            Join successful yacht owners in the MCC program and start generating charter income
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="secondary" size="lg" asChild>
              <Link href="/charter-calculator">Calculate Your ROI</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link href="/charter-ownership">Learn More About MCC</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link href="/#contact">Contact Us</Link>
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
              <h3 className="mb-4 font-bold uppercase tracking-wide">Resources</h3>
              <ul className="space-y-2 text-white/80">
                <li><Link href="/program-guide" className="transition-colors hover:text-secondary">Program Guide</Link></li>
                <li><Link href="/charter-calculator" className="transition-colors hover:text-secondary">ROI Calculator</Link></li>
                <li><Link href="/bonus-depreciation" className="transition-colors hover:text-secondary">Tax Benefits</Link></li>
                <li><Link href="/resources" className="transition-colors hover:text-secondary">Downloads</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-bold uppercase tracking-wide">Contact Us</h3>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start gap-2">
                  <span>VIYB LTD, International House<br />10 Beaufort Court, Admirals Way<br />Canary Wharf, London, E14 9XL</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>1654 Calle Tulipan, Ste 100<br />San Juan, PR 00927</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>1500 Cordova Rd, Suite 200<br />Fort Lauderdale, FL 33316</span>
                </li>
                <li>+44 7340 482091</li>
                <li>+1 786 246 0809</li>
                <li>info@virginislandsyachtbroker.com</li>
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
