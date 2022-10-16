import React, {useState,useEffect} from "react";

import "./BadgeType.scss";
import BadgeListType from './BadgeListType'
import ListsType from './ListsType'

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

function PokemonListType() {
  //Filtering pokemon by typeList
  const [valueType, setValueType] = useState("");
  const [valueFilteredType, setValueFilteredType] = useState("");

  //Search Type function 
  const searchByType = (e) => {
    setValueType(e);
    getPokemonByType(e);
  }

  const getPokemonByType = async (valueType) => {
    const response = await fetch(`https://pokeapi.co/api/v2/type/${valueType}`);
    const results = await response.json();
    setValueFilteredType(results);
  }

  return (
    <Container>
      <Box sx={{textAlign: "center", m:5}}>
      <h1> Pokémon's types</h1>
      </Box>
      <BadgeListType searchByType = {searchByType}/>
      <ListsType valueFilteredType={valueFilteredType} valueSelected={valueType}/>
    </Container>
  );
}

export default PokemonListType;
