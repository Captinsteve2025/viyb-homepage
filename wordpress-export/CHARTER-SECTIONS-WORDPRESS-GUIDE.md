# Charter Ownership Hero & Why Choose VIYB - WordPress Import Guide

## 📦 What's Included

This export package contains two premium sections from the VIYB website:

1. **Charter Ownership Hero Section**
   - Gradient background with branding
   - Badge element with call-out text
   - Large headline
   - Descriptive subtitle
   - Two CTA buttons

2. **Why Choose VIYB Section**
   - Section title
   - 3-column card grid (responsive)
   - Icon + title + description for each card
   - Hover animations
   - Professional styling

---

## 📄 Files

- **`charter-ownership-hero-sections.html`** - Complete HTML with inline CSS
- **`CHARTER-SECTIONS-WORDPRESS-GUIDE.md`** - This installation guide

---

## 🚀 Quick Start (3 Methods)

### **Method 1: HTML Block (Easiest)** ⭐

**Best for:** Gutenberg editor users

1. Edit your WordPress page
2. Add a **Custom HTML** block
3. Copy the entire contents of `charter-ownership-hero-sections.html`
4. Paste into the HTML block
5. Update/Publish your page

**Time:** 2 minutes
**Difficulty:** Beginner

---

### **Method 2: Page Builder Integration**

**Best for:** Elementor, Divi, WPBakery users

#### **Elementor:**
1. Add an **HTML widget**
2. Paste the code from `charter-ownership-hero-sections.html`
3. Update page

#### **Divi:**
1. Add a **Code module**
2. Paste the HTML code
3. Save

#### **WPBakery:**
1. Add a **Raw HTML** element
2. Paste the code
3. Save

**Time:** 3 minutes
**Difficulty:** Beginner

---

### **Method 3: Theme Template**

**Best for:** Advanced users with theme file access

1. Create a new page template in your theme
2. Add the HTML code from `charter-ownership-hero-sections.html`
3. Apply the template to your page

**Time:** 10 minutes
**Difficulty:** Advanced

---

## 🎨 Customization Options

### **Change Colors**

The sections use CSS variables for easy customization. Find this in the `<style>` section:

```css
:root {
    --color-primary: #0a2540;      /* Navy blue */
    --color-secondary: #d4af37;    /* Gold */
    --color-gray-100: #f3f4f6;     /* Light gray */
    --color-gray-200: #e5e7eb;     /* Medium gray */
    --color-gray-600: #4b5563;     /* Dark gray */
    --color-white: #ffffff;        /* White */
}
```

**To customize:**
1. Locate the `:root` section in the CSS
2. Change the hex color values
3. Save and refresh

---

### **Update Button Links**

Find the button links in the HTML:

```html
<a href="/charter-calculator" class="btn btn-secondary">Calculate Your ROI</a>
<a href="/program-guide" class="btn btn-outline">Download Program Guide</a>
```

**Change to your URLs:**
```html
<a href="/your-calculator-page" class="btn btn-secondary">Calculate Your ROI</a>
<a href="/your-guide-page" class="btn btn-outline">Download Program Guide</a>
```

---

### **Edit Text Content**

All text is easily editable. Just find and replace:

**Hero Section:**
- Badge text: `Turn Your Yacht Into Income`
- Title: `Charter Management with MCC`
- Description: Full paragraph below title
- Button text: `Calculate Your ROI` and `Download Program Guide`

**Why Choose VIYB:**
- Section title: `Why Choose VIYB`
- Card 1 title: `Brokerage Excellence`
- Card 2 title: `New Bali Catamarans`
- Card 3 title: `Charter Ownership`
- Card descriptions: Edit the `<p>` tags

---

### **Adjust Spacing**

**Hero Section Padding:**
```css
.hero-section {
    padding: 6rem 1rem;  /* Change 6rem to adjust vertical padding */
}
```

**Cards Gap:**
```css
.cards-grid {
    gap: 2rem;  /* Change to adjust space between cards */
}
```

---

## 📱 Responsive Design

The sections are **fully responsive** and adapt to:

- **Mobile** (< 768px): Single column layout
- **Tablet** (768px - 1023px): Optimized spacing
- **Desktop** (1024px+): Full 3-column grid

**Mobile Breakpoints:**
```css
@media (min-width: 768px) {
    /* Tablet and desktop styles */
}
```

---

## 🎯 Section Features

### Hero Section
✅ Gradient background (navy to navy fade)
✅ Centered content
✅ Badge with gold accent
✅ Large responsive headline
✅ Two styled CTA buttons
✅ Hover effects on buttons

### Why Choose VIYB
✅ 3-column responsive grid
✅ Icon + title + description cards
✅ Hover animations (lift + border color)
✅ Icon color transitions
✅ Professional card shadows

---

## 🔧 Advanced Customization

### **Add More Cards**

To add a 4th card to "Why Choose VIYB":

1. Copy one of the existing card blocks:
```html
<div class="card">
    <div class="card-icon-wrapper">
        <svg class="card-icon" viewBox="0 0 24 24">
            <!-- SVG path here -->
        </svg>
    </div>
    <h3 class="card-title">Your Title</h3>
    <p class="card-description">Your description</p>
</div>
```

2. Paste after the last card (before `</div>` of `cards-grid`)

3. Update the grid columns (optional):
```css
@media (min-width: 768px) {
    .cards-grid {
        grid-template-columns: repeat(4, 1fr);  /* Change 3 to 4 */
    }
}
```

---

### **Change Icons**

The icons are SVG. You can replace them with:

**Free Icon Sources:**
- [Lucide Icons](https://lucide.dev/)
- [Heroicons](https://heroicons.com/)
- [Feather Icons](https://feathericons.com/)

**How to replace:**
1. Find your new icon SVG code
2. Replace the `<svg>` block in the HTML
3. Keep the `class="card-icon"` attribute

**Example:**
```html
<svg class="card-icon" viewBox="0 0 24 24">
    <!-- Your new icon path -->
</svg>
```

---

### **Remove a Section**

**To use only the Hero:**
1. Delete everything after `</section>` (end of hero)
2. Keep only the hero section and closing `</body></html>` tags

**To use only Why Choose VIYB:**
1. Delete the entire hero `<section>` block
2. Keep only the why-choose section

---

## 🌈 Color Schemes

### **Professional Blue/Gold (Current)**
```css
--color-primary: #0a2540;      /* Navy */
--color-secondary: #d4af37;    /* Gold */
```

### **Ocean Blue/Teal**
```css
--color-primary: #0d3b66;      /* Deep blue */
--color-secondary: #00b4d8;    /* Bright teal */
```

### **Dark Navy/Coral**
```css
--color-primary: #1a1a2e;      /* Dark navy */
--color-secondary: #ff6b6b;    /* Coral */
```

### **Luxury Dark/Rose Gold**
```css
--color-primary: #2c3e50;      /* Dark blue-gray */
--color-secondary: #c9a97f;    /* Rose gold */
```

---

## 🔍 SEO Optimization

### **Add Heading Structure**

For better SEO, ensure proper heading hierarchy:

```html
<!-- If this is the main page title -->
<h1 class="hero-title">Charter Management with MCC</h1>

<!-- If it's a subsection -->
<h2 class="hero-title">Charter Management with MCC</h2>
```

### **Add Alt Text to Icons**

While these are decorative SVGs, you can add ARIA labels:

```html
<svg class="card-icon" viewBox="0 0 24 24" aria-label="Sailboat icon">
    <!-- SVG content -->
</svg>
```

---

## 🎨 Design Tips

### **Brand Consistency**

Make sure to match:
- **Colors** - Use your brand's primary and secondary colors
- **Fonts** - The sections use system fonts, but you can add custom fonts
- **Button Styles** - Match your site's existing button designs
- **Spacing** - Adjust padding to match your site's rhythm

### **Custom Fonts**

Add this to the `<head>` section:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap" rel="stylesheet">
```

Then update the CSS:

```css
body {
    font-family: 'Montserrat', -apple-system, sans-serif;
}
```

---

## 📊 Performance Optimization

### **Current Performance**
✅ **Inline CSS** - No external stylesheet requests
✅ **SVG Icons** - Lightweight vector graphics
✅ **No Images** - Fast loading
✅ **Clean Code** - Minimal HTML structure

### **Further Optimization**

**Minify the HTML/CSS:**
Use an online minifier to reduce file size by ~30%

**Lazy Load (if needed):**
Add this attribute to sections below the fold:
```html
<section class="why-choose-section" loading="lazy">
```

---

## 🐛 Troubleshooting

### **Sections not displaying correctly**

**Issue:** Cards stack on desktop
**Fix:** Check that your theme isn't overriding the grid CSS

**Issue:** Colors don't match
**Fix:** Verify CSS variables are set in `:root`

**Issue:** Buttons don't work
**Fix:** Update href values to your actual page URLs

### **Responsive issues**

**Issue:** Not mobile-friendly
**Fix:** Ensure WordPress theme doesn't override media queries

**Issue:** Text too small on mobile
**Fix:** Increase base font sizes in CSS

---

## ✅ Pre-Launch Checklist

Before publishing:

- [ ] Updated all button links
- [ ] Customized colors to match brand
- [ ] Edited all text content
- [ ] Tested on mobile device
- [ ] Tested on tablet
- [ ] Tested on desktop
- [ ] Checked all hover effects work
- [ ] Verified buttons are clickable
- [ ] Ensured fast page load
- [ ] Checked spelling and grammar

---

## 🎯 Use Cases

### **Charter Ownership Page**
Perfect as the hero section for a dedicated charter ownership service page

### **Homepage**
Use "Why Choose VIYB" as a value proposition section

### **Landing Page**
Combine both sections for a high-converting landing page

### **About Page**
Use "Why Choose VIYB" to highlight your key differentiators

---

## 📝 WordPress Tips

### **Full-Width Layout**

Some themes add containers. To make sections full-width:

1. Use a full-width page template
2. Or add this CSS:
```css
.hero-section,
.why-choose-section {
    margin-left: calc(-50vw + 50%);
    margin-right: calc(-50vw + 50%);
}
```

### **Spacing Between Sections**

Add this CSS to control spacing:
```css
.hero-section + .why-choose-section {
    margin-top: 0;  /* No gap between sections */
}
```

Or add spacing:
```css
.why-choose-section {
    margin-top: 4rem;  /* Add 4rem gap */
}
```

---

## 🔗 Related Pages

After importing these sections, consider creating:

- **Charter Calculator Page** - Link from the CTA button
- **Program Guide Page** - Link from the second button
- **Charter Ownership Detail Page** - Full information
- **Contact Page** - For inquiries

---

## 💡 Pro Tips

1. **Test First:** Always preview on a staging site before going live
2. **Backup:** Save your current page content before importing
3. **Mobile First:** Check mobile view first, then desktop
4. **Consistency:** Use the same colors across your entire site
5. **Speed:** Keep sections lightweight for fast loading

---

## 📞 Support

**For general WordPress help:**
- [WordPress.org Support](https://wordpress.org/support/)
- Your theme's support documentation

**For customization help:**
- Hire a WordPress developer
- Use a page builder for visual editing
- Consult theme documentation

---

## 🎉 Quick Summary

**What:** Two professional sections (Hero + Why Choose VIYB)
**How:** Copy/paste into HTML block
**Time:** 2-5 minutes
**Difficulty:** Beginner-friendly
**Mobile:** Fully responsive
**Customizable:** Colors, text, buttons, spacing

---

**Version:** 1.0
**Last Updated:** December 2024
**Compatibility:** WordPress 5.0+
**Browser Support:** All modern browsers
