import { Button, Tooltip } from "antd";
import { CameraKeyBoardViewModel } from "../viewModel";
import { BindKeyButton } from "@entities";
import { KeyButton } from "@shared";
import {
  ArrowUpOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  ArrowDownOutlined,
} from "@ant-design/icons";
import styles from "./CameraKeyBoard.module.scss";

export type CameraKeyBoardProps = {
  useViewModel: () => CameraKeyBoardViewModel;
};

export const CameraKeyBoard = ({ useViewModel }: CameraKeyBoardProps) => {
  return (
    <div className={styles.CameraKeyBoard}>
      <BindKeyButton
        bindKeys={["KeyA", "ArrowLeft"]}
        toolTipText="Смещение камеры влево"
      >
        <ArrowLeftOutlined />
        "A"
      </BindKeyButton>

      <BindKeyButton
        bindKeys={["KeyW", "ArrowTop"]}
        toolTipText="Смещение камеры вперед"
      >
        <ArrowUpOutlined />
        "W"
      </BindKeyButton>

      <BindKeyButton
        bindKeys={["KeyD", "ArrowRight"]}
        toolTipText="Смещение камеры вправо"
      >
        <ArrowRightOutlined />
        "D"
      </BindKeyButton>

      <BindKeyButton
        bindKeys={["KeyS", "ArrowBack"]}
        toolTipText="Смещение камеры назад"
      >
        <ArrowDownOutlined />
        "S"
      </BindKeyButton>
    </div>
  );
};
