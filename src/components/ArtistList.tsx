import type { Artist } from '../types/artist';

type ArtistListProps = {
  artists: Artist[];
  onDelete: (id: number) => Promise<void>;
};

export default function ArtistList({ artists, onDelete }: ArtistListProps) {
  return (
    <section className="card">
      <h2>Artists</h2>
      <div className="list-grid">
        {artists.map((artist) => (
          <article className="item" key={artist.id}>
            <h3>{artist.name}</h3>
            <p>Age: {artist.age}</p>
            <p>Gender: {artist.gender}</p>
            <button onClick={() => onDelete(artist.id)} type="button">
              Delete
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
