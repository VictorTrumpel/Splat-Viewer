import { ReactNode } from "react";

type VisibleProps = {
  show: boolean;
  children: ReactNode;
};

export const Visible = ({ show, children }: VisibleProps) => {
  return show ? <>{children}</> : null;
};
