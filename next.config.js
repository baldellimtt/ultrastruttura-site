/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configurazione per GitHub Pages (export statico)
  output: 'export',
  images: {
    formats: ['image/avif', 'image/webp'],
    unoptimized: true, // Richiesto per export statico
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  // Rimuoviamo headers() perché non funzionano con export statico
  // GitHub Pages gestisce gli header tramite .htaccess o configurazione server
}

module.exports = nextConfig

