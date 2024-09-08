import { CameraKeyBoardViewModel } from "../viewModel";
import { BindKeyButton } from "@entities";
import {
  ArrowUpOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  ArrowDownOutlined,
  UndoOutlined,
  RedoOutlined,
  UpOutlined,
  DownOutlined,
} from "@ant-design/icons";
import styles from "./CameraKeyBoard.module.scss";

export type CameraKeyBoardProps = {
  useViewModel: () => CameraKeyBoardViewModel;
};

export const CameraKeyBoard = ({ useViewModel }: CameraKeyBoardProps) => {
  const {
    handleStartMovingLeft,
    handleStopMovingLeft,
    handleStartMovingRight,
    handleStopMovingRight,
    handleStartMovingBack,
    handleStopMovingBack,
    handleStartRotateLeft,
    handleStopRotateLeft,
    handleStartMovingForward,
    handleStopMovingForward,
    handleStartRotateRight,
    handleStopRotateRight,
    handleStartRotateTop,
    handleStopRotateTop,
    handleStartRotateBottom,
    handleStopRotateBottom,
  } = useViewModel();

  return (
    <div className={styles.CameraKeyBoard}>
      <div className={styles.ButtonRow}>
        <BindKeyButton
          bindKeys={["KeyQ"]}
          toolTipText="Поворот камеры влево"
          onPressed={handleStartRotateLeft}
          onPressedOut={handleStopRotateLeft}
        >
          <UndoOutlined />Q
        </BindKeyButton>

        <BindKeyButton
          bindKeys={["KeyW", "ArrowUp"]}
          toolTipText="Смещение камеры вперед"
          onPressed={handleStartMovingForward}
          onPressedOut={handleStopMovingForward}
        >
          <ArrowUpOutlined />W
        </BindKeyButton>

        <BindKeyButton
          bindKeys={["KeyE"]}
          toolTipText="Поворот камеры вправо"
          onPressed={handleStartRotateRight}
          onPressedOut={handleStopRotateRight}
        >
          <RedoOutlined />E
        </BindKeyButton>

        <BindKeyButton
          bindKeys={["KeyR"]}
          toolTipText="Поворот камеры вверх"
          onPressed={handleStartRotateTop}
          onPressedOut={handleStopRotateTop}
        >
          <UpOutlined />R
        </BindKeyButton>
      </div>

      <div className={styles.ButtonRow}>
        <BindKeyButton
          bindKeys={["KeyA", "ArrowLeft"]}
          toolTipText="Смещение камеры влево"
          onPressed={handleStartMovingLeft}
          onPressedOut={handleStopMovingLeft}
        >
          <ArrowLeftOutlined />A
        </BindKeyButton>

        <BindKeyButton
          bindKeys={["KeyS", "ArrowDown"]}
          toolTipText="Смещение камеры назад"
          onPressed={handleStartMovingBack}
          onPressedOut={handleStopMovingBack}
        >
          <ArrowDownOutlined />S
        </BindKeyButton>

        <BindKeyButton
          bindKeys={["KeyD", "ArrowRight"]}
          toolTipText="Смещение камеры вправо"
          onPressed={handleStartMovingRight}
          onPressedOut={handleStopMovingRight}
        >
          <ArrowRightOutlined />D
        </BindKeyButton>

        <BindKeyButton
          bindKeys={["KeyF"]}
          toolTipText="Поворот камеры вниз"
          onPressed={handleStartRotateBottom}
          onPressedOut={handleStopRotateBottom}
        >
          <DownOutlined />F
        </BindKeyButton>
      </div>
    </div>
  );
};
