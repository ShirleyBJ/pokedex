import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CatchingPokemonTwoToneIcon from "@mui/icons-material/CatchingPokemonTwoTone";
import StarIcon from "@mui/icons-material/Star";
import ForwardToInboxSharpIcon from "@mui/icons-material/ForwardToInboxSharp";

export default function Navbar() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="secondary">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <CatchingPokemonTwoToneIcon fontSize="large" />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Pokédex
            </Typography>
            <IconButton>
              <ForwardToInboxSharpIcon
                fontSize="large"
                style={{
                  margin: "15px",
                  color : "white",
                }}
              />
            </IconButton>
            <IconButton>
              <StarIcon 
                fontSize="large"
                style={{ 
                  color : "white",
                }} />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
