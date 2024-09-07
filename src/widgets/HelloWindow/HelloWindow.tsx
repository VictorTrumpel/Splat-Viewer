import { LoadFileForm } from "@features";
import styles from "./HelloWindow.module.scss";

export const HelloWindow = () => {
  return (
    <div className={styles.HelloWindow}>
      <LoadFileForm />
    </div>
  );
};
