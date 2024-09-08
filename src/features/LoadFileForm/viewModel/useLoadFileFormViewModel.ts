import { menuRouterActions } from "@entities";
import { useAppDispatch } from "@shared";
import * as GSPlatFeature from "@gsplat/feature";

export type LoadFileFormViewModel = {
  handleValidateFile: (file: File) => { error: null | Error };
  handleLoadFile: (file: File) => Promise<void>;
};

export const useLoadFileFormViewModel = (): LoadFileFormViewModel => {
  const dispatch = useAppDispatch();

  const handleValidateFile = (file: File) => {
    const errorCases = {
      emptyFile: new Error("Файл не может быть пустым"),
      wrongExtension: new Error("Нужно загрузить файл с расширением .splat"),
    };

    const isEmptyFile = file.size === 0;
    const isWrongExtension = !file.name.endsWith(".splat");

    if (isEmptyFile) return { error: errorCases.emptyFile };

    if (isWrongExtension) return { error: errorCases.wrongExtension };

    return { error: null };
  };

  const handleLoadFile = async (file: File) => {
    GSPlatFeature.StartScene.clearScene();
    GSPlatFeature.MainScene.initScene();
    await GSPlatFeature.LoadNewModel(file);
    dispatch(menuRouterActions.setPage("workArea"));
  };

  return { handleValidateFile, handleLoadFile };
};
