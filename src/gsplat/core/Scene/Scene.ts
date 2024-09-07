import { Scene } from "gsplat";

let singletonScene: Scene | null = null;

export const create = () => {
  if (singletonScene) return singletonScene;
  singletonScene = new Scene();
  return singletonScene;
};

export const get = () => create();

export const reset = () => {
  const scene = get();
  scene.reset();
};
