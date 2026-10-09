# Prompt maestro — Sitio web Organic Beauty (landing + hub SEO)

> **Uso:** este prompt está diseñado para ejecutarse con **Claude Code** dentro del repositorio `tania`.
> Antes de ejecutarlo, completa la sección **0. Brief de marca (variables)**. Todo lo que esté entre `{{ }}` es un dato que debe proporcionar Tania; el agente **nunca** debe inventarlo.
>
> Referencias visuales en el repo:
> - `docs/referencias/logo-organic-beauty-foto.webp` — logotipo (foto de una pieza impresa; se necesita versión vectorial)
> - `docs/referencias/flujo-contenido-conversion.webp` — plan de contenido y conversión
> - `docs/referencias/flujo-informacion-lanzamiento.webp` — información requerida para el lanzamiento

---

## 0. Brief de marca (variables — llenar antes de ejecutar)

```yaml
marca:
  nombre_comercial: "Organic Beauty"
  firma_logotipo: "Organic Beauty · Tania"     # cómo aparece en el logo
  fundadora: "Tania {{APELLIDO_OPCIONAL}}"
  historia_proposito: "{{2-4 párrafos: por qué nació la marca, qué problema resuelve}}"
  ciudad_base: "Puerto Vallarta, Jalisco, México"
  dominio: "{{https://www.organicbeauty.mx}}"
  email_contacto: "{{correo}}"
  whatsapp: "{{+52 ...}}"                       # opcional
  google_business_profile_url: "{{url o vacío}}"
  tiene_tienda_fisica: {{true|false}}           # define si se usa LocalBusiness

producto:
  nombre: "{{Crema desmanchadora Organic Beauty}}"
  uso: "cara y cuerpo"
  presentacion: "{{p. ej. 50 g / 100 ml}}"
  precio_mxn: {{000}}
  ingredientes_clave: ["{{ingrediente 1}}", "{{ingrediente 2}}"]   # INCI completo si existe
  lista_inci_completa: "{{...}}"
  beneficios: ["{{...}}"]
  modo_de_uso: "{{pasos}}"
  tiempo_estimado_resultados: "{{p. ej. 4-8 semanas con uso constante}}"
  tipo_de_piel: "{{todo tipo / sensible / etc.}}"
  precauciones: "{{prueba de parche, evitar contorno de ojos, usar protector solar...}}"
  diferenciadores: ["{{...}}"]
  registro_o_aviso_cofepris: "{{si aplica}}"
  gtin_ean: "{{código de barras si existe}}"
  sku: "{{...}}"

canales_de_venta:
  mercado_libre_url: "{{https://articulo.mercadolibre.com.mx/...}}"
  tiktok_shop_url: "{{https://...}}"

entrega_local:
  zona: "Puerto Vallarta (y {{colonias / municipios cercanos}})"
  metodo: "Entrega por motocicleta"
  tiempos: "{{p. ej. mismo día / 24 h}}"
  costo: "{{...}}"

redes_sociales:
  facebook: "{{url}}"
  instagram: "{{url}}"
  tiktok: "{{url}}"
  youtube: "{{url}}"
  linkedin: "{{url}}"

prueba_social:
  resenas_reales: "{{exportar reseñas de Mercado Libre / TikTok Shop / Google con permiso}}"
  fotos_antes_despues: "{{solo con consentimiento escrito de la clienta}}"

analitica:
  ga4_id: "{{G-XXXX}}"
  meta_pixel_id: "{{...}}"
  tiktok_pixel_id: "{{...}}"
  google_search_console: "{{token de verificación}}"
  bing_webmaster: "{{token}}"
```

---

## 1. Rol

Actúa como un **equipo senior multidisciplinario** que trabaja como una sola persona:

1. **Arquitecto/a frontend** especialista en sitios estáticos de alto rendimiento (Astro).
2. **Especialista SEO técnico y semántico**: Google, Bing, DuckDuckGo (usa el índice de Bing), Yahoo y Ecosia.
3. **Especialista GEO / AEO** (Generative/Answer Engine Optimization): que el sitio sea citado por ChatGPT, Claude, Perplexity, Gemini, Copilot y Google AI Overviews.
4. **Director/a de arte** de marcas de belleza premium (referencias: Clinique México y MAC Cosmetics).
5. **Especialista CRO** en tráfico social móvil que convierte en marketplaces externos.
6. **Redactor/a de belleza en español de México**, con conocimiento de la regulación de cosméticos (COFEPRIS / NOM-141-SSA1/SCFI) y de la protección de datos (LFPDPPP).

---

## 2. Contexto del negocio

- **Organic Beauty** es una marca mexicana de una **crema para atenuar la apariencia de manchas** en **cara y cuerpo**, fundada por **Tania**, con base en **Puerto Vallarta**.
- Hoy hay **un solo producto**, que ya está publicado en **Mercado Libre** y **TikTok Shop**. **El sitio no procesa pagos**: su trabajo es **educar, generar confianza y mandar a la usuaria a comprar** a uno de esos dos marketplaces. También hay **entrega local por motocicleta en Puerto Vallarta**.
- **Flujo de negocio** (ver `docs/referencias/flujo-contenido-conversion.webp`):
  `Redes sociales (FB, IG, TikTok, LinkedIn, YouTube) → Landing / sitio → Compra (TikTok Shop o Mercado Libre) → Entrega local → Expansión nacional con distribuidores por estado`.
- **Usuaria principal:** mujer mexicana de 25 a 55 años que llega **desde el celular** (más del 85 % del tráfico) después de ver un video o publicación. Le preocupan manchas por sol, melasma, paño, axilas, entrepierna, codos y rodillas oscuras, o marcas de acné. Desconfía de las promesas milagrosas.
- **Escalabilidad:** la arquitectura debe permitir agregar después más productos, una página de distribuidores por estado y una sección de reseñas, sin rehacer nada.

---

## 3. Objetivos (en orden de prioridad)

1. **Conversión:** que la visita llegue a un clic en "Comprar en Mercado Libre" o "Comprar en TikTok Shop" en **menos de 2 desplazamientos** en móvil.
2. **SEO orgánico:** posicionar en búsquedas informativas y transaccionales en español de México sobre manchas en la piel (ver §7.4).
3. **Visibilidad en LLMs:** que la marca y el producto sean entidades claras, consistentes y citables.
4. **Confianza (E-E-A-T):** fundadora real, información honesta, reseñas reales, políticas claras.
5. **Rendimiento:** Core Web Vitals en verde en móvil con conexión 4G.

---

## 4. Restricciones no negociables

- **No inventes datos.** Ingredientes, porcentajes, resultados, número de clientas, reseñas, calificaciones, certificaciones o testimonios **solo salen del brief**. Si falta un dato, usa un marcador `{{FALTA: ...}}` visible en desarrollo y regístralo en `docs/TABLERO.md`.
- **Lenguaje cosmético, no médico** (normativa COFEPRIS). Prohibido: "cura", "elimina el melasma", "trata", "garantizado", "100 % efectivo", "resultados permanentes", "aprobado por dermatólogos" (salvo que exista evidencia). Permitido: "ayuda a atenuar la apariencia de manchas", "unifica visualmente el tono", "piel de aspecto más luminoso", "con uso constante".
- Las **fotos de antes y después** solo se publican con consentimiento, con fecha y tiempo de uso, y con la leyenda "Resultados individuales; pueden variar".
- **Sin saturación** (anti-Sephora): un mensaje principal por sección, un CTA principal por pantalla y nada de carruseles automáticos, pop-ups de entrada ni banners apilados.
- Español de México, con trato de **"tú"**, cálido y claro.
- **No recolectar pagos ni datos sensibles.** Si hay formulario, solo de contacto o de distribuidores, con aviso de privacidad.

---

## 5. Sistema de diseño

### 5.1 Proporción de color obligatoria: **80 / 10 / 10**

| Rol | Proporción | Uso |
|---|---|---|
| **Blanco** (`#FFFFFF`, `#FBF9F8` como blanco cálido) | **~80 %** | Fondos, espacio negativo y tarjetas |
| **Rosa** (rubor acuarela del logo) | **~10 %** | Manchas orgánicas detrás del logo o del producto, fondos de una sección destacada y estados hover |
| **Verde hoja** (hojas del logo) | **~10 %** | Ilustraciones de hojas, íconos, viñetas y detalles |

Tokens de partida (ajustar con un cuentagotas sobre el logo vectorial final):

```css
:root {
  --ob-white:      #FFFFFF;
  --ob-ivory:      #FBF9F8;  /* blanco cálido de fondo alterno */
  --ob-blush-100:  #FBEFF1;
  --ob-blush-300:  #F3CDD3;  /* mancha rosa del logo */
  --ob-blush-500:  #E6A3AE;
  --ob-leaf-300:   #A9D46F;
  --ob-leaf-500:   #7DB83A;  /* hojas del logo */
  --ob-leaf-700:   #4E7D23;  /* verde accesible para texto/íconos */
  --ob-plum-900:   #3A1F2B;  /* tipografía del logo: texto principal */
  --ob-plum-700:   #5C3346;
  --ob-gray-500:   #7A6F73;  /* texto secundario */
}
```

- El **texto** usa `--ob-plum-900`; el negro puro no se usa. El ciruela es el color de la tipografía del logo y no cuenta dentro del 10 % rosa.
- **Contraste WCAG 2.2 AA** en todo el texto. No se pone texto pequeño sobre rosa claro sin verificar el contraste.
- Botones de compra: el principal es sólido ciruela con texto blanco; el secundario es contorno ciruela. Los colores de marca de Mercado Libre (amarillo) y TikTok (negro) **solo** aparecen como **ícono o logotipo pequeño** dentro del botón, nunca como fondo completo. Así se mantiene la estética 80/10/10.

### 5.2 Logotipo

- Se necesita el logo **en SVG vectorial**. La imagen de referencia es una foto de una pieza impresa con textura brillante y **no sirve como asset final**. Si no hay SVG, crea un marcador y registra en `docs/TABLERO.md` que hace falta pedirlo o vectorizarlo.
- Variantes: completa (ORGANIC / *Beauty* / Tania + mancha rosa + hojas), horizontal compacta para el header, monograma "B" con hoja para el favicon, y monocroma ciruela.
- Siempre sobre fondo blanco o marfil, con un **margen de protección** mínimo igual a la altura de la "O" de ORGANIC.
- Las hojas del logo se reutilizan como **elemento gráfico de marca** (separadores, viñetas, esquinas decorativas sutiles) en pocas cantidades.

### 5.3 Tipografía

- **Logotipo:** solo el SVG. La caligrafía del logo no se replica con una fuente.
- **Títulos:** serif elegante y ligera (p. ej. *Cormorant Garamond* o *Fraunces*), con tamaños grandes, mucho interlineado y espacio alrededor (estilo Clinique).
- **Texto e interfaz:** sans humanista (p. ej. *Jost*, *Outfit* o *Inter*).
- **Acento manuscrito** opcional (p. ej. *Allura*) solo para frases cortas como "Belleza que realza tu esencia", con un máximo de una por pantalla.
- Fuentes autoalojadas, con subconjunto latino, `font-display: swap` y precarga solo de la fuente de títulos.

### 5.4 Lenguaje visual (Clinique + MAC, anti-Sephora)

- **Espacio negativo generoso**: padding vertical de sección ≥ 96 px en escritorio y ≥ 64 px en móvil.
- Retícula de 12 columnas con ancho máximo de contenido de 1200 px y textos de 60 a 70 caracteres por línea.
- **Fotografía de producto protagonista** sobre fondo blanco, con sombra suave y alguna hoja o flor ocasional (como en las infografías).
- Grid de producto limpio estilo Clinique y bloques editoriales a ancho completo estilo MAC, pero **en clave clara**, no oscura.
- Microinteracciones discretas (fade y slide ≤ 200 ms) que respetan `prefers-reduced-motion`.
- **Solo modo claro.** La marca vive en blanco, así que no se implementa modo oscuro.

---

## 6. Arquitectura de información (landing + hub SEO)

```
/                                        → Landing principal (conversión)
/crema-desmanchadora/                    → Página de producto (PDP), la URL más importante para SEO transaccional
/manchas-en-la-piel/                     → Hub educativo (pilar)
  /manchas-en-la-piel/manchas-por-sol/
  /manchas-en-la-piel/melasma-y-pano/
  /manchas-en-la-piel/axilas-oscuras/
  /manchas-en-la-piel/entrepierna-oscura/
  /manchas-en-la-piel/codos-y-rodillas-oscuras/
  /manchas-en-la-piel/marcas-de-acne/
  /manchas-en-la-piel/rutina-para-manchas/
/preguntas-frecuentes/                   → FAQ completa
/resenas/                                → Reseñas reales (cuando existan)
/sobre-tania/                            → Historia de la fundadora (E-E-A-T)
/entrega-puerto-vallarta/                → SEO local
/distribuidores/                         → Fase 5 (escalamiento); se crea con noindex hasta activarla
/aviso-de-privacidad/  /terminos/        → Legales
/llms.txt  /llms-full.txt  /robots.txt  /sitemap-index.xml  /rss.xml
```

- **Enlazado interno tipo Fragrantica:** cada artículo del hub enlaza a la PDP con un ancla descriptiva, a dos o tres artículos hermanos y de vuelta al pilar. La PDP enlaza a los artículos relevantes ("¿Tienes manchas en axilas? Lee la guía").
- **Breadcrumbs** visibles y en schema en todas las páginas internas.
- URLs en minúsculas, con guiones, sin fechas y con barra final consistente.
- **Contenido en colecciones** de Astro (`src/content/`) con esquema Zod, para que agregar un producto o artículo sea crear un archivo Markdown/MDX.

---

## 7. Especificación de páginas

### 7.1 Landing `/` (orden de secciones, móvil primero)

1. **Header** fijo y mínimo: logo compacto, enlaces (Producto · Manchas · Preguntas · Sobre Tania) y un botón "Comprar". En móvil: menú hamburguesa y botón "Comprar".
2. **Hero:** la foto del producto sobre una mancha rosa acuarela con hojas, un H1 (≤ 60 caracteres, con la keyword principal, p. ej. "Crema para manchas en cara y cuerpo"), un subtítulo de una línea, **dos botones** (Mercado Libre / TikTok Shop) y una línea de confianza ("Entrega en Puerto Vallarta · Envíos a todo México").
3. **El problema:** tres o cuatro tipos de manchas con ícono de hoja, cada una enlazada a su artículo del hub.
4. **Beneficios:** máximo cuatro, en tarjetas blancas con un ícono verde.
5. **Ingredientes clave:** solo los del brief, con una frase cada uno.
6. **Modo de uso:** tres pasos numerados más un recordatorio de protector solar.
7. **Resultados / antes y después:** solo con material real y consentimiento. Si no hay, esta sección no se renderiza.
8. **Reseñas reales:** extracto de dos o tres reseñas con su fuente (Mercado Libre, TikTok Shop o Google) y enlace para leer más.
9. **Conoce a Tania:** foto, dos o tres líneas y enlace a `/sobre-tania/`.
10. **Preguntas frecuentes** (cinco o seis, en acordeón con `<details>`): el resto vive en `/preguntas-frecuentes/`.
11. **CTA final:** los dos botones de compra más la entrega local en Puerto Vallarta.
12. **Footer:** redes sociales, legales, contacto y una línea de "Hecho en Puerto Vallarta".

- **Barra de compra fija en móvil** (sticky bottom) que aparece después del hero, con dos botones compactos y respetando el safe-area.

### 7.2 PDP `/crema-desmanchadora/`

Galería de imágenes (WebP/AVIF), nombre, presentación, precio de referencia ("Precio en Mercado Libre: $X"), botones de compra, beneficios, INCI completo, modo de uso, precauciones, para qué tipo de piel es, tiempo estimado de resultados, reseñas, FAQ específica y artículos relacionados.

### 7.3 Artículos del hub

- Entre 1 200 y 2 000 palabras, con la estructura: respuesta directa en las primeras 40 a 60 palabras (para snippets y LLMs), luego causas, cómo prevenir, rutina sugerida, cuándo acudir al dermatólogo, FAQ y CTA suave al producto.
- Autoría: "Por Tania, fundadora de Organic Beauty", con fecha de publicación y de actualización. Si hay revisión de un profesional, se muestra su nombre y cédula, y nunca se inventa.
- Deja **plantillas y estructura**. El texto final de cada artículo se escribe con los datos del brief y queda marcado como borrador para que Tania lo revise.

### 7.4 Mapa inicial de keywords (validar con Search Console y Keyword Planner)

| Intención | Ejemplos | Página |
|---|---|---|
| Transaccional | crema para manchas, crema desmanchadora, crema para manchas en la cara, crema aclaradora para axilas y entrepierna | `/`, `/crema-desmanchadora/` |
| Informativa | cómo quitar manchas de la cara, qué causa el melasma, cómo aclarar axilas, manchas por el sol | hub |
| Local | crema para manchas Puerto Vallarta, productos de belleza Puerto Vallarta | `/entrega-puerto-vallarta/` |
| Marca | Organic Beauty crema, Organic Beauty Tania | todas |

---

## 8. SEO técnico (buscadores)

- **Stack:** Astro 5 con salida estática (SSG), cero JS por defecto e islas solo donde haga falta (acordeón y menú). Tailwind CSS 4 o CSS con tokens. Despliegue en **Vercel o Netlify** (dejar configurados ambos archivos).
- `<html lang="es-MX">`, `hreflang="es-MX"` y `x-default`.
- Por página: `<title>` único (≤ 60 caracteres), meta description (140 a 160), canonical absoluto, Open Graph y Twitter Card con imagen 1200×630 por página, `robots` meta e **un solo H1**.
- `@astrojs/sitemap` con `lastmod` y `robots.txt` que permita a los rastreadores de buscadores **y de IA** (ver §9).
- **IndexNow** (Bing, Yandex, Seznam; DuckDuckGo se alimenta de Bing): generar la clave y un script que haga ping al publicar.
- Verificación en **Google Search Console** y **Bing Webmaster Tools** con meta tags configurables por variables de entorno.
- **Imágenes:** `astro:assets` en AVIF/WebP con `srcset`, `width`/`height` explícitos, `alt` descriptivo en español, `loading="lazy"` excepto en el hero (que lleva `fetchpriority="high"`) y nombres de archivo con keyword.
- **Rendimiento (presupuesto):** LCP < 2,0 s, INP < 200 ms, CLS < 0,05 en móvil; JS total < 50 KB, CSS crítico inline y Lighthouse ≥ 95 en las cuatro categorías.
- **Accesibilidad:** WCAG 2.2 AA, navegación por teclado, foco visible, áreas táctiles ≥ 44 px y etiquetas ARIA solo cuando el HTML semántico no alcance.
- Página 404 con marca, redirecciones 301 declaradas en la configuración y sin enlaces rotos (se comprueba en CI).

### 8.1 Datos estructurados (JSON-LD, validar con Rich Results Test)

- `Organization` (o `LocalBusiness`/`HealthAndBeautyBusiness` **solo si** `tiene_tienda_fisica: true` o el perfil de Google Business está verificado): `name`, `logo`, `url`, `founder` (`Person`: Tania), `sameAs` (todas las redes, Mercado Libre y TikTok Shop) y `areaServed`.
- `WebSite` (sin SearchAction mientras no haya buscador interno).
- `Product` en la PDP: `name`, `image`, `description`, `brand`, `sku`, `gtin` (si existe) y `offers` (`Offer` con `price`, `priceCurrency: MXN`, `availability` y `url` hacia Mercado Libre). Se pueden declarar varias ofertas, una por marketplace.
- `aggregateRating` y `review` **solo** con reseñas reales mostradas en la página. Se documenta en el código que no se pueden usar calificaciones falsas o importadas sin mostrarlas.
- `FAQPage` en `/preguntas-frecuentes/` y `HowTo` o texto estructurado para el modo de uso.
- `Article` / `BlogPosting` con `author` (`Person`), `datePublished` y `dateModified` en el hub, más `BreadcrumbList` en todas las páginas internas.
- Un único **`@id` estable** por entidad (`/#organization`, `/#founder`, `/crema-desmanchadora/#product`) referenciado entre páginas para construir un **grafo de entidades** coherente.

---

## 9. Optimización para LLMs (GEO / AEO)

- **`/llms.txt`** (estándar llmstxt.org): un resumen de la marca, el producto, dónde comprar, la zona de entrega y enlaces a las páginas clave en Markdown. **`/llms-full.txt`** con el contenido íntegro de la PDP, la FAQ y los artículos, generado en el build desde las colecciones.
- `robots.txt` que permita explícitamente: `Googlebot`, `Bingbot`, `DuckDuckBot`, `GPTBot`, `OAI-SearchBot`, `ChatGPT-User`, `ClaudeBot`, `Claude-SearchBot`, `Claude-User`, `PerplexityBot`, `Perplexity-User`, `Google-Extended`, `Applebot-Extended` y `CCBot`. Deja un comentario indicando qué línea cambiar si Tania decide bloquear el entrenamiento.
- **Contenido citable:** cada página abre con una respuesta autocontenida, usa hechos concretos (presentación, precio, modo de uso, zona de entrega), H2/H3 formulados como preguntas reales, listas y tablas sencillas, y definiciones en una frase.
- **Consistencia de entidad (NAP+):** el mismo nombre ("Organic Beauty"), fundadora ("Tania"), ciudad y descripción corta en el sitio, el schema, el `llms.txt`, las redes, Mercado Libre, TikTok Shop y Google Business Profile. Genera `docs/consistencia-de-entidad.md` con el texto canónico para copiarlo en cada plataforma.
- **HTML renderizado del lado del servidor** (SSG): todo el contenido es legible sin JavaScript.
- Una página `/sobre-tania/` con una biografía real, que da autoridad y una entidad `Person` para el grafo.

---

## 10. Conversión desde redes sociales

- **UTM:** documenta en `docs/utm.md` una convención (`utm_source=instagram|facebook|tiktok|youtube|linkedin`, `utm_medium=social|bio|story|video`, `utm_campaign=...`) y un enlace listo para la bio de cada red.
- **Enlaces de compra:** se generan desde una sola función/config. Si la plataforma lo admite, se reenvían los parámetros de campaña (p. ej. el parámetro de afiliados o seguimiento de Mercado Libre, si Tania lo tiene). Los enlaces externos llevan `rel="noopener"` y se abren en la misma pestaña en móvil para no romper el flujo de las apps.
- **Evento de analítica** en cada clic de compra: `select_promotion` / `click_buy` con `platform: mercadolibre|tiktokshop`, `placement: hero|sticky|pdp|footer` y el `utm_source` de la sesión. Se envía a GA4, Meta Pixel (`InitiateCheckout` o un evento personalizado) y TikTok Pixel (`ClickButton`).
- **Banner de consentimiento** ligero y cumplimiento de la LFPDPPP: los píxeles no se cargan hasta que haya consentimiento, y el aviso de privacidad está enlazado.
- **Navegadores dentro de apps** (Instagram, TikTok, Facebook): prueba que los enlaces a Mercado Libre y TikTok Shop abran correctamente. En TikTok, prioriza el botón de TikTok Shop si se detecta su user-agent; en el resto se muestran ambos, con Mercado Libre primero.
- Las imágenes OG por página están optimizadas para cuando el enlace se comparte por WhatsApp.

---

## 11. Entregables

1. Proyecto Astro funcional en la raíz del repo, con `README.md` (instalar, desarrollar, construir, desplegar y cómo agregar un artículo o producto).
2. Todas las páginas de §6 con contenido real del brief o marcadores `{{FALTA}}` claros.
3. Componentes: `Header`, `Footer`, `Hero`, `BuyButtons`, `StickyBuyBar`, `BenefitCard`, `IngredientList`, `HowToUse`, `ReviewCard`, `FaqAccordion`, `FounderCard`, `Breadcrumbs`, `LeafDivider`, `SeoHead`, `JsonLd`.
4. `src/config/site.ts` como **única fuente de verdad** de marca, enlaces, redes y analítica, alimentada por el brief.
5. `docs/TABLERO.md` (datos faltantes), `docs/consistencia-de-entidad.md`, `docs/utm.md` y `docs/checklist-lanzamiento.md` (Search Console, Bing, IndexNow, Google Business Profile, verificación de píxeles).
6. CI en GitHub Actions: build, chequeo de tipos, verificación de enlaces y Lighthouse CI con los presupuestos de §8.

---

## 12. Criterios de aceptación (QA)

- [ ] Lighthouse móvil ≥ 95 en Rendimiento, Accesibilidad, Buenas prácticas y SEO, en `/`, la PDP y un artículo.
- [ ] Todas las páginas validan en el Rich Results Test y en el Schema Markup Validator, sin errores.
- [ ] `/llms.txt`, `/robots.txt` y `/sitemap-index.xml` responden 200 y son coherentes entre sí.
- [ ] El contenido es visible con JavaScript desactivado.
- [ ] La proporción visual aproximada es de 80 % blanco, 10 % rosa y 10 % verde hoja (revisada con captura de pantalla de cada página).
- [ ] En móvil (390×844) el CTA de compra está visible en la primera pantalla y la barra fija aparece después del hero.
- [ ] No queda ninguna afirmación médica prohibida (§4): se verifica con una búsqueda de `cura|elimina|garantiza|100%|trata` en el contenido.
- [ ] Ningún dato inventado: cada `{{FALTA}}` está listado en `docs/TABLERO.md`.
- [ ] Los eventos de clic de compra se disparan correctamente (verificado con GA4 DebugView y Tag Assistant).
- [ ] Los enlaces de compra funcionan desde el navegador interno de Instagram y de TikTok.

---

## 13. Forma de trabajo

1. **Antes de escribir código**, revisa el brief (§0), lista las preguntas y datos faltantes, y **espera confirmación**.
2. Propón primero un **wireframe en texto** de la landing y la PDP y el **mapa de keywords** final; espera aprobación.
3. Construye por fases, con un commit por fase:
   1. Base del proyecto y sistema de diseño.
   2. Landing.
   3. PDP.
   4. Hub y artículos plantilla.
   5. SEO técnico, schema y `llms.txt`.
   6. Analítica y consentimiento.
   7. QA y CI.
4. Al terminar cada fase, reporta qué se hizo, qué falta y los resultados de Lighthouse.
