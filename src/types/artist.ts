import type { Painting } from './painting';

export type Artist = {
  id: number;
  name: string;
  age: number;
  gender: string;
  paintings?: Painting[];
};

export type ArtistPayload = {
  name: string;
  age: number;
  gender: string;
};
