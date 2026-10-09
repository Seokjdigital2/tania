import { site, sameAs, absoluteUrl } from '@/config/site';
import { product } from '@/data/product';
import { realReviews } from '@/data/reviews';

/** @id estables para construir un grafo de entidades coherente entre páginas. */
export const ids = {
  organization: absoluteUrl('/#organization'),
  website: absoluteUrl('/#website'),
  founder: absoluteUrl('/sobre-tania/#founder'),
  product: absoluteUrl(`/${product.slug}/#product`),
};

export const organizationSchema = () => ({
  '@type': site.hasPhysicalStore ? ['Organization', 'HealthAndBeautyBusiness'] : 'Organization',
  '@id': ids.organization,
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  logo: absoluteUrl('/icon-512.png'),
  description: site.description,
  slogan: site.tagline,
  founder: { '@id': ids.founder },
  foundingLocation: {
    '@type': 'Place',
    name: `${site.location.city}, ${site.location.region}, ${site.location.countryName}`,
  },
  areaServed: [
    { '@type': 'City', name: site.location.city },
    { '@type': 'Country', name: site.location.countryName },
  ],
  ...(site.contact.email ? { email: site.contact.email } : {}),
  ...(sameAs().length && { sameAs: sameAs() }),
});

export const websiteSchema = () => ({
  '@type': 'WebSite',
  '@id': ids.website,
  url: site.url,
  name: site.name,
  inLanguage: site.locale,
  publisher: { '@id': ids.organization },
});

export const founderSchema = () => ({
  '@type': 'Person',
  '@id': ids.founder,
  name: site.founder.fullName,
  jobTitle: site.founder.role,
  worksFor: { '@id': ids.organization },
  image: absoluteUrl('/og/tania.jpg'),
  url: absoluteUrl('/sobre-tania/'),
  homeLocation: { '@type': 'Place', name: `${site.location.city}, ${site.location.region}` },
});

/**
 * Product: las ofertas solo se publican cuando existen precio y enlace reales,
 * y las calificaciones solo con reseñas reales mostradas en la página.
 */
export const productSchema = (images: string[]) => {
  const offers = (Object.entries(site.buy) as [string, string][])
    .filter(([, url]) => url && product.priceMXN)
    .map(([platform, url]) => ({
      '@type': 'Offer',
      url,
      price: product.priceMXN,
      priceCurrency: 'MXN',
      availability: 'https://schema.org/InStock',
      seller: { '@type': 'Organization', name: platform === 'mercadolibre' ? 'Mercado Libre' : 'TikTok Shop' },
    }));

  return {
    '@type': 'Product',
    '@id': ids.product,
    name: product.name,
    description: product.description,
    image: images,
    brand: { '@type': 'Brand', name: site.name },
    manufacturer: { '@id': ids.organization },
    category: 'Cuidado de la piel > Cremas',
    ...(product.sku ? { sku: product.sku } : {}),
    ...(product.gtin ? { gtin: product.gtin } : {}),
    ...(offers.length ? { offers } : {}),
    ...(realReviews.length && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: (realReviews.reduce((s, r) => s + r.rating, 0) / realReviews.length).toFixed(1),
        reviewCount: realReviews.length,
      },
      review: realReviews.map((r) => ({
        '@type': 'Review',
        author: { '@type': 'Person', name: r.author },
        reviewRating: { '@type': 'Rating', ratingValue: r.rating, bestRating: 5 },
        reviewBody: r.text,
        ...(r.date ? { datePublished: r.date } : {}),
      })),
    }),
  };
};

export const graph = (...nodes: object[]) => ({ '@context': 'https://schema.org', '@graph': nodes });
