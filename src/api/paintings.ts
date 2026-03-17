import { request } from './client';
import type { Painting, PaintingPayload } from '../types/painting';

export const getPaintings = (): Promise<Painting[]> => request<Painting[]>('/v1/paintings');

export const createPainting = (payload: PaintingPayload): Promise<Painting> =>
  request<Painting>('/v1/paintings', {
    method: 'POST',
    body: JSON.stringify(payload)
  });

export const deletePainting = (id: number): Promise<void> =>
  request<void>(`/v1/paintings/${id}`, {
    method: 'DELETE'
  });
