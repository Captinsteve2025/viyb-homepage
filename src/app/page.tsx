import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Anchor, Award, CheckCircle2, DollarSign, GraduationCap, LogIn, Mail, MapPin, Phone, Sailboat, Ship, Star, TrendingUp, Users } from "lucide-react";
import Link from "next/link";
import MobileNav from "@/components/MobileNav";
import Logo from "@/components/Logo";

// Featured Bali models
const featuredBaliModels = [
  {
    name: "Bali Catsmart",
    slug: "catsmart",
    image: "/bali/bali-catsmart.jpg",
    description: "Compact yet fully featured entry into the Bali range with the signature Open Space concept.",
    price: "From $387,750",
    length: "39'",
    cabins: "4"
  },
  {
    name: "Bali Catspace",
    slug: "catspace",
    image: "/bali/bali-catspace.jpg",
    description: "Latest innovations in cruising catamarans, blending intelligent design with performance.",
    price: "From $432,400",
    length: "40'",
    cabins: "4-6"
  },
  {
    name: "Bali 4.2",
    slug: "4-2",
    image: "/bali/bali-4-2.jpg",
    description: "Open Space design with seamless indoor-outdoor living and a rigid forward cockpit.",
    price: "From $524,638",
    length: "42'",
    cabins: "4"
  },
  {
    name: "Bali 4.4",
    slug: "4-4",
    image: "/bali/bali-4-4.jpg",
    description: "Award-winning design offering exceptional space, comfort, and natural light.",
    price: "From $667,400",
    length: "44'",
    cabins: "4-5"
  },
  {
    name: "Bali 4.6",
    slug: "4-6",
    image: "/bali/bali-4-6.jpg",
    description: "Sleek frame and expansive living areas with Bali's signature tilting aft door.",
    price: "From $746,125",
    length: "46'",
    cabins: "4-6"
  },
  {
    name: "Bali 5.2",
    slug: "5-2",
    image: "/bali/bali-5-2.jpg",
    description: "52 feet of innovation and space with layouts from 3 to 6 cabins and up to 16 berths.",
    price: "From $1,128,000",
    length: "52'",
    cabins: "3-6"
  },
  {
    name: "Bali 5.8",
    slug: "5-8",
    image: "/bali/bali-5-8.jpg",
    description: "The pinnacle of the Bali range—innovation, comfort, and performance at flagship scale.",
    price: "From $1,702,575",
    length: "58'",
    cabins: "6-8"
  }
];

// Testimonials
const testimonials = [
  {
    name: "Michael & Sarah Thompson",
    location: "Newport, Rhode Island",
    quote: "VIYB made our dream of owning a yacht in the Caribbean a reality. The charter ownership program has exceeded our expectations with consistent returns.",
    rating: 5
  },
  {
    name: "David Chen",
    location: "San Francisco, CA",
    quote: "The Try Before You Buy program was perfect. We chartered a Bali 4.8 for two weeks and fell in love. Now she's ours and earning income when we're not aboard.",
    rating: 5
  },
  {
    name: "Jennifer & Robert Williams",
    location: "Dallas, Texas",
    quote: "The tax benefits through bonus depreciation were a game-changer. Combined with charter income, our yacht practically pays for itself.",
    rating: 5
  }
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="fixed top-0 z-50 w-full border-b border-border bg-white shadow-sm">
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          <Link href="/">
            <Logo variant="light" />
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            <Link href="/brokerage" className="text-sm font-medium uppercase tracking-wide text-foreground transition-colors hover:text-secondary">Brokerage</Link>
            <Link href="/bali" className="text-sm font-medium uppercase tracking-wide text-foreground transition-colors hover:text-secondary">New Bali</Link>
            <Link href="/charter" className="text-sm font-medium uppercase tracking-wide text-foreground transition-colors hover:text-secondary">Yacht Charters</Link>
            <Link href="/training" className="text-sm font-medium uppercase tracking-wide text-foreground transition-colors hover:text-secondary">Training</Link>
            <Link href="/charter-ownership" className="text-sm font-medium uppercase tracking-wide text-foreground transition-colors hover:text-secondary">Charter Ownership</Link>
            <a href="#contact" className="text-sm font-medium uppercase tracking-wide text-foreground transition-colors hover:text-secondary">Contact</a>
            <Link href="/admin/login" className="flex items-center gap-1.5 text-sm font-medium uppercase tracking-wide text-muted-foreground transition-colors hover:text-secondary" title="Admin Panel">
              <LogIn className="h-4 w-4" />Admin
            </Link>
          </nav>
          <MobileNav currentPage="Home" variant="light" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/Alegria67_Header_Optimized.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-primary/20 to-primary/20" />
        </div>

        <div className="container relative z-10 mx-auto flex min-h-screen flex-col justify-between px-4 pb-24 pt-32 text-center text-white">
          <div>
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Your Gateway to
              <br />
              <span className="text-secondary">Caribbean Yacht Ownership</span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed sm:text-lg md:text-xl">
              Premier yacht sales, new Bali catamarans, and Caribbean brokerage services in the heart of the Virgin Islands
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Link href="#contact">
              <Button variant="gold" size="lg" className="shadow-2xl">
                Request an Enquiry
              </Button>
            </Link>
            <Link href="/brokerage">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                View Our Fleet
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Value Pillars */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-16 text-center text-4xl font-bold text-primary md:text-5xl">
            Why Choose VIYB
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="group border-2 border-primary/10 transition-all hover:border-secondary hover:shadow-xl">
              <CardContent className="flex flex-col items-center p-8 text-center">
                <div className="mb-6 rounded-full bg-primary/10 p-6 transition-all group-hover:bg-secondary/10">
                  <Sailboat className="h-12 w-12 text-primary transition-all group-hover:text-secondary" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-primary">Brokerage Excellence</h3>
                <p className="leading-relaxed text-muted-foreground">
                  Expert guidance in buying and selling pre-owned yachts. Our experienced brokers provide personalized service throughout the entire process.
                </p>
              </CardContent>
            </Card>

            <Card className="group border-2 border-primary/10 transition-all hover:border-secondary hover:shadow-xl">
              <CardContent className="flex flex-col items-center p-8 text-center">
                <div className="mb-6 rounded-full bg-primary/10 p-6 transition-all group-hover:bg-secondary/10">
                  <Award className="h-12 w-12 text-primary transition-all group-hover:text-secondary" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-primary">New Bali Catamarans</h3>
                <p className="leading-relaxed text-muted-foreground">
                  Authorized dealer for Bali Catamarans. Experience the revolutionary design and luxury of the world's most innovative catamaran range.
                </p>
              </CardContent>
            </Card>

            <Card className="group border-2 border-primary/10 transition-all hover:border-secondary hover:shadow-xl">
              <CardContent className="flex flex-col items-center p-8 text-center">
                <div className="mb-6 rounded-full bg-primary/10 p-6 transition-all group-hover:bg-secondary/10">
                  <TrendingUp className="h-12 w-12 text-primary transition-all group-hover:text-secondary" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-primary">Charter Ownership</h3>
                <p className="leading-relaxed text-muted-foreground">
                  Turn your yacht into an income-generating asset. Our charter management program helps offset ownership costs while you enjoy your vessel.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Bali Catamaran Range */}
      <section className="bg-primary py-24 text-white">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">
              The Bali Catamaran Range
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-white/80">
              Revolutionary design meets luxury sailing. As an authorized Bali dealer, we offer the complete range with factory-direct pricing.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {featuredBaliModels.map((model) => (
              <Link key={model.slug} href={`/bali/${model.slug}`} className="block">
                <Card className="group h-full cursor-pointer overflow-hidden border-0 bg-white/10 backdrop-blur transition-all hover:bg-white/20 hover:shadow-xl">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={model.image}
                      alt={model.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-6 text-white">
                    <h3 className="mb-2 text-xl font-bold">{model.name}</h3>
                    <p className="mb-2 text-sm text-white/70">
                      {model.length} • {model.cabins} Cabins
                    </p>
                    <p className="mb-3 text-sm text-white/80">{model.description}</p>
                    <p className="text-lg font-bold text-secondary">{model.price}</p>
                    <p className="mt-3 text-sm font-medium text-white/60 transition-colors group-hover:text-secondary">
                      View Details →
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/bali">
              <Button variant="gold" size="lg">
                Explore All Bali Models
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Try Before You Buy */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2 isolate">
            <div className="relative w-full overflow-hidden rounded-xl aspect-[4/3] sm:aspect-video lg:aspect-[16/10]">
              <img
                src="/hero/bali-52-try-before-buy.jpg"
                alt="Bali 5.2 Catamaran - Try Before You Buy"
                className="h-full w-full object-cover object-center lg:object-[50%_40%]"
                loading="lazy"
                decoding="async"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-transparent" />
            </div>
            <div className="relative z-10 max-w-[720px]">
              <div className="mb-4 inline-block rounded-full bg-secondary/20 px-4 py-2">
                <span className="text-sm font-bold uppercase tracking-wide text-secondary">Unique Opportunity</span>
              </div>
              <h2 className="mb-6 text-4xl font-bold text-primary md:text-5xl">
                Try Before You Buy
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
                Experience your dream yacht before making a commitment. Charter a catamaran for 7-14 days in the Caribbean, fall in love with it, then make it yours with charter fees credited toward your purchase.
              </p>
              <ul className="mb-8 space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span className="text-muted-foreground">Charter fee credited toward purchase price</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span className="text-muted-foreground">Experience the yacht in real conditions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span className="text-muted-foreground">Expert crew available for training</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span className="text-muted-foreground">No obligation to purchase</span>
                </li>
              </ul>
              <Link href="/try-before-buy">
                <Button variant="gold" size="lg">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bonus Depreciation for US Clients */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2 isolate">
            <div className="order-2 lg:order-1 relative z-10 max-w-[720px]">
              <div className="mb-4 inline-block rounded-full bg-green-500/20 px-4 py-2">
                <span className="text-sm font-bold uppercase tracking-wide text-green-600">Tax Advantage</span>
              </div>
              <h2 className="mb-6 text-4xl font-bold text-primary md:text-5xl">
                Bonus Depreciation for US Clients
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
                US taxpayers can take advantage of significant tax benefits through bonus depreciation when purchasing a yacht for charter use. Write off up to 100% of the purchase price in Year 1.
              </p>
              <ul className="mb-8 space-y-3">
                <li className="flex items-start gap-3">
                  <DollarSign className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                  <span className="text-muted-foreground">Up to 100% bonus depreciation in Year 1</span>
                </li>
                <li className="flex items-start gap-3">
                  <DollarSign className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                  <span className="text-muted-foreground">Significant tax savings on high-income earnings</span>
                </li>
                <li className="flex items-start gap-3">
                  <DollarSign className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                  <span className="text-muted-foreground">Combine with charter income for optimal returns</span>
                </li>
                <li className="flex items-start gap-3">
                  <DollarSign className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                  <span className="text-muted-foreground">Professional tax guidance available</span>
                </li>
              </ul>
              <Link href="/bonus-depreciation">
                <Button variant="gold" size="lg">
                  Calculate Your Savings
                </Button>
              </Link>
            </div>
            <div className="relative order-1 w-full overflow-hidden rounded-xl aspect-[4/3] sm:aspect-video lg:order-2 lg:aspect-[16/10]">
              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2070&auto=format&fit=crop"
                alt="Tax benefits and financial planning"
                className="h-full w-full object-cover object-center lg:object-[50%_40%]"
                loading="lazy"
                decoding="async"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-primary/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-lg bg-white/95 p-6 backdrop-blur">
                <p className="text-sm font-medium text-muted-foreground">Example Savings</p>
                <p className="text-3xl font-bold text-primary">$320,000+</p>
                <p className="text-sm text-muted-foreground">On a $1M yacht purchase</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Charter Management in the BVI */}
      <section className="bg-primary py-24 text-white">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2 isolate">
            <div className="relative w-full overflow-hidden rounded-xl aspect-[4/3] sm:aspect-video lg:aspect-[16/10]">
              <img
                src="/hero/charter-ownership.jpg"
                alt="Charter Management in the BVI"
                className="h-full w-full object-cover object-center lg:object-[50%_45%]"
                loading="lazy"
                decoding="async"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
              />
            </div>
            <div className="relative z-10 max-w-[720px]">
              <div className="mb-4 inline-block rounded-full bg-secondary/20 px-4 py-2">
                <span className="text-sm font-bold uppercase tracking-wide text-secondary">MCC Partnership</span>
              </div>
              <h2 className="mb-6 text-4xl font-bold md:text-5xl">
                Charter Management in the BVI
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-white/80">
                Partner with MCC Clearinghouse for professional charter management. Generate income from your yacht when you're not using it, with the BVI's premier charter company.
              </p>
              <ul className="mb-8 space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span className="text-white/80">Professional yacht management and maintenance</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span className="text-white/80">Strong charter demand in the BVI market</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span className="text-white/80">Transparent revenue sharing model</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span className="text-white/80">Offset ownership costs significantly</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-4">
                <Link href="/charter-ownership">
                  <Button variant="gold" size="lg">
                    Explore Charter Ownership
                  </Button>
                </Link>
                <Link href="/charter-calculator">
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                    ROI Calculator
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-primary md:text-5xl">
              What Our Clients Say
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Real experiences from yacht owners who have partnered with VIYB
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2 border-primary/10 transition-all hover:border-secondary hover:shadow-xl">
                <CardContent className="p-8">
                  <div className="mb-4 flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <p className="mb-6 text-lg italic leading-relaxed text-muted-foreground">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-bold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary">Stay Updated</h2>
            <p className="mb-8 text-muted-foreground">
              Subscribe to receive the latest yacht listings, market insights, and exclusive offers.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Input
                type="email"
                placeholder="Enter your email"
                className="max-w-sm border-primary/20"
              />
              <Button variant="gold" size="lg">
                Subscribe
              </Button>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-primary py-16 text-white">
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
                <li><Link href="/charter-ownership" className="transition-colors hover:text-secondary">Charter Ownership</Link></li>
                <li><Link href="/training" className="transition-colors hover:text-secondary">Training Programs</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-bold uppercase tracking-wide">Services</h3>
              <ul className="space-y-2 text-white/80">
                <li><Link href="/brokerage" className="transition-colors hover:text-secondary">Yacht Brokerage</Link></li>
                <li><Link href="/bali" className="transition-colors hover:text-secondary">New Yacht Sales</Link></li>
                <li><Link href="/charter-ownership" className="transition-colors hover:text-secondary">Charter Management</Link></li>
                <li><Link href="/try-before-buy" className="transition-colors hover:text-secondary">Try Before You Buy</Link></li>
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
