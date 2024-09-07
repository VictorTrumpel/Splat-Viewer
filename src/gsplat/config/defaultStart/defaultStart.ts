import { InitializeSplatViewer, UpdateFrame } from "@gsplat/feature";
import { Renderer } from "@gsplat/core";

export const defaultStart = () => {
  InitializeSplatViewer();

  const frame = () => {
    UpdateFrame();
    requestAnimationFrame(frame);
  };

  requestAnimationFrame(frame);

  window.addEventListener("resize", Renderer.matchWindowSize);
};
