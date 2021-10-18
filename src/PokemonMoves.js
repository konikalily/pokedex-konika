import React from "react";
import "./App.css";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
import PokemonMovesSelector from "./PokemonMovesSelector";
import PokemonCity from "./PokemonCity";
const App = () => {
  function logWhenClicked() {
    console.log("chicken");
  }
  function log() {
    console.log("Nuggets");
  }
  const date = new Date().toLocaleDateString();
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];
  return (
    <div>
      <Logo appName="Pokedex" handleClick={log} poke={logWhenClicked} />
      <BestPokemon abilities={abilities} poke={logWhenClicked} />
      <CaughtPokemon date={date} />
      <PokemonMovesSelector />
      <PokemonCity />
    </div>
  );
};
export default App;
