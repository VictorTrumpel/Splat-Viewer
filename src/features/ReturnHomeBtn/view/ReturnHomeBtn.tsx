import { BindKeyButton } from "@entities";
import { HomeOutlined } from "@ant-design/icons";
import { ReturnHomeBtnViewModel } from "../viewModel";
import styles from "./ReturnHomeBtn.module.scss";

export type ReturnHomeBtnProps = {
  useViewModel: () => ReturnHomeBtnViewModel;
};

export const ReturnHomeBtn = ({ useViewModel }: ReturnHomeBtnProps) => {
  const { handleReturnToHomePage } = useViewModel();

  return (
    <BindKeyButton
      onPressed={handleReturnToHomePage}
      className={styles.ReturnHomeBtn}
      toolTipText="Вернуться на главную >>"
    >
      <HomeOutlined />
    </BindKeyButton>
  );
};
