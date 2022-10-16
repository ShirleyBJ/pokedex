import React from "react";
import { useQuery } from "react-query";
import { useState } from "react";
import {useSearchParams, createSearchParams} from "react-router-dom"

import SearchBar from "./SearchBar";
import Lists from "./Lists";
import Loader from "./Loader"

function PokemonsList() {

  const { isLoading, data, error } = useQuery("pokemonUrl", () =>
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((res) =>res.json())
  );

  //Filtering pokemon data
  const [value, setValue] = useState("");
  const [filteredPokemon, setFilteredPokemon] = useState();
  const [params, setParams] = useSearchParams();

  const handleChange = (e) => {
    setValue(e.target.value);
    setParams(createSearchParams({search : e.target.value}));
    setFilteredPokemon(
      data.results.filter((pokemon, index) =>
        pokemon.name.includes(e.target.value.toLowerCase())
      )
    );
  };

  if(isLoading) return (
    <Loader/>
  )

  if (error) return "An error has occured " + error.message;

  return (
    <>
      <SearchBar handleChange={handleChange} value={value} />
      <Lists data={data} filteredPokemon={filteredPokemon}/>
    </>
  );
}

export default PokemonsList;
