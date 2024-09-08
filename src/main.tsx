import { createRoot } from "react-dom/client";
import { defaultStart as defaultInitGSplat } from "@gsplat/config";
import { App } from "./app/App";
import { StoreProvider } from "@app";
import "./index.scss";

defaultInitGSplat();

createRoot(document.getElementById("root")!).render(
  <StoreProvider>
    <App />
  </StoreProvider>
);
