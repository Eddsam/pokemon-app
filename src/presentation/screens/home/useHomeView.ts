import { useEffect, useState } from "react";
import { getListPokemon } from "../../../data/pokemon.services";
import { Result } from "../../../domain/types/listPaginated";

const itemsPerPage = 20;

export const useHomeView = () => {
  const [count, setCount] = useState<number>(0);
  const [prev, setPrev] = useState<string | null>("");
  const [next, setNext] = useState<string | null>("");
  const [listPokemon, setListPokemon] = useState<Result[]>([]);
  const [listFiltered, setListFiltered] = useState<Result[]>([]);
  const [page, setPage] = useState(1);

  const [textFilters, setTextFilters] = useState<string>("");

  useEffect(() => {
    let tempFilteredList = listPokemon;

    if (textFilters.length > 0) {
      const words = textFilters.split(" ");
      tempFilteredList = tempFilteredList.filter((p) =>
        words.find((w) =>
          p.name.toLocaleLowerCase().includes(w.toLocaleLowerCase())
        )
      );
    }

    setListFiltered(tempFilteredList);
  }, [listPokemon, textFilters]);

  useEffect(() => {
    getListPokemon({}).then((response) => {
      setCount(Math.ceil(response.count / itemsPerPage));
      setPrev(response.previous);
      setNext(response.next);
      setListPokemon(response.results);
    });
  }, []);

  const handleOnChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setTextFilters(value);
  };

  const handleOnClearField = () => {
    setTextFilters("");
  };

  const handleChangePage = (_: React.ChangeEvent<unknown>, value: number) => {
    getListPokemon({
      offset: itemsPerPage * (value - 1),
      limit: itemsPerPage,
    }).then((response) => {
      setPage(value);
      setPrev(response.previous);
      setNext(response.next);
      setListPokemon(response.results);
    });
  };

  return {
    count,
    list: listFiltered,
    prev,
    next,
    page,
    handleChangePage,
    textFilters,
    handleOnChange,
    handleOnClearField,
  };
};
