// react-testing-library renders your components to document.body,
// this adds jest-dom's custom assertions
import "@testing-library/jest-dom";

//ponemos el path en el que se situan las variables de entorno
require("dotenv").config({
  path: ".env",
});
//Creamos un mock con todas las variables de entorno
jest.mock("./infrastructure/getEnviroments", () => ({
  getEnviroments: () => ({ ...process.env }),
}));
