import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, BookOpen, Calculator, Download, FileText, Folder, Mail, MapPin, Phone, Ship , LogIn} from "lucide-react";
import Link from "next/link";
import MobileNav from "@/components/MobileNav";
import Logo from "@/components/Logo";

const resources = {
  featured: [
    {
      id: 1,
      title: "Complete Bali Catamarans Catalog 2025",
      description: "Comprehensive 48-page catalog featuring all Bali models with full specifications, layouts, and pricing. Includes comparison charts and optional equipment guides.",
      category: "Yacht Brochures",
      fileSize: "12.4 MB",
      pages: 48,
      image: "https://bali-catamarans.hr/images/ownership/yacht-images/bali-48-open-space/bali-48-open-space-main.jpg",
      featured: true
    },
    {
      id: 2,
      title: "Charter Ownership ROI Guide",
      description: "Detailed analysis of charter ownership economics including revenue projections, expense breakdowns, and real-world case studies from BVI operations.",
      category: "Charter Ownership",
      fileSize: "3.2 MB",
      pages: 24,
      image: "https://sailtmm.com/assets/images/yacht_sales_hero.jpg",
      featured: true
    },
    {
      id: 3,
      title: "Bonus Depreciation Tax Guide for Yacht Buyers",
      description: "Expert guide to maximizing tax benefits through bonus depreciation and Section 179. Includes qualification checklist and documentation requirements.",
      category: "Tax Benefits",
      fileSize: "2.8 MB",
      pages: 16,
      image: "https://moranyachts.imgix.net/wp-content/uploads/why-choose-us-yacht-broker-moran-yachts-1.jpg?auto=format&fit=crop&fm=webp&h=700&ixlib=php-3.1.0&w=1800&s=78ef896f187bdcd43836c3b371d41e10",
      featured: true
    }
  ],

  baliCatamarans: [
    {
      id: 4,
      title: "Bali Catspace Brochure",
      description: "Complete specifications, layout options, and customization guide for the revolutionary Bali Catspace.",
      fileSize: "4.2 MB",
      pages: 12
    },
    {
      id: 5,
      title: "Bali 4.2 Specification Sheet",
      description: "Technical specifications, performance data, and standard equipment list.",
      fileSize: "1.8 MB",
      pages: 6
    },
    {
      id: 6,
      title: "Bali 4.4 Brochure",
      description: "Award-winning design details, interior layouts, and pricing information.",
      fileSize: "3.5 MB",
      pages: 10
    },
    {
      id: 7,
      title: "Bali 4.6 Complete Guide",
      description: "Full specifications, cabin configurations, and optional equipment catalog.",
      fileSize: "4.8 MB",
      pages: 14
    },
    {
      id: 8,
      title: "Bali 4.8 Luxury Brochure",
      description: "Premium features, advanced systems, and customization options.",
      fileSize: "5.2 MB",
      pages: 16
    },
    {
      id: 9,
      title: "Bali 5.4 Flagship Guide",
      description: "Performance cruiser specifications, sailing characteristics, and layout options.",
      fileSize: "4.6 MB",
      pages: 14
    },
    {
      id: 10,
      title: "Bali 5.8 Ultimate Brochure",
      description: "The pinnacle of the range - complete specifications and luxury features.",
      fileSize: "6.1 MB",
      pages: 18
    }
  ],

  charterOwnership: [
    {
      id: 11,
      title: "MCC Charter Management Program Overview",
      description: "Complete guide to the Moorings Charter Company program including revenue shares, management fees, and owner benefits.",
      fileSize: "2.4 MB",
      pages: 12
    },
    {
      id: 12,
      title: "BVI Charter Market Analysis 2025",
      description: "Current market trends, seasonal demand patterns, and revenue projections for the British Virgin Islands.",
      fileSize: "1.9 MB",
      pages: 8
    },
    {
      id: 13,
      title: "Charter Owner Success Stories",
      description: "Real testimonials and case studies from charter owners in the Caribbean.",
      fileSize: "2.1 MB",
      pages: 10
    },
    {
      id: 14,
      title: "Try Before You Buy Program Guide",
      description: "Complete details on our charter-to-purchase program with fee credits and terms.",
      fileSize: "1.5 MB",
      pages: 6
    }
  ],

  taxBenefits: [
    {
      id: 15,
      title: "100% Bonus Depreciation Explained",
      description: "Step-by-step guide to claiming bonus depreciation on yacht purchases.",
      fileSize: "2.2 MB",
      pages: 10
    },
    {
      id: 16,
      title: "Section 179 Deduction Guide",
      description: "Alternative tax strategy for qualifying yacht purchases.",
      fileSize: "1.8 MB",
      pages: 8
    },
    {
      id: 17,
      title: "Business Entity Formation Checklist",
      description: "Guide to setting up LLC, S-Corp, or C-Corp for yacht ownership.",
      fileSize: "1.2 MB",
      pages: 6
    },
    {
      id: 18,
      title: "IRS Documentation Requirements",
      description: "Complete checklist of required records and documentation for tax compliance.",
      fileSize: "1.4 MB",
      pages: 8
    },
    {
      id: 19,
      title: "Marine CPA Referral Network",
      description: "Directory of tax professionals specializing in marine tax law.",
      fileSize: "0.8 MB",
      pages: 4
    }
  ],

  buyersGuides: [
    {
      id: 20,
      title: "First-Time Yacht Buyer's Guide",
      description: "Everything you need to know about purchasing your first yacht.",
      fileSize: "3.2 MB",
      pages: 20
    },
    {
      id: 21,
      title: "Catamaran vs Monohull Comparison",
      description: "Detailed analysis of advantages and considerations for each type.",
      fileSize: "2.4 MB",
      pages: 12
    },
    {
      id: 22,
      title: "Marine Financing Options Guide",
      description: "Overview of lending options, rates, and qualification requirements.",
      fileSize: "1.9 MB",
      pages: 10
    },
    {
      id: 23,
      title: "Yacht Survey and Inspection Checklist",
      description: "What to look for when surveying a pre-owned yacht.",
      fileSize: "1.6 MB",
      pages: 8
    },
    {
      id: 24,
      title: "Caribbean Cruising Guide",
      description: "Popular destinations, anchorages, and sailing conditions in the Caribbean.",
      fileSize: "4.8 MB",
      pages: 32
    }
  ],

  technical: [
    {
      id: 25,
      title: "Yacht Maintenance Schedule Template",
      description: "Comprehensive maintenance checklist and scheduling guide.",
      fileSize: "1.2 MB",
      pages: 8
    },
    {
      id: 26,
      title: "Marine Systems Overview",
      description: "Guide to electrical, plumbing, and mechanical systems on modern yachts.",
      fileSize: "2.8 MB",
      pages: 16
    },
    {
      id: 27,
      title: "Hurricane Preparedness Guide",
      description: "Essential steps for protecting your yacht during hurricane season.",
      fileSize: "1.4 MB",
      pages: 6
    },
    {
      id: 28,
      title: "Insurance Coverage Guide",
      description: "Understanding marine insurance policies and coverage options.",
      fileSize: "1.8 MB",
      pages: 10
    }
  ]
};

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Yacht Brochures":
      return Ship;
    case "Charter Ownership":
      return Calculator;
    case "Tax Benefits":
      return FileText;
    default:
      return BookOpen;
  }
};

export default function ResourcesPage() {
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
          <MobileNav currentPage="Resources" variant="light" />
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
              <Folder className="h-16 w-16 text-secondary" />
            </div>
          </div>
          <h1 className="mb-4 text-5xl font-bold md:text-6xl">Resources & Downloads</h1>
          <p className="mx-auto max-w-2xl text-lg text-white/90">
            Comprehensive guides, brochures, and educational materials to help you make informed decisions about yacht ownership
          </p>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-primary md:text-5xl">Featured Downloads</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Our most popular and comprehensive resources
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {resources.featured.map((resource) => {
              const Icon = getCategoryIcon(resource.category);
              return (
                <Card key={resource.id} className="group overflow-hidden border-2 border-primary/10 transition-all hover:border-secondary hover:shadow-2xl">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={resource.image}
                      alt={resource.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="rounded-full bg-secondary px-3 py-1 text-xs font-bold text-white">
                        {resource.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-start gap-3">
                      <Icon className="mt-1 h-6 w-6 flex-shrink-0 text-secondary" />
                      <h3 className="text-xl font-bold text-primary">{resource.title}</h3>
                    </div>
                    <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                      {resource.description}
                    </p>
                    <div className="mb-4 flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <FileText className="h-4 w-4" />
                        {resource.pages} pages
                      </span>
                      <span>•</span>
                      <span>{resource.fileSize}</span>
                    </div>
                    <Button variant="gold" className="w-full">
                      <Download className="mr-2 h-4 w-4" />
                      Download PDF
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bali Catamarans */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <div className="mb-4 flex items-center gap-3">
              <Ship className="h-8 w-8 text-secondary" />
              <h2 className="text-4xl font-bold text-primary">Bali Catamaran Brochures</h2>
            </div>
            <p className="text-lg text-muted-foreground">
              Detailed specifications and brochures for each Bali model
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resources.baliCatamarans.map((resource) => (
              <Card key={resource.id} className="transition-all hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-start justify-between">
                    <h3 className="text-lg font-bold text-primary">{resource.title}</h3>
                    <FileText className="h-5 w-5 flex-shrink-0 text-secondary" />
                  </div>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {resource.description}
                  </p>
                  <div className="mb-4 flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{resource.pages} pages</span>
                    <span>•</span>
                    <span>{resource.fileSize}</span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Charter Ownership */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <div className="mb-4 flex items-center gap-3">
              <Calculator className="h-8 w-8 text-secondary" />
              <h2 className="text-4xl font-bold text-primary">Charter Ownership Resources</h2>
            </div>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about charter management and income generation
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {resources.charterOwnership.map((resource) => (
              <Card key={resource.id} className="transition-all hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-start justify-between">
                    <h3 className="text-lg font-bold text-primary">{resource.title}</h3>
                    <FileText className="h-5 w-5 flex-shrink-0 text-secondary" />
                  </div>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {resource.description}
                  </p>
                  <div className="mb-4 flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{resource.pages} pages</span>
                    <span>•</span>
                    <span>{resource.fileSize}</span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tax Benefits */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <div className="mb-4 flex items-center gap-3">
              <FileText className="h-8 w-8 text-secondary" />
              <h2 className="text-4xl font-bold text-primary">Tax Benefits & Strategies</h2>
            </div>
            <p className="text-lg text-muted-foreground">
              Comprehensive guides to maximizing tax advantages for US yacht buyers
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resources.taxBenefits.map((resource) => (
              <Card key={resource.id} className="transition-all hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-start justify-between">
                    <h3 className="text-lg font-bold text-primary">{resource.title}</h3>
                    <FileText className="h-5 w-5 flex-shrink-0 text-secondary" />
                  </div>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {resource.description}
                  </p>
                  <div className="mb-4 flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{resource.pages} pages</span>
                    <span>•</span>
                    <span>{resource.fileSize}</span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Buyer's Guides */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <div className="mb-4 flex items-center gap-3">
              <BookOpen className="h-8 w-8 text-secondary" />
              <h2 className="text-4xl font-bold text-primary">Buyer's Guides</h2>
            </div>
            <p className="text-lg text-muted-foreground">
              Essential information for prospective yacht owners
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resources.buyersGuides.map((resource) => (
              <Card key={resource.id} className="transition-all hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-start justify-between">
                    <h3 className="text-lg font-bold text-primary">{resource.title}</h3>
                    <BookOpen className="h-5 w-5 flex-shrink-0 text-secondary" />
                  </div>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {resource.description}
                  </p>
                  <div className="mb-4 flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{resource.pages} pages</span>
                    <span>•</span>
                    <span>{resource.fileSize}</span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Guides */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <div className="mb-4 flex items-center gap-3">
              <FileText className="h-8 w-8 text-secondary" />
              <h2 className="text-4xl font-bold text-primary">Technical & Maintenance Guides</h2>
            </div>
            <p className="text-lg text-muted-foreground">
              Resources for yacht maintenance, systems, and operations
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {resources.technical.map((resource) => (
              <Card key={resource.id} className="transition-all hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-start justify-between">
                    <h3 className="text-lg font-bold text-primary">{resource.title}</h3>
                    <FileText className="h-5 w-5 flex-shrink-0 text-secondary" />
                  </div>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {resource.description}
                  </p>
                  <div className="mb-4 flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{resource.pages} pages</span>
                    <span>•</span>
                    <span>{resource.fileSize}</span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            Need Personalized Guidance?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
            Our yacht specialists are here to answer your questions and provide expert advice tailored to your specific needs
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="secondary" size="lg">
              Schedule a Consultation
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-primary">
              Contact Our Team
            </Button>
          </div>
          <p className="mt-6 text-sm text-white/80">
            Or call us directly at{" "}
            <a href="tel:+17862460809" className="font-medium text-secondary hover:underline">
              +1 786 246 0809
            </a>
          </p>
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
                <li><a href="#" className="transition-colors hover:text-secondary">Resources</a></li>
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
