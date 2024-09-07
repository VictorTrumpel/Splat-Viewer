import { Scene } from "@gsplat/core";
import { Loader } from "gsplat";

export const LoadNewModel = async (file: File) => {
  Scene.reset();
  await Loader.LoadFromFileAsync(file, Scene.get());
};
