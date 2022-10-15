import React, {useEffect, useState}  from "react";

//TODO : afficher les données de maniére dynamique + ajout style
//TODO: supprimer à l'écran de maniére dynamique
function Favorites() {
  //get the data from local storage
  const pokemonStored = JSON.parse(localStorage.getItem("pokemons"));

  const [updateLocalStorage, setUpdateLocalStorage] = useState(pokemonStored);

  const removeFavorites = (e) => {
    console.log(e.target);
    const updatedPokemon = pokemonStored.filter((pokemon) => pokemon.id !== e.id);
    console.log(updatedPokemon)
    setUpdateLocalStorage(updatedPokemon);
  }


  useEffect(() => {
    localStorage.setItem('pokemons', JSON.stringify(updateLocalStorage));
  },[updateLocalStorage]);


  return (
    <div>
      <h1>Favorites</h1>
      {pokemonStored.map((pokemon) => (
        <ul key={pokemon.id} id={pokemon.id}>
          <li><p>{pokemon.id}</p>
          <p>{pokemon.name}</p>
          <button onClick={ ()=>removeFavorites(pokemon) }>Remove from favorites</button></li>
        </ul>
      ))}
    </div>
  );
}

export default Favorites;
