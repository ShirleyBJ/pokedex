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

function Pokemon({pokemonName,pokemonUrl, addFavorites}) {
  //Get ID from the url 
  const pokemonID = pokemonUrl.split("/")[6];

  //Get pokemon image
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
            onClick={() => addFavorites(
              {name : pokemonName.toString(),
              id : pokemonID.toString()
              }
            )}
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