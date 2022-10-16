import React, {useState, useEffect} from "react";
import { Container, Box } from "@mui/material";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

import Pokemon from "./Pokemon";

function ListsType({ valueFilteredType, valueSelected }) {
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

    if (valueFilteredType === "" || valueFilteredType === undefined ) {
      return (
        <>
        </>
      );
    }else if( valueFilteredType.pokemon.length === 0){
    return (
      <Stack sx={{ width: '50%' }} spacing={2}>
        <Alert severity="info"><p>No pokémon found for <em>{valueSelected}</em> type. Try another type... </p></Alert>
      </Stack>
    );
    }

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
        <h1> Pokémons by type : </h1>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {valueFilteredType.pokemon.map((pokemon, index) => (
            <Pokemon
              key={index}
              pokemonName={pokemon.pokemon.name}
              pokemonUrl={pokemon.pokemon.url}
              addFavorites={addFavorites}
            />
          ))}
        </Box>
      </Container>
    </>
  );
}

export default ListsType;
