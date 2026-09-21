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

const nextConfig: NextConfig = {
  async redirects() {
    return [
      ...Object.entries(legacy).map(([from, to]) => ({ source: `/${from}.php`, destination: to, permanent: true })),
      { source: '/:slug.php', destination: '/products/:slug', permanent: true },
    ];
  },
};

export default nextConfig;
