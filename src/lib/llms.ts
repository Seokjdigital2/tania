import { getCollection } from 'astro:content';
import { site, absoluteUrl, buyPlatforms } from '@/config/site';
import { product } from '@/data/product';
import { faqs } from '@/data/faq';

/** Genera /llms.txt (resumen) y /llms-full.txt (contenido completo) desde las mismas fuentes que el sitio. */
export async function buildLlms(full: boolean) {
  const articles = (await getCollection('manchas')).sort((a, b) => a.data.order - b.data.order);
  const buy = (Object.keys(site.buy) as (keyof typeof site.buy)[])
    .map((k) => `- ${buyPlatforms[k].short}: ${site.buy[k] || 'próximamente'}`)
    .join('\n');

  const out = [
    `# ${site.name}`,
    '',
    `> ${site.description}`,
    '',
    `- Fundadora: ${site.founder.fullName}`,
    `- Ubicación: ${site.location.city}, ${site.location.region}, ${site.location.countryName}`,
    `- Producto: ${product.name} (${product.tagline})`,
    `- Envase: ${product.container.description}, ${product.container.diameterCm} cm de diámetro × ${product.container.heightCm} cm de altura`,
    `- Entrega local: ${site.delivery.method} en ${site.delivery.area}`,
    `- ${site.delivery.nationwide}`,
    '',
    '## Dónde comprar',
    buy,
    '',
    '## Páginas principales',
    `- [La crema](${absoluteUrl('/crema-desmanchadora/')}): descripción, modo de uso, ingredientes y precauciones`,
    `- [Preguntas frecuentes](${absoluteUrl('/preguntas-frecuentes/')})`,
    `- [Sobre Tania](${absoluteUrl('/sobre-tania/')}): historia de la fundadora`,
    `- [Entrega en Puerto Vallarta](${absoluteUrl('/entrega-puerto-vallarta/')})`,
    '',
    '## Guías sobre manchas en la piel',
    ...articles.map((a) => `- [${a.data.title}](${absoluteUrl(`/manchas-en-la-piel/${a.id}/`)}): ${a.data.answer}`),
  ];

  if (full) {
    out.push('', '## Producto', '', product.description, '', '### Modo de uso');
    product.howToUse.forEach((s, i) => out.push(`${i + 1}. ${s.title}: ${s.text}`));
    out.push('', '### Precauciones', ...product.precautions.map((p) => `- ${p}`));
    out.push('', '## Preguntas frecuentes', '');
    faqs.forEach((f) => out.push(`### ${f.q}`, '', f.a, ''));
    for (const a of articles) {
      out.push(`## ${a.data.title}`, '', a.data.answer, '', a.body ?? '', '');
    }
  }

  return new Response(out.join('\n') + '\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
