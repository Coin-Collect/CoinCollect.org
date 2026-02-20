import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://coincollect.org/sitemap.xml',
    host: 'https://coincollect.org',
  };
}
