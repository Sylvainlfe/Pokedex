import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MyTitle from './components/MyTitle';
import PokemonCard from './components/PokemonCard';
import './App.css'

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"},
  {
    name: "mew",
  },
];

function App() {
  return (
    <>
      <PokemonCard pokemon = {pokemonList[0]}/>
    </>
  )
}

export default App

