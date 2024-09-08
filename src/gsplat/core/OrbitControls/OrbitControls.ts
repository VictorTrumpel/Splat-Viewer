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

export const startMovingLeft = () => {
  const control = get();
  control.keys["KeyA"] = true;
};

export const stopMovingLeft = () => {
  const control = get();
  control.keys["KeyA"] = false;
};

export const startMovingForward = () => {
  const control = get();
  control.keys["KeyW"] = true;
};

export const startMovingBack = () => {
  const control = get();
  control.keys["KeyS"] = true;
};

export const stopMovingBack = () => {
  const control = get();
  control.keys["KeyS"] = false;
};

export const stopMovingForward = () => {
  const control = get();
  control.keys["KeyW"] = false;
};

export const startMovingRight = () => {
  const control = get();
  control.keys["KeyD"] = true;
};

export const stopMovingRight = () => {
  const control = get();
  control.keys["KeyD"] = false;
};

export const startRotateLeft = () => {
  const control = get();
  control.keys["KeyQ"] = true;
};

export const stopRotateLeft = () => {
  const control = get();
  control.keys["KeyQ"] = false;
};

export const startRotateRight = () => {
  const control = get();
  control.keys["KeyE"] = true;
};

export const stopRotateRight = () => {
  const control = get();
  control.keys["KeyE"] = false;
};

export const startRotateTop = () => {
  const control = get();
  control.keys["KeyR"] = true;
};

export const stopRotateTop = () => {
  const control = get();
  control.keys["KeyR"] = false;
};

export const startRotateBottom = () => {
  const control = get();
  control.keys["KeyF"] = true;
};

export const stopRotateBottom = () => {
  const control = get();
  control.keys["KeyF"] = false;
};
