# Organic Beauty · sitio web

Landing page y hub de contenido SEO de **Organic Beauty**, la crema para cara y cuerpo creada por Tania en Puerto Vallarta.
Es un sitio estático hecho con [Astro](https://astro.build), optimizado para buscadores (Google, Bing, DuckDuckGo) y para asistentes de IA.

El sitio **no cobra**: lleva a las visitantes a comprar en **Mercado Libre** o **TikTok Shop**.

## Inicio rápido

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # revisión de tipos + build en dist/
npm run preview   # sirve dist/
```

Requiere Node 22.

## Dónde se cambia cada cosa

| Qué | Archivo |
|---|---|
| Enlaces de compra, redes, contacto, analítica, modo pre-lanzamiento | `src/config/site.ts` |
| Datos del producto (ingredientes, modo de uso, precio…) | `src/data/product.ts` |
| Preguntas frecuentes | `src/data/faq.ts` |
| Reseñas | `src/data/reviews.ts` |
| Artículos del hub de manchas | `src/content/manchas/*.md` |
| Colores, tipografías, espaciado | `src/styles/global.css` |
| Imágenes | `src/assets/img/` (se optimizan solas en el build) |
| Dominio | `astro.config.mjs` y `src/config/site.ts` |

**Pendientes de información:** `docs/TABLERO.md`.

### Activar los botones de compra

Pega las URLs en `src/config/site.ts`:

```ts
buy: {
  mercadolibre: 'https://articulo.mercadolibre.com.mx/…',
  tiktokshop: 'https://…',
},
```

Mientras estén vacías, los botones aparecen desactivados con la leyenda "Muy pronto".

### Agregar un artículo

Crea `src/content/manchas/mi-tema.md` con este frontmatter (el esquema se valida en `src/content.config.ts`):

```md
---
title: 'Título (≤ 70 caracteres)'
description: 'Meta descripción (≤ 170 caracteres)'
answer: 'Respuesta directa de 40 a 60 palabras.'
order: 8
published: 2026-10-10
provisional: false
faqs:
  - q: '¿Pregunta?'
    a: 'Respuesta.'
---

## Primer subtítulo
…
```

Se publica en `/manchas-en-la-piel/mi-tema/` y se agrega solo al sitemap, a `llms.txt` y al índice de guías.

## Estructura del sitio

```
/                                  Landing de conversión
/crema-desmanchadora/              Página de producto
/manchas-en-la-piel/               Hub de guías (+ 7 artículos)
/preguntas-frecuentes/  /resenas/  /sobre-tania/  /entrega-puerto-vallarta/
/distribuidores/                   Fase 5 (noindex)
/aviso-de-privacidad/  /terminos/
/robots.txt  /llms.txt  /llms-full.txt  /sitemap-index.xml
```

## SEO y GEO incluidos

- HTML estático con un H1 por página, canonical, Open Graph, `hreflang es-MX` y breadcrumbs.
- Grafo JSON-LD con `@id` estables: Organization, WebSite, Person (Tania), Product, Article, FAQPage, BreadcrumbList y Service.
- `llms.txt` y `llms-full.txt` generados desde los mismos datos del sitio.
- `robots.txt` que permite el acceso a buscadores y a asistentes de IA.
- Imágenes AVIF/WebP responsivas y menos de 10 KB de JS propio.
- Modo pre-lanzamiento: `noindex` global mientras los textos sean provisionales.

## Despliegue

Listo para **Vercel** (`vercel.json`) o **Netlify** (`netlify.toml`): conecta el repositorio y usa la configuración por defecto.
Antes de lanzar, sigue `docs/checklist-lanzamiento.md`.
