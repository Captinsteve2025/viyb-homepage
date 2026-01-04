import { BALI_MODELS, type BaliModelData, logModelImageValidation } from '@/lib/baliModelsData'
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Award, CheckCircle2, Globe, GraduationCap, Mail, MapPin, Phone, Send, Ship, TrendingUp, AlertTriangle } from "lucide-react";
import Link from "next/link";
import MobileNav from "@/components/MobileNav";
import Logo from "@/components/Logo";
import ParallaxHero from "@/components/ParallaxHero";

export default async function BaliPage() {
  // Use static data - no scraping required
  const models = BALI_MODELS;

  // Log validation info server-side for debugging
  if (process.env.NODE_ENV === 'development') {
    console.log('[BaliPage] Using static model data');
    console.log('[BaliPage] Model count:', models.length);
    models.forEach(model => {
      console.log(`  [${model.name}]
    Slug: ${model.slug}
    Main Image: ${model.mainImage}
    Match Reason: ${model.mainImageReason}
    Manual Review: ${model.manualReviewNeeded}
    Layout Images: ${model.layoutImages.length}
    Deck Layouts: ${model.deckLayoutImages.length}`);
    });
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="fixed top-0 z-50 w-full border-b border-border bg-white shadow-sm">
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          <Link href="/">
            <Logo variant="light" />
          </Link>
          <nav className="hidden gap-8 md:flex">
            <Link href="/brokerage" className="text-sm font-medium uppercase tracking-wide text-foreground transition-colors hover:text-secondary">Brokerage</Link>
            <Link href="/bali" className="text-sm font-medium uppercase tracking-wide text-secondary">New Bali</Link>
            <Link href="/charter" className="text-sm font-medium uppercase tracking-wide text-foreground transition-colors hover:text-secondary">Yacht Charters</Link>
            <Link href="/training" className="text-sm font-medium uppercase tracking-wide text-foreground transition-colors hover:text-secondary">Training</Link>
            <Link href="/charter-ownership" className="text-sm font-medium uppercase tracking-wide text-foreground transition-colors hover:text-secondary">Charter Ownership</Link>
            <Link href="/#contact" className="text-sm font-medium uppercase tracking-wide text-foreground transition-colors hover:text-secondary">Contact</Link>
          </nav>
          <MobileNav currentPage="New Bali" variant="light" />
        </div>
      </header>

      {/* Hero Section with Parallax */}
      <ParallaxHero
        imageSrc="/hero/bali-hero.jpg"
        imageAlt="Bali 5.8 Catamaran sailing at sunset"
        title="New Bali Catamarans"
        subtitle="Discover the revolutionary catamaran range that's redefining luxury sailing"
        minHeight="70vh"
      />

      {/* Intro Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-8 text-4xl font-bold text-primary md:text-5xl">
              Why Bali Catamarans?
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                Bali Catamarans has revolutionized the sailing world with their innovative open-space concept.
                By eliminating traditional design barriers, Bali creates seamless indoor-outdoor living spaces
                that maximize natural light, ventilation, and connection with the ocean.
              </p>
              <p>
                The signature Bali features include a rigid forward cockpit, tilting aft platform door, and
                expansive living areas that set these catamarans apart from any other brand. Whether you're
                cruising the Caribbean or exploring distant shores, Bali delivers unmatched comfort and performance.
              </p>
              <div className="mt-12 rounded-lg bg-muted p-8">
                <div className="mb-4 flex items-center justify-center gap-3">
                  <Award className="h-8 w-8 text-secondary" />
                  <h3 className="text-2xl font-bold text-primary">Official Bali Sales Associate</h3>
                </div>
                <p className="text-muted-foreground">
                  Virgin Islands Yacht Broker is proud to be an authorized Bali Catamarans Sales Associate
                  in the British Virgin Islands. We offer expert guidance, factory-direct pricing, and
                  comprehensive support from order to delivery and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Bali Range Grid */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-primary md:text-5xl">The Bali Range</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              From compact cruisers to flagship yachts, find your perfect Bali catamaran
            </p>
          </div>
          {models.length === 0 ? (
            <div className="text-center text-muted-foreground py-10">No models available at the moment. Please refresh or try again shortly.</div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {models.map((model: BaliModelData) => (
                <Card key={model.slug} className="group overflow-hidden transition-all hover:shadow-2xl">
                  {/* Hero Image - Always full exterior side profile */}
                  <div className="relative h-64 overflow-hidden">
                    {model.mainImage ? (
                      <img
                        src={model.mainImage}
                        alt={`${model.name} exterior side profile`}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-muted text-2xl text-primary">
                        {model.name}
                      </div>
                    )}
                    {/* Manual review badge */}
                    {model.manualReviewNeeded && (
                      <div className="absolute top-2 right-2 flex items-center gap-1 rounded bg-amber-100 px-2 py-1 text-xs font-semibold text-amber-800 shadow">
                        <AlertTriangle className="h-3 w-3" />
                        Verify image
                      </div>
                    )}
                    {/* Image match reason (dev only - visible via title) */}
                    {model.mainImageReason && (
                      <div
                        className="absolute bottom-2 right-2 rounded bg-black/60 px-2 py-1 text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100"
                        title={`Image source: ${model.mainImageReason}`}
                      >
                        {model.mainImageReason}
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <h3 className="mb-2 text-2xl font-bold text-primary">{model.name}</h3>
                    {/* Spec chips */}
                    <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                      {model.loa && <span className="rounded bg-primary/5 px-2 py-0.5">LOA {model.loa}</span>}
                      {model.beam && <span className="rounded bg-primary/5 px-2 py-0.5">Beam {model.beam}</span>}
                      {model.draft && <span className="rounded bg-primary/5 px-2 py-0.5">Draft {model.draft}</span>}
                      {model.cabins && <span className="rounded bg-secondary/10 px-2 py-0.5 font-medium text-secondary">{model.cabins} Cabins</span>}
                    </div>

                    {/* Layout thumbnails - secondary gallery only */}
                    {(model.layoutImages.length > 0 || model.deckLayoutImages.length > 0) && (
                      <div className="mb-4">
                        <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">Layout Options</p>
                        <div className="flex gap-2 overflow-x-auto pb-1">
                          {model.layoutImages.slice(0, 2).map((img: string, i: number) => (
                            <img
                              key={`layout-${i}`}
                              src={img}
                              alt={`${model.name} layout ${i + 1}`}
                              className="h-14 w-24 flex-shrink-0 rounded border bg-white object-contain"
                            />
                          ))}
                          {model.deckLayoutImages.slice(0, 1).map((img: string, i: number) => (
                            <img
                              key={`deck-${i}`}
                              src={img}
                              alt={`${model.name} deck layout`}
                              className="h-14 w-24 flex-shrink-0 rounded border bg-white object-contain"
                            />
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Brochure link */}
                    {model.brochureUrl && (
                      <a href={model.brochureUrl} target="_blank" rel="noopener noreferrer" className="mb-3 block">
                        <Button variant="gold" className="w-full">Download Brochure</Button>
                      </a>
                    )}

                    {/* Details button */}
                    <Link href={`/bali/${model.slug}`} className="block">
                      <Button variant="outline" className="w-full">View Model Details</Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Delivery & Commissioning */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl font-bold text-primary md:text-5xl">
                Caribbean Delivery & Commissioning
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                Your new Bali catamaran can be delivered directly to the British Virgin Islands,
                ready for you to start your Caribbean adventure. Our comprehensive commissioning
                service ensures every system is thoroughly tested and your yacht is fully prepared.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Ship className="mt-1 h-8 w-8 flex-shrink-0 text-secondary" />
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-primary">Factory to Caribbean</h3>
                    <p className="text-muted-foreground">
                      Direct shipping from the Bali factory in France to the BVI. Typical transit time 4-6 weeks.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle2 className="mt-1 h-8 w-8 flex-shrink-0 text-secondary" />
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-primary">Full Commissioning</h3>
                    <p className="text-muted-foreground">
                      Complete rigging, systems testing, and sea trials performed by certified technicians.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Globe className="mt-1 h-8 w-8 flex-shrink-0 text-secondary" />
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-primary">Owner Orientation</h3>
                    <p className="text-muted-foreground">
                      Comprehensive handover training covering all systems, safety equipment, and sailing characteristics.
                    </p>
                  </div>
                </div>
              </div>

              {/* Owner Training Program Highlight */}
              <div className="mt-10 rounded-xl border-2 border-secondary/30 bg-gradient-to-r from-secondary/5 to-secondary/10 p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-secondary/20 p-3">
                    <GraduationCap className="h-8 w-8 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-bold text-primary">Exclusive Owner Training Program</h3>
                    <p className="mb-4 text-muted-foreground">
                      Master your new Bali catamaran with our comprehensive 5-day training program in the stunning British Virgin Islands.
                      Learn from experienced captains, gain hands-on experience in Caribbean waters, and build the confidence to
                      sail your yacht anywhere in the world.
                    </p>
                    <ul className="mb-5 space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-secondary" />
                        <span>5 days of hands-on catamaran-specific training</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-secondary" />
                        <span>Learn on your own yacht or our training vessel</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-secondary" />
                        <span>BVI-based with experienced local captains</span>
                      </li>
                    </ul>
                    <Link href="/training/owner-program">
                      <Button variant="gold" size="lg">
                        Explore Owner Training Program
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[500px] overflow-hidden rounded-lg shadow-2xl lg:h-[650px]">
              <img
                src="https://bali-catamarans.hr/images/ownership/yacht-images/bali-43-loft/bali-43-loft-1.jpg"
                alt="Bali Catamaran Delivery"
                className="h-full w-full object-cover"
              />
              {/* Training Badge Overlay */}
              <div className="absolute bottom-6 left-6 right-6 rounded-lg bg-white/95 p-4 shadow-lg backdrop-blur">
                <div className="flex items-center gap-3">
                  <GraduationCap className="h-10 w-10 text-secondary" />
                  <div>
                    <p className="font-bold text-primary">BVI Owner Training Included</p>
                    <p className="text-sm text-muted-foreground">Hands-on catamaran mastery in paradise</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tax Advantages */}
      <section className="bg-gradient-to-br from-primary to-primary/90 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-center text-4xl font-bold md:text-5xl">
              Smart Ownership for US Buyers
            </h2>

            <div className="grid gap-8 md:grid-cols-2">
              <Card className="border-2 border-white/20 bg-white/10 backdrop-blur">
                <CardContent className="p-8">
                  <TrendingUp className="mb-4 h-12 w-12 text-secondary" />
                  <h3 className="mb-4 text-2xl font-bold">Tax Advantages</h3>
                  <p className="mb-6 leading-relaxed text-white/90">
                    US buyers can benefit from significant tax deductions including 100% bonus depreciation
                    when the yacht is used for qualifying business purposes. Consult with your tax advisor
                    for specific benefits.
                  </p>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                      <span>First-year depreciation deductions available</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                      <span>Section 179 expense deduction eligibility</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                      <span>Charter income can offset ownership costs</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-white/20 bg-white/10 backdrop-blur">
                <CardContent className="p-8">
                  <Ship className="mb-4 h-12 w-12 text-secondary" />
                  <h3 className="mb-4 text-2xl font-bold">Charter Ownership Benefits</h3>
                  <p className="mb-6 leading-relaxed text-white/90">
                    Place your new Bali into our charter management program and generate income while
                    building equity. Ideal for offsetting operating costs and maximizing your investment.
                  </p>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                      <span>60-80% revenue share to owners</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                      <span>Full maintenance and management included</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                      <span>4-8 weeks personal use annually</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 rounded-lg bg-white/10 p-6 text-center backdrop-blur">
              <p className="text-sm italic text-white/80">
                * Tax benefits vary by individual circumstances. We recommend consulting with your tax
                advisor to determine specific benefits applicable to your situation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold text-primary md:text-5xl">Start Your Journey</h2>
              <p className="text-lg text-muted-foreground">
                Get in touch with our Bali specialists to discuss your perfect catamaran
              </p>
            </div>

            <Card>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-primary">First Name</label>
                      <Input placeholder="John" />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-primary">Last Name</label>
                      <Input placeholder="Smith" />
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-primary">Email</label>
                      <Input type="email" placeholder="john@example.com" />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-primary">Phone</label>
                      <Input type="tel" placeholder="+1 (555) 123-4567" />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-primary">Which Bali model interests you?</label>
                    <select className="flex h-11 w-full rounded-sm border border-input bg-background px-4 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                      <option>Select a model</option>
                      {models.map((model: BaliModelData) => (
                        <option key={model.slug} value={model.name}>{model.name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-primary">Interested in:</label>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                        <span className="text-sm text-muted-foreground">Personal use</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                        <span className="text-sm text-muted-foreground">Charter ownership program</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                        <span className="text-sm text-muted-foreground">Try before you buy</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-primary">Message</label>
                    <textarea
                      className="flex min-h-[120px] w-full rounded-sm border border-input bg-background px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      placeholder="Tell us about your sailing plans..."
                    />
                  </div>

                  <Button variant="gold" size="lg" className="w-full">
                    <Send className="mr-2 h-5 w-5" />
                    Send Enquiry
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="mt-8 text-center text-sm text-muted-foreground">
              Or call us directly at <a href="tel:+17862460809" className="font-medium text-primary hover:text-secondary">+1 786 246 0809</a>
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
                <li><Link href="/#brokerage" className="transition-colors hover:text-secondary">Brokerage Yachts</Link></li>
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
