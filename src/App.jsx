import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MyTitle from './components/MyTitle';
import PokemonCard from './components/PokemonCard';
import PropTypes from "prop-types";
import './App.css'

const pokemonList = [
  {
         name: "bulbasaur",
          imgSrc:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
        },
        {
          name: "charmander",
          imgSrc:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
        },
        {
          name: "squirtle",
          imgSrc:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
        },
        {
          name: "pikachu",
          imgSrc:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
        },
        {
          name: "mew",
        },
      ];


function App() {
  const [pokemonIndex, setpokemonIndex] = useState(0)
  return (
    <>
      
      <PokemonCard pokemon = {pokemonList[pokemonIndex]}/>
      {(pokemonIndex > 0) && <button type="button" onClick={() => setpokemonIndex(pokemonIndex - 1)}>précédent</button>}
      {(pokemonIndex < pokemonList.length - 1) && <button type="button" onClick={() => setpokemonIndex(pokemonIndex + 1)}>suivant</button>}

    </>
  )
}

export default App

