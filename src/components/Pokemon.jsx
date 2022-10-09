import React, {useState,useEffect} from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BadgeType from "./BadgeType";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';


function Pokemon() {
  const [data, setData] = useState([]);

  const fetchAPI = async () => {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=151"
      );
      const data = await response.json();
      const pokemonData = data.results.forEach(function (pokemon){
        fetchSpec(pokemon);
    })
    } catch (error) {
      throw error;
    }
  };

    const fetchSpec = async (pokemon) =>{
      let url = pokemon.url
        try{
            const response = await fetch(url)
            const pokemonData = await response.json();
            console.log(pokemonData);
        }catch(error){
            throw error;
        }
    }



  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <Card sx={{ 
      maxWidth: 300,
      maxHeight: 375,
      m : 1
      }}>
      <CardMedia
        component="img"
        height="140"
        src = {""}
        alt=""
      />
      <CardContent>
        <Typography variant="subtitle">
          #ID Pokemon
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Nom du pokémon
        </Typography>
        <BadgeType/>
      </CardContent>
      <CardActions
      sx={{
        display :'flex',
        justifyContent : 'flex-end',
      }}
      >
        <Button 
        size = "large"
        color = "secondary"
        fontWeight = "bolder"
        padding = '5px'
        endIcon={<DoubleArrowIcon />}
        > Détails </Button>
      </CardActions>
    </Card>
  );
}

export default Pokemon;
