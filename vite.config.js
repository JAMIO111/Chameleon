import path from 'node:path'
import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { imagetools } from 'vite-imagetools'
import { SITE, ROUTES, seoHead } from './src/lib/site.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Fills the %SITE_*% tokens in index.html, injects LocalBusiness JSON-LD and
// emits robots.txt and sitemap.xml, all from src/lib/site.js.
function siteSeo() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': `${SITE.url}/#business`,
    name: SITE.name,
    url: `${SITE.url}/`,
    logo: `${SITE.url}/icon-512.png`,
    image: `${SITE.url}${SITE.image}`,
    description: ROUTES['/'].description,
    email: SITE.email,
    telephone: SITE.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE.locality,
      addressRegion: SITE.region,
      addressCountry: 'GB',
    },
    areaServed: SITE.areaServed.map(({ type, name }) => ({ '@type': type, name })),
    sameAs: Object.values(SITE.socials),
  }
  const urls = Object.keys(ROUTES).map((p) => `${SITE.url}${p}`)
  const sitemap =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    urls.map((u) => `  <url><loc>${u}</loc></url>`).join('\n') +
    '\n</urlset>\n'

  return {
    name: 'site-seo',
    transformIndexHtml: {
      order: 'pre',
      handler(html) {
        const tokens = {
          '%SEO_HEAD%': seoHead({ ...ROUTES['/'], url: `${SITE.url}/` }),
          '%SITE_NAME%': SITE.name,
          '%SITE_IMAGE%': `${SITE.url}${SITE.image}`,
          '%SITE_IMAGE_WIDTH%': String(SITE.imageWidth),
          '%SITE_IMAGE_HEIGHT%': String(SITE.imageHeight),
          '%SITE_IMAGE_ALT%': SITE.imageAlt,
        }
        let out = html
        for (const [token, value] of Object.entries(tokens)) out = out.replaceAll(token, value)
        return {
          html: out,
          tags: [
            {
              tag: 'script',
              attrs: { type: 'application/ld+json' },
              children: JSON.stringify(jsonLd),
              injectTo: 'head',
            },
          ],
        }
      },
    },
    generateBundle() {
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: `User-agent: *\nAllow: /\n\nSitemap: ${SITE.url}/sitemap.xml\n`,
      })
      this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: sitemap })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [siteSeo(), imagetools(), react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
