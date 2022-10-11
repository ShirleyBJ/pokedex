import React from "react";
import { useQuery } from "react-query";

import { Container, Box } from "@mui/material";

import Pokemon from "./Pokemon";
import SearchBar from './SearchBar';

//TDODO: filtering of pokemon by name
function PokemonsList() {
  const { isLoading, data, error } = useQuery("pokemonUrl", () =>
  fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  .then((res) => res.json())
);

if (isLoading) return 'Loading...'

if(error) return 'An error has occured' + error.message

  return (
    <>
      <SearchBar />
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
          {data.results.map((pokemon, index) => (
            <Pokemon key={index} pokemonName={pokemon.name} pokemonUrl={pokemon.url} />
          ))}
        </Box>
      </Container>
    </>
  );
}

export default PokemonsList;
