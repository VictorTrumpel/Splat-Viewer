import { createRoot } from "react-dom/client";
import { defaultStart as defaultInitGSplat } from "@gsplat/config";
import { App } from "./app/App";
import { OrbitControls, Scene } from "@gsplat/core";
import { StoreProvider } from "@app";
import * as SPLAT from "gsplat";
import "./index.scss";

defaultInitGSplat();

createRoot(document.getElementById("root")!).render(
  <StoreProvider>
    <App />
  </StoreProvider>
);

setTimeout(async () => {
  const url = "/tree.splat";
  await SPLAT.Loader.LoadAsync(url, Scene.get(), () => {});

  OrbitControls.get().orbitSpeed = 0.4;
  OrbitControls.get().zoomSpeed = 0.4;
  OrbitControls.get().panSpeed = 1;

  // ZigZag();
  // ZoomZoom();
});

// function ZigZag() {
//   OrbitControls.get().keys["KeyQ"] = true;
//   OrbitControls.get().keys["KeyE"] = false;

//   // setTimeout(() => {
//   //   OrbitControls.get().keys["KeyQ"] = false;
//   //   OrbitControls.get().keys["KeyE"] = true;

//   //   setTimeout(() => {
//   //     ZigZag();
//   //   }, 10000);
//   // }, 10000);
// }

// function ZoomZoom() {
//   OrbitControls.get().keys["KeyW"] = false;
//   OrbitControls.get().keys["KeyS"] = true;

//   setTimeout(() => {
//     OrbitControls.get().keys["KeyS"] = false;
//     OrbitControls.get().keys["KeyW"] = true;

//     setTimeout(() => {
//       ZoomZoom();
//     }, 10000);
//   }, 10000);
// }
