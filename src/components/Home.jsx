import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

function Home(){
    return (
            <div className="home">
                <div className="home-description">
                    <Paper elevation={3} sx={{m:3, p:2}}>
                    <h1>Welcome</h1>
                    <p>Pokémon are the creatures that inhabit the world of the Pokémon games.</p>
                    <p>They can be caught using Pokéballs and trained by battling with other Pokémon</p>
                    <p>Some Pokémon may appear in one of multiple, visually different forms.</p>
                    <p>Stats determine certain aspects of battles.</p>
                    <p>Each Pokémon has a value for each stat which grows as they gain levels and can be altered momentarily by effects in battles.</p>
                    <p>Types are properties for Pokémon and their moves. </p>
                    
                        <Link underline="none" to="/pokemonList" >
                            <Button variant="contained" color="secondary">Open the pokédex</Button></Link>
                    
                    </Paper>
                </div>
                <div className="home-img">
                </div>
            </div>
    )
}

export default Home;