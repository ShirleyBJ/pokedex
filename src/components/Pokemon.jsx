import React from "react";
import {Link} from "react-router-dom";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/395.svg

function Pokemon({pokemonName,pokemonUrl}) {
//TODO: Use react router to get params from urls
  return (
    <div>
      <Card
        sx={{
          minWidth: 300,
          maxHeight: 375,
          m: 1,
        }}
      >
        <CardMedia component="img" height="140" src={""} alt="" />
        <CardContent>
          <Typography variant="subtitle">#ID Pokemon</Typography>
          <Typography gutterBottom variant="h5" component="div">
            {pokemonName}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            flexWrap: "wrap",
          }}
        >
          <Button
            size="large"
            color="secondary"
            fontWeight="bolder"
            padding="5px"
            endIcon={<DoubleArrowIcon />}
          >
            Détails
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Pokemon;
