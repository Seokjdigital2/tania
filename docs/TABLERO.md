# Tablero de pendientes — Beauty Organic

Estado del sitio: **pre-lanzamiento** (`prelaunch: true` en `src/config/site.ts`).
Mientras siga así, todas las páginas llevan `noindex` y se muestra la franja "Sitio en construcción".

**Simbología:** ⬜ pendiente · 🟨 provisional (hay texto de relleno) · ✅ listo

---

## 1. Urgente (desbloquea la compra)

| # | Dato | Estado | Dónde se cambia |
|---|---|---|---|
| 1.1 | URL de la crema en **Mercado Libre** | ⬜ (llega mañana) | `src/config/site.ts` → `buy.mercadolibre` |
| 1.2 | URL de la crema en **TikTok Shop** | ⬜ (llega mañana) | `src/config/site.ts` → `buy.tiktokshop` |
| 1.3 | Precio en MXN | ✅ $450 MXN por pieza | `src/data/product.ts` → `priceMXN` |

> En cuanto se pega cada URL, sus botones se activan solos en todo el sitio (hero, barra fija en móvil, página de producto, artículos y CTA final).

## 2. Marca y logotipo

| # | Dato | Estado | Notas |
|---|---|---|---|
| 2.1 | Logotipo en **SVG** o vector (AI/PDF) | ⬜ | Hoy se usa un recorte de la foto del posavasos (`src/assets/img/logo-wordmark.png`). |
| 2.1b | ⚠️ El logo dice **"ORGANIC Beauty"** pero la marca se llama **Beauty Organic** | ⬜ | Para SEO y para las IAs conviene que el logo, el sitio y los marketplaces digan lo mismo. Decidir si se ajusta el logo. |
| 2.2 | Variante monograma para favicon | ⬜ | Hoy el favicon es el logo completo reducido. |
| 2.3 | Dominio definitivo | ⬜ | `astro.config.mjs` → `SITE_URL` y `src/config/site.ts` → `url` (hoy dice `beautyorganic.mx`). |
| 2.4 | Razón social | ⬜ | `site.legalName` |

## 3. Datos del producto

Todo en `src/data/product.ts`.

| # | Dato | Estado | Notas |
|---|---|---|---|
| 3.1 | Nombre comercial exacto | 🟨 | Hoy: "Crema desmanchadora Beauty Organic". |
| 3.2 | Contenido neto (g / ml) | ⬜ | |
| 3.3 | Medidas del envase | ✅ | 8 cm de diámetro × 6 cm de altura (de la ficha). |
| 3.4 | Ingredientes clave (3) y qué aporta cada uno | 🟨 | Hoy: "Ingrediente clave 1, 2, 3". **No inventar.** |
| 3.5 | Lista INCI completa | ⬜ | Requerida en la etiqueta (NOM-141). |
| 3.6 | Beneficios (4) | 🟨 | Texto de relleno con lenguaje cosmético. |
| 3.7 | Modo de uso | 🟨 | Texto de relleno: limpiar → aplicar → protector solar. |
| 3.8 | Tipo de piel | ⬜ | |
| 3.9 | Tiempo estimado de resultados | ⬜ | |
| 3.10 | Precauciones | 🟨 | Texto genérico de relleno. |
| 3.11 | SKU / código de barras (EAN) | ⬜ | Mejora la ficha de producto en Google. |
| 3.12 | Aviso de funcionamiento / registro COFEPRIS | ⬜ | Si aplica. |
| 3.13 | Diferenciadores frente a otras cremas | ⬜ | |

## 4. Tania (fundadora)

| # | Dato | Estado | Dónde |
|---|---|---|---|
| 4.1 | Fotos | ✅ | Playa (principal) y urbana (secundaria). Opcional: una foto en fondo claro para la tarjeta de autora en artículos. |
| 4.2 | Historia y propósito (2 a 4 párrafos) | ⬜ | `src/pages/sobre-tania.astro` |
| 4.3 | Frase corta para la página de inicio | ⬜ | `src/pages/index.astro`, sección "Hola, soy Tania" |
| 4.4 | Apellido (opcional) | ⬜ | `site.founder.fullName` |

## 5. Prueba social

| # | Dato | Estado | Dónde |
|---|---|---|---|
| 5.1 | Reseñas reales (texto, nombre o inicial, ciudad, fuente) | 🟨 | `src/data/reviews.ts`. Hoy son 3 "reseñas de ejemplo" con su etiqueta visible. |
| 5.2 | Fotos de antes y después **con consentimiento escrito** | ⬜ | Hoy hay marcos vacíos en la página de inicio. |
| 5.3 | Perfil de Google Business | ⬜ | `site.googleBusinessProfile` |

> Las reseñas de ejemplo **no** generan estrellas en Google. Solo las reseñas reales (`example: false`) se publican en los datos estructurados.

## 6. Contacto, entrega y redes

| # | Dato | Estado | Dónde |
|---|---|---|---|
| 6.1 | Correo de contacto | ⬜ | `site.contact.email` |
| 6.2 | WhatsApp | ⬜ | `site.contact.whatsapp` |
| 6.3 | Colonias o zonas de entrega en Puerto Vallarta | ⬜ | `src/pages/entrega-puerto-vallarta.astro` |
| 6.4 | Tiempo y costo de entrega local | 🟨 | `site.delivery` |
| 6.5 | URLs de Facebook, Instagram, TikTok, YouTube y LinkedIn | ⬜ | `site.social` |
| 6.6 | ¿Tienda física? | ⬜ | `site.hasPhysicalStore` |

## 7. Textos provisionales por página

| Página | Estado |
|---|---|
| `/` inicio | 🟨 Hero, beneficios, ingredientes y "Hola, soy Tania" |
| `/crema-desmanchadora/` | 🟨 Depende de la sección 3 |
| `/manchas-en-la-piel/` + 7 guías | 🟨 Estructura lista; cuerpo con "Texto provisional" (`src/content/manchas/*.md`) |
| `/preguntas-frecuentes/` | 🟨 Respuestas provisionales (`src/data/faq.ts`) |
| `/sobre-tania/` | 🟨 Sección 4 |
| `/entrega-puerto-vallarta/` | 🟨 Sección 6 |
| `/resenas/` | 🟨 Sección 5 |
| `/aviso-de-privacidad/`, `/terminos/` | 🟨 Plantillas: deben revisarse antes del lanzamiento |
| `/distribuidores/` | ⏸ Fase 5 (noindex, fuera del sitemap) |

## 8. Analítica y buscadores (antes de lanzar)

| # | Dato | Estado | Dónde |
|---|---|---|---|
| 8.1 | ID de Google Analytics 4 | ⬜ | `site.analytics.ga4` |
| 8.2 | ID del Meta Pixel | ⬜ | `site.analytics.metaPixel` |
| 8.3 | ID del TikTok Pixel | ⬜ | `site.analytics.tiktokPixel` |
| 8.4 | Verificación de Google Search Console | ⬜ | `site.verification.google` |
| 8.5 | Verificación de Bing Webmaster Tools | ⬜ | `site.verification.bing` |
| 8.6 | Hosting (Vercel o Netlify) y DNS del dominio | ⬜ | Ver `README.md` |

## 9. Día del lanzamiento

Ver `docs/checklist-lanzamiento.md`.
