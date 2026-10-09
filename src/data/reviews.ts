/**
 * Reseñas. TODAS son de EJEMPLO y se muestran con la etiqueta "Reseña de ejemplo".
 * Reemplazar por reseñas reales (Mercado Libre, TikTok Shop o Google) con permiso
 * de la clienta y poner `example: false`. Solo las reseñas reales generan schema.
 */
export type Review = {
  author: string;
  city?: string;
  rating: number;
  text: string;
  source: 'Mercado Libre' | 'TikTok Shop' | 'Google' | 'Ejemplo';
  date?: string;
  example: boolean;
};

export const reviews: Review[] = [
  {
    author: 'Clienta 1',
    city: 'Puerto Vallarta',
    rating: 5,
    text: 'Texto de ejemplo: aquí irá una reseña real sobre la textura, el aroma y cómo se ve la piel después de unas semanas.',
    source: 'Ejemplo',
    example: true,
  },
  {
    author: 'Clienta 2',
    city: 'Guadalajara',
    rating: 5,
    text: 'Texto de ejemplo: reseña real de una clienta que la usa en axilas y codos.',
    source: 'Ejemplo',
    example: true,
  },
  {
    author: 'Clienta 3',
    city: 'CDMX',
    rating: 5,
    text: 'Texto de ejemplo: reseña real sobre la entrega y la atención.',
    source: 'Ejemplo',
    example: true,
  },
];

export const realReviews = reviews.filter((r) => !r.example);
