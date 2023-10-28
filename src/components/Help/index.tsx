import styles from "../index.module.css";
import { Dialog } from "../Dialog";
import { DialogButton } from "../Dialog/DialogButton";
import { DialogProvider } from "../Dialog/DialogContext";
import { SubBudCanvas } from "../SubBudCanvas";
import { buds } from "../../data/buds";

export function Help() {
  const mascot = buds.whispyre;

  return (
    <DialogProvider>
      <DialogButton className={styles.button}>
        <span className={styles.icon}>?</span>
      </DialogButton>

      <Dialog
        title={<h2>How to Play</h2>}
        {...{
          close,
        }}
      >
        <SubBudCanvas bud={mascot} />
        JUST DO IT!!
      </Dialog>
    </DialogProvider>
  );
}
