import { ReactNode } from "react";
import { Button, ButtonProps, Tooltip } from "antd";
import cn from "classnames";
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
  className,
  ...props
}: KeyButtonProps) => {
  return (
    <Tooltip title={toolTipText}>
      <Button
        {...props}
        type={isPressed && "primary"}
        className={cn(styles.KeyButton, className)}
      >
        {children}
      </Button>
    </Tooltip>
  );
};
