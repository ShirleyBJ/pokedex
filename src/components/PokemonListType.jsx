import React, {useState} from "react";
import Lists from './Lists'
import "./BadgeType.scss";

import { useQuery } from "react-query";

import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

function PokemonListType() {
  const { isLoading, data, error } = useQuery("pokemonUrl", () =>
    fetch("https://pokeapi.co/api/v2/type/").then((res) => res.json())
  );

  //Filtering pokemon by typeList
  const [value, setValue] = useState("");
  const [filteredPokemonType, setFilteredPokemonType] = useState();

  //Search Type function 
  const searchByType = (e) => {
    setValue(e);
    setFilteredPokemonType(
      data.results.filter((pokemon, index) => pokemon.types.includes(e).toLowerCase())
    )
  }

  console.log(value);
  console.log(filteredPokemonType);

  if (isLoading) return "Loading...";

  if (error) return "An error has occured " + error.message;

  return (
    <Container>
      <Box sx={{textAlign: "center"}}>
      <h1> Pokémon's types</h1>
      <Paper elevation={3} sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
        {data.results.map((type, index) => (
          <Chip
            className={`badge-type--${type.name}`}
            key={index}
            label={type.name}
            sx={{
              m: 0.5,
            }}
            onClick={()=>searchByType(type.name)}
          />
        ))}
      </Paper>
      </Box>
    </Container>
  );
}

export default PokemonListType;
