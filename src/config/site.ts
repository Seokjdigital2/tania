/**
 * Fuente única de verdad del sitio Organic Beauty.
 *
 * Todo lo marcado con `PROVISIONAL` es texto o dato de relleno que debe
 * reemplazarse con información real (ver docs/TABLERO.md).
 */

export const site = {
  /**
   * Mientras sea `true`:
   *  - todas las páginas llevan `noindex` (los textos son provisionales),
   *  - se muestra la franja "Sitio en construcción".
   * Cambiar a `false` el día del lanzamiento.
   */
  prelaunch: true,

  name: 'Organic Beauty',
  signature: 'Organic Beauty · Tania',
  legalName: 'Organic Beauty', // PROVISIONAL: razón social si existe
  url: 'https://www.organicbeauty.mx', // PROVISIONAL: dominio definitivo (también en astro.config.mjs)
  locale: 'es-MX',
  tagline: 'Belleza que realza tu esencia',
  // PROVISIONAL
  description:
    'Organic Beauty es una crema mexicana para cara y cuerpo que ayuda a atenuar la apariencia de manchas y a unificar visualmente el tono de la piel. Creada por Tania en Puerto Vallarta.',

  founder: {
    name: 'Tania',
    fullName: 'Tania', // PROVISIONAL: apellido opcional
    role: 'Fundadora de Organic Beauty',
  },

  location: {
    city: 'Puerto Vallarta',
    region: 'Jalisco',
    country: 'MX',
    countryName: 'México',
  },

  contact: {
    email: '', // PROVISIONAL
    whatsapp: '', // PROVISIONAL: formato internacional, p. ej. 523221234567
  },

  /**
   * Enlaces de compra. Si están vacíos, los botones se muestran
   * desactivados con la leyenda "Muy pronto".
   */
  buy: {
    mercadolibre: '', // PENDIENTE: URL de la publicación en Mercado Libre
    tiktokshop: '', // PENDIENTE: URL del producto en TikTok Shop
  },

  social: {
    facebook: '', // PROVISIONAL
    instagram: '', // PROVISIONAL
    tiktok: '', // PROVISIONAL
    youtube: '', // PROVISIONAL
    linkedin: '', // PROVISIONAL
  },

  googleBusinessProfile: '', // PROVISIONAL
  hasPhysicalStore: false, // define si el schema usa LocalBusiness

  delivery: {
    area: 'Puerto Vallarta',
    method: 'Entrega por motocicleta',
    time: 'Mismo día o día siguiente', // PROVISIONAL
    cost: 'Por confirmar', // PROVISIONAL
    nationwide: 'Envíos a todo México a través de Mercado Libre y TikTok Shop',
  },

  /** Los scripts de analítica solo se cargan si hay ID y la visitante acepta cookies. */
  analytics: {
    ga4: '', // G-XXXXXXX
    metaPixel: '',
    tiktokPixel: '',
  },

  verification: {
    google: '', // token de Google Search Console
    bing: '', // token de Bing Webmaster Tools
  },
} as const;

export type BuyPlatform = keyof typeof site.buy;

export const buyPlatforms: Record<BuyPlatform, { label: string; short: string }> = {
  mercadolibre: { label: 'Comprar en Mercado Libre', short: 'Mercado Libre' },
  tiktokshop: { label: 'Comprar en TikTok Shop', short: 'TikTok Shop' },
};

export const nav = [
  { href: '/crema-desmanchadora/', label: 'La crema' },
  { href: '/manchas-en-la-piel/', label: 'Manchas' },
  { href: '/preguntas-frecuentes/', label: 'Preguntas' },
  { href: '/sobre-tania/', label: 'Sobre Tania' },
] as const;

export const sameAs = (): string[] =>
  [
    ...Object.values(site.social),
    site.buy.mercadolibre,
    site.buy.tiktokshop,
    site.googleBusinessProfile,
  ].filter(Boolean);

export const absoluteUrl = (path: string) => new URL(path, site.url).toString();
