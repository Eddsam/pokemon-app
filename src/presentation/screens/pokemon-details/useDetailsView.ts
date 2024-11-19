import { useEffect, useState } from "react";
import { getPokemon } from "../../../data/pokemon.services";
import { Pokemon } from "../../../domain/model/pokemon.interface";
import { useParams } from "react-router-dom";

export const useDetailView = () => {
  const { url } = useParams();
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [previousPokemon, setPreviousPokemon] = useState<string | null>(null);
  const [nextPokemon, setNextPokemon] = useState<string | null>(null);

  useEffect(() => {
    if (url) {
      setIsLoading(true);
      getPokemon(window.atob(url)).then((data) => {
        setPokemon(data);
        setIsLoading(false);
        setPreviousPokemon(data.id - 1 > 0 ? getPokeUrl(data.id - 1) : null);
        setNextPokemon(data.id + 1 < 10278 ? getPokeUrl(data.id + 1) : null);
      });
    }
  }, []);

  function getPokeUrl(id: number) {
    return `/pokemon-details/${window.btoa(
      `https://pokeapi.co/api/v2/pokemon/${id}`
    )}`;
  }

  return {
    isLoading,
    pokemon,
    previousPokemon,
    nextPokemon,
  };
};
