import styles from "./index.module.css";
import { BudCanvas, CanvasProps } from "../BudCanvas";

export function SubBudCanvas({ bud, ...props }: CanvasProps) {
  return (
    bud && (
      <BudCanvas
        className={styles.canvas}
        {...{
          ...props,
          bud,
        }}
      />
    )
  );
}
