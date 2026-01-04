# VIYB Homepage - Todo Tracker

## Completed ✓
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
  - Added "Yacht As A Business Program" section explaining LLC structure
  - Enhanced Section 179 details with 2025 limits ($2.5M deduction, $4.05M equipment)
  - Added tax savings example ($555K savings on $1.5M yacht at 37% bracket)
  - Listed 8 categories of deductible business expenses
  - Added IRS compliance warning about genuine business intent
  - Updated charter income section with BVI market details

## Models with verified exterior side profile images (v149):
1. Bali Catsmart - sailing-profile ✓
2. Bali Catspace - exterior-starboard ✓
3. Bali 4.2 - sailing-profile ✓
4. Bali 4.4 - silhouette ✓ (perfect)
5. Bali 4.6 - sailing-profile ✓
6. Bali 4.8 - silhouette ✓ (perfect)
7. Bali 5.2 - sailing-profile ✓ (updated with bali-catamarans.hr image)
8. Bali 5.4 - sailing-profile ✓
9. Bali 5.8 - exterior-starboard ✓

All 9 models now have verified full exterior side profile images!

## Pending / Future Enhancements
- [ ] Mobile QA for homepage hero and Bali detail pages
- [ ] Add lightbox modals for layout galleries on model cards
- [ ] Consider adding comparison links back to model cards
- [ ] Deploy site to production when ready
