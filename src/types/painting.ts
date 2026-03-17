import type { Artist } from './artist';

export type Painting = {
  id: number;
  title: string;
  style: string;
  price: number;
  url: string;
  artist_id: number;
  artist?: Artist;
};

export type PaintingPayload = {
  title: string;
  style: string;
  price: number;
  url: string;
  artist_id: number;
};
