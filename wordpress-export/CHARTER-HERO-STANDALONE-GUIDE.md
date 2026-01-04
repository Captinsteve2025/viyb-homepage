# Charter Ownership Hero Section - WordPress Block

## ⚡ Quick WordPress Install (2 Minutes)

### What You're Getting
A professional hero section with:
- Gradient navy background
- Gold accent badge
- Large responsive headline
- Descriptive subtitle
- Two CTA buttons (gold + outline)
- Fully mobile responsive

---

## 📥 Installation

### Method 1: Gutenberg (Recommended)
1. Open `charter-hero-standalone.html`
2. Copy everything between the **START** and **END** markers
3. In WordPress, add a **Custom HTML** block
4. Paste the code
5. Click **Update/Publish**

**Time:** 2 minutes | **Difficulty:** ⭐ Beginner

---

### Method 2: Page Builder

**Elementor:**
- Add **HTML widget** → Paste code

**Divi:**
- Add **Code module** → Paste code

**WPBakery:**
- Add **Raw HTML** element → Paste code

---

## 🎨 Quick Customizations

### Update Button Links
Find these lines and change the URLs:
```html
<a href="/charter-calculator" class="viyb-charter-hero-btn viyb-charter-hero-btn-primary">
<a href="/program-guide" class="viyb-charter-hero-btn viyb-charter-hero-btn-secondary">
```

Change to:
```html
<a href="/your-calculator-page" class="viyb-charter-hero-btn viyb-charter-hero-btn-primary">
<a href="/your-guide-page" class="viyb-charter-hero-btn viyb-charter-hero-btn-secondary">
```

---

### Change Colors
Find the `<style>` section and update:

**Navy Background:**
```css
background: linear-gradient(135deg, #0a2540 0%, rgba(10, 37, 64, 0.95)...
```
Change `#0a2540` to your color

**Gold Accent:**
```css
color: #d4af37;
background: #d4af37;
```
Change `#d4af37` to your color

---

### Edit Text

**Badge:**
```html
<span class="viyb-charter-hero-badge-text">Turn Your Yacht Into Income</span>
```

**Title:**
```html
<h1 class="viyb-charter-hero-title">
    Charter Management with MCC
</h1>
```

**Description:**
```html
<p class="viyb-charter-hero-description">
    Partner with My Caribbean Charters...
</p>
```

**Buttons:**
```html
Calculate Your ROI
Download Program Guide
```

---

## 📱 Responsive Design

✅ **Mobile (< 768px):** Single column, stacked buttons, optimized text size
✅ **Tablet (768px+):** Full size headline, side-by-side buttons
✅ **Desktop (1024px+):** Maximum impact with large text

---

## ✨ Features

✅ Scoped CSS (won't conflict with theme)
✅ No external dependencies
✅ Inline styles (fast loading)
✅ Touch-friendly buttons (44px min height)
✅ Smooth hover animations
✅ Professional gradient background
✅ Works with all WordPress themes

---

## 🎯 Use Cases

- **Charter Ownership Page** - Perfect hero section
- **Landing Page** - High-converting top section
- **Service Page** - Professional introduction
- **Homepage** - Feature your charter program

---

## 🔧 Advanced Options

### Full-Width Display
If your theme adds padding, make it full-width:
```css
.viyb-charter-hero {
    margin-left: calc(-50vw + 50%);
    margin-right: calc(-50vw + 50%);
}
```

### Adjust Height
```css
.viyb-charter-hero {
    min-height: 700px;  /* Change from 600px */
}
```

### Change Spacing
```css
.viyb-charter-hero {
    padding: 8rem 1.5rem;  /* Increase from 6rem */
}
```

---

## ✅ Pre-Launch Checklist

- [ ] Updated button links to actual pages
- [ ] Customized colors (if needed)
- [ ] Edited text content
- [ ] Tested on mobile device
- [ ] Tested on tablet
- [ ] Tested on desktop
- [ ] Verified buttons are clickable
- [ ] Checked page loads fast

---

## 💡 Pro Tips

1. **Preview First:** Always use WordPress preview before publishing
2. **Backup:** Save your current page content
3. **Mobile First:** Check mobile view first
4. **Fast Loading:** Keep the gradient - no images needed!
5. **Brand Colors:** Update navy and gold to match your brand

---

## 🎨 Color Schemes

### Current (Navy + Gold)
```css
Background: #0a2540 (Navy)
Accent: #d4af37 (Gold)
```

### Ocean Blue + Teal
```css
Background: #0d3b66 (Deep Blue)
Accent: #00b4d8 (Bright Teal)
```

### Dark + Coral
```css
Background: #1a1a2e (Dark Navy)
Accent: #ff6b6b (Coral)
```

---

## 📊 What's Different from Full Export?

| Feature | This File | Full Export |
|---------|-----------|-------------|
| Hero Section | ✅ | ✅ |
| Why Choose VIYB | ❌ | ✅ |
| File Size | Smaller | Larger |
| Use Case | Hero only | Multiple sections |

**Use this file if:** You only need the hero section
**Use full export if:** You want hero + why choose cards

---

## 🔗 Related Files

- `charter-ownership-hero-sections.html` - Hero + Why Choose VIYB
- `CHARTER-SECTIONS-WORDPRESS-GUIDE.md` - Full customization guide
- `CHARTER-SECTIONS-QUICK-START.md` - Quick start for both sections

---

## 📞 Need Help?

**Common Issues:**

**Q: Buttons don't work**
A: Update the `href` values to your actual page URLs

**Q: Colors don't match my site**
A: Update the color hex codes in the `<style>` section

**Q: Section too tall/short**
A: Adjust `min-height` and `padding` in CSS

**Q: Not full width**
A: Use a full-width page template or add margin CSS above

---

## 🎉 Summary

**What:** Charter Ownership hero section
**How:** Copy/paste into WordPress HTML block
**Time:** 2 minutes
**Difficulty:** Beginner
**File:** `charter-hero-standalone.html`

---

**Version:** 1.0
**Created:** December 2024
**WordPress:** 5.0+
**Mobile:** Fully responsive
