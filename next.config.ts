import type { NextConfig } from 'next';

// Old adkeng.com .php URLs → new routes, so existing Google links and bookmarks keep working.
const legacy: Record<string, string> = {
  index: '/',
  'about-us': '/about-us',
  products: '/products',
  application: '/application',
  gallery: '/gallery',
  'news-and-events': '/news-and-events',
  'career-landing': '/career',
  career: '/career',
  client: '/clients',
  'contact-us': '/contact-us',
  // products that were merged or renamed in the 2026 range update
  'industrial-pioneer-series': '/products/sheet-metal-laser-cutting-machine',
  'in-demand-innovation': '/products/sheet-metal-laser-cutting-machine',
  'futuristic-laser-series': '/products/sheet-metal-laser-cutting-machine',
  'dual-position-exchange-table': '/products/sheet-metal-laser-cutting-machine',
  'professional-tube-cutting-machine': '/products/tube-metal-laser-cutting-machine',
  'tandem-and-heavy-tonnage-press-brake-machine': '/products/cnc-press-brake',
  'fiber-laser-welding-machine': '/products/handheld-laser-welding-machine',
  'newly-launched-products': '/products',
};

// series dropped from the sheet-metal range in the 2026-09 revision
const retired = ['ln-ii-series', 'ga-pro-series', 'mb-series'];

const nextConfig: NextConfig = {
  images: {
    // photos replaced under the same filename carry ?v=N (see IMG_V) to bust image caches
    localPatterns: [
      { pathname: '/**', search: '' },
      { pathname: '/images/**', search: '?v=3' },
    ],
  },
  async redirects() {
    return [
      ...Object.entries(legacy).map(([from, to]) => ({ source: `/${from}.php`, destination: to, permanent: true })),
      ...retired.map((slug) => ({ source: `/products/${slug}`, destination: '/products/sheet-metal-laser-cutting-machine', permanent: true })),
      { source: '/:slug.php', destination: '/products/:slug', permanent: true },
    ];
  },
};

export default nextConfig;
// Note: the dev server caches optimized images in memory keyed by the request's Accept header —
// after replacing a file in /public under the same name, restart `next dev` to see the new one.

