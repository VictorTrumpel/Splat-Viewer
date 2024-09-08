import { Scene } from "@gsplat/core";
import { Loader } from "gsplat";

export const LoadNewModel = async (file: File) => {
  await Loader.LoadFromFileAsync(file, Scene.get());
};
