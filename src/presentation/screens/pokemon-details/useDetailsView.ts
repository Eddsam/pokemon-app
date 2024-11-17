import { useEffect, useState } from "react";
import { getPokemon } from "../../../data/pokemon.services";
import { Pokemon } from "../../../domain/model/pokemon";
import { useParams } from "react-router-dom";

export const useDetailView = () => {
  const { url } = useParams();
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (url) {
      setIsLoading(true);
      getPokemon(window.atob(url)).then((data) => {
        setPokemon(data);
        setIsLoading(false);
      });
    }
  }, []);

  return {
    isLoading,
    pokemon,
  };
};
