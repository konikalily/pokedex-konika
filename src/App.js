import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";

const App = () => {
  function logWhenClicked() {
    console.log("hooa");
  }
  return (
    <div>
      <Logo handleClick={logWhenClicked} />
      <BestPokemon />
      <CaughtPokemon />
    </div>
  );
};

export default App;
