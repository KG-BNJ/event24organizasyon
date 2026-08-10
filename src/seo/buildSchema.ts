import { faqItems } from '../data/faq'
import { galleryItems } from '../data/gallery'
import { site } from '../data/site'

export function buildSchema() {
  const businessId = `${site.url}/#business`
  const websiteId = `${site.url}/#website`
  const webpageId = `${site.url}/#webpage`
  const faqId = `${site.url}/#faq`
  const galleryId = `${site.url}/#gallery`

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['LocalBusiness', 'ProfessionalService'],
        '@id': businessId,
        name: site.name,
        alternateName: site.shortName,
        legalName: site.legalName,
        url: `${site.url}/`,
        image: [site.ogImage],
        logo: {
          '@type': 'ImageObject',
          url: site.logo,
        },
        description: site.description,
        telephone: site.telephoneE164,
        email: site.email,
        priceRange: site.priceRange,
        currenciesAccepted: 'TRY',
        paymentAccepted: 'Cash, Credit Card, Bank Transfer',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'TR',
        },
        areaServed: {
          '@type': 'Country',
          name: site.areaServed,
        },
        sameAs: [site.instagram],
        knowsAbout: [...site.knowsAbout],
        slogan: 'Anları sahneye taşıyoruz',
        contactPoint: [
          {
            '@type': 'ContactPoint',
            contactType: 'customer service',
            telephone: site.telephoneE164,
            email: site.email,
            availableLanguage: ['Turkish'],
            areaServed: 'TR',
          },
        ],
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
            ],
            opens: '09:00',
            closes: '19:00',
          },
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Organizasyon Hizmetleri',
          itemListElement: site.services.map((service, index) => ({
            '@type': 'Offer',
            position: index + 1,
            itemOffered: {
              '@type': 'Service',
              name: service.name,
              description: service.description,
              provider: { '@id': businessId },
              areaServed: site.areaServed,
              serviceType: service.name,
            },
          })),
        },
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: `${site.url}/`,
        name: site.name,
        description: site.description,
        inLanguage: site.language,
        publisher: { '@id': businessId },
      },
      {
        '@type': 'WebPage',
        '@id': webpageId,
        url: `${site.url}/`,
        name: site.title,
        description: site.description,
        inLanguage: site.language,
        isPartOf: { '@id': websiteId },
        about: { '@id': businessId },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: site.ogImage,
        },
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.hero__brand', '.hero__lead', '.section-title'],
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${site.url}/#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Ana Sayfa',
            item: `${site.url}/`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Galeri',
            item: `${site.url}/#galeri`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Hizmetler',
            item: `${site.url}/#hizmetler`,
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'İletişim',
            item: `${site.url}/#iletisim`,
          },
        ],
      },
      {
        '@type': 'ImageGallery',
        '@id': galleryId,
        name: 'Event24 Organizasyon Galerisi',
        description:
          'Düğün, kına, sünnet, nişan ve doğum günü organizasyonlarından seçili görseller.',
        url: `${site.url}/#galeri`,
        isPartOf: { '@id': webpageId },
        associatedMedia: galleryItems.map((item) => ({
          '@type': 'ImageObject',
          contentUrl: item.image,
          name: `${item.category} organizasyonu — ${item.title}`,
          description: `${item.location} ${item.category.toLowerCase()} organizasyonu örneği`,
          caption: `${item.title} · ${item.location}`,
        })),
      },
      {
        '@type': 'ItemList',
        '@id': `${site.url}/#services-list`,
        name: 'Organizasyon Hizmetleri',
        itemListOrder: 'https://schema.org/ItemListOrderAscending',
        numberOfItems: site.services.length,
        itemListElement: site.services.map((service, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: service.name,
          description: service.description,
          url: `${site.url}/#hizmetler`,
        })),
      },
      {
        '@type': 'FAQPage',
        '@id': faqId,
        url: `${site.url}/#sss`,
        isPartOf: { '@id': webpageId },
        mainEntity: faqItems.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.a,
          },
        })),
      },
    ],
  }
}
