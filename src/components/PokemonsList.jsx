import React from "react";
import { useQuery } from "react-query";
import { useState } from "react";

import SearchBar from './SearchBar';
import Lists from './Lists'


function PokemonsList() {
  const { isLoading, data, error } = useQuery("pokemonUrl", () =>
  fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  .then((res) => res.json())
);

//Filtering pokemon data
const [value, setValue] = useState('');

const [filteredPokemon, setFilteredPokemon] = useState(data);

const handleChange = (e) => {
  setValue(e.target.value)
  setFilteredPokemon(
    data.results.filter((pokemon, index)=>pokemon.name.toLowerCase().includes(e.target.value))
  )
}

if (isLoading) return 'Loading...'

if(error) return 'An error has occured' + error.message

  return (
    <>
      <SearchBar handleChange={handleChange} value={value}/>
      <Lists data={data} pokemonSearched={filteredPokemon}/>
    </>
  );
}

export default PokemonsList;
