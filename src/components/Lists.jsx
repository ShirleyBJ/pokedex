import { Container, Box } from "@mui/material";

import Pokemon from "./Pokemon";

function Lists({ data , filteredPokemon = []}){
  if (filteredPokemon.length === 0) {
    <h1>"No pokemon found."</h1>
    filteredPokemon = data.results
  }

  console.log("data - List", data);
  console.log("data filtered - List", filteredPokemon);

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
              />
            ))}
          </Box>
        </Container>
      </>
    );
}

export default Lists;