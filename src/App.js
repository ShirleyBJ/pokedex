import Navbar from './components/Navbar';
import Pokemons from './components/Pokemons';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <SearchBar/>
      <Pokemons/>
      <Footer/>
    </div>
  );
}

export default App;
