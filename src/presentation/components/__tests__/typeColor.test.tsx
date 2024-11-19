import { render } from "@testing-library/react";
import { TypeBadge } from "../typeColor";

describe("TypeColor", () => {
  it("display color for selected type", () => {
    const pokemonType = "nomnal";
    const { findByDisplayValue } = render(<TypeBadge type={pokemonType} />);

    // screen.debug(); //getByText(pokemonType));
    expect(findByDisplayValue(pokemonType)).toBeDefined();
  });
});
