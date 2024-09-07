import { OrbitControls, Renderer, Scene, Camera } from "@gsplat/core";

export const UpdateFrame = () => {
  const scene = Scene.get();
  const camera = Camera.get();

  OrbitControls.update();
  Renderer.render(scene, camera);
};
