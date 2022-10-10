import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';

//TODO : Make home interface and add button to enter in the app
function Home(){
    return (
        <>
            <h1>HOME</h1>
            <Link to="/pokemonList">
            <Button color="secondary">Secondary</Button>
            </Link>
        </>
    )
}

export default Home;