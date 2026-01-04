# Charter Hero Section - Quick Reference Card

## ⚡ 2-Minute Install

1. Open `charter-hero-standalone.html`
2. Copy between START/END markers
3. Paste into WordPress **Custom HTML** block
4. Update button links
5. Publish ✅

---

## 📝 Must-Do Edits

### Button Links (REQUIRED)
```html
Line ~160: <a href="/charter-calculator"
Line ~163: <a href="/program-guide"
```
Change to your actual page URLs

---

## 🎨 Quick Customizations

### Colors
```css
Line ~20: #0a2540    ← Navy background
Line ~32: #d4af37    ← Gold accent
```

### Text
```html
Line ~145: Turn Your Yacht Into Income  ← Badge
Line ~150: Charter Management with MCC  ← Title
Line ~155: Partner with MCC...          ← Description
Line ~161: Calculate Your ROI           ← Button 1
Line ~164: Download Program Guide       ← Button 2
```

---

## 📱 Responsive

✅ Mobile: Single column, stacked buttons
✅ Tablet: Medium text, side-by-side buttons
✅ Desktop: Large text, full width

---

## ✅ Pre-Launch Checklist

- [ ] Updated button links
- [ ] Changed colors (if needed)
- [ ] Edited text
- [ ] Tested on mobile
- [ ] Tested on desktop
- [ ] Published page

---

## 🔧 Common Tweaks

**Make Full Width:**
```css
.viyb-charter-hero {
    margin-left: calc(-50vw + 50%);
    margin-right: calc(-50vw + 50%);
}
```

**Adjust Height:**
```css
.viyb-charter-hero {
    min-height: 700px;  /* Default: 600px */
}
```

**More Padding:**
```css
.viyb-charter-hero {
    padding: 8rem 1.5rem;  /* Default: 6rem */
}
```

---

## 📊 File Stats

- **Size:** ~8KB
- **Time:** 2 min
- **Code:** ~200 lines
- **Dependencies:** 0

---

## 🎯 What's Included

✅ Gradient background
✅ Badge element
✅ Headline
✅ Description
✅ 2 CTA buttons
✅ Mobile responsive
✅ Hover animations

---

## 📞 Help

**Issue:** Buttons don't work
**Fix:** Update href="/your-page"

**Issue:** Wrong colors
**Fix:** Change hex codes in CSS

**Issue:** Text too small
**Fix:** Increase font-size values

**Issue:** Not full width
**Fix:** Use full-width page template

---

## 🔗 Files

- `charter-hero-standalone.html` ← Main file
- `CHARTER-HERO-STANDALONE-GUIDE.md` ← Full guide
- `CHARTER-HERO-SUMMARY.md` ← Overview

---

**Version:** 1.0 | **WordPress:** 5.0+ | **Time:** 2 min
