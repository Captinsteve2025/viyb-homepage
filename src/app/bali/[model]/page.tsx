import React from "react";
import ScheduleConsultation from "@/components/ScheduleConsultation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Anchor, ArrowLeft, Bed, Calendar, Check, DollarSign, Gauge, GraduationCap, HelpCircle, Mail, MapPin, Phone, Ruler, Send, Ship, Users, Waves, AlertTriangle , LogIn} from "lucide-react";
import Link from "next/link";
import MobileNav from "@/components/MobileNav";
import Logo from "@/components/Logo";
import type { Metadata } from "next";
import { getBaliModelBySlug, type BaliModelData as StaticModelData } from "@/lib/baliModelsData";

// Gallery sources per model (photos and layout images)
const modelGalleries: Record<string, { photos: string[]; layouts: string[] }> = {
  '5-8': {
    photos: [
      '/bali/5-8/5-8-sailing-1.jpg',
      '/bali/5-8/5-8-open-living-space.jpg',
      '/bali/5-8/5-8-flybridge-lounge.jpg',
      '/bali/5-8/5-8-hero-1.jpg',
      '/bali/5-8/5-8-saloon-1.jpg',
      '/bali/5-8/5-8-saloon-rear.jpg',
      '/bali/5-8/5-8-rear-seat.jpg',
      '/bali/5-8/5-8-exterior-anchored.jpg',
      '/bali/5-8/5-8-sailing-2.jpg',
    ],
    layouts: [
      '/bali/5-8/5-8-layout-6cab-2singles.jpg',
      '/bali/5-8/5-8-layout-5cab-owner.jpg',
      '/bali/5-8/5-8-layout-4cab-owner.jpg',
    ],
  },
  '5-4': {
    photos: [
      '/bali/5-4/5-4-01.jpg',
      '/bali/5-4/5-4-02.jpg',
      '/bali/5-4/5-4-03.jpg',
      '/bali/5-4/5-4-04.jpg',
      '/bali/5-4/5-4-05.jpg',
      '/bali/5-4/5-4-06.jpg',
      '/bali/5-4/5-4-07.jpg',
      '/bali/5-4/5-4-08.jpg',
      '/bali/5-4/5-4-09.jpg',
    ],
    layouts: [
      '/bali/layouts/bali-5-4-layout-01.png',
      '/bali/layouts/bali-5-4-layout-02.jpg',
      '/bali/layouts/bali-5-4-layout-03.jpg',
    ],
  },
  '5-2': {
    photos: [
      '/bali/5-2/5-2-01.jpg','/bali/5-2/5-2-02.jpg','/bali/5-2/5-2-03.jpg','/bali/5-2/5-2-04.jpg','/bali/5-2/5-2-05.jpg','/bali/5-2/5-2-07.jpg','/bali/5-2/5-2-08.jpg','/bali/5-2/5-2-09.jpg',
    ],
    layouts: [
      '/bali/layouts/bali-5-2-layout-01.png',
      '/bali/layouts/bali-5-2-layout-02.jpg',
      '/bali/layouts/bali-5-2-layout-03.jpg',
      'https://catamaranguru.com/wp-content/uploads/2025/02/BALI-52-LAYOUT-1.jpg',
      'https://catamaranguru.com/wp-content/uploads/2025/02/BALI-52-LAYOUT-2.jpg',
      'https://catamaranguru.com/wp-content/uploads/2025/02/BALI-52-LAYOUT-3.jpg',
      'https://catamaranguru.com/wp-content/uploads/2025/02/BALI-52-LAYOUT-4.jpg',
    ],
  },
  '4-8': {
    photos: [
      '/bali/4-8/4-8-01.jpg','/bali/4-8/4-8-02.jpg','/bali/4-8/4-8-04.jpg','/bali/4-8/4-8-05.jpg','/bali/4-8/4-8-06.jpg','/bali/4-8/4-8-07.jpg','/bali/4-8/4-8-08.jpg','/bali/4-8/4-8-09.jpg',
    ],
    layouts: [
      '/bali/layouts/bali-4-8-layout-01.jpg',
      '/bali/layouts/bali-4-8-layout-02.jpg',
      '/bali/layouts/bali-4-8-layout-03.jpg',
      'https://catamaranguru.com/wp-content/uploads/2020/08/bali-4-8-roof-deck-layout-scaled.jpg',
      'https://catamaranguru.com/wp-content/uploads/2020/08/bali-4-8-nacelle-deck-layout-scaled.jpg',
      'https://catamaranguru.com/wp-content/uploads/2020/08/bali-4-8-3-cabin-layout-scaled.jpg',
      'https://catamaranguru.com/wp-content/uploads/2020/08/bali-4-8-4-cabin-owner-suite-layout-scaled.jpg',
      'https://catamaranguru.com/wp-content/uploads/2020/08/bali-4-8-4-cabin-symmetric-layout-scaled.jpg',
      'https://catamaranguru.com/wp-content/uploads/2020/08/bali-4-8-5-cabin-layout-scaled.jpg',
      'https://catamaranguru.com/wp-content/uploads/2020/08/bali-4-8-6-cabin-layout-scaled.jpg',
    ],
  },
  '4-6': {
    photos: [
      '/bali/4-6/4-6-01.jpg','/bali/4-6/4-6-02.jpg','/bali/4-6/4-6-03.jpg','/bali/4-6/4-6-04.jpg','/bali/4-6/4-6-05.jpg','/bali/4-6/4-6-06.jpg','/bali/4-6/4-6-07.jpg','/bali/4-6/4-6-08.jpg','/bali/4-6/4-6-09.jpg',
    ],
    layouts: [
      '/bali/layouts/bali-4-6-layout-01.jpg',
      '/bali/layouts/bali-4-6-layout-02.jpg',
      '/bali/layouts/bali-4-6-layout-03.jpg',
      'https://catamaranguru.com/wp-content/uploads/2020/06/bali-4-6-owners-suite-3-cabin-layout-plan-scaled.jpg',
      'https://catamaranguru.com/wp-content/uploads/2020/06/bali-4-6-owners-suite-layout-plan-scaled.jpg',
      'https://catamaranguru.com/wp-content/uploads/2020/06/bali-4-6-four-cabin-symmetrical-layout-scaled.jpg',
      'https://catamaranguru.com/wp-content/uploads/2020/06/bali-4-6-five-cabin-layout-plan-scaled.jpg',
      'https://catamaranguru.com/wp-content/uploads/2020/06/bali-4-6-layout-saloon-deck-scaled.jpg',
      'https://catamaranguru.com/wp-content/uploads/2020/06/bali-4-6-flybridge-layout-scaled.jpg',
    ],
  },
  '4-4': {
    photos: [
      '/bali/4-4/4-4-01.jpg','/bali/4-4/4-4-02.jpg','/bali/4-4/4-4-03.jpg','/bali/4-4/4-4-04.jpg','/bali/4-4/4-4-05.jpg','/bali/4-4/4-4-06.jpg','/bali/4-4/4-4-07.jpg','/bali/4-4/4-4-08.jpg','/bali/4-4/4-4-09.jpg',
    ],
    layouts: [
      '/bali/layouts/bali-4-4-layout-01.jpg',
      '/bali/layouts/bali-4-4-layout-02.jpg',
      '/bali/layouts/bali-4-4-layout-03.jpg',
      'https://catamaranguru.com/wp-content/uploads/2021/05/bali-44-3-cabin-layout-plan-e1621953864507.jpg',
      'https://catamaranguru.com/wp-content/uploads/2021/05/bali-44-cabin-layout-plan-e1621953880497.jpg',
      'https://catamaranguru.com/wp-content/uploads/2021/05/bali-44-nacelle-plan.jpg',
      'https://catamaranguru.com/wp-content/uploads/2021/05/bali-44-bridge-deck-plan.jpg',
    ],
  },
  '4-2': {
    photos: [
      '/bali/4-2/4-2-01.jpg','/bali/4-2/4-2-02.jpg','/bali/4-2/4-2-03.jpg','/bali/4-2/4-2-04.jpg','/bali/4-2/4-2-05.jpg','/bali/4-2/4-2-06.jpg','/bali/4-2/4-2-07.jpg','/bali/4-2/4-2-08.jpg','/bali/4-2/4-2-09.jpg',
    ],
    layouts: [
      '/bali/layouts/bali-4-2-layout-01.jpg',
      '/bali/layouts/bali-4-2-layout-02.jpg',
      '/bali/layouts/bali-4-2-layout-03.jpg',
      '/bali/layouts/bali-4-2-layout-04.jpg',
      'https://catamaranguru.com/wp-content/uploads/2022/02/bali-42-owners-suite-3-cabin-layout-rotated.jpg',
      'https://catamaranguru.com/wp-content/uploads/2020/08/bali-4-2-4-cabin-4-bath-symmetric-layout.jpg',
      'https://catamaranguru.com/wp-content/uploads/2020/08/bali-4-2-owners-version-3-cabin-3-bath-layout.jpg',
    ],
  },
  catspace: {
    photos: [
      '/bali/catspace/catspace-01.jpg','/bali/catspace/catspace-02.jpg','/bali/catspace/catspace-03.jpg','/bali/catspace/catspace-04.jpg','/bali/catspace/catspace-05.jpg','/bali/catspace/catspace-06.jpg','/bali/catspace/catspace-07.jpg','/bali/catspace/catspace-08.jpg','/bali/catspace/catspace-09.jpg',
    ],
    layouts: [
      'https://catamaranguru.com/wp-content/uploads/2020/06/bali-catspace-sail-flybridge-layout-scaled.jpg',
      'https://catamaranguru.com/wp-content/uploads/2020/06/bali-catspace-sail-4-cabin-layout-scaled.jpg',
      'https://catamaranguru.com/wp-content/uploads/2020/06/bali-catspace-sail-3-cabin-layout-scaled.jpg',
    ],
  },
  catsmart: {
    photos: [
      'https://catamaranguru.com/wp-content/uploads/2023/04/CATSMART-GUEST-CABINE-Basse-def.jpg',
      'https://catamaranguru.com/wp-content/uploads/2023/04/CATSMART-CABINE-PROPRIETAIRE-VUE-1-Basse-def.jpg',
      'https://catamaranguru.com/wp-content/uploads/2023/04/CATSMART-CABINE-PROPRIETAIRE-VUE-2-Basse-def.jpg',
      'https://catamaranguru.com/wp-content/uploads/2023/04/CATSMART-NACELLE-VUE-1-scaled-1.jpg',
      'https://catamaranguru.com/wp-content/uploads/2023/04/CATSMART-NACELLE-VUE-2-scaled-1.jpg',
      'https://catamaranguru.com/wp-content/uploads/2023/04/CATSMART-NACELLE-VUE-3.jpg',
      'https://catamaranguru.com/wp-content/uploads/2023/04/CATSMART-NACELLE-VUE-4-scaled-1.jpg',
      'https://catamaranguru.com/wp-content/uploads/2023/04/Visuel-ext-4-1.jpg',
      'https://catamaranguru.com/wp-content/uploads/2023/04/Visuel-ext-2.jpg',
    ],
    layouts: [
      'https://catamaranguru.com/wp-content/uploads/2023/04/38-ft-catamaran-benchmarks-sails-layout.jpg',
      'https://catamaranguru.com/wp-content/uploads/2023/04/38-ft-catamaran-benchmarks-nacelle-layout.jpg',
      'https://catamaranguru.com/wp-content/uploads/2023/04/38-ft-catamaran-benchmarks-deck-flybridge-layout.jpg',
      'https://catamaranguru.com/wp-content/uploads/2023/04/38-ft-catamaran-benchmarks-3-cabin-layout.jpg',
      'https://catamaranguru.com/wp-content/uploads/2023/04/38-ft-catamaran-benchmarks-4-cabin-layout.jpg',
    ],
  },
};

interface BaliModelData {
  name: string;
  tagline: string;
  seoTitle: string;
  seoDescription: string;
  primaryKeyword: string;
  price: string;
  priceValue: number;
  images: string[];
  specs: {
    length: string;
    beam: string;
    draft: string;
    displacement: string;
    waterCapacity: string;
    fuelCapacity: string;
    engine: string;
    cabins: string;
    berths: string;
    heads: string;
  };
  features: string[];
  description: string[];
  charterInfo: {
    whyItWorks: string[];
    layoutOptions: string;
    incomeEstimate: string;
    annualCosts: string;
    ownerUseWeeks: string;
    charterWeeks: string;
    bestFor: string[];
  };
  faqs: Array<{ question: string; answer: string }>;
  brochureUrl?: string;
  specsUrl?: string;
}

const baliModelsData: Record<string, BaliModelData> = {
  // ... unchanged model data ...
  "catsmart": {
    name: "Bali Catsmart",
    tagline: "Compact Bali with the full Open Space concept",
    seoTitle: "Bali Catsmart Catamaran for BVI Charter Ownership | VIYB",
    seoDescription: "Discover the Bali Catsmart—specs, layouts, pricing, and BVI charter ownership details, including ROI and owner training.",
    primaryKeyword: "Bali Catsmart catamaran BVI",
    price: "From $365,000",
    priceValue: 365000,
    images: [
      "https://catamaranguru.com/wp-content/uploads/2023/04/CATSMART-NACELLE-VUE-1-scaled-1.jpg",
      "https://catamaranguru.com/wp-content/uploads/2023/04/CATSMART-NACELLE-VUE-2-scaled-1.jpg",
      "https://catamaranguru.com/wp-content/uploads/2023/04/Visuel-ext-2.jpg",
      "https://catamaranguru.com/wp-content/uploads/2023/04/Visuel-ext-4-1.jpg",
    ],
    specs: {
      length: "38 ft 8 in",
      beam: "21 ft 2 in",
      draft: "4 ft 1 in",
      displacement: "9.5 Tonnes",
      waterCapacity: "185 gallons",
      fuelCapacity: "106 gallons",
      engine: "2 × 30-40 hp",
      cabins: "4",
      berths: "8-10",
      heads: "2-4",
    },
    features: [
      "Open Space saloon with direct cockpit access",
      "Rigid forward cockpit for lounging",
      "Full-size galley with large refrigeration",
      "Excellent ventilation and natural light",
      "Efficient hulls for comfortable passages",
    ],
    description: [
      "The Bali Catsmart brings Bali's signature innovations to a compact footprint, perfect for owners seeking maximum livability in a smaller catamaran.",
      "With the rigid forward cockpit and open saloon, the Catsmart offers seamless indoor-outdoor living and outstanding visibility.",
    ],
    charterInfo: {
      whyItWorks: [
        "Popular size for family charters in the BVI",
        "Low operating costs and easy maintenance",
        "Open layout delivers premium guest experience",
        "Efficient cabins ideal for 4–8 guests",
      ],
      layoutOptions: "4-cabin layouts with 2–4 heads; optional skipper cabin forward",
      incomeEstimate: "$90,000 – $140,000",
      annualCosts: "$45,000 – $75,000",
      ownerUseWeeks: "3–6 weeks",
      charterWeeks: "18–26 weeks",
      bestFor: ["First-time owners", "Families", "Budget-conscious investors"],
    },
    faqs: [
      { question: "Is the Catsmart suitable for shallow anchorages?", answer: "Yes—its modest draft is ideal for the BVI and Caribbean shallows." },
      { question: "How many guests can it comfortably host?", answer: "Up to 8–10 guests depending on layout and heads." },
      { question: "Can it enter charter ownership?", answer: "Absolutely—its size and efficiency make it a strong charter performer." },
    ],
  },
  "catspace": {
    name: "Bali Catspace",
    tagline: "40-foot innovation leader in the Bali range",
    seoTitle: "Bali Catspace Catamaran for BVI Charter Ownership | VIYB",
    seoDescription: "Explore the Bali Catspace—specifications, layouts, pricing, and charter ownership ROI in the British Virgin Islands.",
    primaryKeyword: "Bali Catspace catamaran BVI",
    price: "From $405,000",
    priceValue: 405000,
    images: [
      "https://catamaranguru.com/wp-content/uploads/2021/09/Bali-Catspace.jpg",
      "https://catamaranguru.com/wp-content/uploads/2021/09/Bali-Catspace-66.jpg",
      "https://catamaranguru.com/wp-content/uploads/2021/09/Bali-catspace-58-1.jpg",
      "https://catamaranguru.com/wp-content/uploads/2020/06/bali-catspace-40-saloon.jpg",
    ],
    specs: {
      length: "40 ft 5 in",
      beam: "21 ft 7 in",
      draft: "3 ft 7 in",
      displacement: "10.5 Tonnes",
      waterCapacity: "185 gallons",
      fuelCapacity: "106 gallons",
      engine: "2 × 40 hp",
      cabins: "4-6",
      berths: "8-12",
      heads: "2-4",
    },
    features: [
      "Open Space saloon and aft tilting door",
      "Forward rigid cockpit for dining and sunning",
      "Efficient systems with solar integration",
      "Smart storage and functional galley",
      "Great charter appeal at 40 feet",
    ],
    description: [
      "The Catspace blends innovation, comfort, and Bali's proven Open Space concept in a nimble 40-foot platform.",
      "Ideal for owner-operators and BVI charters seeking easy handling and strong guest satisfaction.",
    ],
    charterInfo: {
      whyItWorks: [
        "High demand in the 40-foot charter segment",
        "Outstanding livability compared to competitors",
        "Low crew requirements and turnaround time",
        "Economical to run and insure",
      ],
      layoutOptions: "4–6 cabins with 2–4 heads; flexible charter configurations",
      incomeEstimate: "$110,000 – $160,000",
      annualCosts: "$55,000 – $85,000",
      ownerUseWeeks: "3–6 weeks",
      charterWeeks: "18–26 weeks",
      bestFor: ["Owner-operators", "Couples", "Charter-focused buyers"],
    },
    faqs: [
      { question: "Is the Catspace easy to dock and handle?", answer: "Yes—its size and visibility make it very manageable for new owners." },
      { question: "What layouts are best for charter?", answer: "4-cabin/4-head layouts are most popular for BVI charters." },
      { question: "Can solar be added?", answer: "Yes—solar and lithium upgrades are commonly added for charter reliability." },
    ],
  },
  "4-2": {
    name: "Bali 4.2",
    tagline: "Compact yet spacious cruiser with exceptional comfort",
    seoTitle: "Bali 4.2 Catamaran for BVI Charter Ownership | VIYB",
    seoDescription: "Bali 4.2 specs, pricing, layouts, features, and BVI charter ownership program details.",
    primaryKeyword: "Bali 4.2 catamaran BVI",
    price: "From $490,000",
    priceValue: 490000,
    images: [
      "https://catamaranguru.com/wp-content/uploads/2021/05/bali-42-anchored.jpg",
      "https://catamaranguru.com/wp-content/uploads/2021/05/bali-42-full-sails.jpg",
      "https://catamaranguru.com/wp-content/uploads/2021/05/bali-42-forward-cockpit.jpg",
      "https://catamaranguru.com/wp-content/uploads/2021/05/bali-42-salon.jpg",
    ],
    specs: {
      length: "42 ft 2 in",
      beam: "23 ft 3 in",
      draft: "3 ft 8 in",
      displacement: "12.0 Tonnes",
      waterCapacity: "211 gallons",
      fuelCapacity: "159 gallons",
      engine: "2 × 45 hp",
      cabins: "4",
      berths: "8-10",
      heads: "4",
    },
    features: [
      "Rigid forward cockpit unique to Bali",
      "Open Space saloon with tilting aft door",
      "Large galley with household appliances",
      "Great visibility and natural airflow",
      "Proven charter performer at 42 feet",
    ],
    description: [
      "The Bali 4.2 balances comfort and performance with signature Bali innovations that maximize living space.",
      "A strong choice for BVI charters seeking a modern, efficient 4-cabin yacht.",
    ],
    charterInfo: {
      whyItWorks: [
        "4-cabin layout fits most charter demand",
        "Low draft for Caribbean waters",
        "Excellent guest flow from cockpit to saloon",
        "Easy maintenance with robust systems",
      ],
      layoutOptions: "4 cabins, 4 heads; skipper cabin optional",
      incomeEstimate: "$130,000 – $180,000",
      annualCosts: "$65,000 – $95,000",
      ownerUseWeeks: "3–6 weeks",
      charterWeeks: "18–26 weeks",
      bestFor: ["Families", "Owner-operator charters", "Balanced ROI"],
    },
    faqs: [
      { question: "Does the 4.2 have air-conditioning?", answer: "Yes—A/C is standard in most charter specs and recommended for the BVI." },
      { question: "Is the forward cockpit safe offshore?", answer: "Yes—the rigid structure is a hallmark of Bali and engineered for offshore use." },
      { question: "Typical weekly charter rate?", answer: "Rates vary by season, generally $8,500–$12,500/week in the BVI." },
    ],
    brochureUrl: "https://catamaranguru.com/wp-content/uploads/2020/08/bali-4-2-brochure.pdf",
    specsUrl: "https://catamaranguru.com/wp-content/uploads/2020/08/bali-4-2-specifications.pdf",
  },
  "4-4": {
    name: "Bali 4.4",
    tagline: "Award-winning volume and light with the rigid forward cockpit",
    seoTitle: "Bali 4.4 Catamaran for BVI Charter Ownership | VIYB",
    seoDescription: "Explore the Bali 4.4—specs, layout options, pricing, and BVI charter ROI details.",
    primaryKeyword: "Bali 4.4 catamaran BVI",
    price: "From $625,000",
    priceValue: 625000,
    images: [
      "https://catamaranguru.com/wp-content/uploads/2022/02/bali-44-port-profile-sails-up.jpg",
      "https://catamaranguru.com/wp-content/uploads/2021/05/bali-44-catamaran-sailing.jpg",
      "https://catamaranguru.com/wp-content/uploads/2022/02/bali-44-cockpit.jpg",
      "https://catamaranguru.com/wp-content/uploads/2022/02/bali-44-saloon.jpg",
    ],
    specs: {
      length: "45 ft 1 in",
      beam: "24 ft 4 in",
      draft: "3 ft 11 in",
      displacement: "13.5 Tonnes",
      waterCapacity: "211 gallons",
      fuelCapacity: "211 gallons",
      engine: "2 × 57 hp",
      cabins: "4-5",
      berths: "8-12",
      heads: "4-5",
    },
    features: [
      "Signature Bali tilting aft door",
      "Expansive saloon and galley for entertaining",
      "Forward cockpit dining and lounge",
      "Excellent natural light throughout",
      "Efficient charter turnaround layout",
    ],
    description: [
      "The Bali 4.4 is a charter favorite, delivering unmatched space and guest comfort in its class.",
      "Perfect for larger families or high-demand charter portfolios in the BVI.",
    ],
    charterInfo: {
      whyItWorks: [
        "Ideal size for six to eight guests",
        "Fast cleanings with accessible systems",
        "Premium guest experience drives repeat bookings",
        "Strong resale due to market demand",
      ],
      layoutOptions: "4–5 cabins with 4–5 heads; owner and charter configurations available",
      incomeEstimate: "$160,000 – $220,000",
      annualCosts: "$75,000 – $110,000",
      ownerUseWeeks: "4–6 weeks",
      charterWeeks: "20–28 weeks",
      bestFor: ["Families", "Premium charters", "Balanced performance and comfort"],
    },
    faqs: [
      { question: "Is the 4.4 suitable for skippered charters?", answer: "Yes—the layout supports both bareboat and skippered operations." },
      { question: "Are flybridge sunpads available?", answer: "Model-specific sunning areas are available depending on configuration." },
      { question: "What about generator and A/C?", answer: "Generator and full A/C are standard in most BVI charter specs." },
    ],
    brochureUrl: "https://catamaranguru.com/wp-content/uploads/2021/05/bali-44-open-space-catamaran-brochure.pdf",
    specsUrl: "https://catamaranguru.com/wp-content/uploads/2021/05/bali-44-open-space-catamaran-brochure.pdf",
  },
  "4-6": {
    name: "Bali 4.6",
    tagline: "Spacious layout with tilting aft door and outstanding volume",
    seoTitle: "Bali 4.6 Catamaran for BVI Charter Ownership | VIYB",
    seoDescription: "Bali 4.6 specifications, layouts, features, pricing, and BVI charter ROI insights.",
    primaryKeyword: "Bali 4.6 catamaran BVI",
    price: "From $695,000",
    priceValue: 695000,
    images: [
      "/bali/bali-4-6.jpg",
      "/bali/bali-4-6.jpg",
      "/bali/bali-4-6.jpg",
      "/bali/bali-4-6.jpg",
    ],
    specs: {
      length: "46 ft 0 in",
      beam: "25 ft 2 in",
      draft: "4 ft 0 in",
      displacement: "14.8 Tonnes",
      waterCapacity: "238 gallons",
      fuelCapacity: "238 gallons",
      engine: "2 × 57–60 hp",
      cabins: "4-6",
      berths: "8-12",
      heads: "4-6",
    },
    features: [
      "Open Space saloon with panoramic views",
      "Forward cockpit for dining and lounging",
      "Large owner or charter layouts",
      "Excellent storage and refrigeration capacity",
      "Proven charter demand in the BVI",
    ],
    description: [
      "The Bali 4.6 offers a big step up in living volume while keeping systems straightforward for charter operations.",
      "A versatile platform for owners who want comfort, capacity, and reliable ROI.",
    ],
    charterInfo: {
      whyItWorks: [
        "Targets the high-demand 4–6 cabin market",
        "Tilting door and forward cockpit wow guests",
        "Easy systems access reduces downtime",
        "Flexible layouts for bareboat or skippered",
      ],
      layoutOptions: "4–6 cabins, 4–6 heads; crew berth options forward",
      incomeEstimate: "$180,000 – $250,000",
      annualCosts: "$85,000 – $120,000",
      ownerUseWeeks: "4–8 weeks",
      charterWeeks: "20–28 weeks",
      bestFor: ["Larger families", "Premium charters", "ROI-focused buyers"],
    },
    faqs: [
      { question: "What is the ideal charter layout?", answer: "4-cabin/4-head or 5-cabin/5-head layouts are most popular in the BVI." },
      { question: "Can the 4.6 be owner-operated?", answer: "Yes—with training, many owners operate 4.6s comfortably in the BVI." },
      { question: "Typical weekly rate?", answer: "$10,500–$15,500/week depending on season and spec." },
    ],
    brochureUrl: "https://catamaranguru.com/wp-content/uploads/2021/06/bali-46-brochure-jun-2021.pdf",
    specsUrl: "https://catamaranguru.com/wp-content/uploads/2021/06/bali-46-brochure-jun-2021.pdf",
  },
  "4-8": {
    name: "Bali 4.8",
    tagline: "Premium comfort with expansive living areas",
    seoTitle: "Bali 4.8 Catamaran for BVI Charter Ownership | VIYB",
    seoDescription: "Explore the Bali 4.8—specs, pricing, layouts, features, and ROI for BVI charter ownership.",
    primaryKeyword: "Bali 4.8 catamaran BVI",
    price: "From $895,000",
    priceValue: 895000,
    images: [
      "https://catamaranguru.com/wp-content/uploads/2020/08/bali-4-8-anchored.jpg",
      "https://catamaranguru.com/wp-content/uploads/2020/08/bali-4-8-forward-cockpit.jpg",
      "https://catamaranguru.com/wp-content/uploads/2020/06/bali-4-8-catamaran-sailing.jpg",
      "https://catamaranguru.com/wp-content/uploads/2020/06/bali-4-8-catamaran-saloon.jpg",
    ],
    specs: {
      length: "48 ft 7 in",
      beam: "25 ft 10 in",
      draft: "4 ft 5 in",
      displacement: "16.5 Tonnes",
      waterCapacity: "264 gallons",
      fuelCapacity: "264 gallons",
      engine: "2 × 57–80 hp",
      cabins: "5-6",
      berths: "10-12",
      heads: "5-6",
    },
    features: [
      "Huge saloon and galley with household appliances",
      "Forward cockpit and massive lounging areas",
      "Optimized for charter comfort and guest flow",
      "Robust electrical systems for Caribbean heat",
      "Strong resale and market demand",
    ],
    description: [
      "The Bali 4.8 defines comfort in the mid-size luxury segment with unparalleled volume and guest experience.",
      "A leading choice for BVI charter fleets with excellent revenue potential.",
    ],
    charterInfo: {
      whyItWorks: [
        "Premium guest experience drives high weekly rates",
        "Flexible 5–6 cabin layouts for larger groups",
        "Reliable systems with solar/lithium upgrades",
        "Efficient turnaround for charter operators",
      ],
      layoutOptions: "5–6 cabins with 5–6 heads; crew quarters options",
      incomeEstimate: "$200,000 – $300,000",
      annualCosts: "$95,000 – $130,000",
      ownerUseWeeks: "4–8 weeks",
      charterWeeks: "20–28 weeks",
      bestFor: ["Larger families", "Premium charters", "Top-tier ROI"],
    },
    faqs: [
      { question: "Is the 4.8 suitable for skippered charters?", answer: "Yes—its size and layout work well for skipper/hostess charters." },
      { question: "Do most 4.8s include watermakers?", answer: "Yes—watermakers are recommended for charter reliability in the BVI." },
      { question: "What about air-conditioning and generator?", answer: "Both are standard in most Caribbean specs for guest comfort." },
    ],
    brochureUrl: "https://drive.google.com/file/d/15dO0Gk0jbcpAEViOw4FEdt3Sv5e2vIXy/view?usp=sharing",
    specsUrl: "https://catamaranguru.com/wp-content/uploads/2015/06/bali-48-specifications-2019.pdf",
  },
  "5-2": {
    name: "Bali 5.2",
    tagline: "52 feet of innovation and space with modular layouts",
    seoTitle: "Bali 5.2 Catamaran for BVI Charter Ownership | VIYB",
    seoDescription: "Bali 5.2 specs, layouts, pricing, features, and BVI charter ownership ROI and training details.",
    primaryKeyword: "Bali 5.2 catamaran BVI",
    price: "From $1,055,000",
    priceValue: 1055000,
    images: [
      "/bali/bali-5-2.jpg",
      "/bali/bali-5-2.jpg",
      "/bali/bali-5-2.jpg",
      "/bali/bali-5-2.jpg",
    ],
    specs: {
      length: "52 ft 0 in",
      beam: "28 ft 3 in",
      draft: "4 ft 10 in",
      displacement: "20.8 Tonnes",
      waterCapacity: "291 gallons",
      fuelCapacity: "291 gallons",
      engine: "2 × 80 hp",
      cabins: "3-6",
      berths: "6-16",
      heads: "3-6",
    },
    features: [
      "Open Space concept with panoramic views",
      "Tilting aft door and rigid forward cockpit",
      "Multiple cabin configurations for charter",
      "Large owner suite option",
      "Excellent charter demand in the BVI",
    ],
    description: [
      "The Bali 5.2 offers unmatched modularity with layouts accommodating up to 16 berths, making it a flexible charter platform.",
      "Its living volume and guest flow deliver a premium experience and strong booking velocity.",
    ],
    charterInfo: {
      whyItWorks: [
        "Fits both luxury and high-capacity charters",
        "Flexible layouts for diverse guest groups",
        "Strong weekly rates and utilization",
        "High perceived value with Bali innovations",
      ],
      layoutOptions: "3–6 cabins and 3–6 heads; owner or charter configurations",
      incomeEstimate: "$220,000 – $320,000",
      annualCosts: "$100,000 – $140,000",
      ownerUseWeeks: "4–8 weeks",
      charterWeeks: "20–28 weeks",
      bestFor: ["Luxury charters", "Families", "High-capacity charters"],
    },
    faqs: [
      { question: "Is the 5.2 comfortable for owner-operators?", answer: "With training, yes—many owners operate 50+ foot Bali cats in the BVI." },
      { question: "Which layout maximizes ROI?", answer: "5–6 cabin layouts generally achieve the highest utilization." },
      { question: "Does it include flybridge seating?", answer: "Model-specific lounging areas are available and commonly specified for charters." },
    ],
    brochureUrl: "https://catamaranguru.com/yacht-sales/new-yachts/bali-catamarans/bali-52-catamaran/",
    specsUrl: "https://catamaranguru.com/bali-catamarans-unveils-the-new-bali-5-2-flagship/",
  },
  "5-4": {
    name: "Bali 5.4",
    tagline: "Flagship performance cruiser with exceptional seaworthiness",
    seoTitle: "Bali 5.4 Catamaran for BVI Charter Ownership | VIYB",
    seoDescription: "Explore the Bali 5.4—specs, pricing, layouts, features, and ROI for BVI charter ownership.",
    primaryKeyword: "Bali 5.4 catamaran BVI",
    price: "From $1,285,000",
    priceValue: 1285000,
    images: [
      "https://catamaranguru.com/wp-content/uploads/2020/06/bali-5-4-sails-up-starboard.jpg",
      "https://catamaranguru.com/wp-content/uploads/2020/06/bali-5-4-flybridge-lounge.jpg",
      "https://catamaranguru.com/wp-content/uploads/2020/06/bali-5-4-front-cockpit.jpg",
      "https://catamaranguru.com/wp-content/uploads/2020/06/bali-5-4-saloon-elegance-scaled.jpg",
    ],
    specs: {
      length: "55 ft 1 in",
      beam: "28 ft 7 in",
      draft: "4 ft 11 in",
      displacement: "22.7 Tonnes",
      waterCapacity: "317 gallons",
      fuelCapacity: "317 gallons",
      engine: "2 × 80–100 hp",
      cabins: "5-6",
      berths: "10-12",
      heads: "5-6",
    },
    features: [
      "Massive living spaces with panoramic views",
      "Forward cockpit and flybridge lounging",
      "Premium finish and charter appeal",
      "Robust systems for Caribbean operations",
      "High weekly rates and strong resale",
    ],
    description: [
      "The Bali 5.4 delivers flagship comfort with outstanding charter desirability and guest satisfaction.",
      "Its volume, finish, and flexible layouts make it a top producer in BVI fleets.",
    ],
    charterInfo: {
      whyItWorks: [
        "Premium positioning and guest experience",
        "Strong repeat bookings and utilization",
        "Flexible 5–6 cabin charter layouts",
        "Excellent resale value",
      ],
      layoutOptions: "5–6 cabins with 5–6 heads; crew quarters options",
      incomeEstimate: "$240,000 – $340,000",
      annualCosts: "$110,000 – $150,000",
      ownerUseWeeks: "4–8 weeks",
      charterWeeks: "20–28 weeks",
      bestFor: ["Premium charters", "Luxury family cruising", "High ROI"],
    },
    faqs: [
      { question: "Is the 5.4 suitable for skippered charters?", answer: "Yes—high-end skippered charters are common for the 5.4." },
      { question: "What about lithium upgrades?", answer: "Lithium/solar upgrades are recommended to reduce generator hours and enhance guest comfort." },
      { question: "Typical weekly rate?", answer: "$14,000–$20,000+/week depending on season and spec." },
    ],
    brochureUrl: "https://catamaranguru.com/wp-content/uploads/2021/06/bali-54-2020-brochure.pdf",
    specsUrl: "https://catamaranguru.com/wp-content/uploads/2017/06/specifications-bali-5.4-c-2017.pdf",
  },
  "5-8": {
    name: "Bali 5.8",
    tagline: "The pinnacle of the Bali range—innovation at flagship scale",
    seoTitle: "Bali 5.8 Catamaran for BVI Charter Ownership | VIYB",
    seoDescription: "Bali 5.8 specs, pricing, layouts, features, and charter ownership ROI in the British Virgin Islands.",
    primaryKeyword: "Bali 5.8 catamaran BVI",
    price: "From $1,702,575",
    priceValue: 1702575,
    images: [
      "https://catamaranguru.com/wp-content/uploads/2024/02/2-2.jpg",
      "https://catamaranguru.com/wp-content/uploads/2024/02/1-2.jpg",
      "https://catamaranguru.com/wp-content/uploads/2024/02/Bali5.8_berco_05.jpg",
      "https://catamaranguru.com/wp-content/uploads/2024/02/Bali5.8_berco_01.jpg",
    ],
    specs: {
      length: "58 ft 0 in",
      beam: "29 ft 8 in",
      draft: "4 ft 10 in",
      displacement: "27.6 Tonnes",
      waterCapacity: "317 gallons",
      fuelCapacity: "317 gallons",
      engine: "2 × 100 hp",
      cabins: "6-8",
      berths: "12-16",
      heads: "6-8",
    },
    features: [
      "Flagship Open Space design with panoramic views",
      "Forward cockpit and vast lounging areas",
      "Premium finishes and guest amenities",
      "High-capacity layouts for luxury charters",
      "Exceptional market demand and resale",
    ],
    description: [
      "The Bali 5.8 represents the ultimate expression of Bali's open-space philosophy, delivering a five-star guest experience.",
      "A luxury charter powerhouse with premium rates and strong utilization in the BVI market.",
    ],
    charterInfo: {
      whyItWorks: [
        "Luxury positioning enables top weekly rates",
        "6–8 cabin layouts fit high-demand charters",
        "Premium guest spaces drive repeat bookings",
        "Robust systems tailored for Caribbean operations",
      ],
      layoutOptions: "6–8 cabins with 6–8 heads; crew quarters available",
      incomeEstimate: "$280,000 – $420,000",
      annualCosts: "$130,000 – $180,000",
      ownerUseWeeks: "4–8 weeks",
      charterWeeks: "20–28 weeks",
      bestFor: ["Luxury charters", "Large families", "Top-tier ROI"],
    },
    faqs: [
      { question: "Is the 5.8 too large for owner operation?", answer: "With proper training and local knowledge, experienced owners can operate 58-foot cats in the BVI." },
      { question: "Does the 5.8 include crew accommodations?", answer: "Yes—crew quarters are available depending on layout." },
      { question: "What are typical charter rates?", answer: "$18,000–$28,000+/week depending on season and specification." },
    ],
    // No official PDF published yet; link to model overview
    brochureUrl: "https://catamaranguru.com/annapolis-boat-show-2024/",
  },
};

export function generateStaticParams() {
  return Object.keys(baliModelsData).map((model) => ({ model }));
}

export async function generateMetadata({ params }: { params: Promise<{ model: string }> }): Promise<Metadata> {
  const { model } = await params;
  const modelData = baliModelsData[model];

  if (!modelData) {
    return {
      title: "Bali Catamaran Not Found",
      description: "The requested Bali catamaran model was not found.",
    };
  }

  return {
    title: modelData.seoTitle,
    description: modelData.seoDescription,
    keywords: [
      modelData.primaryKeyword,
      "Bali catamaran BVI charter",
      "Bali catamaran Caribbean charter",
      "Bali catamaran charter investment",
      "Bali catamaran charter income",
      "Bali catamaran charter ROI",
      "BVI charter catamaran",
      "Caribbean charter ownership",
    ],
    openGraph: {
      title: modelData.seoTitle,
      description: modelData.seoDescription,
      type: "website",
      images: [modelData.images[0]],
    },
  };
}

export default async function BaliModelPage({ params, searchParams }: { params: Promise<{ model: string }>; searchParams: Promise<{ enquiry?: string }> }) {
  const { model } = await params;
  const sp = await searchParams;
  const modelData = baliModelsData[model];

  // Get static data for this model (curated hero images)
  const staticModelData = getBaliModelBySlug(model);

  if (!modelData) {
    return (
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-3xl font-bold text-primary">Model Not Found</h1>
        <p className="mt-2 text-muted-foreground">The requested Bali catamaran model could not be found.</p>
        <Link href="/bali" className="mt-6 inline-block">
          <Button variant="outline">Back to Bali Range</Button>
        </Link>
      </div>
    );
  }

  // Use static data mainImage as hero, then fallback to modelData.images
  // This ensures the hero is always a full exterior side profile
  const heroImage = staticModelData?.mainImage || modelData.images[0];
  const heroImageReason = staticModelData?.mainImageReason || 'fallback';
  const manualReviewNeeded = staticModelData?.manualReviewNeeded || false;

  // Build header images: hero first, then remaining gallery images (deduplicated)
  const remainingImages = modelData.images.filter(img => img !== heroImage);
  const headerImages = [heroImage, ...remainingImages].slice(0, 5);

  const enquiryStatus = sp?.enquiry || "";

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
            <Link href="/bali" className="text-sm font-medium uppercase tracking-wide text-secondary">New Bali</Link>
            <Link href="/charter" className="text-sm font-medium uppercase tracking-wide text-muted-foreground transition-colors hover:text-secondary">Yacht Charters</Link>
            <Link href="/training" className="text-sm font-medium uppercase tracking-wide text-muted-foreground transition-colors hover:text-secondary">Training</Link>
            <Link href="/charter-ownership" className="text-sm font-medium uppercase tracking-wide text-muted-foreground transition-colors hover:text-secondary">Charter Ownership</Link>
            <Link href="/#contact" className="text-sm font-medium uppercase tracking-wide text-muted-foreground transition-colors hover:text-secondary">Contact</Link>
          <Link href="/admin/login" className="flex items-center gap-1.5 text-sm font-medium uppercase tracking-wide text-muted-foreground transition-colors hover:text-secondary" title="Admin Panel"><LogIn className="h-4 w-4" />Admin</Link>
          </nav>
          <MobileNav currentPage="New Bali" variant="light" />
        </div>
      </header>

      {/* Back Button */}
      <div className="border-b border-gray-100 bg-white">
        <div className="container mx-auto px-4 py-4">
          <Link href="/bali" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            <ArrowLeft className="h-4 w-4" />
            Back to Bali Range
          </Link>
        </div>
      </div>

      {/* Hero - SEO Optimized H1 */}
      <section className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="mb-3 text-3xl font-bold text-primary sm:text-4xl md:text-5xl lg:text-6xl">
              {modelData.name} for BVI Charter Ownership
            </h1>
            <p className="text-lg text-muted-foreground sm:text-xl md:text-2xl">{modelData.tagline}</p>
          </div>

          {/* Photo Gallery */}
          <div className="grid gap-4 md:grid-cols-2">
            {/* Main image - full exterior side profile */}
            <div className="relative aspect-video overflow-hidden rounded-lg sm:aspect-[4/3] md:aspect-[16/10]">
              <img
                src={heroImage}
                alt={`${modelData.name} exterior side profile`}
                className="h-full w-full object-cover"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
              />
              {/* Manual review badge if needed */}
              {manualReviewNeeded && (
                <div className="absolute top-3 right-3 flex items-center gap-1 rounded bg-amber-100 px-2 py-1 text-xs font-semibold text-amber-800 shadow">
                  <AlertTriangle className="h-3 w-3" />
                  Image verification needed
                </div>
              )}
              {/* Image source badge (hover reveal) */}
              <div
                className="absolute bottom-3 right-3 rounded bg-black/60 px-2 py-1 text-xs font-medium text-white opacity-0 transition-opacity hover:opacity-100"
                title={`Image source: ${heroImageReason}`}
              >
                {heroImageReason}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {headerImages.slice(1, 5).map((img, idx) => (
                <div key={idx} className="relative aspect-square overflow-hidden rounded-lg sm:aspect-[4/3] md:aspect-[4/3]">
                  <img
                    src={img}
                    alt={`${modelData.name} ${idx + 2}`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 25vw"
                  />
                </div>
              ))}
              {headerImages.length === 3 && (
                <div className="relative flex items-center justify-center overflow-hidden rounded-lg bg-primary/10">
                  <span className="text-sm font-medium text-primary">More photos available</span>
                </div>
              )}
            </div>
          </div>

          {/* Principal Specs Bar + Brochure */}
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-lg border border-gray-200 bg-white p-3 shadow-sm">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-xs font-semibold text-primary">
                <Ruler className="h-3.5 w-3.5 text-secondary" aria-hidden="true" />
                <span>LOA {modelData.specs.length}</span>
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-xs font-semibold text-primary">
                <Waves className="h-3.5 w-3.5 text-secondary" aria-hidden="true" />
                <span>Beam {modelData.specs.beam}</span>
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-xs font-semibold text-primary">
                <Gauge className="h-3.5 w-3.5 text-secondary" aria-hidden="true" />
                <span>Draft {modelData.specs.draft}</span>
              </span>
            </div>
            {modelData.brochureUrl ? (
              <a href={modelData.brochureUrl} target="_blank" rel="noopener noreferrer" className="inline-block">
                <Button variant="outline" size="sm">Download Brochure</Button>
              </a>
            ) : (
              <div className="text-xs text-muted-foreground">Official brochure coming soon</div>
            )}
          </div>

          {/* Model Photo Gallery */}
          {modelGalleries[model] && (
            <div className="mt-8">
              <h3 className="mb-4 text-2xl font-bold text-primary">Photo Gallery</h3>
              <div className="grid gap-4 md:grid-cols-3">
                {Array.from(new Set(modelGalleries[model].photos)).map((src, idx) => (
                  <div key={idx} className="relative aspect-[4/3] overflow-hidden rounded-lg">
                    <img
                      src={src}
                      alt={`Bali ${model} gallery ${idx + 1}`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                ))}
              </div>

              <h4 className="mt-8 mb-4 text-xl font-bold text-primary">Layouts</h4>
              <div className="grid gap-4 md:grid-cols-3">
                {Array.from(new Set(modelGalleries[model].layouts)).map((src, idx) => (
                  <div key={idx} className="relative aspect-[4/3] overflow-hidden rounded-lg bg-white p-2 shadow">
                    <img
                      src={src}
                      alt={`Bali ${model} layout ${idx + 1}`}
                      className="h-full w-full object-contain"
                      loading="lazy"
                      decoding="async"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                ))}
                {Array.from(new Set(modelGalleries[model].layouts)).length === 0 && (
                  <div className="text-sm text-muted-foreground">Detailed layout imagery coming soon.</div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Price & Quick Actions */}
      <section className="md:sticky top-20 z-40 border-b border-gray-200 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-2xl font-bold text-secondary sm:text-3xl">{modelData.price}</p>
              <p className="text-sm text-muted-foreground">Base price, delivery to BVI</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="gold" size="lg">Request Information</Button>
              <ScheduleConsultation modelName={modelData.name} />
              <Link href="/bali/compare">
                <Button variant="outline" size="lg">Compare Models</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-3xl font-bold text-primary">Overview</h2>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              {modelData.description.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-primary">Technical Specifications</h2>

          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="flex items-start gap-4 p-6">
                <Ruler className="h-8 w-8 flex-shrink-0 text-secondary" />
                <div>
                  <p className="mb-1 text-sm font-medium text-muted-foreground">Length Overall</p>
                  <p className="text-xl font-bold text-primary">{modelData.specs.length}</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-start gap-4 p-6">
                <Waves className="h-8 w-8 flex-shrink-0 text-secondary" />
                <div>
                  <p className="mb-1 text-sm font-medium text-muted-foreground">Beam</p>
                  <p className="text-xl font-bold text-primary">{modelData.specs.beam}</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-start gap-4 p-6">
                <Gauge className="h-8 w-8 flex-shrink-0 text-secondary" />
                <div>
                  <p className="mb-1 text-sm font-medium text-muted-foreground">Draft</p>
                  <p className="text-xl font-bold text-primary">{modelData.specs.draft}</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-start gap-4 p-6">
                <Bed className="h-8 w-8 flex-shrink-0 text-secondary" />
                <div>
                  <p className="mb-1 text-sm font-medium text-muted-foreground">Cabins</p>
                  <p className="text-xl font-bold text-primary">{modelData.specs.cabins}</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-start gap-4 p-6">
                <Users className="h-8 w-8 flex-shrink-0 text-secondary" />
                <div>
                  <p className="mb-1 text-sm font-medium text-muted-foreground">Berths</p>
                  <p className="text-xl font-bold text-primary">{modelData.specs.berths}</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-start gap-4 p-6">
                <Calendar className="h-8 w-8 flex-shrink-0 text-secondary" />
                <div>
                  <p className="mb-1 text-sm font-medium text-muted-foreground">Displacement</p>
                  <p className="text-xl font-bold text-primary">{modelData.specs.displacement}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mx-auto mt-8 max-w-5xl">
            <Card>
              <CardContent className="p-8">
                <h3 className="mb-6 text-xl font-bold text-primary">Additional Specifications</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex justify-between border-b border-gray-200 pb-3">
                    <span className="font-medium text-muted-foreground">Water Capacity</span>
                    <span className="font-semibold text-primary">{modelData.specs.waterCapacity}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-3">
                    <span className="font-medium text-muted-foreground">Fuel Capacity</span>
                    <span className="font-semibold text-primary">{modelData.specs.fuelCapacity}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-3">
                    <span className="font-medium text-muted-foreground">Engine</span>
                    <span className="font-semibold text-primary">{modelData.specs.engine}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-3">
                    <span className="font-medium text-muted-foreground">Heads</span>
                    <span className="font-semibold text-primary">{modelData.specs.heads}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-primary">Key Features</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {modelData.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-secondary/10">
                    <div className="h-2 w-2 rounded-full bg-secondary" />
                  </div>
                  <span className="leading-relaxed text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why This Model Works for BVI Charter - SEO H2 */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-3xl font-bold text-primary">
              Why the {modelData.name} Works for BVI Charter
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {modelData.charterInfo.whyItWorks.map((reason, idx) => (
                <div key={idx} className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span className="text-muted-foreground">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Charter Layout Options - SEO H2 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold text-primary">
              Charter Layout Options and Cabin Configurations
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
              {modelData.charterInfo.layoutOptions}
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="border-2 border-primary/10">
                <CardContent className="p-6 text-center">
                  <Bed className="mx-auto mb-3 h-10 w-10 text-secondary" />
                  <p className="text-3xl font-bold text-primary">{modelData.specs.cabins}</p>
                  <p className="text-sm text-muted-foreground">Cabin Configurations</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary/10">
                <CardContent className="p-6 text-center">
                  <Users className="mx-auto mb-3 h-10 w-10 text-secondary" />
                  <p className="text-3xl font-bold text-primary">{modelData.specs.berths}</p>
                  <p className="text-sm text-muted-foreground">Guest Berths</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary/10">
                <CardContent className="p-6 text-center">
                  <Anchor className="mx-auto mb-3 h-10 w-10 text-secondary" />
                  <p className="text-3xl font-bold text-primary">{modelData.specs.heads}</p>
                  <p className="text-sm text-muted-foreground">Heads (Bathrooms)</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* BVI Charter Income and Operating Costs - SEO H2 */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-3xl font-bold text-primary">
              BVI Charter Income and Operating Costs
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="border-2 border-secondary/20 bg-white">
                <CardContent className="p-8">
                  <DollarSign className="mb-4 h-12 w-12 text-secondary" />
                  <h3 className="mb-2 text-xl font-bold text-primary">Estimated Annual Charter Income</h3>
                  <p className="mb-4 text-3xl font-bold text-secondary">{modelData.charterInfo.incomeEstimate}</p>
                  <p className="text-sm text-muted-foreground">
                    Gross charter revenue based on {modelData.charterInfo.charterWeeks} charter weeks annually in the BVI market.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary/10 bg-white">
                <CardContent className="p-8">
                  <Ship className="mb-4 h-12 w-12 text-primary" />
                  <h3 className="mb-2 text-xl font-bold text-primary">Estimated Annual Operating Costs</h3>
                  <p className="mb-4 text-3xl font-bold text-primary">{modelData.charterInfo.annualCosts}</p>
                  <p className="text-sm text-muted-foreground">
                    Includes insurance, maintenance, marina fees, and charter management fees.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-8 rounded-lg bg-white p-6 shadow-sm">
              <p className="text-center text-sm italic text-muted-foreground">
                * Income estimates based on typical BVI charter market conditions. Actual results vary based on
                charter management, marketing, and market conditions. Contact us for a personalized ROI analysis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Owner Use vs Charter Use - SEO H2 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-3xl font-bold text-primary">
              Owner Use vs Charter Use Explained
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-lg border-2 border-secondary/20 bg-secondary/5 p-6">
                <h3 className="mb-4 text-xl font-bold text-primary">Personal Owner Use</h3>
                <p className="mb-4 text-4xl font-bold text-secondary">{modelData.charterInfo.ownerUseWeeks}</p>
                <p className="text-muted-foreground">
                  Annual weeks reserved exclusively for your personal enjoyment. Sail the stunning BVI waters,
                  entertain friends and family, or simply escape to your floating retreat.
                </p>
              </div>
              <div className="rounded-lg border-2 border-primary/20 bg-primary/5 p-6">
                <h3 className="mb-4 text-xl font-bold text-primary">Charter Revenue Weeks</h3>
                <p className="mb-4 text-4xl font-bold text-primary">{modelData.charterInfo.charterWeeks}</p>
                <p className="text-muted-foreground">
                  Available charter weeks generating income. Professional charter management handles all bookings,
                  guest services, and yacht maintenance during charter operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BVI Charter Management - SEO H2 */}
      <section className="bg-gradient-to-br from-primary to-primary/90 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-3xl font-bold">
              BVI Charter Management and Compliance
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-white/90">
              Partnering with established BVI charter management ensures your {modelData.name} meets all compliance
              requirements while maximizing charter income. Our recommended partners handle everything from marketing
              to maintenance.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                <span>BVI charter license compliance and registration</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                <span>Professional marketing through charter networks</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                <span>Guest booking and payment processing</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                <span>Yacht maintenance and turnaround services</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                <span>Insurance and liability management</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                <span>Monthly financial reporting to owners</span>
              </div>
            </div>
            <div className="mt-8">
              <Link href="/charter-ownership">
                <Button variant="secondary" size="lg">Learn About Charter Ownership Programs</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tax and Depreciation - SEO H2 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-3xl font-bold text-primary">
              Tax and Depreciation Considerations
            </h2>
            <Card className="border-2 border-secondary/20">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <DollarSign className="h-16 w-16 flex-shrink-0 text-secondary" />
                  <div>
                    <h3 className="mb-4 text-xl font-bold text-primary">US Buyer Tax Benefits</h3>
                    <p className="mb-4 text-muted-foreground">
                      US buyers placing a {modelData.name} into active charter business may qualify for significant
                      tax advantages, including bonus depreciation and Section 179 deductions. At a base price of
                      {modelData.price}, these benefits can substantially offset your investment.
                    </p>
                    <ul className="mb-6 space-y-2">
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <Check className="h-4 w-4 text-secondary" />
                        <span>Bonus depreciation eligibility for charter yachts</span>
                      </li>
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <Check className="h-4 w-4 text-secondary" />
                        <span>Section 179 expense deduction potential</span>
                      </li>
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <Check className="h-4 w-4 text-secondary" />
                        <span>Charter income offset against operating expenses</span>
                      </li>
                    </ul>
                    <p className="mb-6 text-sm italic text-muted-foreground">
                      * Tax benefits vary by individual circumstances. Consult with your tax advisor for specific eligibility and benefits.
                    </p>
                    <Link href="/bonus-depreciation">
                      <Button variant="gold">Learn About Tax Benefits</Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Is This Right for You - SEO H2 */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-3xl font-bold text-primary">
              Is the {modelData.name} Right for You?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              The {modelData.name} is ideal for buyers seeking:
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {modelData.charterInfo.bestFor.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm">
                  <Check className="h-6 w-6 flex-shrink-0 text-secondary" />
                  <span className="font-medium text-primary">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-xl bg-gradient-to-r from-secondary/10 to-secondary/5 p-6">
              <div className="flex items-start gap-4">
                <GraduationCap className="h-10 w-10 flex-shrink-0 text-secondary" />
                <div>
                  <h3 className="mb-2 text-xl font-bold text-primary">Owner Training Program Available</h3>
                  <p className="mb-4 text-muted-foreground">
                    Master your {modelData.name} with our exclusive 5-day owner training program in the BVI.
                    Learn from experienced captains and gain the confidence to sail anywhere.
                  </p>
                  <Link href="/training/owner-program">
                    <Button variant="outline">Explore Owner Training</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Critical for Featured Snippets */}
      <section className="py-16" id="faq">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-4 text-3xl font-bold text-primary">
              Frequently Asked Questions: {modelData.name} Charter
            </h2>
            <p className="mb-8 text-muted-foreground">
              Common questions about the {modelData.name} for BVI charter ownership
            </p>
            <div className="space-y-4">
              {modelData.faqs.map((faq, idx) => (
                <Card key={idx} className="border-2 border-primary/10">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <HelpCircle className="mt-1 h-6 w-6 flex-shrink-0 text-secondary" />
                      <div>
                        <h3 className="mb-3 text-lg font-bold text-primary">{faq.question}</h3>
                        <p className="leading-relaxed text-muted-foreground">{faq.answer}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Internal Linking Section */}
      <section className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h3 className="mb-6 text-center text-xl font-bold text-primary">Related Resources</h3>
            <div className="grid gap-4 md:grid-cols-3">
              <Link href="/charter-ownership" className="group">
                <Card className="h-full transition-all hover:border-secondary hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <Ship className="mx-auto mb-3 h-8 w-8 text-primary group-hover:text-secondary" />
                    <p className="font-bold text-primary group-hover:text-secondary">Charter Ownership Program</p>
                    <p className="mt-2 text-sm text-muted-foreground">Learn about BVI charter management</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/training/owner-program" className="group">
                <Card className="h-full transition-all hover:border-secondary hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <GraduationCap className="mx-auto mb-3 h-8 w-8 text-primary group-hover:text-secondary" />
                    <p className="font-bold text-primary group-hover:text-secondary">Owner Training Program</p>
                    <p className="mt-2 text-sm text-muted-foreground">Master your catamaran in the BVI</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/charter-calculator" className="group">
                <Card className="h-full transition-all hover:border-secondary hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <DollarSign className="mx-auto mb-3 h-8 w-8 text-primary group-hover:text-secondary" />
                    <p className="font-bold text-primary group-hover:text-secondary">Charter ROI Calculator</p>
                    <p className="mt-2 text-sm text-muted-foreground">Calculate your potential returns</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <YachtEnquiryForm modelName={modelData.name} modelPrice={modelData.price} status={enquiryStatus} />

      <FinancingCalculator basePrice={modelData.priceValue} modelName={modelData.name} />

      {/* CTA - Charter Focused */}
      <section className="bg-gradient-to-br from-primary to-primary/90 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-4xl font-bold">Start Your {modelData.name} Charter Business</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
            Join successful charter owners in the British Virgin Islands. Our team guides you through purchase,
            delivery, commissioning, training, and charter management setup.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="secondary" size="lg">Request Charter Investment Guide</Button>
            <Link href="/charter-calculator">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Calculate Your Charter ROI
              </Button>
            </Link>
          </div>
          <p className="mt-6 text-sm text-white/70">
            {modelData.primaryKeyword} | BVI Charter Catamaran | Caribbean Charter Investment
          </p>
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

function FinancingCalculator({ basePrice, modelName }: { basePrice: number; modelName: string }) {
  return (
    <section className="bg-muted py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-primary">Financing Calculator</h2>
          <p className="mb-8 text-center text-muted-foreground">
            Estimate your monthly payments for the {modelName}
          </p>

          <Card>
            <CardContent className="p-8">
              <div className="space-y-6">
                <div>
                  <label className="mb-2 block text-sm font-medium text-primary">Purchase Price</label>
                  <Input
                    type="text"
                    value={`$${basePrice.toLocaleString()}`}
                    readOnly
                    className="bg-muted"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-primary">Down Payment (20-30% recommended)</label>
                  <div className="flex gap-4">
                    <Input
                      type="number"
                      placeholder="300000"
                      className="flex-1"
                    />
                    <Input
                      type="number"
                      placeholder="25"
                      className="w-24"
                    />
                    <span className="flex items-center text-muted-foreground">%</span>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-primary">Loan Term (years)</label>
                  <select defaultValue="20" className="flex h-11 w-full rounded-sm border border-input bg-background px-4 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                    <option value="10">10 years</option>
                    <option value="15">15 years</option>
                    <option value="20">20 years</option>
                    <option value="25">25 years</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-primary">Interest Rate (%)</label>
                  <Input
                    type="number"
                    placeholder="5.5"
                    step="0.1"
                  />
                  <p className="mt-1 text-xs text-muted-foreground">Current marine lending rates typically 4.5% - 7.5%</p>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <Button variant="gold" size="lg" className="w-full">Calculate Payment</Button>
                </div>

                <div className="rounded-lg bg-primary/5 p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-muted-foreground">Estimated Monthly Payment</span>
                    <span className="text-3xl font-bold text-secondary">$8,250</span>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Principal & Interest</span>
                      <span className="font-medium">$7,890</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Insurance (estimated)</span>
                      <span className="font-medium">$360</span>
                    </div>
                  </div>
                  <p className="mt-4 text-xs italic text-muted-foreground">
                    * This is an estimate only. Actual terms will vary based on creditworthiness, lender, and market conditions.
                  </p>
                </div>

                <div className="text-center">
                  <p className="mb-3 text-sm text-muted-foreground">Interested in discussing financing options?</p>
                  <Button variant="outline">Contact Our Finance Team</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function YachtEnquiryForm({ modelName, modelPrice, status }: { modelName: string; modelPrice: string; status?: string }) {
  const banner = status === "ok"
    ? { text: "Thank you! Your enquiry has been sent.", cls: "bg-green-50 text-green-700 border-green-200" }
    : status === "error"
    ? { text: "Please complete required fields and try again.", cls: "bg-red-50 text-red-700 border-red-200" }
    : status === "config"
    ? { text: "Email service not configured. Please contact us directly.", cls: "bg-yellow-50 text-yellow-800 border-yellow-200" }
    : null;

  return (
    <section className="bg-white py-16" id="enquire">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary">Enquire About the {modelName}</h2>
            <p className="text-lg text-muted-foreground">
              Complete the form below and our Bali specialists will contact you within 24 hours
            </p>
          </div>

          {banner && (
            <div className={`mb-6 rounded-lg border p-4 text-sm ${banner.cls}`}>{banner.text}</div>
          )}

          <Card className="border-2 border-primary/10">
            <CardContent className="p-8">
              <form name="bali-model-enquiry" method="POST" action="/api/model-enquiry" className="space-y-6">
                <input type="hidden" name="_source" value={`Bali ${modelName} Detail`} />
                <input type="text" name="website" className="hidden" tabIndex={-1} aria-hidden="true" />

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-primary">First Name *</label>
                    <Input name="firstName" placeholder="John" required autoComplete="given-name" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-primary">Last Name *</label>
                    <Input name="lastName" placeholder="Smith" required autoComplete="family-name" />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-primary">Email Address *</label>
                    <Input name="email" type="email" placeholder="john@example.com" required autoComplete="email" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-primary">Phone Number</label>
                    <Input name="phone" type="tel" inputMode="tel" placeholder="+1 (555) 123-4567" autoComplete="tel" />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-primary">Yacht Model</label>
                    <Input name="modelName" value={modelName} readOnly className="bg-muted" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-primary">Base Price</label>
                    <Input name="modelPrice" value={modelPrice} readOnly className="bg-muted" />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-primary">I'm interested in: *</label>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <label className="flex cursor-pointer items-center gap-2 rounded-md border border-gray-200 p-3 transition-colors hover:border-secondary">
                      <input type="checkbox" name="interest" value="purchase" className="h-4 w-4 rounded border-gray-300 text-secondary focus:ring-secondary" />
                      <span className="text-sm text-muted-foreground">Purchasing this yacht</span>
                    </label>
                    <label className="flex cursor-pointer items-center gap-2 rounded-md border border-gray-200 p-3 transition-colors hover:border-secondary">
                      <input type="checkbox" name="interest" value="charter" className="h-4 w-4 rounded border-gray-300 text-secondary focus:ring-secondary" />
                      <span className="text-sm text-muted-foreground">Charter ownership program</span>
                    </label>
                    <label className="flex cursor-pointer items-center gap-2 rounded-md border border-gray-200 p-3 transition-colors hover:border-secondary">
                      <input type="checkbox" name="interest" value="try" className="h-4 w-4 rounded border-gray-300 text-secondary focus:ring-secondary" />
                      <span className="text-sm text-muted-foreground">Try before you buy</span>
                    </label>
                    <label className="flex cursor-pointer items-center gap-2 rounded-md border border-gray-200 p-3 transition-colors hover:border-secondary">
                      <input type="checkbox" name="interest" value="financing" className="h-4 w-4 rounded border-gray-300 text-secondary focus:ring-secondary" />
                      <span className="text-sm text-muted-foreground">Financing options</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-primary">Preferred Delivery Location</label>
                  <select name="deliveryLocation" autoComplete="off" className="flex h-11 w-full rounded-sm border border-input bg-background px-4 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                    <option value="">Select location...</option>
                    <option value="bvi">British Virgin Islands</option>
                    <option value="usvi">US Virgin Islands</option>
                    <option value="pr">Puerto Rico</option>
                    <option value="fl">Florida, USA</option>
                    <option value="med">Mediterranean</option>
                    <option value="other">Other (specify in message)</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-primary">Additional Message</label>
                  <Textarea name="message" placeholder="Tell us about your sailing experience, intended use, timeline, or any questions you have..." className="min-h-[120px]" autoComplete="off" />
                </div>

                <div className="flex items-start gap-2">
                  <input type="checkbox" id="privacy" className="mt-1 h-4 w-4 rounded border-gray-300 text-secondary focus:ring-secondary" name="privacy" required />
                  <label htmlFor="privacy" className="text-sm text-muted-foreground">
                    I agree to receive communications from Virgin Islands Yacht Broker. Your information will be kept confidential and never shared with third parties.
                  </label>
                </div>

                <Button type="submit" variant="gold" size="lg" className="w-full">
                  <Send className="mr-2 h-5 w-5" />
                  Submit Enquiry
                </Button>

                <div className="rounded-lg bg-muted p-4">
                  <div className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                    <div>
                      <p className="text-sm font-medium text-primary">Quick Response Guaranteed</p>
                      <p className="text-sm text-muted-foreground">Our Bali specialists will respond within 24 hours with personalized information about the {modelName}.</p>
                    </div>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-secondary" />
              <span>+1 786 246 0809</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-secondary" />
              <span>info@virginislandsyachtbroker.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
