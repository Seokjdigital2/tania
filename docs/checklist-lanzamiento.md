# Checklist de lanzamiento

## Antes de quitar el modo pre-lanzamiento
- [ ] Sin datos ⬜ urgentes en `docs/TABLERO.md` (secciones 1 a 3)
- [ ] Todos los textos "provisional" reemplazados: `grep -ri "provisional\|ejemplo" src/`
- [ ] Revisión de lenguaje cosmético, sin afirmaciones médicas: `grep -riE "cura|elimina|garantiza|100 ?%|trata " src/content src/data src/pages`
- [ ] Aviso de privacidad y términos revisados
- [ ] Logotipo en SVG integrado
- [ ] Dominio y `SITE_URL` actualizados

## Lanzamiento
- [ ] `prelaunch: false` en `src/config/site.ts`
- [ ] Desplegar en Vercel o Netlify y conectar el dominio con HTTPS
- [ ] Google Search Console: verificar y enviar `sitemap-index.xml`
- [ ] Bing Webmaster Tools: verificar, enviar el sitemap y activar IndexNow (DuckDuckGo y Yahoo usan el índice de Bing)
- [ ] Validar con el Rich Results Test (inicio, crema, un artículo y preguntas frecuentes)
- [ ] Revisar que `/robots.txt`, `/llms.txt` y `/sitemap-index.xml` respondan
- [ ] Lighthouse en móvil ≥ 95 en inicio, crema y un artículo
- [ ] Probar los botones de compra desde los navegadores internos de Instagram y TikTok
- [ ] Verificar los eventos `click_buy` en GA4 DebugView y Meta Events Manager
- [ ] Copiar el texto canónico (`docs/consistencia-de-entidad.md`) en todas las plataformas
- [ ] Poner los enlaces UTM en la bio de cada red (`docs/utm.md`)
