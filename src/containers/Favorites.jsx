import React, {useEffect, useState}  from "react";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


function Favorites() {
  //get the data from local storage
  const pokemonStored = JSON.parse(localStorage.getItem("pokemons"));

  const [updateLocalStorage, setUpdateLocalStorage] = useState(pokemonStored);

  const removeFavorites = (e) => {
    console.log(e.target);
    const updatedPokemon = pokemonStored.filter((pokemon) => pokemon.id !== e.id);
    console.log(updatedPokemon)
    setUpdateLocalStorage(updatedPokemon);
    window.location.reload();
  }

  useEffect(() => {
    localStorage.setItem('pokemons', JSON.stringify(updateLocalStorage));
  },[updateLocalStorage]);



  return (
    <div>
      <Container>
      <h1>Favorites</h1>
          <Paper elevation={3}>
      {pokemonStored.map((pokemon,index) => (
          <List 
        key={index}
        sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <ListItem
        secondaryAction={
          <IconButton edge="end" aria-label="delete" onClick={ () => removeFavorites(pokemon)}>
            <DeleteIcon />
          </IconButton>
        }>
          <ListItemAvatar>
            <Avatar 
            alt={pokemon.name}
            sx={{ width: 56, height: 56, mx:3 }} 
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} />
          </ListItemAvatar>
          <ListItemText primary={pokemon.name} secondary={`#${pokemon.id}`} />
        </ListItem>
      </List>
      ))}
              </Paper>
        </Container>
      
    </div>
  );
}

export default Favorites;
