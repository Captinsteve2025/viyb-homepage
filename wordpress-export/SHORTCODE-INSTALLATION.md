# VIYB ROI Calculator - WordPress Shortcode

## 🚀 Quick Installation

### Step 1: Install the Plugin

**Option A: Upload via WordPress Admin (Recommended)**
1. Download `viyb-roi-calculator-shortcode.php`
2. Go to WordPress Admin → Plugins → Add New → Upload Plugin
3. Choose the PHP file
4. Click "Install Now" then "Activate"

**Option B: FTP Upload**
1. Upload `viyb-roi-calculator-shortcode.php` to `/wp-content/plugins/`
2. Go to WordPress Admin → Plugins
3. Find "VIYB ROI Calculator Shortcode" and click "Activate"

**Option C: Add to Theme Functions**
1. Open `viyb-roi-calculator-shortcode.php`
2. Copy all code EXCEPT the header comments (lines 2-9)
3. Go to Appearance → Theme Editor → functions.php
4. Paste at the bottom of the file
5. Save

### Step 2: Use the Shortcode

Simply add this shortcode to any page or post:

```
[viyb_roi_calculator]
```

**That's it!** The calculator will appear on your page.

---

## 📝 Usage Examples

### In a Page (Gutenberg Editor)

1. Create/Edit a page
2. Add a **Shortcode** block
3. Paste: `[viyb_roi_calculator]`
4. Publish

### In a Page (Classic Editor)

1. Create/Edit a page
2. Paste: `[viyb_roi_calculator]` in the content area
3. Publish

### With Elementor

1. Add a **Shortcode** widget
2. Paste: `[viyb_roi_calculator]`
3. Update

### With Divi

1. Add a **Code** module
2. Paste: `[viyb_roi_calculator]`
3. Save

### In Widgets

1. Appearance → Widgets
2. Add **Custom HTML** widget
3. Paste: `[viyb_roi_calculator]`
4. Save

---

## 🎨 Customization

### Change Colors

Add to **Appearance → Customize → Additional CSS**:

```css
.viyb-roi-calculator-wrapper {
    --color-primary: #0a2540;    /* Navy blue */
    --color-secondary: #d4af37;  /* Gold */
}
```

### Change Button Link

Edit the plugin file and find:
```html
<a href="#contact" class="viyb-cta-button">Schedule a Consultation</a>
```

Change `#contact` to your desired URL:
```html
<a href="/contact" class="viyb-cta-button">Schedule a Consultation</a>
```

### Adjust Container Width

```css
.viyb-calculator-container {
    max-width: 1400px;
}
```

---

## ✅ Features

✅ **Fully Interactive** - Real-time calculations
✅ **Responsive Design** - Works on all devices
✅ **No Dependencies** - Pure JavaScript, no jQuery
✅ **Fast Performance** - All inline CSS/JS
✅ **Easy Installation** - Just upload and activate
✅ **Brand Matched** - VIYB colors and styling

---

## 🛠️ Troubleshooting

**Calculator Not Showing?**
- Check if plugin is activated
- Verify shortcode spelling: `[viyb_roi_calculator]`
- Clear browser cache
- Disable other caching plugins temporarily

**Styling Broken?**
- Check for theme CSS conflicts
- Try adding `!important` to custom CSS rules

**Not Calculating?**
- Check browser console for errors
- Disable JavaScript optimization plugins temporarily

---

## 📱 Responsive Design

The calculator automatically adjusts for:
- Desktop (1024px+): Two-column layout
- Tablet (768-1023px): Single column
- Mobile (<768px): Optimized for touch

---

## 🔒 Security

- Prevents direct file access
- Sanitized shortcode attributes
- No external dependencies
- WordPress coding standards compliant

---

## 📞 Support

For questions:
- Check this documentation
- Test in different browsers
- Temporarily disable other plugins to check for conflicts

---

**Version:** 1.0.0
**Tested up to:** WordPress 6.4
**Requires:** WordPress 5.0+
