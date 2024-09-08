import { useState } from "react";
import { LoadFileFormViewModel } from "../viewModel";
import { Uploader, Visible } from "@shared";
import { FileOutlined } from "@ant-design/icons";
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

  const { handleValidateFile, handleLoadFile } = useViewModel();

  const handleUpload = async (file: RcFile) => {
    const { error } = handleValidateFile(file);
    if (error) {
      setError(error.message);
      return;
    }
    await handleLoadFile(file);
  };

  const showErrorMessage = !!error;

  return (
    <div className={styles.LoadFileForm}>
      <Uploader
        actionText="Кликните или перетащите файл в эту область!"
        showUploadList={false}
        icon={
          <>
            <FileOutlined />
            <span className={styles.FileExtendsHint}>.splat</span>
          </>
        }
        prefixCls="splat-uploader"
        className={styles.FileUploader}
        multiple={false}
        beforeUpload={(file) => {
          handleUpload(file);
          return false;
        }}
      />

      <Visible show={showErrorMessage}>
        <Text data-testid={DataTestIdMap.errorMessage} type="danger">
          {error}
        </Text>
      </Visible>
    </div>
  );
};
