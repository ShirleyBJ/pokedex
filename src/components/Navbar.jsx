import * as React from "react";
import { Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CatchingPokemonTwoToneIcon from "@mui/icons-material/CatchingPokemonTwoTone";
import StarIcon from "@mui/icons-material/Star";
import ForwardToInboxSharpIcon from "@mui/icons-material/ForwardToInboxSharp";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


export default function Navbar() {
  //Positioned menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 , mb:2}}>
        <AppBar position="static" color="secondary">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
            <Link to="/"><CatchingPokemonTwoToneIcon fontSize="large" sx={{color : "white"}} /></Link>
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Pokédex
            </Typography>


            <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon sx={{color : "white"}} />
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose} sx={{color : "secondary", mr:1}}><Link to="/pokemonList"><CatchingPokemonTwoToneIcon sx={{color : "secondary", mr:1}} />Pokémons</Link></MenuItem>
        <MenuItem onClick={handleClose} sx={{color : "secondary"}}><Link to="/pokemonListType"><FilterAltIcon/>Pokémon's Type</Link></MenuItem>
        <MenuItem onClick={handleClose} sx={{color : "secondary", mr:1}}>
          <Link to="/favorites">
            <StarIcon 
                style={{ 
                  color : "secondary",
                }} />Favorites
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ForwardToInboxSharpIcon
                sx={{
                  color : "secondary",
                  mr:1
                }}/>
                <Link to="/contact">Contact</Link>
                
          </MenuItem>
      </Menu>
    </div>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
