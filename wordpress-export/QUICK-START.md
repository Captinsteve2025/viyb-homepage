# WordPress Export - Quick Start Guide
## Get Your Page Live in 10 Minutes!

---

## ⚡ FASTEST METHOD (5-10 minutes)

### What You Need:
- WordPress Admin Access
- Ability to edit pages

### Steps:

**1. Copy the HTML**
- Open `bonus-depreciation.html` in this folder
- Find the comment: `<!-- WORDPRESS NOTE: Start copying from here -->`
- Copy everything between START and END comments

**2. Create WordPress Page**
```
WordPress Dashboard
→ Pages
→ Add New
→ Title: "Bonus Depreciation"
→ Click ⋮ (three dots) top right
→ Select "Code Editor"
→ Paste the HTML
```

**3. Add Scripts**
```
Appearance
→ Customize
→ Additional CSS
→ Paste this at the TOP:
```

```html
<!-- Add to header -->
<script src="https://cdn.tailwindcss.com"></script>
<script>
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#0a2540',
                secondary: '#d4af37'
            }
        }
    }
}
</script>
<script src="https://unpkg.com/lucide@latest"></script>
```

```javascript
/* Add to footer or use "Insert Headers and Footers" plugin */
<script>
lucide.createIcons();
</script>
```

**4. Publish!**
```
→ Preview to check
→ Publish
→ Done! 🎉
```

---

## 🔧 ALTERNATIVE: Use Plugin Method

### Even Easier with Plugins:

**Install "Insert Headers and Footers" Plugin:**
1. Plugins → Add New → Search "Insert Headers and Footers"
2. Install & Activate
3. Settings → Insert Headers and Footers
4. Paste the Tailwind + Lucide scripts in "Scripts in Header"
5. Paste the `lucide.createIcons()` script in "Scripts in Footer"
6. Save
7. Now create your page with the HTML (step 2 above)

---

## 📱 Test Your Page

### Must-Check Items:
- [ ] Open page in browser
- [ ] Icons showing? (check Lucide script loaded)
- [ ] Buttons styled? (check Tailwind loaded)
- [ ] Mobile view works? (test on phone)
- [ ] All links work?
- [ ] Images load?

### Quick Fixes:

**Icons not showing?**
→ Make sure Lucide script is in `<head>` AND `lucide.createIcons()` is at bottom

**No styling?**
→ Check Tailwind CDN script is loading (look in browser console for errors)

**Layout broken?**
→ Try switching to "Visual Editor" and back to "Code Editor"

---

## 🎨 Quick Customizations

### Change Phone Number:
```html
Find: +1 (284) 494-2450
Replace: YOUR_PHONE_NUMBER
```

### Change Email:
```html
Find: info@viyb.com
Replace: YOUR_EMAIL
```

### Change Button Links:
```html
Find: href="/contact"
Replace: href="/your-page"
```

### Change Colors:
See `README.md` for detailed color customization

---

## 🚨 Troubleshooting

| Problem | Quick Fix |
|---------|-----------|
| Icons showing as `[data-lucide]` | Add Lucide script to header |
| No colors or spacing | Add Tailwind script to header |
| WordPress strips HTML | Switch to "Code Editor" not "Visual" |
| Images broken | Upload images to Media Library, update URLs |
| Menu overlaps content | Add custom CSS to hide menu on this page |

---

## 📞 Need More Help?

1. Check `README.md` for full documentation
2. Check `wordpress-instructions.md` for step-by-step guides
3. See `bonus-depreciation-styles.css` for non-Tailwind version

---

## 🎯 Success Checklist

Once live, verify:
- [ ] Page loads
- [ ] All sections visible
- [ ] Buttons clickable
- [ ] Links work
- [ ] Mobile responsive
- [ ] No console errors (press F12 → Console tab)

**Congratulations! Your page is live! 🎊**

---

## 💡 Pro Tips

1. **Use Page Builder?** Install Elementor for easier editing later
2. **Want to edit content?** Use WordPress Gutenberg blocks instead
3. **Need forms?** Install Contact Form 7 plugin
4. **Want faster site?** Install WP Rocket caching plugin
5. **Need SEO?** Install Yoast SEO or Rank Math

---

**Time to Complete:** 5-10 minutes
**Difficulty:** ⭐ Easy (copy & paste)
**Result:** Professional WordPress page!
