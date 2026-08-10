import { useEffect } from 'react'
import { site } from '../data/site'
import { buildSchema } from '../seo/buildSchema'

const SCHEMA_ID = 'event24-jsonld'

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export function Seo() {
  useEffect(() => {
    document.title = site.title
    document.documentElement.lang = 'tr'

    upsertMeta('name', 'description', site.description)
    upsertMeta('name', 'keywords', site.keywords.join(', '))
    upsertMeta('name', 'author', site.name)
    upsertMeta(
      'name',
      'robots',
      'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    )
    upsertMeta('name', 'googlebot', 'index, follow')
    upsertMeta('name', 'theme-color', site.themeColor)
    upsertMeta('name', 'application-name', site.shortName)
    upsertMeta('name', 'apple-mobile-web-app-title', site.shortName)
    upsertMeta('name', 'format-detection', 'telephone=yes')
    upsertMeta('name', 'geo.region', 'TR')
    upsertMeta('name', 'geo.placename', site.areaServed)
    upsertMeta('name', 'rating', 'General')

    upsertMeta('property', 'og:locale', site.locale)
    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:site_name', site.name)
    upsertMeta('property', 'og:title', site.title)
    upsertMeta('property', 'og:description', site.description)
    upsertMeta('property', 'og:url', `${site.url}/`)
    upsertMeta('property', 'og:image', site.ogImage)
    upsertMeta('property', 'og:image:secure_url', site.ogImage)
    upsertMeta('property', 'og:image:type', 'image/jpeg')
    upsertMeta('property', 'og:image:width', '1200')
    upsertMeta('property', 'og:image:height', '630')
    upsertMeta('property', 'og:image:alt', `${site.name} düğün organizasyonu galerisi`)

    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', site.title)
    upsertMeta('name', 'twitter:description', site.description)
    upsertMeta('name', 'twitter:image', site.ogImage)
    upsertMeta('name', 'twitter:image:alt', `${site.name} düğün organizasyonu`)

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = `${site.url}/`

    let schema = document.getElementById(SCHEMA_ID) as HTMLScriptElement | null
    if (!schema) {
      schema = document.createElement('script')
      schema.id = SCHEMA_ID
      schema.type = 'application/ld+json'
      document.head.appendChild(schema)
    }
    schema.textContent = JSON.stringify(buildSchema())
  }, [])

  return null
}
