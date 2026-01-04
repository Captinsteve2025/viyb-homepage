# ⚡ ROI Calculator - Quick Embed Reference

## 🎯 Choose Your Method

| Method | Difficulty | Best For |
|--------|-----------|----------|
| **iframe** | ⭐ Easy | Quick setup, any theme |
| **Direct HTML** | ⭐⭐ Medium | Page builder users |
| **Shortcode** | ⭐⭐⭐ Advanced | Clean, reusable code |

---

## 🚀 iframe Method (5 Minutes)

### 1. Upload File
WordPress → Media → Add New → Upload `charter-roi-calculator-embed.html`

### 2. Get URL
Copy file URL: `https://yoursite.com/wp-content/uploads/2024/12/charter-roi-calculator-embed.html`

### 3. Add to Page
Add **Custom HTML** block, paste:

```html
<iframe
    src="YOUR-FILE-URL-HERE"
    width="100%"
    height="1800"
    frameborder="0"
    style="border: none;">
</iframe>
```

**Done!** ✅

---

## 📝 Direct HTML Method

**Copy entire contents of** `charter-roi-calculator-embed.html`

**Paste into:** Custom HTML block

**That's it!** ✅

---

## 🔧 Shortcode Method

### Step 1: Add to functions.php

```php
function roi_calc() {
    return '<iframe src="' . get_stylesheet_directory_uri() . '/calculator/charter-roi-calculator-embed.html" width="100%" height="1800" style="border:none;"></iframe>';
}
add_shortcode('roi_calculator', 'roi_calc');
```

### Step 2: Upload File
FTP → `/wp-content/themes/YOUR-THEME/calculator/`

### Step 3: Use Shortcode
```
[roi_calculator]
```

---

## 🎨 Quick Customizations

### Change Colors
Edit HTML file, find `:root {` section:

```css
--color-primary: #0a2540;   /* Your navy color */
--color-secondary: #d4af37; /* Your gold color */
```

### Change Default Values
Find input lines and change `value="..."`:

```html
<input ... value="1000000">  ← Change to 800000 for $800K default
```

### Update CTA Button
Find at bottom of HTML:

```html
<a href="YOUR-CONTACT-PAGE" class="cta-button">
```

---

## 🐛 Troubleshooting

| Problem | Solution |
|---------|----------|
| Can't upload .html | Rename to `.txt` |
| iframe too tall | Change `height="1800"` to `2000` |
| Styling broken | Use iframe method |
| Not showing | Check file URL, browser console |

---

## 📱 Mobile Responsive?
✅ **Yes!** Already optimized for all devices.

---

## 🆓 No Dependencies?
✅ **Correct!** Works standalone, no plugins needed.

---

## 💾 Where to Get File

`viyb-homepage/wordpress-export/charter-roi-calculator-embed.html`

**File Size:** ~25KB
**Browser Support:** All modern browsers

---

## ✅ Final Checklist

- [ ] File uploaded to WordPress
- [ ] URL copied
- [ ] iframe/HTML added to page
- [ ] Tested on desktop
- [ ] Tested on mobile
- [ ] CTA button links to contact page
- [ ] Published!

---

**Need detailed help?** See `CALCULATOR-EMBED-GUIDE.md`

**Estimated Setup Time:** 5-10 minutes
