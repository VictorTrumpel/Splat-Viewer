import { LoadFileForm as LoadFileFormFeature, LoadFileFormProps } from "./view";
import { useLoadFileFormViewModel } from "./viewModel";

export const LoadFileForm = (
  props: Omit<LoadFileFormProps, "useViewModel">
) => <LoadFileFormFeature {...props} useViewModel={useLoadFileFormViewModel} />;
