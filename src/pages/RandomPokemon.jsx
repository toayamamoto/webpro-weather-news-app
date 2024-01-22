// src/components/RandomPokemon.js

import React, { useState, useEffect } from 'react';
import './RandomPokemon.css'; // スタイルを追加

const RandomPokemon = () => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchRandomPokemon = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + getRandomPokemonId());
        if (!response.ok) {
          throw new Error('Failed to fetch random Pokemon');
        }
        const data = await response.json();
        setPokemon(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchRandomPokemon();
  }, []);

  const getRandomPokemonId = () => {
    return Math.floor(Math.random() * 898) + 1;
  };

  return (
    <div className="random-pokemon-container">
      <h1>ポケモン</h1>
      {pokemon && (
        <div className="pokemon-info">
          <h2>{pokemon.name}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <p>Height: {pokemon.height}</p>
          <p>Weight: {pokemon.weight}</p>
        </div>
      )}
    </div>
  );
};

export default RandomPokemon;
