import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BadgeType from "./BadgeType";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';


function Pokemon() {
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
