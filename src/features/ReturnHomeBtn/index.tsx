import {
  ReturnHomeBtn as ReturnHomeBtnFeature,
  ReturnHomeBtnProps,
} from "./view";
import { useReturnHomeBtnViewModel } from "./viewModel";

export const ReturnHomeBtn = (
  props: Omit<ReturnHomeBtnProps, "useViewModel">
) => (
  <ReturnHomeBtnFeature useViewModel={useReturnHomeBtnViewModel} {...props} />
);
