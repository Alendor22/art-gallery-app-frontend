import { request } from './client';
import type { Artist, ArtistPayload } from '../types/artist';

export const getArtists = (): Promise<Artist[]> => request<Artist[]>('/v1/artists');

export const createArtist = (payload: ArtistPayload): Promise<Artist> =>
  request<Artist>('/v1/artists', {
    method: 'POST',
    body: JSON.stringify(payload)
  });

export const deleteArtist = (id: number): Promise<void> =>
  request<void>(`/v1/artists/${id}`, {
    method: 'DELETE'
  });
