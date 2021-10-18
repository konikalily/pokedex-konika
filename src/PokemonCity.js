import React, { useState } from "react";

function PokemonCity() {
  const [city, setCity] = useState("");
  function updateCity(event) {
    setCity(event.target.value);
    console.log(event.target.value);
  }
  return (
    <div>
      <input onChange={updateCity} type="text" value={city} />
      <p>Welcome to the city of {city}</p>
    </div>
  );
}

export default PokemonCity;
