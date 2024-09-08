import { useAppDispatch } from "@shared";
import { menuRouterActions } from "@entities";
import * as GSPlatFeature from "@gsplat/feature";

export type ReturnHomeBtnViewModel = {
  handleReturnToHomePage: () => void;
};

export const useReturnHomeBtnViewModel = (): ReturnHomeBtnViewModel => {
  const dispatch = useAppDispatch();

  const handleReturnToHomePage = async () => {
    dispatch(menuRouterActions.setPage("startPage"));
    await GSPlatFeature.LoadDefaultModel();
  };

  return { handleReturnToHomePage };
};
