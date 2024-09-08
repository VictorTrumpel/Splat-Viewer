import { useAppDispatch } from "@shared";
import { menuRouterActions } from "@entities";
import * as GSPlatFeature from "@gsplat/feature";

export type ReturnHomeBtnViewModel = {
  handleReturnToHomePage: () => void;
};

export const useReturnHomeBtnViewModel = (): ReturnHomeBtnViewModel => {
  const dispatch = useAppDispatch();

  const handleReturnToHomePage = async () => {
    GSPlatFeature.MainScene.clearScene();
    dispatch(menuRouterActions.setPage("startPage"));
    await GSPlatFeature.StartScene.initScene();
  };

  return { handleReturnToHomePage };
};
