import styles from "./index.module.css";
import { Bud } from "../../types";
import { BudCanvas } from "../BudCanvas";

export function SubBudCanvas({ bud }: { bud?: Bud }) {
  return (
    bud && (
      <BudCanvas
        className={styles.canvas}
        {...{
          bud,
        }}
      />
    )
  );
}
