const TestRenderer = require("react-test-renderer");
import { Home } from "..";

describe("home", () => {
  it("renders correctly in Snapshot", () => {
    const tree = TestRenderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
