"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Calculator, DollarSign, Mail, MapPin, Phone, TrendingUp } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import MobileNav from "@/components/MobileNav";
import Logo from "@/components/Logo";

export default function CharterCalculatorPage() {
  // Input state
  const [purchasePrice, setPurchasePrice] = useState(1000000);
  const [downPayment, setDownPayment] = useState(25);
  const [loanTerm, setLoanTerm] = useState(20);
  const [interestRate, setInterestRate] = useState(5.5);
  const [charterWeeks, setCharterWeeks] = useState(20);
  const [weeklyRate, setWeeklyRate] = useState(25000);
  const [personalWeeks, setPersonalWeeks] = useState(6);
  const [managementFee, setManagementFee] = useState(5000);
  const [annualMaintenance, setAnnualMaintenance] = useState(25000);
  const [annualInsurance, setAnnualInsurance] = useState(12000);
  const [otherExpenses, setOtherExpenses] = useState(5000);

  // Calculations
  const downPaymentAmount = purchasePrice * (downPayment / 100);
  const loanAmount = purchasePrice - downPaymentAmount;
  const monthlyRate = interestRate / 100 / 12;
  const numberOfPayments = loanTerm * 12;
  const monthlyPayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
  const annualLoanPayment = monthlyPayment * 12;

  const grossCharterRevenue = charterWeeks * weeklyRate;
  const managementFeeAmount = managementFee * 12;
  const netCharterRevenue = grossCharterRevenue - managementFeeAmount;

  const totalAnnualExpenses = annualMaintenance + annualInsurance + otherExpenses + annualLoanPayment;
  const netAnnualIncome = netCharterRevenue - annualMaintenance - annualInsurance - otherExpenses;
  const netCashFlow = netAnnualIncome - annualLoanPayment;
  const roi = ((netAnnualIncome / purchasePrice) * 100);
  const cashOnCashReturn = ((netCashFlow / downPaymentAmount) * 100);
  const paybackPeriod = downPaymentAmount / (netCashFlow > 0 ? netCashFlow : 1);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatPercent = (value: number) => {
    return value.toFixed(2) + '%';
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

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-secondary/20 p-6 backdrop-blur-sm">
              <Calculator className="h-16 w-16 text-secondary" />
            </div>
          </div>
          <h1 className="mb-4 text-5xl font-bold md:text-6xl">Charter Ownership ROI Calculator</h1>
          <p className="mx-auto max-w-2xl text-lg text-white/90">
            Estimate your potential income and return on investment with the My Caribbean Charters / VIYB (MCC) program
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Input Panel */}
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-primary">
                      <DollarSign className="h-6 w-6 text-secondary" />
                      Purchase Details
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <label className="mb-2 flex items-center justify-between text-sm font-medium text-primary">
                          <span>Purchase Price</span>
                          <span className="text-secondary">{formatCurrency(purchasePrice)}</span>
                        </label>
                        <Input
                          type="range"
                          min="500000"
                          max="5000000"
                          step="50000"
                          value={purchasePrice}
                          onChange={(e) => setPurchasePrice(Number(e.target.value))}
                          className="w-full"
                        />
                        <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                          <span>$500K</span>
                          <span>$5M</span>
                        </div>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label className="mb-2 flex items-center justify-between text-sm font-medium text-primary">
                            <span>Down Payment</span>
                            <span className="text-secondary">{downPayment}%</span>
                          </label>
                          <Input
                            type="range"
                            min="20"
                            max="50"
                            step="5"
                            value={downPayment}
                            onChange={(e) => setDownPayment(Number(e.target.value))}
                          />
                        </div>

                        <div>
                          <label className="mb-2 flex items-center justify-between text-sm font-medium text-primary">
                            <span>Loan Term (years)</span>
                            <span className="text-secondary">{loanTerm}</span>
                          </label>
                          <Input
                            type="range"
                            min="10"
                            max="25"
                            step="5"
                            value={loanTerm}
                            onChange={(e) => setLoanTerm(Number(e.target.value))}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="mb-2 flex items-center justify-between text-sm font-medium text-primary">
                          <span>Interest Rate</span>
                          <span className="text-secondary">{interestRate}%</span>
                        </label>
                        <Input
                          type="range"
                          min="3.5"
                          max="8.5"
                          step="0.5"
                          value={interestRate}
                          onChange={(e) => setInterestRate(Number(e.target.value))}
                        />
                        <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                          <span>3.5%</span>
                          <span>8.5%</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-primary">
                      <TrendingUp className="h-6 w-6 text-secondary" />
                      Charter Revenue
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <label className="mb-2 flex items-center justify-between text-sm font-medium text-primary">
                          <span>Charter Weeks per Year</span>
                          <span className="text-secondary">{charterWeeks} weeks</span>
                        </label>
                        <Input
                          type="range"
                          min="10"
                          max="35"
                          step="1"
                          value={charterWeeks}
                          onChange={(e) => setCharterWeeks(Number(e.target.value))}
                        />
                        <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                          <span>10 weeks</span>
                          <span>35 weeks</span>
                        </div>
                      </div>

                      <div>
                        <label className="mb-2 flex items-center justify-between text-sm font-medium text-primary">
                          <span>Weekly Charter Rate</span>
                          <span className="text-secondary">{formatCurrency(weeklyRate)}</span>
                        </label>
                        <Input
                          type="range"
                          min="15000"
                          max="100000"
                          step="5000"
                          value={weeklyRate}
                          onChange={(e) => setWeeklyRate(Number(e.target.value))}
                        />
                        <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                          <span>$15,000</span>
                          <span>$100,000</span>
                        </div>
                      </div>

                      <div>
                        <label className="mb-2 flex items-center justify-between text-sm font-medium text-primary">
                          <span>Personal Use (weeks/year)</span>
                          <span className="text-secondary">{personalWeeks} weeks</span>
                        </label>
                        <Input
                          type="range"
                          min="2"
                          max="12"
                          step="1"
                          value={personalWeeks}
                          onChange={(e) => setPersonalWeeks(Number(e.target.value))}
                        />
                      </div>

                      <div>
                        <label className="mb-2 flex items-center justify-between text-sm font-medium text-primary">
                          <span>Management Fee (per month)</span>
                          <span className="text-secondary">{formatCurrency(managementFee)}</span>
                        </label>
                        <Input
                          type="range"
                          min="1000"
                          max="10000"
                          step="500"
                          value={managementFee}
                          onChange={(e) => setManagementFee(Number(e.target.value))}
                        />
                        <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                          <span>$1,000</span>
                          <span>$10,000</span>
                        </div>
                        <p className="mt-1 text-xs text-muted-foreground">
                          Monthly management fee
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h2 className="mb-6 text-2xl font-bold text-primary">Annual Expenses</h2>
                    <div className="space-y-4">
                      <div>
                        <label className="mb-2 block text-sm font-medium text-primary">
                          Maintenance & Repairs
                        </label>
                        <Input
                          type="number"
                          value={annualMaintenance}
                          onChange={(e) => setAnnualMaintenance(Number(e.target.value))}
                          className="w-full"
                        />
                        <p className="mt-1 text-xs text-muted-foreground">
                          Included in MCC program
                        </p>
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-medium text-primary">
                          Insurance (Annual)
                        </label>
                        <Input
                          type="number"
                          value={annualInsurance}
                          onChange={(e) => setAnnualInsurance(Number(e.target.value))}
                          className="w-full"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-medium text-primary">
                          Other Expenses (Annual)
                        </label>
                        <Input
                          type="number"
                          value={otherExpenses}
                          onChange={(e) => setOtherExpenses(Number(e.target.value))}
                          className="w-full"
                        />
                        <p className="mt-1 text-xs text-muted-foreground">
                          Marina fees, registration, etc.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Results Panel */}
              <div className="space-y-6">
                <Card className="border-2 border-secondary/20 bg-gradient-to-br from-secondary/5 to-secondary/10">
                  <CardContent className="p-6">
                    <h2 className="mb-6 text-2xl font-bold text-primary">Financial Summary</h2>

                    <div className="space-y-4">
                      {/* Revenue */}
                      <div className="rounded-lg bg-white p-4">
                        <h3 className="mb-3 font-bold text-primary">Revenue</h3>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Gross Charter Revenue</span>
                            <span className="font-semibold text-primary">{formatCurrency(grossCharterRevenue)}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Management Fee ({formatCurrency(managementFee)}/month)</span>
                            <span className="font-semibold text-red-600">-{formatCurrency(managementFeeAmount)}</span>
                          </div>
                          <div className="border-t border-gray-200 pt-2">
                            <div className="flex justify-between">
                              <span className="font-bold text-primary">Net Charter Revenue</span>
                              <span className="text-lg font-bold text-secondary">{formatCurrency(netCharterRevenue)}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Expenses */}
                      <div className="rounded-lg bg-white p-4">
                        <h3 className="mb-3 font-bold text-primary">Annual Expenses</h3>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Loan Payment</span>
                            <span className="font-semibold text-primary">{formatCurrency(annualLoanPayment)}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Maintenance</span>
                            <span className="font-semibold text-primary">{formatCurrency(annualMaintenance)}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Insurance</span>
                            <span className="font-semibold text-primary">{formatCurrency(annualInsurance)}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Other Expenses</span>
                            <span className="font-semibold text-primary">{formatCurrency(otherExpenses)}</span>
                          </div>
                          <div className="border-t border-gray-200 pt-2">
                            <div className="flex justify-between">
                              <span className="font-bold text-primary">Total Expenses</span>
                              <span className="text-lg font-bold text-primary">{formatCurrency(totalAnnualExpenses)}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Net Income */}
                      <div className={`rounded-lg p-4 ${netCashFlow >= 0 ? 'bg-green-50' : 'bg-red-50'}`}>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="font-bold text-primary">Net Annual Income</span>
                            <span className={`text-lg font-bold ${netAnnualIncome >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                              {formatCurrency(netAnnualIncome)}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-bold text-primary">Net Cash Flow</span>
                            <span className={`text-xl font-bold ${netCashFlow >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                              {formatCurrency(netCashFlow)}
                            </span>
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {formatCurrency(netCashFlow / 12)} per month
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-primary/20">
                  <CardContent className="p-6">
                    <h2 className="mb-6 text-2xl font-bold text-primary">Key Metrics</h2>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-lg bg-primary/5 p-4">
                        <div className="mb-2 text-sm font-medium text-muted-foreground">Return on Investment</div>
                        <div className="text-2xl font-bold text-primary">{formatPercent(roi)}</div>
                        <div className="mt-1 text-xs text-muted-foreground">Annual ROI</div>
                      </div>

                      <div className="rounded-lg bg-primary/5 p-4">
                        <div className="mb-2 text-sm font-medium text-muted-foreground">Cash-on-Cash Return</div>
                        <div className="text-2xl font-bold text-secondary">{formatPercent(cashOnCashReturn)}</div>
                        <div className="mt-1 text-xs text-muted-foreground">On down payment</div>
                      </div>

                      <div className="rounded-lg bg-primary/5 p-4">
                        <div className="mb-2 text-sm font-medium text-muted-foreground">Down Payment</div>
                        <div className="text-2xl font-bold text-primary">{formatCurrency(downPaymentAmount)}</div>
                        <div className="mt-1 text-xs text-muted-foreground">{downPayment}% of purchase</div>
                      </div>

                      <div className="rounded-lg bg-primary/5 p-4">
                        <div className="mb-2 text-sm font-medium text-muted-foreground">Payback Period</div>
                        <div className="text-2xl font-bold text-primary">
                          {netCashFlow > 0 ? `${paybackPeriod.toFixed(1)} yrs` : 'N/A'}
                        </div>
                        <div className="mt-1 text-xs text-muted-foreground">To recover down payment</div>
                      </div>
                    </div>

                    <div className="mt-6 space-y-3 rounded-lg bg-white p-4">
                      <h3 className="font-bold text-primary">Charter Utilization</h3>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Charter Weeks</span>
                        <span className="font-semibold text-primary">{charterWeeks} weeks</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Personal Use</span>
                        <span className="font-semibold text-primary">{personalWeeks} weeks</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Maintenance/Downtime</span>
                        <span className="font-semibold text-primary">{52 - charterWeeks - personalWeeks} weeks</span>
                      </div>
                      <div className="mt-2 h-4 w-full overflow-hidden rounded-full bg-gray-200">
                        <div className="flex h-full">
                          <div
                            className="bg-secondary"
                            style={{ width: `${(charterWeeks / 52) * 100}%` }}
                          />
                          <div
                            className="bg-primary"
                            style={{ width: `${(personalWeeks / 52) * 100}%` }}
                          />
                        </div>
                      </div>
                      <div className="flex gap-4 text-xs">
                        <div className="flex items-center gap-1">
                          <div className="h-3 w-3 rounded-sm bg-secondary" />
                          <span>Charter</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="h-3 w-3 rounded-sm bg-primary" />
                          <span>Personal</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="h-3 w-3 rounded-sm bg-gray-200" />
                          <span>Maintenance</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-blue-200 bg-blue-50">
                  <CardContent className="p-6">
                    <h3 className="mb-3 font-bold text-primary">Important Notes</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-secondary">•</span>
                        <span>This calculator provides estimates only. Actual results may vary based on market conditions and yacht utilization.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-secondary">•</span>
                        <span>Charter rates vary by season, yacht condition, and market demand.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-secondary">•</span>
                        <span>MCC management includes maintenance, cleaning, crew, and marketing.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-secondary">•</span>
                        <span>Tax benefits such as depreciation are not included in this calculation.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 text-secondary">•</span>
                        <span>Consult with our charter specialists and your financial advisor for personalized guidance.</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <div className="text-center">
                  <Button variant="gold" size="lg" className="w-full sm:w-auto" asChild>
                    <Link href="/#contact">Schedule a Consultation</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Start Your Charter Ownership Journey?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
            Our charter specialists can help you understand the MCC program, select the right yacht, and maximize your investment
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="secondary" size="lg" asChild>
              <Link href="/try-before-buy">Try Before You Buy</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link href="/bali">View New Bali Catamarans</Link>
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
