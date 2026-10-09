// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Dominio definitivo: cambiar aquí y en src/config/site.ts (ver docs/TABLERO.md).
const SITE_URL = 'https://www.organicbeauty.mx';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      // /distribuidores/ queda fuera hasta activar la fase 5 (escalamiento).
      filter: (page) => !page.includes('/distribuidores/'),
    }),
  ],
});
