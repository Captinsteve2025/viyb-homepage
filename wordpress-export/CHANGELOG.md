# ROI Calculator - Changelog

## Version 1.0.3 - December 14, 2024

### 🔄 Major Changes

#### 1. Purchase Price Range Increased
**Changed:** Maximum purchase price from $3M to $5M
- **Before:** $500K - $3M range
- **After:** $500K - $5M range
- **Reason:** Accommodate larger luxury yacht purchases
- **Impact:** Users can now calculate ROI for higher-value vessels

#### 2. Management Fee Structure Changed
**Changed:** From percentage-based to fixed monthly dollar amount
- **Before:** 20-30% of gross charter revenue (slider)
- **After:** $1,000 - $10,000 per month (slider)
- **Default:** $5,000 per month
- **Calculation:** Annual fee = Management Fee × 12 months
- **Display:** Shows as "Management Fee ($X/month)" in results
- **Reason:** More accurate representation of actual MCC monthly management structure
- **Impact:** More realistic and transparent cost calculations

#### 3. CTA Button Removed
**Removed:** "Schedule a Consultation" button
- **Before:** Button at bottom of calculator linking to #contact
- **After:** Button removed entirely
- **Reason:** Simplified calculator interface
- **Impact:** Cleaner, more focused user experience

---

## Files Updated

### WordPress Shortcode Plugin
- ✅ `viyb-roi-calculator-shortcode.php` - Updated with all changes

### Next.js Live Calculator
- ✅ `/charter-calculator/page.tsx` - Updated with all changes

### Standalone HTML
- ✅ `charter-roi-calculator-embed.html` - Updated with all changes

### Documentation
- ✅ `COPY-THIS-CODE.txt` - Updated with latest code
- ✅ Download package regenerated

---

## Previous Versions

### Version 1.0.1 - December 14, 2024
- Mobile optimization improvements
- Responsive breakpoints added
- Touch-friendly slider controls (24px on mobile)
- Optimized font sizes and spacing
- Single column layout on small screens
- Overflow protection

### Version 1.0.0 - December 14, 2024
- Initial release
- Basic calculator functionality
- Desktop-focused design
- Percentage-based management fee
- $3M max purchase price

---

## Detailed Changes

### HTML/Interface Changes

#### Purchase Price Input
```html
<!-- Before -->
<input type="range" min="500000" max="3000000" step="50000" value="1000000">
<span>$3M</span>

<!-- After -->
<input type="range" min="500000" max="5000000" step="50000" value="1000000">
<span>$5M</span>
```

#### Management Fee Input
```html
<!-- Before -->
<label>Management Fee</label>
<span class="input-value">25%</span>
<input type="range" min="20" max="30" step="5" value="25">
<p>Typical MCC fee: 20-30% (owners receive 70-80%)</p>

<!-- After -->
<label>Management Fee (per month)</label>
<span class="input-value">$5,000</span>
<input type="range" min="1000" max="10000" step="500" value="5000">
<div class="range-limits">
    <span>$1,000</span>
    <span>$10,000</span>
</div>
<p>Monthly management fee</p>
```

#### Results Display
```html
<!-- Before -->
<span>Management Fee (25%)</span>
<span>-$125,000</span>

<!-- After -->
<span>Management Fee ($5,000/month)</span>
<span>-$60,000</span>
```

### JavaScript/Calculation Changes

#### State/Variable Changes
```javascript
// Before
const [managementFee, setManagementFee] = useState(25); // percentage

// After
const [managementFee, setManagementFee] = useState(5000); // dollar amount
```

#### Calculation Logic
```javascript
// Before
const grossCharterRevenue = charterWeeks * weeklyRate;
const managementFeeAmount = grossCharterRevenue * (managementFee / 100);
const netCharterRevenue = grossCharterRevenue - managementFeeAmount;

// After
const grossCharterRevenue = charterWeeks * weeklyRate;
const managementFeeAmount = managementFee * 12; // Monthly fee × 12 months
const netCharterRevenue = grossCharterRevenue - managementFeeAmount;
```

#### Display Updates
```javascript
// Before
document.getElementById('managementFee-display').textContent = managementFee + '%';
document.getElementById('mgmtFeePercent').textContent = managementFee;

// After
document.getElementById('managementFee-display').textContent = formatCurrency(managementFee);
document.getElementById('mgmtFeePercent').textContent = formatCurrency(managementFee);
```

---

## Impact on Calculations

### Example Scenario
**Inputs:**
- Purchase Price: $1,000,000
- Charter Weeks: 20
- Weekly Rate: $25,000
- Management Fee: $5,000 per month

**Revenue Calculation:**
```
Gross Charter Revenue = 20 weeks × $25,000 = $500,000
Management Fee Total = $5,000 × 12 months = $60,000
Net Charter Revenue = $500,000 - $60,000 = $440,000
```

**Before (at 25% fee):**
```
Gross Charter Revenue = 20 weeks × $25,000 = $500,000
Management Fee Total = $500,000 × 25% = $125,000
Net Charter Revenue = $500,000 - $125,000 = $375,000
```

**Difference:** $65,000 more net revenue with new monthly fee structure

---

## Testing Checklist

- [x] Purchase price slider works (500K - 5M)
- [x] Management fee slider works (1K - 10K)
- [x] Calculations update in real-time
- [x] Results display correctly
- [x] Mobile responsive (all breakpoints)
- [x] No console errors
- [x] CTA button removed
- [x] All text updated (Moorings → My Caribbean Charters / VIYB)

---

## Migration Notes

### For Existing Installations

If you're updating from a previous version:

1. **Backup:** Export your current settings if you customized them
2. **Replace:** Upload new `viyb-roi-calculator-shortcode.php` file
3. **Deactivate/Reactivate:** Not required, but recommended
4. **Test:** Try the calculator on mobile and desktop
5. **Customize:** Reapply any custom CSS if needed

### Breaking Changes

⚠️ **None** - The shortcode `[viyb_roi_calculator]` remains the same

### New Features Available

✅ Higher purchase price range ($5M max)
✅ More transparent fee structure (per charter)
✅ Cleaner interface (no CTA button)

---

## Support & Documentation

- **Installation:** See `SHORTCODE-INSTALLATION.md`
- **Quick Reference:** See `SHORTCODE-QUICK-REFERENCE.md`
- **Mobile Optimization:** See `MOBILE-OPTIMIZATION-SUMMARY.md`
- **Full Docs:** See `SHORTCODE-README.md`

---

**Current Version:** 1.0.3
**Last Updated:** December 14, 2024
**Compatibility:** WordPress 5.0+, PHP 7.0+
