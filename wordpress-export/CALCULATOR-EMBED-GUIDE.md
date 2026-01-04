# 🧮 ROI Calculator WordPress Embedding Guide

## 📦 What You're Getting

A **fully standalone, interactive Charter Ownership ROI Calculator** that can be embedded in any WordPress website.

**Features:**
- ✅ Fully functional sliders and calculations
- ✅ Real-time updates as users adjust values
- ✅ Professional VIYB branding
- ✅ Mobile-responsive design
- ✅ No external dependencies
- ✅ Works in any WordPress theme

---

## 🚀 Method 1: iframe Embed (Easiest - Recommended)

### Step 1: Upload the HTML File

**Option A: Via WordPress Media Library**
1. WordPress Dashboard → Media → Add New
2. Upload `charter-roi-calculator-embed.html`
3. Copy the file URL (e.g., `https://yoursite.com/wp-content/uploads/2024/charter-roi-calculator-embed.html`)

**Option B: Via FTP**
1. Upload `charter-roi-calculator-embed.html` to `/wp-content/uploads/calculator/`
2. Note the URL: `https://yoursite.com/wp-content/uploads/calculator/charter-roi-calculator-embed.html`

### Step 2: Embed with iframe

**In WordPress Page/Post Editor:**

```html
<iframe
    src="https://yoursite.com/wp-content/uploads/calculator/charter-roi-calculator-embed.html"
    width="100%"
    height="1800"
    frameborder="0"
    style="border: none; display: block; max-width: 100%;"
    title="Charter ROI Calculator">
</iframe>
```

**To add this:**
1. Edit your page
2. Add a **Custom HTML** block
3. Paste the iframe code above
4. Replace `yoursite.com` with your actual domain
5. Publish!

### ✅ Pros of iframe Method
- Simplest to implement
- Calculator is isolated (won't conflict with theme styles)
- Easy to update (just replace the HTML file)
- Works in any theme

### ⚠️ Cons
- Might need height adjustment depending on screen size
- Can't seamlessly match theme styling

---

## 📝 Method 2: Direct HTML Embed

### Step 1: Copy the HTML Content

1. Open `charter-roi-calculator-embed.html`
2. Copy everything from `<style>` to `</script>` (the entire calculator)

### Step 2: Paste in WordPress

1. Create/Edit your page
2. Add a **Custom HTML** block
3. Paste the entire HTML
4. Publish!

### ✅ Pros
- No iframe needed
- Calculator integrates directly into page
- Easier to customize styling

### ⚠️ Cons
- Might conflict with some theme styles
- Need to re-paste if you update the calculator

---

## 🔧 Method 3: WordPress Shortcode (Most Professional)

### Step 1: Add Functions to Your Theme

Add this to your theme's `functions.php` file (or use Code Snippets plugin):

```php
<?php
/**
 * VIYB ROI Calculator Shortcode
 * Usage: [viyb_roi_calculator]
 */
function viyb_roi_calculator_shortcode() {
    $calculator_url = get_stylesheet_directory_uri() . '/calculator/charter-roi-calculator-embed.html';

    $output = '<div class="viyb-calculator-wrapper">';
    $output .= '<iframe ';
    $output .= 'src="' . esc_url($calculator_url) . '" ';
    $output .= 'width="100%" ';
    $output .= 'height="1800" ';
    $output .= 'frameborder="0" ';
    $output .= 'style="border: none; display: block; max-width: 100%;" ';
    $output .= 'title="Charter ROI Calculator"';
    $output .= '></iframe>';
    $output .= '</div>';

    return $output;
}
add_shortcode('viyb_roi_calculator', 'viyb_roi_calculator_shortcode');
?>
```

### Step 2: Upload Calculator HTML

1. Via FTP, upload `charter-roi-calculator-embed.html` to:
   `/wp-content/themes/YOUR-THEME/calculator/`

2. Or create a child theme and put it there

### Step 3: Use the Shortcode

In any page or post, simply add:

```
[viyb_roi_calculator]
```

### ✅ Pros
- Clean and simple to use
- Consistent across site
- Easy for content editors
- Can be used anywhere (posts, pages, widgets)

### ⚠️ Cons
- Requires editing functions.php (or using plugin)
- Need theme/child theme setup

---

## 🎨 Method 4: Elementor/Page Builder

### For Elementor:

1. Drag an **HTML** widget onto your page
2. Paste the entire calculator HTML
3. Adjust sizing/padding as needed
4. Publish!

### For Divi:

1. Add a **Code** module
2. Paste the calculator HTML
3. Adjust settings
4. Save!

### For WPBakery:

1. Add **Raw HTML** element
2. Paste calculator code
3. Configure and save

---

## 🖥️ Method 5: Create a Dedicated Calculator Page Template

### Step 1: Create Template File

Create `page-calculator.php` in your theme:

```php
<?php
/**
 * Template Name: ROI Calculator
 */
get_header();
?>

<div class="calculator-page-wrapper">
    <div class="container">
        <?php
        // Include the calculator HTML
        include(get_stylesheet_directory() . '/calculator/charter-roi-calculator-embed.html');
        ?>
    </div>
</div>

<?php
get_footer();
?>
```

### Step 2: Upload Calculator

Upload `charter-roi-calculator-embed.html` to `/wp-content/themes/YOUR-THEME/calculator/`

### Step 3: Create Page

1. Pages → Add New
2. Title: "Charter ROI Calculator"
3. Page Attributes → Template → Select "ROI Calculator"
4. Publish!

---

## 📱 Responsive Considerations

The calculator is already mobile-responsive, but you can enhance it:

### Adjust iframe Height for Mobile

```html
<style>
.viyb-calculator-wrapper iframe {
    height: 2200px;
}

@media (min-width: 1024px) {
    .viyb-calculator-wrapper iframe {
        height: 1800px;
    }
}
</style>
```

### Make iframe Responsive

```html
<div style="position: relative; padding-bottom: 150%; height: 0; overflow: hidden;">
    <iframe
        src="..."
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"
        title="Calculator">
    </iframe>
</div>
```

---

## 🎨 Customization Options

### Change Colors

Edit the HTML file's `<style>` section:

```css
:root {
    --color-primary: #0a2540;    /* Change to your brand color */
    --color-secondary: #d4af37;  /* Change to your accent color */
}
```

### Change Default Values

Edit the HTML, find the input elements:

```html
<!-- Example: Change default purchase price from $1M to $800K -->
<input type="range" id="purchasePrice" min="500000" max="3000000" step="50000" value="800000">
```

### Add Your Logo

Add this inside the `<div class="calculator-header">`:

```html
<img src="https://yoursite.com/logo.png" alt="Your Logo" style="max-width: 200px; margin: 0 auto 1rem;">
```

### Change CTA Button Link

Find the button at the bottom:

```html
<!-- Change the href to your contact page -->
<a href="https://yoursite.com/contact" class="cta-button">Schedule a Consultation</a>
```

---

## 🔒 Security Best Practices

### 1. Upload to Secure Location

✅ Good: `/wp-content/uploads/calculator/`
✅ Good: `/wp-content/themes/child-theme/calculator/`
❌ Bad: Public root directory

### 2. Use Code Snippets Plugin

Instead of editing `functions.php` directly, use **Code Snippets** plugin:
1. Install Code Snippets plugin
2. Add new snippet
3. Paste the shortcode function
4. Activate

### 3. Child Theme

Always use a **child theme** if modifying theme files. This prevents updates from overwriting your changes.

---

## 🐛 Troubleshooting

### Calculator Not Showing

**Check:**
- Is the HTML file uploaded correctly?
- Is the file URL correct in your iframe/shortcode?
- Check browser console for errors (F12)
- Verify file permissions (should be 644)

### Styling Looks Broken

**Solution:**
- Use iframe method to isolate styles
- Or add `!important` to CSS rules
- Check for theme CSS conflicts

### iframe Too Tall/Short

**Solution:**
Adjust the `height` attribute:
```html
<!-- Desktop -->
height="1800"

<!-- If your theme has a sidebar, try: -->
height="2000"

<!-- For mobile-first themes: -->
height="2200"
```

### Calculations Not Updating

**Check:**
- JavaScript is enabled in browser
- No JavaScript errors in console
- File uploaded completely (not corrupted)

### Can't Upload HTML File

**Solution:**
WordPress by default blocks .html uploads. Add this to `functions.php`:

```php
function allow_html_upload($mimes) {
    $mimes['html'] = 'text/html';
    return $mimes;
}
add_filter('upload_mimes', 'allow_html_upload');
```

Or rename to `.txt` and change iframe src accordingly.

---

## 📊 Analytics & Tracking

### Track Calculator Usage with Google Analytics

Add this before `</script>` in the HTML:

```javascript
// Track when calculator is loaded
if (typeof gtag !== 'undefined') {
    gtag('event', 'calculator_loaded', {
        'event_category': 'ROI Calculator',
        'event_label': 'Page Load'
    });
}

// Track when users change purchase price
document.getElementById('purchasePrice').addEventListener('change', function() {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'calculator_interaction', {
            'event_category': 'ROI Calculator',
            'event_label': 'Purchase Price Changed',
            'value': this.value
        });
    }
});
```

### Track CTA Clicks

The CTA button already has a link. Add tracking:

```html
<a href="#contact"
   class="cta-button"
   onclick="gtag('event', 'calculator_cta_click', {'event_category': 'ROI Calculator'});">
   Schedule a Consultation
</a>
```

---

## 🌐 Multi-Site/Multi-Language

### For WordPress Multisite:

Upload to `/wp-content/uploads/sites/SITE-ID/calculator/`

### For WPML (Multilingual):

Create separate HTML files:
- `charter-roi-calculator-en.html`
- `charter-roi-calculator-es.html`
- etc.

Use conditional shortcode:

```php
function viyb_multilingual_calculator() {
    $lang = ICL_LANGUAGE_CODE; // WPML language code
    $file = "charter-roi-calculator-{$lang}.html";
    // ... rest of shortcode logic
}
```

---

## ⚡ Performance Optimization

### 1. Minify the HTML

Use an online HTML minifier to reduce file size.

### 2. Lazy Load iframe

```html
<iframe loading="lazy" src="..."></iframe>
```

### 3. Add to Sitemap

Ensure your calculator page is in the XML sitemap for SEO.

### 4. Cache Considerations

If using caching plugin (WP Rocket, W3 Total Cache):
- Calculator should work fine
- Test after clearing cache
- Exclude calculator page if issues arise

---

## 📄 File Structure Reference

```
your-wordpress-site/
├── wp-content/
│   ├── uploads/
│   │   └── calculator/
│   │       └── charter-roi-calculator-embed.html  ← Upload here
│   │
│   └── themes/
│       └── your-theme/
│           └── calculator/
│               └── charter-roi-calculator-embed.html  ← Or here (for template method)
```

---

## ✅ Quick Setup Checklist

- [ ] Downloaded `charter-roi-calculator-embed.html`
- [ ] Uploaded to WordPress (Media or FTP)
- [ ] Noted the file URL
- [ ] Created page/post for calculator
- [ ] Added iframe or custom HTML
- [ ] Tested on desktop
- [ ] Tested on mobile
- [ ] Adjusted iframe height if needed
- [ ] Updated CTA button link
- [ ] Customized colors (optional)
- [ ] Published page
- [ ] Added to navigation menu

---

## 🆘 Need Help?

### Option 1: Test Locally First

Upload to a staging site or local WordPress install to test before going live.

### Option 2: Use Browser Dev Tools

Press F12 → Console to check for JavaScript errors

### Option 3: WordPress Support Forums

Search for "embed HTML calculator" or "custom HTML in WordPress"

---

## 🎁 Bonus: Embed in Sidebar Widget

### Using Widgets:

1. Appearance → Widgets
2. Add **Custom HTML** widget
3. Paste a simplified version (or link to full calculator)

**Mini Calculator Link Widget:**
```html
<div style="background: #0a2540; color: white; padding: 1.5rem; border-radius: 0.5rem; text-align: center;">
    <h3 style="color: #d4af37; margin-bottom: 1rem;">💰 ROI Calculator</h3>
    <p style="font-size: 0.875rem; margin-bottom: 1rem;">Calculate your charter ownership returns</p>
    <a href="/calculator" style="display: inline-block; background: #d4af37; color: white; padding: 0.75rem 1.5rem; border-radius: 0.25rem; text-decoration: none; font-weight: 600;">Calculate Now →</a>
</div>
```

---

## 📝 Example: Complete Implementation

Here's a real-world example using the shortcode method:

**1. Add to functions.php (or Code Snippets):**
```php
function viyb_calculator() {
    return '<iframe src="' . get_stylesheet_directory_uri() . '/calculator/charter-roi-calculator-embed.html" width="100%" height="1800" frameborder="0" style="border:none;"></iframe>';
}
add_shortcode('roi_calculator', 'viyb_calculator');
```

**2. Upload HTML file** to `/wp-content/themes/your-theme/calculator/`

**3. Create page** titled "Charter ROI Calculator"

**4. Add shortcode** in the page content:
```
[roi_calculator]
```

**5. Publish!**

Done! Your calculator is live.

---

## 🎉 You're All Set!

Choose the method that works best for your WordPress setup:

- **Easiest:** iframe method (#1)
- **Most flexible:** Direct HTML (#2)
- **Most professional:** Shortcode (#3)
- **Page builder:** Elementor/Divi (#4)
- **Full control:** Template (#5)

**Questions?** Test different methods on a staging site first!

---

**File:** `charter-roi-calculator-embed.html`
**Size:** ~25KB
**Dependencies:** None
**Browser Support:** All modern browsers
**WordPress Version:** 5.0+
**Mobile:** Fully responsive
