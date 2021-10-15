const Logo = (props) => {
  const appName = "Maha's Pokedex";
  return (
    <header>
      <h1> Welcome to {appName}</h1>
      <img
        onClick={props.handleClick}
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
        alt="Pidgey"
      />
    </header>
  );
};
export default Logo;
