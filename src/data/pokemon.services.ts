import { Pokemon } from "../domain/model/pokemon.interface";
import { ListPaginated } from "../domain/types/listPaginated.interface";
import { AxiosInstance } from "../infrastructure/axios/axiosConfig";

interface PaginationParams {
  offset?: number;
  limit?: number;
}

export const getListPokemon = ({
  offset = 0,
  limit = 20,
}: PaginationParams): Promise<ListPaginated> => {
  return AxiosInstance.get(`/pokemon?offset=${offset}&limit=${limit}`);
};

export const getPokemon = (url: string): Promise<Pokemon> => {
  AxiosInstance.defaults.baseURL = "";
  return AxiosInstance.get(url);
};
