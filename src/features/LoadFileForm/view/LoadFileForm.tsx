import { useState } from "react";
import { LoadFileFormViewModel } from "../viewModel";
import { Uploader, Visible } from "@shared";
import { RcFile } from "antd/es/upload";
import { Typography } from "antd";
import { DataTestIdMap } from "./test/DataTestIdMap";
import styles from "./LoadFileForm.module.scss";

const { Text } = Typography;

export type LoadFileFormProps = {
  useViewModel: () => LoadFileFormViewModel;
};

export const LoadFileForm = ({ useViewModel }: LoadFileFormProps) => {
  const [error, setError] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const { handleValidateFile, handleLoadFile } = useViewModel();

  const handleUpload = async (file: RcFile) => {
    const { error } = handleValidateFile(file);
    if (error) {
      setError(error.message);
      return;
    }
    setFileName(file.name);
    await handleLoadFile(file);
  };

  const isFileLoading = fileName !== null;

  return (
    <div className={styles.LoadFileForm}>
      <Visible show={!isFileLoading}>
        <Uploader
          showUploadList={false}
          prefixCls="splat-uploader"
          className={styles.FileUploader}
          multiple={false}
          beforeUpload={(file) => {
            handleUpload(file);
            return false;
          }}
        />
      </Visible>

      <Visible show={!!error}>
        <Text data-testid={DataTestIdMap.errorMessage} type="danger">
          {error}
        </Text>
      </Visible>
    </div>
  );
};
