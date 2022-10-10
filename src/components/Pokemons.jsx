import React from "react";
import { Container, Box } from "@mui/material";
import Pokemon from "./Pokemon";
import PokemonCard from "./PokemonCard";

function AllPokemon() {
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
            justifyContent: "space-between",
          }}
        >
          <Pokemon/>
          <PokemonCard />
        </Box>
      </Container>
    </>
  );
}

export default AllPokemon;
