import { Container, Box } from "@mui/material";
import React from "react";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

import Pokemon from "./Pokemon";

function ListsType({ valueFilteredType }) {
  console.log(valueFilteredType)
  if (valueFilteredType === "" || valueFilteredType === undefined || valueFilteredType.pokemon.length === 0) {
    return (
      <>
      </>
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
            />
          ))}
        </Box>
      </Container>
    </>
  );
}

export default ListsType;
