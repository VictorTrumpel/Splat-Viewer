import { Camera } from "gsplat";

let singletonCamera: Camera | null = null;

export const create = () => {
  if (singletonCamera) return singletonCamera;
  singletonCamera = new Camera();
  return singletonCamera;
};

export const get = () => create();
