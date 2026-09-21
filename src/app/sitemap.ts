import type { MetadataRoute } from 'next';
import { allSlugs } from '@/data/site';

const base = 'https://www.adkeng.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/about-us', '/products', '/application', '/gallery', '/news-and-events', '/career', '/clients', '/contact-us'];
  return [...pages, ...allSlugs.map((s) => `/products/${s}`)].map((p) => ({ url: `${base}${p}`, lastModified: new Date() }));
}
