import { Scene } from "@gsplat/core";
import { Loader } from "gsplat";

export const LoadDefaultModel = async () => {
  Scene.reset();
  await Loader.LoadAsync("./tree.splat", Scene.get());
};
