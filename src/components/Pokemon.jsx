import React from "react";
import {Link} from "react-router-dom";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import StarBorderIcon from '@mui/icons-material/StarBorder';

//TODO: Put first letter of the name in upperCase
//TODO: Pass id/name in the link by slug 
//TODO: Create fonction to handle click - add to localStorage

function Pokemon({pokemonName,pokemonUrl}) {
  //Get ID from the url 
  const url = pokemonUrl.split('/');
  const pokemonID = url[6];

  const addFavorites = (e) => {
    console.log(e.target);
    console.log("Add to favorites");
  }

  return (
    <div>
      <Card
        sx={{
          m: 1,
        }}
      >
        <CardMedia
          component="img"
          width="250px"
          height="250px"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonID}.svg`}
          alt=""
        />
        <CardContent>
          <Typography variant="subtitle">#{pokemonID}</Typography>
          <Typography gutterBottom variant="h5" component="div">
            {pokemonName}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <StarBorderIcon
            color="secondary"
            data-testid={pokemonID.toString()}
            data-name={pokemonName.toString()}
            onClick={addFavorites}
          />
          <Button
            size="25px"
            color="secondary"
            fontWeight="bolder"
            padding="5px"
            endIcon={<DoubleArrowIcon />}
          >
            <Link to="/pokemonCard" state={pokemonName}>
              Détails
            </Link>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}


export default Pokemon;
