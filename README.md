# The Prosthetics and Orthotics Podcast - Landing Page

A modern, dark-themed landing page for "The Prosthetics and Orthotics Podcast" hosted by Brent and Joris. Built with Next.js 14, Tailwind CSS v3, and integrated with Podbean API for live episode data.

## Stack

- **Framework:** Next.js 14 (Pages Router)
- **Styling:** Tailwind CSS v3
- **Podcast Integration:** Podbean API
- **Deployment:** Vercel

## Features

✨ **Dark Theme** — Deep space aesthetic with glassmorphism and volumetric lighting
🎙️ **Host-Focused** — Spotlight on Brent and Joris with bio cards and expertise tags
📻 **Live Episodes** — Fetch and display latest episodes from Podbean API
🎯 **Mobile-Responsive** — Optimized for all screen sizes with aggressive breakpoints
⚡ **Fast** — Static generation with ISR for episode updates

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

### Build for Production

```bash
npm run build
npm start
```

## Podbean Integration

The landing page currently uses mock episode data. To integrate with Podbean API:

1. Get your show ID from Podbean dashboard
2. Update `lib/podbean.js` with your show ID and RSS feed URL
3. Configure environment variables in `.env.local`:

```
NEXT_PUBLIC_PODBEAN_SHOW_ID=your_show_id
NEXT_PUBLIC_PODBEAN_RSS_URL=your_rss_feed_url
```

## Sections

- **Hero** — Eye-catching intro with host mission statement
- **About Hosts** — Bio cards for Brent and Joris with expertise tags
- **Latest Episodes** — Grid of recent episodes pulled from Podbean
- **Subscribe** — CTA with links to podcast platforms
- **Footer** — Links and contact info

## Customization

### Colors
Edit `tailwind.config.js` to adjust the dark theme colors. Currently using Slate (bg) with Blue/Purple gradients.

### Host Information
Update host details in the "Meet Your Hosts" section (around line 180 in `pages/index.js`).

### Episodes
Replace mock data in `getStaticProps()` with real Podbean API calls.

## Deployment to Vercel

1. Push to GitHub
2. Connect repo to Vercel
3. Vercel auto-detects Next.js and deploys
4. Set environment variables in Vercel project settings
5. Done! Live at your custom domain

## Performance

- ✅ Zero external CSS dependencies
- ✅ Static generation for fast page loads
- ✅ ISR (Incremental Static Regeneration) for episode updates
- ✅ Optimized images via Next.js Image component
- ✅ No TypeScript overhead (pure JSX)

## License

© 2026 The Prosthetics and Orthotics Podcast. All rights reserved.
