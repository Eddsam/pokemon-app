import { capitalizeFirstLetter } from "../formatText";

const textToCapitalize = "anita lava la tina";
it("Capitalize First Letter", () => {
  expect(capitalizeFirstLetter(textToCapitalize)).toBe("Anita lava la tina");

  expect(capitalizeFirstLetter(null)).toBe(null);
});
