# Leonardo Re - Static SvelteKit Website

This is a static SvelteKit conversion of the original PHP-based leonardo.re website.

## Project Structure

- `src/routes/` - All page routes
  - `+page.svelte` - Homepage (Film Director & Producer)
  - `web-design-development/+page.svelte` - Web Development portfolio
  - `software-products/+page.svelte` - Software products showcase
  - `contact/+page.svelte` - Contact information
  - `legal/+page.svelte` - Privacy policy
  - `+layout.svelte` - Main layout with navigation and footer
  - `+layout.js` - Prerender configuration

- `src/lib/components/` - Reusable components
  - `Nav.svelte` - Navigation menu
  - `Footer.svelte` - Footer component

- `static/` - Static assets (CSS, images, videos, downloads)
  - `css/` - Responsive CSS files
  - `img/` - Images and icons
  - `vid/` - Video files
  - `download/` - Downloadable files

## Key Features

- **Static Site Generation**: Built with `@sveltejs/adapter-static` for full static site output
- **Responsive Design**: Mobile-first CSS with breakpoints at 400px, 550px, 750px, and 1000px
- **SEO Optimized**: Complete meta tags for each page including:
  - Open Graph tags for social media
  - Twitter Card tags
  - Schema.org structured data
  - Canonical URLs
- **Performance**: Uses Cloudinary CDN for optimized image delivery

## Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build static site
pnpm build

# Preview production build
pnpm preview
```

## Build Output

The static site is generated in the `build/` directory and can be deployed to any static hosting service (Netlify, Vercel, GitHub Pages, etc.).

## Migration Notes

This project was converted from PHP to SvelteKit with the following changes:

1. **Routing**: PHP's dynamic routing replaced with SvelteKit's file-based routing
2. **Layout System**: PHP includes converted to Svelte components and layout files
3. **Static Assets**: All images, CSS, and media files moved to `static/` directory
4. **SEO**: Server-side meta tag generation converted to client-side `<svelte:head>` blocks
5. **AMP Pages**: AMP functionality removed (can be re-added if needed)
6. **Dynamic Features**: Removed PHP-based features (no longer needed for static site):
   - CSS minification (now handled by Vite)
   - Country-based redirects
   - Server-side caching

## Pages

- `/` - Film Director & Producer (Homepage)
- `/web-design-development` - Web Development Portfolio
- `/software-products` - Software Products
- `/contact` - Contact Information
- `/legal` - Privacy Policy

## Technologies

- **SvelteKit 2.x**: Modern web framework
- **Svelte 5.x**: Reactive UI framework
- **Vite 7.x**: Build tool
- **TypeScript**: Type-safe development
- **adapter-static**: Static site generation

## License

© Leonardo Re. All rights reserved.
