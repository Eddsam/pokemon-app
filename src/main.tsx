import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MainRouter } from "./presentation/navigation/router.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MainRouter />
  </StrictMode>
);
