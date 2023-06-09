import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { CharactersCard } from '../../components/characters-card';
import styles from "../../styles/Home.module.css";

export default function CharacterProfile() {
  const router = useRouter();
  const [data, setData] = useState({});
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchEpisodeData = async () => {
      if (router.query.pid) {
        const response = await fetch(`https://rickandmortyapi.com/api/episode/${router.query.pid}`);
        const episodeData = await response.json();
        console.log(episodeData);
        setData(episodeData);
      }
    };

    fetchEpisodeData();
  }, [router.query]);

  useEffect(() => {
    const fetchCharacterData = async () => {
      if (data.characters?.length > 0) {
        const promises = data.characters.map((character) => {
          const characterId = character.split('/character/')[1];
          return fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
            .then((res) => res.json());
        });

        const charactersData = await Promise.all(promises);
        setCharacters(charactersData);
      }
    };

    fetchCharacterData();
  }, [data]);

  return (
    <>
      <Head>
        <title>{data.name}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        alignItems: 'center'
      }}>
        <button onClick={router.back}>GO BACK</button>
        <h1>{data.name}</h1>
        <div style={{
          display: 'grid',
          gridColumn: 2,
          gap: '10px',
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            alignItems: 'center'
          }}>
            <h3>Information</h3>
            <h3>Cast</h3>
          </div>
          <div style={{
            display: 'grid',
            flexDirection: 'column',
            gap: '10px',
            gridTemplateColumns: 'repeat(4, 1fr)'
          }}>
            {characters.map((character, index) => (
              <Link href={`/characters/${character.id}`} key={index}>
                <CharactersCard
                  name={character.name}
                  species={character.species}
                  image={character.image}
                />
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}