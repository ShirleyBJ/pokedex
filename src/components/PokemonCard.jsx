import BadgeType from "./BadgeType";
import BadgeAbilities from "./BadgeAbilities";
import Badge from "./Badge";
import CardSubtitle from "./CardTitle";
import StatBar from "./StatBar";

import * as React from "react";
import { useQuery } from "react-query";
import { Link, useLocation} from 'react-router-dom'

import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

//TODO: use function convert on height and weight
function PokemonCard() {
  const location = useLocation();
  const pokemonName = location.state;
  console.log(pokemonName);

  const { isLoading, data, error } = useQuery("detailsPokemon", () =>
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((res) =>
      res.json()
    )
  );

  if(isLoading) return 'Loading...'

  if(error) return 'An error occurred ' + error.message
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="240"
        image="https://resize-gulli.jnsmedia.fr/r/890,__ym__/img//var/jeunesse/storage/images/gulli/chaine-tv/dessins-animes/pokemon/pokemon/pikachu/26571681-1-fre-FR/Pikachu.jpg"
        alt=""
      />
      <CardContent>
        <Typography gutterBottom variant="subtitle">
          #{data.id}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {pokemonName}
        </Typography>
        <BadgeType typeList={data}/>
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
            <Badge height = {data.height} />
          </div>
          <div>
            <CardSubtitle title="Weight" />
            <Badge weight = {data.weight} />
          </div>
        </Box>
        <CardSubtitle title="Stats" />
        <StatBar stats={98} statTitle="HP" />
        <StatBar stats={55} statTitle="Attaque" />
        <StatBar stats={88} statTitle="Défense" />
      </CardContent>
      <Box><Link to="/pokemonList">Back to List</Link></Box>
    </Card>
  );
}

export default PokemonCard;
