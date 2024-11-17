import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../screens/home";
import { PokemonDetails } from "../screens/pokemon-details";

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path={"/pokemon-details/:url"} element={<PokemonDetails />} />
      </Routes>
    </BrowserRouter>
  );
};
