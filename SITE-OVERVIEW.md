# VIYB Website - Complete Site Overview

**Last Updated:** December 2024
**Total Pages:** 12+ pages
**Framework:** Next.js 14 with App Router

---

## 📄 All Pages

### 1. Homepage (`/`)
**Route:** `src/app/page.tsx`

**Sections:**
- Hero section with catamaran background image
- Value Pillars (3 cards: Brokerage, New Bali, Charter Ownership)
- Featured Brokerage Yachts (3 yacht listings)
- AI Yacht Search feature promotion
- Featured Bali Catamarans (4 models)
- Try Before You Buy section
- Bonus Depreciation section
- Charter Management with MCC section
- Testimonials (3 cards)
- Newsletter signup
- Footer with contact info

**Interactive Elements:**
- Navigation menu (desktop + mobile)
- CTA buttons
- Newsletter email input
- Links to all major sections

---

### 2. Brokerage (`/brokerage`)
**Route:** `src/app/brokerage/page.tsx`

**Sections:**
- Hero section
- Yacht listings (currently mock data - ready for API integration)
- Filter options (ready for implementation)
- Individual yacht cards with details

**Interactive Elements:**
- Back to home link
- View details buttons
- Filters (when implemented)

---

### 3. New Bali Catamarans (`/bali`)
**Route:** `src/app/bali/page.tsx`

**Sections:**
- Hero section
- Bali range overview
- Individual Bali models showcase
- Features and specifications
- Try Before You Buy section
- Investment calculator section

**Interactive Elements:**
- Model selection cards
- CTA buttons for inquiries
- Links to individual model pages
- Compare models link

---

### 4. Bali Model Pages (`/bali/[model]`)
**Route:** `src/app/bali/[model]/page.tsx`

**Dynamic routes for:**
- `/bali/43` - Bali 4.3
- `/bali/45` - Bali 4.5
- `/bali/48` - Bali 4.8
- `/bali/catspace` - Bali Catspace

**Sections:**
- Model-specific hero
- Detailed specifications
- Features and amenities
- Image galleries
- Pricing information

---

### 5. Bali Compare (`/bali/compare`)
**Route:** `src/app/bali/compare/page.tsx`

**Sections:**
- Side-by-side model comparison
- Specifications table
- Features comparison
- Pricing comparison

**Interactive Elements:**
- Comparison table
- Model selection (if implemented)

---

### 6. Yacht Charters (`/charter`)
**Route:** `src/app/charter/page.tsx`

**Sections:**
- Hero section
- How It Works (3 steps)
- Yacht charter fleet
- Charter benefits
- Destinations
- Reservation form
- Testimonials
- Charter planning resources

**Interactive Elements:**
- Filter by yacht type/category
- Reservation inquiry forms
- Newsletter signup

---

### 7. Charter Ownership (`/charter-ownership`)
**Route:** `src/app/charter-ownership/page.tsx`

**Sections:**
- Hero section
- How MCC Clearinghouse Works (3 steps)
- MCC Program Benefits (4 cards)
- Services Included
- Financial Benefits & ROI
- Charter Income details
- Tax Benefits
- Owner Testimonials (3 cards)
- FAQ section (6 questions)
- CTA section

**Interactive Elements:**
- Back button
- FAQ expandable sections
- Multiple CTA buttons
- Links to ROI calculator

---

### 8. Charter ROI Calculator (`/charter-calculator`) ⚡
**Route:** `src/app/charter-calculator/page.tsx`

**Sections:**
- Calculator header
- Input panel (3 cards)
- Results panel (2 cards)
- Important notes
- CTA section

**Interactive Elements:** ⭐
- **Purchase Details Inputs:**
  - Purchase Price slider ($500K - $5M)
  - Down Payment slider (20% - 50%)
  - Loan Term slider (10-25 years)
  - Interest Rate slider (3.5% - 8.5%)

- **Charter Revenue Inputs:**
  - Charter Weeks slider (10-35 weeks)
  - Weekly Rate slider ($15K - $100K)
  - Personal Use slider (2-12 weeks)
  - Management Fee slider ($1K - $10K per month)

- **Annual Expenses Inputs:**
  - Maintenance number input
  - Insurance number input
  - Other expenses number input

- **Real-Time Calculations:**
  - Net charter revenue
  - Total annual expenses
  - Net cash flow
  - ROI percentage
  - Cash-on-cash return
  - Payback period
  - Utilization breakdown chart

---

### 9. Try Before You Buy (`/try-before-buy`)
**Route:** `src/app/try-before-buy/page.tsx`

**Sections:**
- Hero section
- Program overview
- How it works
- Available models
- Benefits
- Testimonials
- Booking process

**Interactive Elements:**
- Model selection
- Inquiry forms
- CTA buttons

---

### 10. Bonus Depreciation (`/bonus-depreciation`)
**Route:** `src/app/bonus-depreciation/page.tsx`

**Sections:**
- Hero section
- 100% Bonus Depreciation explanation
- Qualifying criteria
- Asset Purchase Requirements
- Business Use Requirements
- Tax benefits breakdown
- Example calculations
- FAQ section
- CTA section

**Interactive Elements:**
- Back button
- FAQ expandable items
- CTA buttons
- Links to calculator

---

### 11. AI Yacht Search (`/yacht-search`) ⚡
**Route:** `src/app/yacht-search/page.tsx`

**Sections:**
- Hero section
- AI search form
- Results display
- Match scoring breakdown

**Interactive Elements:** ⭐
- **Criteria Input Form:**
  - Budget range
  - Year range
  - Length range
  - Must-have features (15+ checkboxes)
  - High priority features (10+ checkboxes)
  - Nice-to-have features (10+ checkboxes)
  - Additional preferences

- **AI Search Results:**
  - Top 5 yacht matches
  - Match score percentage
  - Score breakdown by category
  - Match reasons
  - Yacht specifications
  - View details links

- **Mock Database:**
  - 10 sample yachts with detailed specs
  - Scoring algorithm based on criteria
  - Real-time filtering and ranking

---

### 12. Resources (`/resources`)
**Route:** `src/app/resources/page.tsx`

**Sections:**
- Downloadable guides
- Documentation library
- Useful links
- FAQ resources

**Interactive Elements:**
- Download buttons
- Resource categories
- Search/filter (if implemented)

---

## 🎨 Interactive Components

### Navigation
**Component:** `src/components/MobileNav.tsx`

**Features:**
- Desktop menu (horizontal)
- Mobile hamburger menu
- Current page highlighting
- Smooth transitions
- Logo linking to home

**Menu Items:**
- Home
- Brokerage
- AI Yacht Search
- New Bali
- Compare Bali Models
- Yacht Charters
- Try Before You Buy
- Charter Ownership
- ROI Calculator
- Bonus Depreciation
- Resources & Downloads
- Contact

---

### Logo Component
**Component:** `src/components/Logo.tsx`

**Variants:**
- Light version (for light backgrounds)
- Dark version (for dark backgrounds)

---

### UI Components (Shadcn)
**Location:** `src/components/ui/`

**Components:**
- Button (with variants: default, gold, outline, secondary)
- Card (with CardContent, CardHeader)
- Input (text, range, number)
- Dialog/Modal
- Dropdown
- Tooltip
- Tabs
- Accordion (for FAQs)
- Form elements

---

## ⚡ Most Interactive Pages

### 1. Charter ROI Calculator (`/charter-calculator`)
**Interactivity Level:** ⭐⭐⭐⭐⭐

- 11 input controls (8 sliders, 3 number inputs)
- Real-time calculations
- Dynamic chart visualization
- Responsive to every input change
- Color-coded results (green/red)
- Mobile-optimized sliders

### 2. AI Yacht Search (`/yacht-search`)
**Interactivity Level:** ⭐⭐⭐⭐⭐

- 35+ checkbox inputs
- Range sliders
- Form submission
- Real-time scoring algorithm
- Dynamic results display
- Match percentage calculations
- Expandable result cards

### 3. Bali Compare (`/bali/compare`)
**Interactivity Level:** ⭐⭐⭐

- Side-by-side comparison table
- Feature highlighting
- Spec comparison
- Model selection

---

## 📱 Mobile Features

All pages include:
- ✅ Responsive design (mobile-first)
- ✅ Touch-friendly controls
- ✅ Mobile navigation menu
- ✅ Optimized images
- ✅ Single-column layouts on mobile
- ✅ Larger touch targets (44px minimum)

**Special Mobile Optimizations:**
- **ROI Calculator:** 24px slider thumbs on mobile
- **Forms:** Extra padding on inputs
- **Navigation:** Slide-out drawer menu
- **Cards:** Stack vertically on small screens

---

## 🎯 Call-to-Action Buttons

Throughout the site:
- "Request an Enquiry"
- "View Details"
- "Calculate Your ROI"
- "Schedule a Consultation" (removed from calculator)
- "Download Program Guide"
- "Try Before You Buy"
- "Learn More"
- "Contact Us"

---

## 📊 Data Integration Points

### Ready for API Integration:
1. **Brokerage Listings** - Mock data, ready for real API
2. **Charter Fleet** - Mock data, ready for real API
3. **AI Yacht Search** - Mock database, ready for external API
4. **Testimonials** - Hardcoded, can be made dynamic
5. **Newsletter Signup** - Form ready, needs backend

### API Integration Guide Available:
- Located in: `viyb-homepage/API-INTEGRATION-GUIDE.md`
- Server-side rendering examples
- Client-side fetching examples
- ISR examples
- Reusable components

---

## 🎨 Brand Elements

### Colors:
- Primary: Navy Blue (`#0a2540`)
- Secondary: Gold (`#d4af37`)
- Background: White / Light Gray
- Accents: Green (positive), Red (negative)

### Typography:
- Font: System fonts (Apple, Segoe UI, Roboto)
- Headings: Bold, large sizes
- Body: Regular weight, readable sizes

### Imagery:
- High-quality yacht photos
- Caribbean landscapes
- Catamaran hero images
- Professional lifestyle shots

---

## 📦 WordPress Export Available

**Exportable Pages:**
1. **ROI Calculator** - WordPress shortcode
2. **Bonus Depreciation** - Static HTML/CSS

**Location:** `viyb-homepage/wordpress-export/`

**Includes:**
- Standalone HTML files
- WordPress shortcode plugin
- Installation guides
- Embedding documentation

---

## 🚀 Performance Features

- ✅ Next.js App Router (fast navigation)
- ✅ Image optimization
- ✅ Code splitting
- ✅ Static generation where possible
- ✅ Client-side state management
- ✅ Minimal dependencies (no jQuery)
- ✅ Fast load times

---

## 📝 Content Highlights

### Educational Content:
- Charter ownership explanation
- Tax benefits details
- Program comparisons
- How-to guides
- FAQ sections

### Sales Content:
- Yacht specifications
- Pricing information
- Program benefits
- Testimonials
- Case studies

### Interactive Tools:
- ROI calculator
- AI yacht search
- Model comparison
- Charter inquiry forms

---

## 🔗 Internal Linking

**Homepage links to:**
- All major sections
- Brokerage listings
- Bali range
- Charter ownership
- ROI calculator
- Bonus depreciation
- Resources

**Each page links back to:**
- Homepage
- Related pages
- Contact section

---

## ✅ Site Statistics

- **Total Pages:** 12+
- **Interactive Calculators:** 1 (ROI)
- **Search Tools:** 1 (AI Yacht Search)
- **Comparison Tools:** 1 (Bali Compare)
- **Form Pages:** 3+ (Charter, Try Before Buy, Resources)
- **Information Pages:** 7+
- **Total Components:** 20+
- **UI Library Components:** 15+

---

## 🎯 Most Popular Expected Pages

1. **Homepage** - Main entry point
2. **ROI Calculator** - High engagement tool
3. **Charter Ownership** - Key service page
4. **Bali Range** - New yacht sales
5. **Brokerage** - Used yacht listings

---

**Site Version:** 28
**Framework:** Next.js 14
**Styling:** Tailwind CSS + Shadcn UI
**State Management:** React Hooks
**Deployment:** Ready for Netlify
