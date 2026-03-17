import type { Painting } from '../types/painting';

type PaintingListProps = {
  paintings: Painting[];
  onDelete: (id: number) => Promise<void>;
};

export default function PaintingList({ paintings, onDelete }: PaintingListProps) {
  return (
    <section className="card">
      <h2>Paintings</h2>
      <div className="list-grid paintings-grid">
        {paintings.map((painting) => (
          <article className="item" key={painting.id}>
            <img alt={painting.title} src={painting.url} />
            <h3>{painting.title}</h3>
            <p>Style: {painting.style}</p>
            <p>Price: ${painting.price}</p>
            <p>Artist: {painting.artist?.name ?? 'Unknown'}</p>
            <button onClick={() => onDelete(painting.id)} type="button">
              Delete
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
