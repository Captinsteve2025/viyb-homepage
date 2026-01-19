"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Award, Calendar, CheckCircle2, DollarSign, Mail, MapPin, Phone, Sailboat, Star, Users , LogIn} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import MobileNav from "@/components/MobileNav";
import Logo from "@/components/Logo";

const availableCatamarans = [
  {
    id: 1,
    name: "Bali 4.6",
    image: "https://bali-catamarans.hr/images/ownership/yacht-images/bali-43-loft/bali-43-loft-1.jpg",
    length: "46'",
    cabins: 5,
    year: 2023,
    price: "$825,000",
    charterRate: "$8,500/week",
    description: "Experience the revolutionary open-space design with spacious cockpit and innovative tilting door system."
  },
  {
    id: 2,
    name: "Bali 4.8",
    image: "https://bali-catamarans.hr/images/ownership/yacht-images/bali-48-open-space/bali-48-open-space-main.jpg",
    length: "48'",
    cabins: 6,
    year: 2024,
    price: "$1,050,000",
    charterRate: "$11,500/week",
    description: "Flagship Bali catamaran with premium comfort and expansive living areas throughout."
  },
  {
    id: 3,
    name: "Lagoon 46",
    image: "https://sailtmm.com/assets/images/yacht_sales_hero.jpg",
    length: "46'",
    cabins: 4,
    year: 2023,
    price: "$895,000",
    charterRate: "$9,200/week",
    description: "Proven performance cruiser with excellent sailing characteristics and comfort."
  },
  {
    id: 4,
    name: "Bali Catspace",
    image: "https://bali-catamarans.hr/images/ownership/yacht-images/bali-catsmart/bali-catsmart-main.jpg",
    length: "40'",
    cabins: 4,
    year: 2024,
    price: "$1,450,000",
    charterRate: "$12,000/week",
    description: "The ultimate innovation in catamaran design with unprecedented open-space concept."
  }
];

export default function TryBeforeYouBuyPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredDates: "",
    catamaranInterest: "",
    message: ""
  });

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
          <Link href="/admin/login" className="flex items-center gap-1.5 text-sm font-medium uppercase tracking-wide text-muted-foreground transition-colors hover:text-secondary" title="Admin Panel"><LogIn className="h-4 w-4" />Admin</Link>
          </nav>
          <MobileNav currentPage="Try Before You Buy" variant="light" />
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
            backgroundImage: 'url(https://www.bvisail.com/wp-content/uploads/2023/12/001-Bali-catamaran-4.4-1024x660.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/90" />
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center text-white">
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 inline-block rounded-full bg-secondary/20 px-6 py-2 backdrop-blur-sm">
              <span className="text-sm font-bold uppercase tracking-wide text-secondary">Experience Before You Commit</span>
            </div>
            <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              Try Before You Buy
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-xl leading-relaxed md:text-2xl">
              Charter your dream catamaran for 7-14 days in the Caribbean. Fall in love with it, then make it yours with charter fees credited toward your purchase.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button variant="gold" size="lg" className="text-base">
                Schedule Your Charter
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-primary">
                View Available Catamarans
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-primary md:text-5xl">How It Works</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Our simple 4-step process helps you make the most informed decision about your yacht purchase
            </p>
          </div>

          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card className="group relative overflow-hidden border-2 border-primary/10 transition-all hover:border-secondary hover:shadow-xl">
                <CardContent className="p-8">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-yellow-500 text-2xl font-bold text-white shadow-lg">
                    1
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-primary">Choose Your Catamaran</h3>
                  <p className="leading-relaxed text-muted-foreground">
                    Select from our fleet of new Bali or Lagoon catamarans available for charter in the BVI.
                  </p>
                </CardContent>
              </Card>

              <Card className="group relative overflow-hidden border-2 border-primary/10 transition-all hover:border-secondary hover:shadow-xl">
                <CardContent className="p-8">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-yellow-500 text-2xl font-bold text-white shadow-lg">
                    2
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-primary">Charter & Explore</h3>
                  <p className="leading-relaxed text-muted-foreground">
                    Spend 7-14 days sailing the Caribbean, experiencing the yacht's performance and comfort firsthand.
                  </p>
                </CardContent>
              </Card>

              <Card className="group relative overflow-hidden border-2 border-primary/10 transition-all hover:border-secondary hover:shadow-xl">
                <CardContent className="p-8">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-yellow-500 text-2xl font-bold text-white shadow-lg">
                    3
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-primary">Make Your Decision</h3>
                  <p className="leading-relaxed text-muted-foreground">
                    Love it? Proceed with the purchase. Not quite right? Try a different model with no obligation.
                  </p>
                </CardContent>
              </Card>

              <Card className="group relative overflow-hidden border-2 border-primary/10 transition-all hover:border-secondary hover:shadow-xl">
                <CardContent className="p-8">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-yellow-500 text-2xl font-bold text-white shadow-lg">
                    4
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-primary">Get Your Credit</h3>
                  <p className="leading-relaxed text-muted-foreground">
                    Your charter fees are credited toward the purchase price when you join the MCC program.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Available Catamarans */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-primary md:text-5xl">
              Available Charter Catamarans
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Experience these exceptional catamarans before making your purchase decision
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {availableCatamarans.map((cat) => (
              <Card key={cat.id} className="group overflow-hidden transition-all hover:shadow-2xl">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute right-4 top-4 rounded-full bg-secondary px-4 py-2 text-sm font-bold text-white shadow-lg">
                    {cat.year}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-2xl font-bold text-primary">{cat.name}</h3>
                  <div className="mb-4 flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Sailboat className="h-4 w-4 text-secondary" />
                      <span>{cat.length}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4 text-secondary" />
                      <span>{cat.cabins} Cabins</span>
                    </div>
                  </div>
                  <p className="mb-4 text-sm text-muted-foreground">
                    {cat.description}
                  </p>
                  <div className="mb-4 space-y-2 border-t border-gray-200 pt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Charter Rate</span>
                      <span className="font-bold text-secondary">{cat.charterRate}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Purchase Price</span>
                      <span className="font-bold text-primary">{cat.price}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Credit Toward Purchase */}
      <section className="bg-gradient-to-br from-primary to-primary/90 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <div className="mb-6 flex justify-center">
                <div className="rounded-full bg-secondary/20 p-6 backdrop-blur-sm">
                  <DollarSign className="h-16 w-16 text-secondary" />
                </div>
              </div>
              <h2 className="mb-4 text-4xl font-bold md:text-5xl">
                Charter Fees Credited Toward Purchase
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-white/90">
                When you enter the Moorings Charter Company (MCC) program, 100% of your charter fees are credited toward your purchase price
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <Card className="border-2 border-white/20 bg-white/10 backdrop-blur-lg">
                <CardContent className="p-8">
                  <Award className="mb-4 h-12 w-12 text-secondary" />
                  <h3 className="mb-4 text-2xl font-bold">Example Scenario</h3>
                  <div className="space-y-3 text-white/90">
                    <p className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                      <span>Charter a Bali 4.8 for 10 days at $11,500/week = $16,400</span>
                    </p>
                    <p className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                      <span>Love it and decide to purchase at $1,050,000</span>
                    </p>
                    <p className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                      <span>Join MCC charter program with your new yacht</span>
                    </p>
                    <p className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                      <span className="font-bold text-secondary">$16,400 credited toward your purchase!</span>
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-white/20 bg-white/10 backdrop-blur-lg">
                <CardContent className="p-8">
                  <Star className="mb-4 h-12 w-12 text-secondary" />
                  <h3 className="mb-4 text-2xl font-bold">MCC Program Benefits</h3>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                      <span>60-80% of charter revenue returned to you</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                      <span>Full yacht maintenance and management included</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                      <span>4-8 weeks personal use annually</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                      <span>3-5 year guaranteed buyback programs available</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                      <span>Professional crew and support in the BVI</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 rounded-lg bg-white/10 p-6 text-center backdrop-blur-sm">
              <p className="text-sm italic text-white/80">
                * Charter fee credits apply only when entering the MCC charter management program. Terms and conditions apply. Contact us for full details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-16 text-center text-4xl font-bold text-primary md:text-5xl">
            Success Stories
          </h2>

          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
            <Card className="border-2 border-primary/10">
              <CardContent className="p-8">
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="mb-6 italic leading-relaxed text-muted-foreground">
                  "We used the Try Before You Buy program and it was invaluable. Spending 10 days on the Bali 4.5 convinced us it was the perfect yacht for our family. The charter fee credit made the decision even easier!"
                </p>
                <div>
                  <p className="font-bold text-primary">Jennifer & David Martinez</p>
                  <p className="text-sm text-muted-foreground">Bali 4.5 Owners, 2024</p>
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
                  "Initially we were interested in a different model, but after chartering it we realized it wasn't quite right. VIYB let us try a Bali 4.8 the following month, and that was the one! No pressure, just perfect service."
                </p>
                <div>
                  <p className="font-bold text-primary">Robert & Lisa Chen</p>
                  <p className="text-sm text-muted-foreground">Bali 4.8 Owners, 2023</p>
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
                  "The Try Before You Buy program gave us confidence in our purchase. We learned all the systems, tested the sailing characteristics, and knew exactly what we were getting. Plus the charter credit was a nice bonus!"
                </p>
                <div>
                  <p className="font-bold text-primary">Michael Thompson</p>
                  <p className="text-sm text-muted-foreground">Lagoon 46 Owner, 2024</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold text-primary md:text-5xl">
                Ready to Experience Your Dream Catamaran?
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Schedule a call with our charter specialists to discuss available dates, models, and program details
              </p>
            </div>

            <Card className="border-2 border-primary/10">
              <CardContent className="p-8">
                <form name="try-before-buy" method="POST" className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-primary">Full Name *</label>
                      <Input
                        placeholder="John Smith"
                        name="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-primary">Email *</label>
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        name="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-primary">Phone *</label>
                      <Input
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        name="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-primary">Preferred Charter Dates</label>
                      <Input
                        placeholder="e.g., March 2025"
                        name="preferredDates"
                        value={formData.preferredDates}
                        onChange={(e) => setFormData({...formData, preferredDates: e.target.value})}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-primary">Catamaran of Interest</label>
                    <select
                      className="flex h-11 w-full rounded-sm border border-input bg-background px-4 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      name="catamaranInterest"
                      value={formData.catamaranInterest}
                      onChange={(e) => setFormData({...formData, catamaranInterest: e.target.value})}
                    >
                      <option value="">Select a catamaran</option>
                      {availableCatamarans.map((cat) => (
                        <option key={cat.id} value={cat.name}>{cat.name}</option>
                      ))}
                      <option value="not-sure">Not sure yet / Want to discuss</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-primary">Message</label>
                    <textarea
                      className="flex min-h-[120px] w-full rounded-sm border border-input bg-background px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      name="message"
                      placeholder="Tell us about your sailing experience, ideal charter duration, and any questions you have..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>

                  <div className="flex flex-col items-center gap-4 sm:flex-row">
                    <Button type="submit" variant="gold" size="lg" className="w-full sm:w-auto">
                      <Calendar className="mr-2 h-5 w-5" />
                      Schedule Your Call
                    </Button>
                    <div className="text-center text-sm text-muted-foreground sm:text-left">
                      Or call us directly at{" "}
                      <a href="tel:+17862460809" className="font-medium text-primary hover:text-secondary">
                        +1 786 246 0809
                      </a>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>

            <div className="mt-8 rounded-lg bg-primary/5 p-6">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-secondary" />
                <div>
                  <h3 className="mb-2 font-bold text-primary">What Happens Next?</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Our charter specialist will contact you within 24 hours to discuss available catamarans,
                    preferred dates, and answer any questions about the Try Before You Buy program and MCC charter ownership.
                  </p>
                </div>
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
