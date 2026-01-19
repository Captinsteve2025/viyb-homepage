# VIYB Homepage - Todo Tracker

## Listings Manager Module (v268) - COMPLETE

### Admin Authentication
- [x] Admin login page at `/admin/login`
- [x] Password-based authentication from `ADMIN_PASSWORD` env var
- [x] Cookie-based sessions (httpOnly `viyb_admin` cookie)
- [x] Middleware protection for all `/admin/*` routes
- [x] Logout functionality

### Multi-Step Wizard CMS
- [x] Details step - Year, Make, Model, Length, Hull Material, Category, Class, Price, Location, HIN
- [x] Photos & Videos step - Upload photos with sharp optimization, YouTube/Vimeo video URLs, 360 photos, virtual tours
- [x] Measurements step - LOA, LWL, Beam, Draft, Displacement, Fuel/Water/Holding capacities, Cabins, Berths, Heads
- [x] Propulsion step - Multiple engines with power, make, model, year, hours, engine type, drive type, fuel type, propeller
- [x] Features step - Grouped checkboxes (Electronics, Inside, Electrical, Outside, Covers, Additional) with Check/Uncheck All
- [x] Descriptions step - Main description with AI Generate button, Additional description blocks (Disclaimer, Mechanical, etc.)

### Admin UI Components
- [x] WizardLayout with left sidebar navigation
- [x] Listing Status dropdown (Active/Inactive)
- [x] Listing Score panel with circular donut chart (7 items: Price, Additional Class, Description, HIN, Photos, Videos, Engine Hours)
- [x] Quick action buttons (Email, History, Print, Preview)
- [x] Save and Continue navigation

### Admin Inventory List
- [x] Table view with Status, Year, Make, Model, Length, Price, Location, Updated date
- [x] Search functionality
- [x] Filter by status (All, Active, Inactive)
- [x] New Listing button
- [x] Export CSV functionality
- [x] Row actions: Edit, Duplicate, Delete, Preview

### Data Storage
- [x] File-backed JSON storage at `/data/listings.json`
- [x] Repository layer at `lib/listings/store.ts` for easy migration to Prisma
- [x] TypeScript types for Listing, Engine, Measurements, Media, FeatureGroups, AdditionalDescriptionBlock
- [x] Image uploads stored in `/public/uploads/listings/{listingId}/`

### Media Processing
- [x] Sharp image optimization
- [x] WebP and AVIF generation
- [x] Thumbnail creation (400x300)
- [x] Max width resize to 2400px
- [x] Set primary photo functionality
- [x] Video URL support (YouTube/Vimeo)

### AI Description Generator
- [x] Template-based description generation
- [x] Uses listing data (year, make, model, category, class, measurements, engines, features)
- [x] Structured for future LLM integration

### Public Listing Pages
- [x] Index page at `/boats` with search and card layout
- [x] Detail page at `/boats/[slug]` with hero gallery, specs, propulsion, features, descriptions
- [x] Contact CTA buttons
- [x] Only shows active listings

### API Routes
- [x] POST `/api/admin/login` - Authentication
- [x] POST `/api/admin/logout` - Clear session
- [x] GET/POST `/api/listings` - List all / Create new
- [x] GET/PUT/DELETE `/api/listings/[id]` - Read, Update, Delete
- [x] POST `/api/listings/[id]?action=duplicate` - Duplicate listing
- [x] GET `/api/listings?format=csv` - Export CSV
- [x] POST/PUT/DELETE `/api/listings/[id]/media` - Media upload and management
- [x] POST `/api/listings/[id]/generate-description` - AI description generator

## Environment Variables Required
- `ADMIN_PASSWORD` - Password for admin login (default: `admin123` in dev)

## Previously Completed (in GitHub) ✓
- [x] Rebuild Bali product card image pipeline with static data
- [x] Replace scraper with deterministic static data (baliModelsData.ts)
- [x] Main card images now always use full exterior side profiles
- [x] Image selection priority: silhouette > side-profile > exterior-starboard > sailing-profile > fallback
- [x] Layout images only appear in secondary gallery, never as hero
- [x] Added validation logging for each model in development mode
- [x] Updated /bali page to use BALI_MODELS from baliModelsData.ts
- [x] Updated detail pages to use static data hero images
- [x] Added manualReviewNeeded badge for models needing image verification
- [x] All 9 Bali models rendering with verified exterior profiles
- [x] Updated Bali 5.2 with sailing profile from bali-catamarans.hr
- [x] Cleared all manual review flags
- [x] **Charter Ownership Page Updated with Yacht As A Business Program (v150)**

## Pending / Future Enhancements
- [ ] Mobile QA for homepage hero and Bali detail pages
- [ ] Add lightbox modals for layout galleries on model cards
- [ ] Consider adding comparison links back to model cards
- [ ] Commit Listings Manager module to GitHub
- [ ] Deploy site to production when ready
