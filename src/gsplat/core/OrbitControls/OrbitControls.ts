import { OrbitControls } from "./Class";
import { Camera, Renderer } from "@gsplat/core";

let singletonOrbitControls: OrbitControls | null = null;

export const create = (
  camera: ReturnType<typeof Camera.get>,
  canvas: ReturnType<typeof Renderer.get>["canvas"]
) => {
  if (singletonOrbitControls) return singletonOrbitControls;
  singletonOrbitControls = new OrbitControls(camera, canvas);
  return singletonOrbitControls;
};

export const get = () => {
  if (!singletonOrbitControls) throw new Error("OrbitControls need to create");
  return singletonOrbitControls;
};

export const update = () => {
  const control = get();
  control.update();
};
