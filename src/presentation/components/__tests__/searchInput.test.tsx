import { render } from "@testing-library/react";
import { SearchInput } from "../input/searchInput";

describe("SearchInput", () => {
  const searchInputParams = {
    value: "text",
    onClearField: () => {},
    onChange: () => {},
  };
  it("display text", () => {
    const { findByDisplayValue } = render(
      <SearchInput {...searchInputParams} />
    );
    expect(findByDisplayValue(searchInputParams.value)).toBeTruthy();
  });
});
