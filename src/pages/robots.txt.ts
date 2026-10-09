import type { APIRoute } from 'astro';
import { site } from '@/config/site';

/**
 * Se permite el rastreo a buscadores y a asistentes de IA.
 * Para bloquear solo el ENTRENAMIENTO de modelos (sin perder visibilidad en
 * respuestas), cambia a `Disallow: /` los bloques GPTBot, Google-Extended,
 * Applebot-Extended y CCBot.
 */
const bots = [
  'Googlebot',
  'Bingbot',
  'DuckDuckBot',
  'Slurp',
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot-Extended',
  'CCBot',
];

export const GET: APIRoute = () => {
  const body = [
    ...bots.map((b) => `User-agent: ${b}\nAllow: /\n`),
    'User-agent: *',
    'Allow: /',
    'Disallow: /distribuidores/',
    '',
    `Sitemap: ${new URL('/sitemap-index.xml', site.url)}`,
    '',
  ].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
