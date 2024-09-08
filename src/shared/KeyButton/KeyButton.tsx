import { ReactNode } from "react";
import { Button, ButtonProps, Tooltip } from "antd";
import styles from "./KeyButton.module.scss";

export type KeyButtonProps = ButtonProps & {
  toolTipText: string;
  children: ReactNode;
  isPressed?: boolean;
};

export const KeyButton = ({
  toolTipText,
  children,
  isPressed,
  ...props
}: KeyButtonProps) => {
  return (
    <Tooltip title={toolTipText}>
      <Button
        {...props}
        type={isPressed && "primary"}
        className={styles.KeyButton}
      >
        {children}
      </Button>
    </Tooltip>
  );
};
