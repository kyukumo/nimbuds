import styles from "./index.module.css";
import { BudCanvas } from "../BudCanvas";
import { selectActiveBud } from "../../selectors";
import { useStore } from "../../hooks/useStore";

export function MainBudCanvas() {
  const bud = useStore(selectActiveBud);

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
