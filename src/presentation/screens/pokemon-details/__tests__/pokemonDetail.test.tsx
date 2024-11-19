const TestRenderer = require("react-test-renderer");
import { PokemonDetails } from "..";

describe("PokemonDetails", () => {
  it("renders correctly in Snapshot", () => {
    const tree = TestRenderer.create(<PokemonDetails />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
