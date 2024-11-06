import { ReactNode } from "react";
import { InboxOutlined } from "@ant-design/icons";
import { DataTestIdMap } from "./test/DataTestIdMap";
import type { UploadProps as BaseUploadProps } from "antd";
import { Upload as BaseUpload } from "antd";

const { Dragger } = BaseUpload;

type UploaderProps = BaseUploadProps & {
  actionText?: string;
  icon?: ReactNode;
};

export const Uploader = ({
  actionText = "Кликните или перетащите файл в эту область, что бы его загрузить",
  icon = <InboxOutlined data-testid={DataTestIdMap.defaultUploaderIcon} />,
  prefixCls,
  ...props
}: UploaderProps) => {
  return (
    <Dragger
      accept=".splat,.ply"
      {...props}
      prefixCls={prefixCls}
      data-testid="input-file"
    >
      <p className="ant-upload-drag-icon">{icon}</p>
      <p className="ant-upload-text">{actionText}</p>
    </Dragger>
  );
};
