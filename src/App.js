import Navbar from './components/Navbar';
import PokemonsList from './components/PokemonsList';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <SearchBar/>
      <PokemonsList/>
      <Footer/>
    </div>
  );
}

export default App;
