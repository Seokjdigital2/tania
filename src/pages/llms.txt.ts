import type { APIRoute } from 'astro';
import { buildLlms } from '@/lib/llms';

export const GET: APIRoute = () => buildLlms(false);
