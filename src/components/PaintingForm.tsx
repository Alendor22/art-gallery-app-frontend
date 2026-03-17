import { useState } from 'react';
import type { Artist } from '../types/artist';
import type { PaintingPayload } from '../types/painting';

type PaintingFormProps = {
  artists: Artist[];
  onSubmit: (payload: PaintingPayload) => Promise<void>;
};

export default function PaintingForm({ artists, onSubmit }: PaintingFormProps) {
  const [title, setTitle] = useState('');
  const [style, setStyle] = useState('');
  const [price, setPrice] = useState('');
  const [url, setUrl] = useState('');
  const [artistId, setArtistId] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await onSubmit({
      title: title.trim(),
      style: style.trim(),
      price: Number(price),
      url: url.trim(),
      artist_id: Number(artistId)
    });
    setTitle('');
    setStyle('');
    setPrice('');
    setUrl('');
    setArtistId('');
  };

  return (
    <form className="card form" onSubmit={handleSubmit}>
      <h2>Add Painting</h2>
      <label>
        Title
        <input value={title} onChange={(e) => setTitle(e.target.value)} required />
      </label>
      <label>
        Style
        <input value={style} onChange={(e) => setStyle(e.target.value)} required />
      </label>
      <label>
        Price
        <input value={price} onChange={(e) => setPrice(e.target.value)} type="number" min={0} step="0.01" required />
      </label>
      <label>
        Image URL
        <input value={url} onChange={(e) => setUrl(e.target.value)} type="url" required />
      </label>
      <label>
        Artist
        <select value={artistId} onChange={(e) => setArtistId(e.target.value)} required>
          <option value="" disabled>
            Select an artist
          </option>
          {artists.map((artist) => (
            <option key={artist.id} value={artist.id}>
              {artist.name}
            </option>
          ))}
        </select>
      </label>
      <button type="submit">Create Painting</button>
    </form>
  );
}
