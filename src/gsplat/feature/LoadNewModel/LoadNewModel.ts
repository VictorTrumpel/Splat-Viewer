import { Scene } from "@gsplat/core";
import { Loader, PLYLoader } from "gsplat";

export const LoadNewModel = async (file: File) => {
  if (file.name.endsWith('.ply')) {
    await PLYLoader.LoadFromFileAsync(file,  Scene.get())
    return;
  }

  await Loader.LoadFromFileAsync(file, Scene.get());
};
