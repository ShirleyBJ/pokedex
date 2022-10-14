import React from "react";
import { useQuery } from "react-query";
import { useState } from "react";

import SearchBar from "./SearchBar";
import Lists from "./Lists";
import SelectType from "./SelectType";


function PokemonsList() {

  const { isLoading, data, error } = useQuery("pokemonUrl", () =>
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((res) =>res.json())
  );

  //Filtering pokemon data
  const [value, setValue] = useState("");
  const [filteredPokemon, setFilteredPokemon] = useState();

  const handleChange = (e) => {
    setValue(e.target.value);
    setFilteredPokemon(
      data.results.filter((pokemon, index) =>
        pokemon.name.toLowerCase().includes(e.target.value)
      )
    );
  };

  if (isLoading) return "Loading...";

  if (error) return "An error has occured " + error.message;

  return (
    <>
      <SearchBar handleChange={handleChange} value={value} />
      <SelectType/>
      <Lists data={data} filteredPokemon={filteredPokemon}/>
    </>
  );
}

export default PokemonsList;
