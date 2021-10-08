const BestPokemon = () => {
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];
  return (
    <div>
      <p>My favorite Pokemon is Squirtle</p>
      <ul>
        {abilities.map((ability) => {
          return <li>{ability}</li>;
        })}
      </ul>
    </div>
  );
};
export default BestPokemon;
