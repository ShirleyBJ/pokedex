import * as React from "react";
import { Link, Outlet } from "react-router-dom";

import {AppBar,Box, Toolbar, Typography,IconButton } from "@mui/material";
import {CatchingPokemonTwoToneIcon,StarIcon,ForwardToInboxSharpIcon } from "@mui/icons-material";


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
            <Link to="/home"><CatchingPokemonTwoToneIcon fontSize="large" /></Link>
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
              <Link to="/favorites"><StarIcon 
                fontSize="large"
                style={{ 
                  color : "white",
                }} /></Link>
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <Container
      sx={{
        boxShadow: 3,
        maxWidth: "lg",
        minHeight: "78vh",
        boxSizing: "border-box",
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#101010" : "#fff",
        color: (theme) =>
          theme.palette.mode === "dark" ? "grey.300" : "grey.800",
        p: 1,
        m: "0 auto",
        borderRadius: 2,
        textAlign: "center",
        fontSize: "0.875rem",
        fontWeight: "700",
      }}
    >
      <Outlet/>
    </Container>
    </>
  );
}
