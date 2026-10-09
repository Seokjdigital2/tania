# Convención de UTM para redes sociales

Cada enlace que se publica en redes debe llevar parámetros UTM para saber de qué red viene cada visita y cada clic en "Comprar".

```
https://www.beautyorganic.mx/?utm_source=<red>&utm_medium=<formato>&utm_campaign=<campaña>
```

| Parámetro | Valores |
|---|---|
| `utm_source` | `instagram` · `facebook` · `tiktok` · `youtube` · `linkedin` · `whatsapp` |
| `utm_medium` | `bio` · `post` · `story` · `video` · `short` · `reel` · `ads` |
| `utm_campaign` | en minúsculas y con guiones, p. ej. `lanzamiento-2026`, `promo-dia-madres` |

## Enlaces listos para la bio

| Red | Enlace |
|---|---|
| Instagram | `https://www.beautyorganic.mx/?utm_source=instagram&utm_medium=bio&utm_campaign=siempre` |
| TikTok | `https://www.beautyorganic.mx/?utm_source=tiktok&utm_medium=bio&utm_campaign=siempre` |
| Facebook | `https://www.beautyorganic.mx/?utm_source=facebook&utm_medium=bio&utm_campaign=siempre` |
| YouTube | `https://www.beautyorganic.mx/?utm_source=youtube&utm_medium=bio&utm_campaign=siempre` |
| LinkedIn | `https://www.beautyorganic.mx/?utm_source=linkedin&utm_medium=bio&utm_campaign=siempre` |

Para un video que habla de un tema concreto, enlaza directo a la guía, p. ej.:
`https://www.beautyorganic.mx/manchas-en-la-piel/axilas-oscuras/?utm_source=tiktok&utm_medium=video&utm_campaign=axilas`

## Cómo se mide

- El sitio guarda el `utm_source` de la primera visita de la sesión.
- Cada clic en un botón de compra envía el evento `click_buy` con `platform` (`mercadolibre` o `tiktokshop`), `placement` (`hero`, `sticky`, `pdp`, `article` o `final`) y `utm_source`.
- El evento llega a GA4, Meta (`ClickBuy`) y TikTok (`ClickButton`), solo si la visitante aceptó las cookies.
