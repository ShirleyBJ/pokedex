import Navbar from './components/Navbar';
import Pokemons from './components/Pokemons';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <SearchBar/>
      <Pokemons/>
    </div>
  );
}

export default App;
