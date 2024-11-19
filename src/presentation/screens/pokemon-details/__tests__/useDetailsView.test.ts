import { renderHook, waitFor } from "@testing-library/react";
import { useDetailView } from "../useDetailsView";
import { Pokemon } from "../../../../domain/model/pokemon.interface";

// const url = "https://pokeapi.co/api/v2/pokemon/1";
const encodedUrl = "aHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uLzEv";

const resp: Pokemon = {
  abilities: [
    {
      ability: {
        name: "overgrow",
        url: "https://pokeapi.co/api/v2/ability/65/",
      },
      is_hidden: false,
      slot: 1,
    },
    {
      ability: {
        name: "chlorophyll",
        url: "https://pokeapi.co/api/v2/ability/34/",
      },
      is_hidden: true,
      slot: 3,
    },
  ],
  id: 1,
  name: "bulbasaur",
  order: 1,
  base_experience: 64,
  height: 7,
  held_items: [],
  is_default: true,
  location_area_encounters: "https://pokeapi.co/api/v2/pokemon/1/encounters",
  past_abilities: [],
  past_types: [],
  sprites: {
    front_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    other: {
      "official-artwork": {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
        front_shiny:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png",
      },
      showdown: {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1.gif",
      },
    },
  },
  types: [
    {
      slot: 1,
      type: {
        name: "grass",
        url: "https://pokeapi.co/api/v2/type/12/",
      },
    },
    {
      slot: 2,
      type: {
        name: "poison",
        url: "https://pokeapi.co/api/v2/type/4/",
      },
    },
  ],
  weight: 69,
};

jest.mock("axios", () => {
  return {
    create: () => {
      return {
        defaults: { baseUrl: "" },
        interceptors: {
          request: { eject: jest.fn(), use: jest.fn() },
          response: { eject: jest.fn(), use: jest.fn() },
        },
        get: jest.fn(() => Promise.resolve(resp)),
      };
    },
  };
});

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ url: encodedUrl }),
}));

describe("useDetailsView", () => {
  it("On page Load", async () => {
    const { result } = renderHook(useDetailView);
    await waitFor(() => {
      expect(result.current.pokemon).toBe(resp);
    });
  });
});
