import { Scene } from "@gsplat/core";
import { Loader } from "gsplat";

export const LoadDefaultModel = async () => {
  Scene.reset();
  return await Loader.LoadAsync("./tree.splat", Scene.get());
};
