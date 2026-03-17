import { useState } from 'react';
import type { ArtistPayload } from '../types/artist';

type ArtistFormProps = {
  onSubmit: (payload: ArtistPayload) => Promise<void>;
};

export default function ArtistForm({ onSubmit }: ArtistFormProps) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await onSubmit({
      name: name.trim(),
      age: Number(age),
      gender: gender.trim()
    });
    setName('');
    setAge('');
    setGender('');
  };

  return (
    <form className="card form" onSubmit={handleSubmit}>
      <h2>Add Artist</h2>
      <label>
        Name
        <input value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <label>
        Age
        <input value={age} onChange={(e) => setAge(e.target.value)} type="number" min={1} required />
      </label>
      <label>
        Gender
        <input value={gender} onChange={(e) => setGender(e.target.value)} required />
      </label>
      <button type="submit">Create Artist</button>
    </form>
  );
}
