import { useCallback, useEffect, useState } from 'react';
import { createArtist, deleteArtist, getArtists } from './api/artists';
import { createPainting, deletePainting, getPaintings } from './api/paintings';
import type { Artist, ArtistPayload } from './types/artist';
import type { Painting, PaintingPayload } from './types/painting';
import ArtistForm from './components/ArtistForm';
import ArtistList from './components/ArtistList';
import PaintingForm from './components/PaintingForm';
import PaintingList from './components/PaintingList';
import ErrorBanner from './components/ErrorBanner';

export default function App() {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [paintings, setPaintings] = useState<Painting[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const [artistData, paintingData] = await Promise.all([getArtists(), getPaintings()]);
      setArtists(artistData);
      setPaintings(paintingData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to load data.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadData();
  }, [loadData]);

  const submitArtist = async (payload: ArtistPayload) => {
    await createArtist(payload);
    await loadData();
  };

  const submitPainting = async (payload: PaintingPayload) => {
    await createPainting(payload);
    await loadData();
  };

  const removeArtist = async (id: number) => {
    await deleteArtist(id);
    await loadData();
  };

  const removePainting = async (id: number) => {
    await deletePainting(id);
    await loadData();
  };

  return (
    <main className="container">
      <header>
        <h1>Art Gallery</h1>
        <p>Manage artists and their paintings.</p>
      </header>

      {error && <ErrorBanner message={error} />}
      {loading ? (
        <p className="loading">Loading gallery...</p>
      ) : (
        <>
          <section className="grid two-col">
            <ArtistForm onSubmit={submitArtist} />
            <PaintingForm artists={artists} onSubmit={submitPainting} />
          </section>
          <section className="grid two-col">
            <ArtistList artists={artists} onDelete={removeArtist} />
            <PaintingList paintings={paintings} onDelete={removePainting} />
          </section>
        </>
      )}
    </main>
  );
}
