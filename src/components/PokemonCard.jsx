import BadgeType from "./BadgeType";
import BadgeAbilities from "./BadgeAbilities";
import Badge from "./Badge";
import CardSubtitle from "./CardTitle";
import StatBar from "./StatBar";

import * as React from "react";
import { useQuery } from "react-query";
import { Link, useLocation, useParams} from 'react-router-dom'

import { Box, Card, CardContent, CardMedia, Typography , Button} from "@mui/material";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

function PokemonCard() {
  const location = useLocation();
  const pokemonName = location.state;

    //Use params from url
    const {pokemonParamsName} = useParams();

  const { isLoading, data, error } = useQuery("detailsPokemon", () =>
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName == null ? pokemonParamsName : pokemonName}`)
    .then((res) =>
      res.json()
    )
  );

  if(isLoading) return 'Loading...'

  if(error) return 'An error occurred ' + error.message


  //Function to convert weight into kilograms
const convertToKilogram = (weight) => {
  let weightKilogram = weight * 0.1;
  return weightKilogram ;
}

//Function to convert height into centimeter
const convertToCentimeter= (height) =>{
  let heightToCentimeter = height * 10 ;
  return heightToCentimeter;
}

  return (
    <Card
      sx={{
        maxWidth: "30%",
      }}
    >
      <CardMedia
        component="img"
        objectfit="cover"
        image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
        alt=""
      />
      <CardContent sx={{ textAlign: "center" }}>
        <Typography gutterBottom variant="subtitle">
          #{data.id}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {pokemonName}
        </Typography>
        <BadgeType typeList={data} />
        <Typography variant="body2" color="text.secondary">
          Description Pokémon
        </Typography>
        <CardSubtitle title="Abilities" />
        <BadgeAbilities abilitiesList={data} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div>
            <CardSubtitle title="Height" />
            <Badge height={convertToCentimeter(data.height)} />
          </div>
          <div>
            <CardSubtitle title="Weight" />
            <Badge weight= {convertToKilogram(data.weight)} />
          </div>
        </Box>
        <CardSubtitle title="Stats" />
        <StatBar statsDetails={data} />
      </CardContent>
      <Box sx={{width: '100%', textAlign: 'center'}}>
        <Link to="/pokemonList"><Button variant="text"><KeyboardReturnIcon sx={{mr:1}}/> Back to Pokemon List</Button></Link>
      </Box>
    </Card>
  );
}

export default PokemonCard;
