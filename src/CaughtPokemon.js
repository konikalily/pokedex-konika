// import { useState } from "react";

// const CaughtPokemon = () => {
//   const [caught, setCaught] = useState([]);

//   const catchPokemon = () => {
//     const pokemonNames = [
//       "Abra",
//       "Altaria",
//       "Bergmite",
//       "Bayleef",
//       "Beautifly",
//       "Bonsly",
//     ];
//     let randomCaughtPokemon = Math.floor(Math.random() * pokemonNames.length);
//     setCaught(caught.concat(pokemonNames[randomCaughtPokemon]));
//   };

//   const date = new Date().toLocaleDateString();
//   console.log(caught);
//   return (
//     <div>
//       <p>
//         Caught {caught.length} Pokemon on {date}
//       </p>
//       <button onClick={() => catchPokemon()}> Catch Pokemon</button>
//       <ul>
//         {caught.map((element, i) => {
//           return <li key={i}>{element}</li>;
//         })}
//         {/* <li> {caught}</li> */}
//       </ul>
//     </div>
//   );
// };
// export default CaughtPokemon;

import React from "react";
import { useState } from "react";

const CaughtPokemon = () => {
  const [caught, setCaught] = useState([]);

  const newPokemon = ["Spearow", "Pikachu", "Ditto"];

  const catchPokemon = () => {
    const randomPokemon = Math.floor(Math.random() * newPokemon.length);
    setCaught((previousCaught) => {
      return previousCaught.concat(newPokemon[randomPokemon]);
    });
  };
  const date = new Date().toLocaleDateString();
  console.log(caught);
  return (
    <div>
      <button onClick={catchPokemon}>Click Me!</button>
      <p>
        Caught {caught.length}Pokemon on {date}
      </p>
      {caught.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </div>
  );
};

export default CaughtPokemon;
