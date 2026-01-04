# VIYB ROI Calculator - Quick Reference Card

## 📋 Installation (3 Steps)

1. **Upload** plugin via WordPress Admin → Plugins → Add New → Upload
2. **Activate** the plugin
3. **Add** shortcode to page: `[viyb_roi_calculator]`

---

## 💻 Shortcode Usage

### Basic
```
[viyb_roi_calculator]
```

### In PHP Template
```php
<?php echo do_shortcode('[viyb_roi_calculator]'); ?>
```

### Multiple Per Page
```
[viyb_roi_calculator]

Some content here...

[viyb_roi_calculator]
```

---

## 🎨 Quick Customizations

### Change Colors
```css
/* Add to Appearance → Customize → Additional CSS */
.viyb-roi-calculator-wrapper {
    --color-primary: #your-navy;
    --color-secondary: #your-gold;
}
```

### Change Button Link
Find in plugin file:
```html
<a href="#contact" class="viyb-cta-button">
```
Change to:
```html
<a href="/your-page" class="viyb-cta-button">
```

### Adjust Width
```css
.viyb-calculator-container {
    max-width: 1400px;
}
```

---

## 🔧 Page Builder Integration

| Builder | Method |
|---------|--------|
| **Gutenberg** | Add "Shortcode" block |
| **Elementor** | Add "Shortcode" widget |
| **Divi** | Add "Code" module |
| **WPBakery** | Add "Raw HTML" element |
| **Beaver Builder** | Add "HTML" module |

---

## 🐛 Quick Troubleshooting

| Problem | Solution |
|---------|----------|
| Calculator not showing | Check plugin is activated |
| Shortcode visible as text | Wrong shortcode format - use `[viyb_roi_calculator]` |
| Styling broken | Add `!important` to custom CSS |
| Not calculating | Check browser console for errors |
| Mobile issues | Clear cache, test in incognito mode |

---

## 📱 Default Values

- **Purchase Price:** $1,000,000
- **Down Payment:** 25%
- **Loan Term:** 20 years
- **Interest Rate:** 5.5%
- **Charter Weeks:** 20
- **Weekly Rate:** $25,000
- **Personal Weeks:** 6
- **Management Fee:** 25%

---

## ✅ Pre-Flight Checklist

- [ ] Plugin activated
- [ ] Shortcode on page: `[viyb_roi_calculator]`
- [ ] Page published
- [ ] Tested desktop
- [ ] Tested mobile
- [ ] CTA button links correctly

---

## 📊 What It Calculates

- Net charter revenue
- Total annual expenses
- Net cash flow
- Return on investment (ROI)
- Cash-on-cash return
- Payback period
- Utilization breakdown

---

## 🎯 Common Use Cases

- **Charter ownership pages**
- **Landing pages**
- **Blog posts**
- **Comparison pages**
- **Sidebar widgets**

---

## 🔗 Important Files

- `viyb-roi-calculator-shortcode.php` - Main plugin
- `SHORTCODE-INSTALLATION.md` - Full instructions
- `SHORTCODE-README.md` - Complete documentation

---

## 💡 Pro Tips

1. **Create dedicated page** for best results
2. **Add intro text** explaining the calculator
3. **Include disclaimers** for legal protection
4. **Link from charter pages** to drive traffic
5. **Test thoroughly** before going live

---

## 📞 Need Help?

1. Check [SHORTCODE-INSTALLATION.md](SHORTCODE-INSTALLATION.md)
2. Check browser console for errors
3. Test with default theme
4. Disable other plugins temporarily

---

**Quick Links:**
- [Full Installation Guide →](SHORTCODE-INSTALLATION.md)
- [Complete Documentation →](SHORTCODE-README.md)

---

**Version:** 1.0.0
**WordPress:** 5.0+
**PHP:** 7.0+
