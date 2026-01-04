import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Award, Building2, Calculator, CheckCircle2, FileText, Mail, MapPin, Phone, Shield, TrendingUp } from "lucide-react";
import Link from "next/link";
import MobileNav from "@/components/MobileNav";
import Logo from "@/components/Logo";

export default function BonusDepreciationPage() {
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
          <MobileNav currentPage="Bonus Depreciation" variant="light" />
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
            backgroundImage: 'url(https://bali-catamarans.hr/images/ownership/yacht-images/bali-48-open-space/bali-48-open-space-main.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/95" />
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center text-white">
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 inline-block rounded-full bg-secondary/20 px-6 py-2 backdrop-blur-sm">
              <span className="text-sm font-bold uppercase tracking-wide text-secondary">Tax Strategy for US Buyers</span>
            </div>
            <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              100% Bonus Depreciation for Yacht Purchases
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-xl leading-relaxed md:text-2xl">
              Maximize your investment with strategic tax benefits available to US business owners purchasing new yachts for charter operations
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button variant="gold" size="lg">
                Schedule a Tax Strategy Call
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link href="/resources">Download Tax Guide</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Important Disclaimer */}
      <section className="border-b border-gray-200 bg-blue-50 py-6">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="flex items-start gap-4">
              <Shield className="mt-1 h-6 w-6 flex-shrink-0 text-blue-600" />
              <div className="text-sm text-muted-foreground">
                <strong className="text-primary">Important:</strong> This information is for educational purposes only and does not constitute tax, legal, or financial advice. Tax laws are complex and subject to change. We strongly recommend consulting with qualified tax professionals and CPAs who specialize in marine tax law before making any purchasing decisions. Individual tax benefits will vary based on your specific circumstances.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold text-primary md:text-5xl">
                Understanding Bonus Depreciation
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                A powerful tax strategy that can significantly reduce the cost of yacht ownership for qualifying businesses
              </p>
            </div>

            <div className="space-y-8">
              <Card className="border-2 border-primary/10">
                <CardContent className="p-8">
                  <h3 className="mb-4 text-2xl font-bold text-primary">What is Bonus Depreciation?</h3>
                  <p className="mb-4 leading-relaxed text-muted-foreground">
                    Bonus depreciation is a tax incentive that allows businesses to immediately deduct a large percentage of the purchase price of eligible business assets, including yachts used for charter operations. Under current US tax law, qualifying assets may be eligible for 100% bonus depreciation in the first year of service.
                  </p>
                  <p className="leading-relaxed text-muted-foreground">
                    For yacht buyers, this means potentially deducting the entire purchase price of a new catamaran in the year it enters charter service, creating substantial tax savings and improving cash flow for your business.
                  </p>
                </CardContent>
              </Card>

              <div className="grid gap-6 md:grid-cols-3">
                <Card className="border-2 border-secondary/20 bg-secondary/5">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="rounded-full bg-secondary/10 p-4">
                        <TrendingUp className="h-8 w-8 text-secondary" />
                      </div>
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-primary">Immediate Tax Savings</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Deduct up to 100% of the yacht's purchase price in the first year, potentially saving hundreds of thousands in federal taxes
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-secondary/20 bg-secondary/5">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="rounded-full bg-secondary/10 p-4">
                        <Building2 className="h-8 w-8 text-secondary" />
                      </div>
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-primary">Business Asset</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Your yacht becomes a legitimate business asset generating charter income while providing personal use benefits
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-secondary/20 bg-secondary/5">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="rounded-full bg-secondary/10 p-4">
                        <Calculator className="h-8 w-8 text-secondary" />
                      </div>
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-primary">Improved Cash Flow</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Reduce your tax liability in the purchase year, freeing up capital for other business investments
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualification Guide - Continued in next message due to length */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold text-primary md:text-5xl">
                Qualification Requirements
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Step-by-step guide to determining if your yacht purchase qualifies for bonus depreciation
              </p>
            </div>

            <div className="space-y-6">
              <Card className="border-l-4 border-secondary">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-xl font-bold text-white">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-3 text-2xl font-bold text-primary">Business Use Requirement</h3>
                      <p className="mb-4 leading-relaxed text-muted-foreground">
                        The yacht must be used predominantly (more than 50%) for qualified business purposes. Charter operations through an established management company like Moorings Charter Company (MCC) clearly satisfy this requirement.
                      </p>
                      <div className="rounded-lg bg-primary/5 p-4">
                        <h4 className="mb-2 font-semibold text-primary">Qualifying Business Activities:</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                            <span>Charter operations managed by professional charter companies</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                            <span>Corporate events and business entertainment (documented)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                            <span>Employee incentive programs and business retreats</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                            <span>Client entertainment and relationship building</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-secondary">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-xl font-bold text-white">
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-3 text-2xl font-bold text-primary">Asset Purchase Requirement</h3>
                      <p className="mb-4 leading-relaxed text-muted-foreground">
                        The yacht must be purchased (not leased) and placed into active charter or business service. Both new and pre-owned yachts can qualify for bonus depreciation when used for legitimate business purposes.
                      </p>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="rounded-lg border-2 border-green-200 bg-green-50 p-4">
                          <h4 className="mb-2 flex items-center gap-2 font-semibold text-green-900">
                            <CheckCircle2 className="h-5 w-5 text-green-600" />
                            Qualifies
                          </h4>
                          <ul className="space-y-1 text-sm text-green-800">
                            <li>• New Bali catamarans</li>
                            <li>• Pre-owned/brokerage yachts</li>
                            <li>• Purchased assets (not leased)</li>
                          </ul>
                        </div>
                        <div className="rounded-lg border-2 border-red-200 bg-red-50 p-4">
                          <h4 className="mb-2 flex items-center gap-2 font-semibold text-red-900">
                            <CheckCircle2 className="h-5 w-5 text-red-600" />
                            Does Not Qualify
                          </h4>
                          <ul className="space-y-1 text-sm text-red-800">
                            <li>• Personal/recreational use only</li>
                            <li>• Not placed in active charter service</li>
                            <li>• Cannot demonstrate &gt;50% business use</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-secondary">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-xl font-bold text-white">
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-3 text-2xl font-bold text-primary">Business Structure</h3>
                      <p className="mb-4 leading-relaxed text-muted-foreground">
                        The yacht must be purchased and owned by a qualifying business entity that pays US federal income taxes. Common structures include LLCs, S-Corporations, C-Corporations, and sole proprietorships.
                      </p>
                      <div className="rounded-lg bg-primary/5 p-4">
                        <h4 className="mb-3 font-semibold text-primary">Recommended Entity Structures:</h4>
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <Building2 className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                            <div>
                              <p className="mb-1 font-medium text-primary">Single-Member LLC</p>
                              <p className="text-sm text-muted-foreground">Simple structure, pass-through taxation, suitable for individual owners</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Building2 className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                            <div>
                              <p className="mb-1 font-medium text-primary">Multi-Member LLC</p>
                              <p className="text-sm text-muted-foreground">Partnership taxation, good for family or partner ownership</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Building2 className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                            <div>
                              <p className="mb-1 font-medium text-primary">S-Corporation or C-Corporation</p>
                              <p className="text-sm text-muted-foreground">Corporate structure with specific tax advantages</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-secondary">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-xl font-bold text-white">
                      4
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-3 text-2xl font-bold text-primary">Placed in Service Timeline</h3>
                      <p className="mb-4 leading-relaxed text-muted-foreground">
                        The yacht must be placed in service (ready and available for charter) within the same tax year you wish to claim the deduction. Proper documentation of commissioning and charter availability is essential.
                      </p>
                      <div className="rounded-lg bg-primary/5 p-4">
                        <p className="mb-2 text-sm font-medium text-primary">Critical Documentation:</p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                            <span>Delivery and commissioning certificates from VIYB</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                            <span>Charter management agreement with MCC</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                            <span>Proof of charter availability (MCC listing confirmation)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                            <span>Insurance and registration documents</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-secondary">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-xl font-bold text-white">
                      5
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-3 text-2xl font-bold text-primary">Documentation & Record Keeping</h3>
                      <p className="mb-4 leading-relaxed text-muted-foreground">
                        Meticulous records are essential to support your depreciation claim. The IRS may request documentation during audits, so maintain comprehensive files for at least 7 years.
                      </p>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="rounded-lg bg-white p-4">
                          <h4 className="mb-2 font-semibold text-primary">Required Records:</h4>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            <li>• Purchase agreement & invoice</li>
                            <li>• Financing documents</li>
                            <li>• Charter management contract</li>
                            <li>• Delivery & commissioning records</li>
                            <li>• Insurance policies</li>
                            <li>• Registration documents</li>
                          </ul>
                        </div>
                        <div className="rounded-lg bg-white p-4">
                          <h4 className="mb-2 font-semibold text-primary">Ongoing Documentation:</h4>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            <li>• Monthly charter revenue reports</li>
                            <li>• Business use logs</li>
                            <li>• Maintenance records</li>
                            <li>• Operating expense receipts</li>
                            <li>• Personal vs. business use tracking</li>
                            <li>• Annual MCC statements</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Real-World Example */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold text-primary md:text-5xl">
                Real-World Example
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                See how bonus depreciation works with a new Bali 4.8 catamaran in the BVI charter program
              </p>
            </div>

            <Card className="overflow-hidden border-2 border-primary/20">
              <div className="grid md:grid-cols-2">
                <div className="relative h-64 md:h-auto">
                  <img
                    src="https://bali-catamarans.hr/images/ownership/yacht-images/bali-48-open-space/bali-48-open-space-main.jpg"
                    alt="Bali 4.8 Catamaran"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="bg-muted p-8">
                  <h3 className="mb-4 text-2xl font-bold text-primary">Case Study: Bali 4.8</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between border-b border-gray-300 pb-2">
                      <span className="font-medium text-muted-foreground">Purchase Price:</span>
                      <span className="font-bold text-primary">$1,050,000</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-300 pb-2">
                      <span className="font-medium text-muted-foreground">Down Payment (25%):</span>
                      <span className="font-bold text-primary">$262,500</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-300 pb-2">
                      <span className="font-medium text-muted-foreground">Financed Amount:</span>
                      <span className="font-bold text-primary">$787,500</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-300 pb-2">
                      <span className="font-medium text-muted-foreground">Charter Location:</span>
                      <span className="font-bold text-primary">Tortola, BVI</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-300 pb-2">
                      <span className="font-medium text-muted-foreground">Management:</span>
                      <span className="font-bold text-primary">MCC BVI</span>
                    </div>
                  </div>
                </div>
              </div>

              <CardContent className="p-8">
                <h3 className="mb-6 text-xl font-bold text-primary">Tax Benefit Calculation</h3>

                <div className="space-y-6">
                  <div className="rounded-lg bg-secondary/5 p-6">
                    <h4 className="mb-4 text-lg font-bold text-primary">Year 1 - Tax Deductions</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">100% Bonus Depreciation:</span>
                        <span className="font-bold text-primary">$1,050,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Tax Bracket (Example 37%):</span>
                        <span className="font-bold text-secondary">37%</span>
                      </div>
                      <div className="border-t border-gray-300 pt-3">
                        <div className="flex justify-between text-lg">
                          <span className="font-bold text-primary">Estimated Federal Tax Savings:</span>
                          <span className="font-bold text-secondary">$388,500</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg bg-primary/5 p-6">
                    <h4 className="mb-4 text-lg font-bold text-primary">Annual Charter Revenue (Estimated)</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Charter Weeks per Year:</span>
                        <span className="font-semibold text-primary">20 weeks</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Average Weekly Rate:</span>
                        <span className="font-semibold text-primary">$11,500</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Gross Annual Revenue:</span>
                        <span className="font-semibold text-primary">$230,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Management Fee (30%):</span>
                        <span className="font-semibold text-red-600">-$69,000</span>
                      </div>
                      <div className="border-t border-gray-300 pt-3">
                        <div className="flex justify-between">
                          <span className="font-bold text-primary">Net Charter Revenue to Owner:</span>
                          <span className="font-bold text-secondary">$161,000</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg bg-green-50 p-6">
                    <h4 className="mb-4 text-lg font-bold text-green-900">Total First-Year Benefit</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-green-800">Federal Tax Savings:</span>
                        <span className="font-semibold text-green-900">$388,500</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-green-800">Net Charter Income:</span>
                        <span className="font-semibold text-green-900">$161,000</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-green-800">Less: Loan Payments (est.):</span>
                        <span className="font-semibold text-red-700">-$65,000</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-green-800">Less: Insurance & Expenses:</span>
                        <span className="font-semibold text-red-700">-$17,000</span>
                      </div>
                      <div className="border-t-2 border-green-300 pt-3">
                        <div className="flex justify-between text-lg">
                          <span className="font-bold text-green-900">Effective First-Year Position:</span>
                          <span className="font-bold text-green-600">+$467,500</span>
                        </div>
                      </div>
                      <p className="mt-4 text-xs italic text-green-800">
                        This example demonstrates how tax savings can exceed your down payment in year one, effectively making the yacht "cash flow positive" from a tax perspective.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-lg border-2 border-blue-200 bg-blue-50 p-6">
                    <h4 className="mb-3 font-bold text-blue-900">Additional Considerations</h4>
                    <ul className="space-y-2 text-sm text-blue-800">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" />
                        <span>Personal use of 4-6 weeks annually included in MCC program</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" />
                        <span>All maintenance, cleaning, and crew managed by MCC</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" />
                        <span>Potential for yacht appreciation in strong market conditions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" />
                        <span>3-5 year guaranteed buyback programs may be available</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" />
                        <span>Section 179 deduction may be available for additional savings</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 text-center">
              <p className="mb-4 text-sm italic text-muted-foreground">
                * This is a hypothetical example for educational purposes. Actual tax benefits, charter revenue, and expenses will vary. Consult with your tax advisor and CPA for projections based on your specific situation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VIYB & MCC Services */}
      <section className="bg-gradient-to-br from-primary to-primary/90 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold md:text-5xl">
                Full-Service Support from VIYB & MCC
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-white/90">
                We handle every aspect of your purchase, delivery, and charter management so you can focus on the tax benefits and enjoying your investment
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-2 border-white/20 bg-white/10 backdrop-blur-lg">
                <CardContent className="p-8">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-full bg-secondary/20 p-3">
                      <Award className="h-8 w-8 text-secondary" />
                    </div>
                    <h3 className="text-2xl font-bold">VIYB Services</h3>
                  </div>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                      <div>
                        <p className="font-semibold">New Bali Catamaran Sales</p>
                        <p className="text-sm text-white/80">Factory-direct pricing as authorized Bali dealer</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                      <div>
                        <p className="font-semibold">Caribbean Delivery & Commissioning</p>
                        <p className="text-sm text-white/80">Direct shipping to BVI with full systems testing</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                      <div>
                        <p className="font-semibold">Entity Formation Guidance</p>
                        <p className="text-sm text-white/80">Referrals to marine tax attorneys and CPAs</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                      <div>
                        <p className="font-semibold">Financing Coordination</p>
                        <p className="text-sm text-white/80">Connections to marine lending specialists</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                      <div>
                        <p className="font-semibold">Documentation Support</p>
                        <p className="text-sm text-white/80">All purchase and delivery records for tax filing</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                      <div>
                        <p className="font-semibold">Owner Orientation</p>
                        <p className="text-sm text-white/80">Comprehensive training on all systems and operations</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-white/20 bg-white/10 backdrop-blur-lg">
                <CardContent className="p-8">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-full bg-secondary/20 p-3">
                      <TrendingUp className="h-8 w-8 text-secondary" />
                    </div>
                    <h3 className="text-2xl font-bold">MCC Charter Management</h3>
                  </div>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                      <div>
                        <p className="font-semibold">Professional Charter Operations</p>
                        <p className="text-sm text-white/80">Industry-leading booking and guest services</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                      <div>
                        <p className="font-semibold">Complete Maintenance Program</p>
                        <p className="text-sm text-white/80">Scheduled servicing and repairs included</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                      <div>
                        <p className="font-semibold">Marketing & Reservations</p>
                        <p className="text-sm text-white/80">Global reach through Moorings network</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                      <div>
                        <p className="font-semibold">Tax Documentation</p>
                        <p className="text-sm text-white/80">Detailed monthly and annual revenue statements</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                      <div>
                        <p className="font-semibold">Personal Use Scheduling</p>
                        <p className="text-sm text-white/80">4-8 weeks annually for owner enjoyment</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                      <div>
                        <p className="font-semibold">Insurance & Registration</p>
                        <p className="text-sm text-white/80">Comprehensive coverage and compliance management</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 rounded-lg bg-white/10 p-8 backdrop-blur-sm">
              <h3 className="mb-4 text-center text-2xl font-bold">The Complete Partnership</h3>
              <p className="mb-6 text-center text-lg text-white/90">
                VIYB and MCC work together to ensure your yacht is properly documented, professionally managed, and positioned to maximize both charter income and tax benefits.
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="text-center">
                  <div className="mb-3 flex justify-center">
                    <div className="rounded-full bg-secondary/20 p-4">
                      <FileText className="h-8 w-8 text-secondary" />
                    </div>
                  </div>
                  <h4 className="mb-2 font-bold">Tax Documentation</h4>
                  <p className="text-sm text-white/80">Complete records for IRS compliance and audit defense</p>
                </div>
                <div className="text-center">
                  <div className="mb-3 flex justify-center">
                    <div className="rounded-full bg-secondary/20 p-4">
                      <Shield className="h-8 w-8 text-secondary" />
                    </div>
                  </div>
                  <h4 className="mb-2 font-bold">Professional Standards</h4>
                  <p className="text-sm text-white/80">Industry best practices and regulatory compliance</p>
                </div>
                <div className="text-center">
                  <div className="mb-3 flex justify-center">
                    <div className="rounded-full bg-secondary/20 p-4">
                      <Award className="h-8 w-8 text-secondary" />
                    </div>
                  </div>
                  <h4 className="mb-2 font-bold">Proven Track Record</h4>
                  <p className="text-sm text-white/80">Decades of experience in charter ownership programs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold text-primary md:text-5xl">
                Ready to Explore Your Tax Benefits?
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Schedule a confidential consultation with our team to discuss how bonus depreciation can work for your specific situation
              </p>
            </div>

            <Card className="border-2 border-primary/20">
              <CardContent className="p-8">
                <div className="mb-8 grid gap-6 md:grid-cols-2">
                  <div className="rounded-lg bg-muted p-6">
                    <h3 className="mb-4 text-xl font-bold text-primary">What We'll Cover</h3>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                        <span>Your specific tax situation and potential benefits</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                        <span>Available Bali models and pricing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                        <span>Charter revenue projections for BVI market</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                        <span>Entity formation and financing options</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                        <span>MCC program details and owner benefits</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                        <span>Timeline from purchase to charter availability</span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-lg bg-muted p-6">
                    <h3 className="mb-4 text-xl font-bold text-primary">Next Steps</h3>
                    <ol className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-bold text-white">1</span>
                        <span>Schedule your complimentary consultation call</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-bold text-white">2</span>
                        <span>Receive personalized tax benefit projections</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-bold text-white">3</span>
                        <span>Get referrals to specialized tax advisors</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-bold text-white">4</span>
                        <span>Select your Bali catamaran and customize</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-bold text-white">5</span>
                        <span>Finalize entity formation and financing</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-bold text-white">6</span>
                        <span>Complete purchase and BVI delivery</span>
                      </li>
                    </ol>
                  </div>
                </div>

                <div className="text-center">
                  <div className="mb-6 flex flex-wrap justify-center gap-4">
                    <Button variant="gold" size="lg" className="text-base">
                      Schedule Tax Strategy Call
                    </Button>
                    <Button variant="outline" size="lg" className="text-base" asChild>
                      <Link href="/bali">View Bali Catamarans</Link>
                    </Button>
                    <Button variant="outline" size="lg" className="text-base" asChild>
                      <Link href="/charter-calculator">Calculate ROI</Link>
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Or call us directly at{" "}
                    <a href="tel:+17862460809" className="font-medium text-primary hover:text-secondary">
                      +1 786 246 0809
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-primary">Additional Resources</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="border-2 border-primary/10 transition-all hover:border-secondary hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="rounded-full bg-secondary/10 p-4">
                      <FileText className="h-8 w-8 text-secondary" />
                    </div>
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-primary">Tax Guide Download</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Comprehensive PDF guide covering bonus depreciation, Section 179, and charter ownership tax strategies
                  </p>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="/resources">Download Guide</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/10 transition-all hover:border-secondary hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="rounded-full bg-secondary/10 p-4">
                      <Calculator className="h-8 w-8 text-secondary" />
                    </div>
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-primary">ROI Calculator</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Interactive tool to estimate charter income, expenses, and potential tax savings for your situation
                  </p>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="/charter-calculator">Use Calculator</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/10 transition-all hover:border-secondary hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="rounded-full bg-secondary/10 p-4">
                      <Award className="h-8 w-8 text-secondary" />
                    </div>
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-primary">CPA Network</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Get connected with CPAs and tax attorneys who specialize in marine tax law and charter ownership
                  </p>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="/resources">Request Referral</Link>
                  </Button>
                </CardContent>
              </Card>
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
              <p className="leading-relaxed text-white/80">
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
                <li><a href="#" className="transition-colors hover:text-secondary">Tax Strategy</a></li>
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
