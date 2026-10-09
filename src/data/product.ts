/**
 * Datos del producto. Casi todo es PROVISIONAL hasta que Tania lo confirme
 * (ver docs/TABLERO.md). No publicar afirmaciones médicas: solo lenguaje
 * cosmético ("ayuda a atenuar la apariencia de…").
 */

export const formatMXN = (n: number) => `$${n.toLocaleString('es-MX')} MXN`;

export const product = {
  slug: 'crema-desmanchadora',
  name: 'Crema desmanchadora Beauty Organic', // PROVISIONAL
  shortName: 'Crema Beauty Organic',
  // PROVISIONAL
  tagline: 'Para cara y cuerpo',
  // PROVISIONAL
  description:
    'Crema de uso diario para cara y cuerpo que ayuda a atenuar la apariencia de manchas y a lucir un tono más uniforme y luminoso con uso constante.',

  netContent: '', // PENDIENTE: p. ej. "100 g"
  /** Dato real tomado de la ficha técnica del envase. */
  container: { diameterCm: 8, heightCm: 6, description: 'Tarro blanco con tapa de domo' },

  /** Precio por pieza (confirmado por Tania). */
  priceMXN: 450 as number | null,
  sku: '', // PENDIENTE
  gtin: '', // PENDIENTE: código de barras EAN/UPC si existe
  inci: '', // PENDIENTE: lista INCI completa
  cofepris: '', // PENDIENTE: aviso de funcionamiento / registro si aplica

  // PROVISIONAL: solo nombres de posición, NO inventar ingredientes reales
  keyIngredients: [
    { name: 'Ingrediente clave 1', text: 'Descripción provisional: qué aporta este ingrediente a la piel.' },
    { name: 'Ingrediente clave 2', text: 'Descripción provisional: qué aporta este ingrediente a la piel.' },
    { name: 'Ingrediente clave 3', text: 'Descripción provisional: qué aporta este ingrediente a la piel.' },
  ],

  // PROVISIONAL
  benefits: [
    { title: 'Tono más uniforme', text: 'Ayuda a atenuar la apariencia de manchas con uso constante.' },
    { title: 'Cara y cuerpo', text: 'Una sola crema para rostro, axilas, codos, rodillas y entrepierna.' },
    { title: 'Textura ligera', text: 'Se absorbe rápido y deja la piel suave, sin sensación grasosa.' },
    { title: 'Hecha en México', text: 'Creada en Puerto Vallarta con cuidado artesanal.' },
  ],

  // PROVISIONAL
  howToUse: [
    { title: 'Limpia', text: 'Lava y seca la zona antes de aplicar.' },
    { title: 'Aplica', text: 'Distribuye una capa delgada con masaje suave hasta absorber, una o dos veces al día.' },
    { title: 'Protege', text: 'Por la mañana usa protector solar: es la clave para que las manchas no regresen.' },
  ],

  skinTypes: 'Por confirmar', // PENDIENTE
  resultsTime: 'Por confirmar', // PENDIENTE: p. ej. "4 a 8 semanas con uso constante"
  // PROVISIONAL
  precautions: [
    'Haz una prueba en una zona pequeña antes del primer uso.',
    'Evita el contacto con los ojos y mucosas.',
    'Suspende su uso si presentas irritación.',
    'Usa protector solar durante el día.',
  ],
} as const;

/** Zonas y tipos de mancha; cada una enlaza a su artículo del hub. */
export const concerns = [
  { slug: 'manchas-por-sol', title: 'Manchas por sol', text: 'Pequeñas manchas que aparecen tras años de exposición solar.' },
  { slug: 'melasma-y-pano', title: 'Melasma y paño', text: 'Manchas en mejillas, frente o labio superior.' },
  { slug: 'axilas-oscuras', title: 'Axilas oscuras', text: 'Por rasurado, fricción o desodorantes.' },
  { slug: 'codos-y-rodillas-oscuras', title: 'Codos y rodillas', text: 'Zonas de roce que tienden a oscurecerse.' },
] as const;
