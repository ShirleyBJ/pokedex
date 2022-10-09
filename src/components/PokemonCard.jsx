import BadgeType from "./BadgeType";
import BadgeAbilities from "./BadgeAbilities";
import Badge from "./Badge";
import CardSubtitle from "./CardTitle";
import StatBar from "./StatBar";

import * as React from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

function PokemonCard() {
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
          #ID Pokémon
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Nom Pokémon
        </Typography>
        <BadgeType />
        <Typography variant="body2" color="text.secondary">
          Description Pokémon
        </Typography>
        <CardSubtitle title="Abilities" />
        <BadgeAbilities />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div>
            <CardSubtitle title="Height" />
            <Badge height="2" />
          </div>
          <div>
            <CardSubtitle title="Weight" />
            <Badge weight="9" />
          </div>
        </Box>
        <CardSubtitle title="Stats" />
        <StatBar stats="98" statTitle="HP" />
        <StatBar stats="58" statTitle="Attaque" />
        <StatBar stats="88" statTitle="Défense" />
      </CardContent>
    </Card>
  );
}

export default PokemonCard;
