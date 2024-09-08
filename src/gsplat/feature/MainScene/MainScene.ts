import { Scene, OrbitControls } from "@gsplat/core";

const ORBIT_DEFAULT_SPEED = 5;

export const initScene = () => {
  OrbitControls.get().panSpeed = ORBIT_DEFAULT_SPEED;
  OrbitControls.get().zoomSpeed = ORBIT_DEFAULT_SPEED;
  OrbitControls.get().orbitSpeed = ORBIT_DEFAULT_SPEED;
};

export const clearScene = () => {
  Scene.reset();
  OrbitControls.get().panSpeed = 0;
  OrbitControls.get().zoomSpeed = 0;
  OrbitControls.get().orbitSpeed = 0;
};
