# WordPress Import Instructions
## Bonus Depreciation Page

---

## Method 1: Direct HTML Import (Quickest)

### Step 1: Prepare the File
1. Open `bonus-depreciation.html` from the `wordpress-export` folder
2. Copy everything between the comments:
   - `<!-- WORDPRESS NOTE: Start copying from here -->`
   - `<!-- WORDPRESS NOTE: End copying here -->`

### Step 2: Create WordPress Page
1. Log into WordPress Admin
2. Go to **Pages → Add New**
3. Give it a title: "Bonus Depreciation"
4. Click the **three dots** (⋮) in the top right
5. Select **Code Editor**

### Step 3: Paste HTML
1. Paste the copied HTML into the editor
2. Click **Preview** to see how it looks

### Step 4: Add Required Scripts
Go to **Appearance → Customize → Additional CSS** or use a plugin like "Insert Headers and Footers"

Add this to the `<head>` section:
```html
<!-- Tailwind CSS CDN -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- Tailwind Config -->
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

<!-- Lucide Icons -->
<script src="https://unpkg.com/lucide@latest"></script>
```

Add this before `</body>`:
```html
<script>
    lucide.createIcons();
</script>
```

### Step 5: Publish
1. Click **Publish**
2. Set your permalink (URL slug)
3. Done!

---

## Method 2: WordPress Page Template (Recommended for Developers)

### Step 1: Access Theme Files
Via FTP or **Appearance → Theme File Editor**

### Step 2: Create Template File
Create a new file: `page-bonus-depreciation.php`

```php
<?php
/**
 * Template Name: Bonus Depreciation
 * Description: Custom page template for bonus depreciation content
 */

get_header();
?>

<div class="bonus-depreciation-wrapper">
    <?php
    // Paste your HTML content here (from bonus-depreciation.html)
    ?>
</div>

<?php
get_footer();
?>
```

### Step 3: Enqueue Styles and Scripts
Add to your theme's `functions.php`:

```php
function viyb_bonus_depreciation_scripts() {
    if (is_page_template('page-bonus-depreciation.php')) {
        // Tailwind CSS
        wp_enqueue_script('tailwindcss', 'https://cdn.tailwindcss.com', array(), null, false);

        // Tailwind Config
        wp_add_inline_script('tailwindcss', '
            tailwind.config = {
                theme: {
                    extend: {
                        colors: {
                            primary: "#0a2540",
                            secondary: "#d4af37"
                        }
                    }
                }
            };
        ');

        // Lucide Icons
        wp_enqueue_script('lucide', 'https://unpkg.com/lucide@latest', array(), null, true);
        wp_add_inline_script('lucide', 'lucide.createIcons();');
    }
}
add_action('wp_enqueue_scripts', 'viyb_bonus_depreciation_scripts');
```

### Step 4: Create Page
1. **Pages → Add New**
2. Title: "Bonus Depreciation"
3. **Page Attributes → Template** → Select "Bonus Depreciation"
4. Leave content area empty (template handles it)
5. **Publish**

---

## Method 3: Gutenberg Block Approach (Most Flexible)

### Step 1: Install Required Plugins
- **GenerateBlocks** (free) or **Kadence Blocks** (free)
- Or use built-in WordPress blocks

### Step 2: Break Content into Blocks
1. Hero Section → **Cover Block**
   - Upload background image
   - Add text overlay
   - Insert buttons

2. Text Sections → **Paragraph Blocks**

3. Cards/Grid → **Columns Block** or **GenerateBlocks Container**

4. For complex HTML → **Custom HTML Block**

### Step 3: Add Custom CSS
**Appearance → Customize → Additional CSS**

```css
/* Primary Colors */
:root {
    --color-primary: #0a2540;
    --color-secondary: #d4af37;
}

/* Button Styles */
.btn-gold {
    background-color: var(--color-secondary);
    color: white;
    padding: 0.75rem 2rem;
    border-radius: 0.125rem;
    font-weight: 600;
    text-decoration: none;
    display: inline-block;
    transition: all 0.3s;
}

.btn-gold:hover {
    background-color: #b8941f;
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(212, 175, 55, 0.3);
}

/* Continue with other styles... */
```

---

## Method 4: Page Builder (Elementor)

### Requirements:
- **Elementor** (free) or **Elementor Pro**

### Steps:

1. **Install Elementor**
   - Plugins → Add New → Search "Elementor"
   - Install and Activate

2. **Create New Page**
   - Pages → Add New
   - Click "Edit with Elementor"

3. **Build Sections:**

   **Hero Section:**
   - Add Section → Choose structure
   - Style → Background Type → Classic → Upload image
   - Add Overlay → Gradient
   - Add Heading widget for title
   - Add Text Editor for description
   - Add Button widgets

   **Content Cards:**
   - Add Section → Columns
   - Add Icon Box widgets (or Card widgets with Elementor Pro)
   - Customize icons, titles, descriptions

   **Qualification Requirements:**
   - Add Accordion widget
   - Or use Toggle widget
   - Or custom HTML widget for complex layouts

4. **Styling:**
   - Use Elementor's visual editor
   - Set colors to match VIYB brand:
     - Primary: `#0a2540`
     - Secondary: `#d4af37`

5. **Responsive:**
   - Switch between Desktop/Tablet/Mobile views
   - Adjust spacing and sizing

6. **Publish**

---

## Method 5: Advanced Custom Fields (ACF) - Dynamic Content

### Use Case:
If you want to make content easily editable by non-technical users

### Steps:

1. **Install ACF Plugin**
   - Plugins → Add New → "Advanced Custom Fields"

2. **Create Field Groups**
   - ACF → Field Groups → Add New
   - Create fields for:
     - Hero Title
     - Hero Description
     - Hero Background Image
     - Qualification Items (Repeater field)
     - CTA Buttons
     - etc.

3. **Create Template**
   ```php
   <?php
   $hero_title = get_field('hero_title');
   $hero_desc = get_field('hero_description');
   $hero_bg = get_field('hero_background_image');
   ?>

   <section style="background-image: url(<?php echo esc_url($hero_bg); ?>);">
       <h1><?php echo esc_html($hero_title); ?></h1>
       <p><?php echo esc_html($hero_desc); ?></p>
   </section>
   ```

4. **Benefits:**
   - Client can edit content without touching code
   - Maintains design consistency
   - Easy updates

---

## Troubleshooting

### Icons Not Showing?
**Problem:** Lucide icons appear as `[data-lucide]` text
**Solution:** Make sure the Lucide script is loaded:
```html
<script src="https://unpkg.com/lucide@latest"></script>
<script>lucide.createIcons();</script>
```

### Tailwind Classes Not Working?
**Problem:** Elements have no styling
**Solution:** Ensure Tailwind CDN is loaded in `<head>`:
```html
<script src="https://cdn.tailwindcss.com"></script>
```

### Layout Broken on Mobile?
**Problem:** Content overflows or doesn't stack
**Solution:** Tailwind is mobile-first. Check responsive classes:
- `md:` prefix for desktop
- No prefix for mobile

### Buttons Not Styled?
**Problem:** Buttons look plain
**Solution:** Copy the custom CSS from the HTML file to Additional CSS

### Navigation Menu Conflict?
**Problem:** WordPress menu overlaps custom header
**Solution:** Either:
1. Hide the default WordPress menu on this page
2. Or integrate your VIYB navigation into WordPress menus

---

## Performance Optimization

### 1. Use a Caching Plugin
- **WP Rocket** (premium) or **W3 Total Cache** (free)

### 2. Optimize Images
- Install **Smush** or **ShortPixel**
- Compress all yacht images
- Use WebP format

### 3. Minimize External Scripts
Instead of Tailwind CDN, consider:
- Compiling Tailwind locally
- Using only the classes you need
- Serving from your own domain

### 4. Lazy Load Images
Add `loading="lazy"` to all `<img>` tags:
```html
<img src="yacht.jpg" loading="lazy" alt="Yacht">
```

---

## SEO Optimization

### 1. Install Yoast SEO or Rank Math

### 2. Set Focus Keyword
"bonus depreciation yacht" or "yacht tax benefits"

### 3. Optimize Meta Tags
- Title: "100% Bonus Depreciation for Yacht Purchases | VIYB"
- Description: "Maximize your investment with tax benefits for US business owners purchasing new yachts for charter. Learn about 100% bonus depreciation."

### 4. Add Schema Markup
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "100% Bonus Depreciation for Yacht Purchases",
  "description": "Guide to yacht tax benefits",
  "author": {
    "@type": "Organization",
    "name": "Virgin Islands Yacht Broker"
  }
}
</script>
```

---

## Testing Checklist

Before publishing, test:

- [ ] Desktop view (1920px, 1440px, 1024px)
- [ ] Tablet view (768px)
- [ ] Mobile view (375px, 414px)
- [ ] All links work
- [ ] All images load
- [ ] Icons display correctly
- [ ] Buttons have hover effects
- [ ] Forms submit (if any)
- [ ] Page loads in under 3 seconds
- [ ] No console errors (F12 → Console)

---

## Need Help?

If you get stuck:
1. Check WordPress Support Forums
2. Elementor documentation (if using Elementor)
3. Contact VIYB development team
4. I can provide more specific code examples!

---

## Quick Reference

**VIYB Brand Colors:**
- Primary (Navy): `#0a2540`
- Secondary (Gold): `#d4af37`
- Background Gray: `#f5f5f5`

**Font Sizes:**
- H1: `3rem` (48px) desktop, `2.5rem` (40px) mobile
- H2: `2.5rem` (40px) desktop, `2rem` (32px) mobile
- H3: `1.5rem` (24px)
- Body: `1rem` (16px)

**Spacing:**
- Section padding: `5rem` (80px) desktop, `3rem` (48px) mobile
- Card padding: `2rem` (32px)
- Button padding: `0.75rem 2rem` (12px 32px)
