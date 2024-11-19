import "./pokeStyles.css";

export const PokeSpinner = () => {
  return (
    <div className="wrapper">
      <div data-testid="pokeball" className="pokeball"></div>
    </div>
  );
};
