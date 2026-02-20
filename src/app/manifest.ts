import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'CoinCollect',
    short_name: 'CoinCollect',
    description:
      'CoinCollect helps NFT holders unlock practical value through staking, reward flows, and ecosystem participation.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/images/logo.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/images/logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/images/logo.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  };
}
