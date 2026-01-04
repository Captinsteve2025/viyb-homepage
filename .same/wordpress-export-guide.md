# WordPress Export Guide for VIYB Pages

## Overview
This guide explains how to convert your Next.js/React pages to WordPress-compatible formats.

---

## Approach 1: Static HTML Export (Recommended for Simple Import)

### What You'll Need:
- Access to WordPress admin panel
- Ability to add Custom HTML blocks or use Classic Editor
- Basic CSS knowledge for styling adjustments

### Steps:

1. **Build the Next.js project:**
   ```bash
   cd viyb-homepage
   bun run build
   ```

2. **Export static HTML:**
   The page will need to be converted to static HTML. I can create a standalone HTML file for you.

3. **Copy to WordPress:**
   - Create a new page in WordPress
   - Switch to "Code Editor" mode (or add Custom HTML block)
   - Paste the HTML
   - Add the CSS to your theme's Additional CSS section

---

## Approach 2: WordPress Page Template (Best for Theme Integration)

### Create a Custom Page Template:

1. In your WordPress theme folder, create: `page-bonus-depreciation.php`

2. Add this structure:
```php
<?php
/**
 * Template Name: Bonus Depreciation
 */
get_header();
?>

<div class="bonus-depreciation-page">
    <!-- Your HTML content here -->
</div>

<?php
get_footer();
?>
```

3. Add CSS to your theme's `style.css` or via Customizer > Additional CSS

---

## Approach 3: Gutenberg Blocks (Modern WordPress)

### Use WordPress Block Editor:

1. **Break content into Gutenberg blocks:**
   - Heading blocks for titles
   - Paragraph blocks for text
   - Columns blocks for grid layouts
   - Custom HTML blocks for complex sections
   - Media blocks for images

2. **Add custom CSS classes:**
   - Use block settings to add custom classes
   - Style via Additional CSS

---

## Approach 4: Page Builders (Easiest for Non-Developers)

### Using Elementor Pro, Divi, or WPBakery:

1. **Install Elementor Pro** (recommended)
2. Create new page with Elementor
3. Use sections and widgets:
   - Hero section → Elementor Header widget
   - Cards → Elementor Card widget
   - Buttons → Elementor Button widget
   - Custom HTML widget for complex components

4. **Benefits:**
   - Visual editing
   - Responsive by default
   - No coding required
   - Easy content updates

---

## Approach 5: Headless WordPress (Advanced)

Keep your Next.js frontend, use WordPress as a CMS:

1. **Install WP plugins:**
   - WPGraphQL
   - ACF (Advanced Custom Fields)
   - WPGraphQL for ACF

2. **Create custom post types and fields in WordPress**

3. **Query from Next.js:**
   ```typescript
   // Fetch from WordPress GraphQL API
   const response = await fetch('https://your-wp-site.com/graphql', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify({ query: YOUR_QUERY })
   });
   ```

4. **Benefits:**
   - Keep your Next.js design
   - WordPress content management
   - Best of both worlds

---

## CSS/Styling Considerations

Your current pages use **Tailwind CSS**. For WordPress:

### Option 1: Convert Tailwind to Standard CSS
I can generate a standalone CSS file with all styles.

### Option 2: Include Tailwind CDN in WordPress
Add to WordPress theme's `functions.php`:
```php
function add_tailwind_css() {
    wp_enqueue_style('tailwind', 'https://cdn.tailwindcss.com');
}
add_action('wp_enqueue_scripts', 'add_tailwind_css');
```

### Option 3: Build Custom CSS
Convert Tailwind classes to standard CSS rules.

---

## Component Conversion Guide

### React Components → WordPress Equivalents

| React Component | WordPress Solution |
|----------------|-------------------|
| `<Button>` | HTML `<button>` or `<a>` with CSS class |
| `<Card>` | `<div>` with CSS class or Gutenberg Card block |
| `<Link>` (Next.js) | Standard `<a href="">` |
| `useState` hooks | Convert to static content or use vanilla JavaScript |
| `<MobileNav>` | WordPress menu with mobile toggle JavaScript |
| `<Logo>` | `<img>` tag or WordPress custom logo |

---

## Next Steps

**Choose your preferred approach based on:**

1. **Static HTML Export** → Quick, simple, works everywhere
2. **Page Template** → Professional, integrates with WordPress theme
3. **Gutenberg Blocks** → Modern, content editor-friendly
4. **Page Builder** → Non-technical users, visual editing
5. **Headless** → Keep Next.js, WordPress as CMS only

---

## Need Help?

I can generate any of the following for you:

✅ Standalone HTML file for any page
✅ WordPress page template PHP file
✅ Compiled CSS file (converted from Tailwind)
✅ JavaScript for interactive components
✅ Gutenberg block JSON configuration
✅ Elementor import JSON

Just let me know which approach you prefer!
