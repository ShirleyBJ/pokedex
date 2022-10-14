import React, {useState,useEffect} from "react";
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

function Pokemon({pokemonName,pokemonUrl}) {
  //Get ID from the url 
  const url = pokemonUrl.split('/');
  const pokemonID = url[6];
  const [pokemonStored, setPokemonStored] = useState([]);

  const addFavorites = (e) => {
    const id = e.target.getAttribute('data-testid');
    const name = e.target.getAttribute('data-name');
    if(id != null && name != null){
      setPokemonStored({"id":id,"name":name});
      console.log(pokemonStored)
    } else {
      alert("Error: id or name is null");
    }
  }

  useEffect(() => {
    if(pokemonStored != null || pokemonStored !== "undefined"){
      localStorage.setItem("pokemon", JSON.stringify(pokemonStored));
    }
  }, [pokemonStored]);

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