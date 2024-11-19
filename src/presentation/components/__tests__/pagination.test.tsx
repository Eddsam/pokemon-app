import { render } from "@testing-library/react";
import PaginationControlled from "../pagination";

describe("Pagination", () => {
  const searchInputParams = {
    count: 3000,
    page: 0,
    handleChange: () => {},
  };
  it("display number of total pages", () => {
    const itemsPerPage = 20;
    const nPages = Math.ceil(searchInputParams.count / itemsPerPage);
    const { findByDisplayValue } = render(
      <PaginationControlled {...searchInputParams} />
    );
    expect(findByDisplayValue(nPages)).toBeTruthy();
  });
});
