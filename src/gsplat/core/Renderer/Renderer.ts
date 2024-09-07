import { WebGLRenderer } from "gsplat";
import { Scene, Camera } from "@gsplat/core";

let singletonRenderer: WebGLRenderer | null = null;

export const create = () => {
  if (singletonRenderer) return singletonRenderer;
  singletonRenderer = new WebGLRenderer();
  return singletonRenderer;
};

export const get = () => create();

export const render = (
  scene: ReturnType<typeof Scene.get>,
  camera: ReturnType<typeof Camera.get>
) => {
  const renderer = get();
  renderer.render(scene, camera);
};

export const matchWindowSize = () => {
  const renderer = get();
  renderer.setSize(window.innerWidth, window.innerHeight);
};
