import { useHomeView } from "../useHomeView";
import { ListPaginated } from "../../../../domain/types/listPaginated.interface";
import { renderHook, waitFor } from "@testing-library/react";
import { act } from "react";

const resp: ListPaginated = {
  count: 2,
  next: "https://pokeapi.co/api/v2/pokemon?offset=0&limit=2",
  previous: null,
  results: [
    {
      name: "bulbasaur",
      url: "https://pokeapi.co/api/v2/pokemon/1/",
    },
    {
      name: "ivysaur",
      url: "https://pokeapi.co/api/v2/pokemon/2/",
    },
  ],
};

jest.mock("axios", () => {
  return {
    create: () => {
      return {
        interceptors: {
          request: { eject: jest.fn(), use: jest.fn() },
          response: { eject: jest.fn(), use: jest.fn() },
        },
        get: jest.fn(() => Promise.resolve(resp)),
      };
    },
  };
});

describe("useHomeView", () => {
  const itemsPerPage = 20;

  it("On change page", async () => {
    const page = 5;
    const { result } = renderHook(useHomeView);
    expect(result.current.numberOfPages).toBe(0);

    //@ts-ignore
    await act(async () => result.current.handleChangePage({}, page));
    await waitFor(() => {
      console.log({
        numberOfPages: result.current.numberOfPages,
        list: result.current.list,
      });
      expect(result.current.numberOfPages).toBe(
        Math.ceil(resp.count / itemsPerPage)
      );
    });
    await waitFor(() => {
      expect(result.current.list).toBe(resp.results);
    });
  });

  it("On change text", async () => {
    const newText = "Anita lava la tina";
    const { result } = renderHook(useHomeView);
    expect(result.current.textFilters).toBe("");

    await act(async () =>
      //@ts-ignore
      result.current.handleOnChange({ target: { value: newText } })
    );
    await waitFor(() => {
      expect(result.current.textFilters).toBe(newText);
    });

    await act(async () => result.current.handleOnClearField());
    await waitFor(() => {
      expect(result.current.textFilters).toBe("");
    });
  });
});
