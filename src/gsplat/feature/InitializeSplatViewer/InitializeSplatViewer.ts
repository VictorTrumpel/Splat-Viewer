import { Scene, Camera, Renderer, OrbitControls } from "@gsplat/core";

export const InitializeSplatViewer = () => {
  Scene.create();

  const renderer = Renderer.create();
  const camera = Camera.create();

  OrbitControls.create(camera, renderer.canvas);
};
