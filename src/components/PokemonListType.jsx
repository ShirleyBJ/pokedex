import React, {useState} from "react";
import { useQuery } from "react-query";

import "./BadgeType.scss";
import BadgeListType from './BadgeListType'
import ListsType from './ListsType'

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import {useMainContext} from "../contexts/Main";


function PokemonListType() {
  //Filtering pokemon by typeList
  const [value, setValue] = useState("");
  const [filteredPokemonType, setFilteredPokemonType] = useState();

  //Context
  const {allPokemon} = useMainContext();

  //Search Type function 
  const searchByType = (e) => {
    setValue(e);

    setFilteredPokemonType(
      // allPokemon.filter((pokemon, index) => pokemon.types.includes(e).toLowerCase())
    )
  }
  console.log(value)

  return (
    <Container>
      <Box sx={{textAlign: "center", m:5}}>
      <h1> Pokémon's types</h1>
      </Box>
      <BadgeListType searchByType={searchByType}/>
      <ListsType/>
    </Container>
  );
}

export default PokemonListType;
