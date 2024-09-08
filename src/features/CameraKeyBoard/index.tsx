import {
  CameraKeyBoard as CameraKeyBoardFeature,
  CameraKeyBoardProps,
} from "./view";
import { useCameraKeyBoardViewModel } from "./viewModel";

export const CameraKeyBoard = (
  props: Omit<CameraKeyBoardProps, "useViewModel">
) => (
  <CameraKeyBoardFeature {...props} useViewModel={useCameraKeyBoardViewModel} />
);
