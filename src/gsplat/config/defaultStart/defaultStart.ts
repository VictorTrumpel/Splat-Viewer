import { InitializeSplatViewer, StartScene } from "@gsplat/feature";
import {
  Renderer,
  FrameUpdaterCombiner,
  Scene,
  Camera,
  OrbitControls,
} from "@gsplat/core";

export const defaultStart = () => {
  InitializeSplatViewer();

  StartScene.initScene();

  const UpdateFrame = () => {
    const scene = Scene.get();
    const camera = Camera.get();

    OrbitControls.update();
    Renderer.render(scene, camera);
  };

  FrameUpdaterCombiner.addUpdateFunction(UpdateFrame);
  FrameUpdaterCombiner.startListenFrame();

  window.addEventListener("resize", Renderer.matchWindowSize);
};
