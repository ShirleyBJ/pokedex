import { Container, Box } from "@mui/material";
import React, {useEffect, useState} from 'react';

import Pokemon from "./Pokemon";

function Lists({ data , filteredPokemon = [], params}){
  if (filteredPokemon.length === 0) { 
    filteredPokemon = data.results
  }

const getPokemonInitialState = () => {
  const pokemon = JSON.parse(localStorage.getItem('pokemons'));
  if (pokemon) {
    return pokemon;
  } else {
    return [];
  }
}
const [pokemonStored, setPokemonStored] = useState(getPokemonInitialState);

  const addFavorites = (e) => {
    const ifExists = pokemonStored.findIndex((pokemon) => pokemon.id === e.id);
    if (ifExists === -1) {
      setPokemonStored([...pokemonStored, e]);
    }
  }

  useEffect(() => {
    localStorage.setItem('pokemons', JSON.stringify(pokemonStored));
  }, [pokemonStored]);

    return (
      <>
        <Container
          sx={{
            boxShadow: 3,
            maxWidth: "lg",
            minHeight: "78vh",
            boxSizing: "border-box",
            bgcolor: (theme) =>
              theme.palette.mode === "dark" ? "#101010" : "#fff",
            color: (theme) =>
              theme.palette.mode === "dark" ? "grey.300" : "grey.800",
            p: 1,
            m: "0 auto",
            borderRadius: 2,
            textAlign: "center",
            fontSize: "0.875rem",
            fontWeight: "700",
          }}
        >
          <h1> Pokemon List </h1>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {filteredPokemon.map((pokemon, index) => (
              <Pokemon
                key={index}
                pokemonName={pokemon.name}
                pokemonUrl={pokemon.url}
                addFavorites={addFavorites}
              />
            ))}
          </Box>
        </Container>
      </>
    );
}

export default Lists;