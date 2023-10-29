import styles from "../index.module.css";
import { Dialog } from "../Dialog";
import { DialogButton } from "../Dialog/DialogButton";
import { DialogProvider } from "../Dialog/DialogContext";
import { SubBudCanvas } from "../SubBudCanvas";
import { buds } from "../../data/buds";

export function Help() {
  const mascot = buds.wispyre;
  console.log(mascot);

  return (
    <DialogProvider>
      <DialogButton className={styles.button}>
        <span className={styles.icon}>?</span>
      </DialogButton>

      <Dialog
        title={<h2>How to Play Nimbuds</h2>}
        {...{
          close,
        }}
      >
        <SubBudCanvas bud={mascot} />

        <p>This is a Nimbud!</p>

        <p>
          For 3 minutes, you'll befriend up to 3 Nimbuds and train them to
          ascension.
        </p>

        <p>Use moves to build XP and level up. Ascend when you can!</p>

        <p>
          You can switch between Nimbuds to train them all. You can also view
          your rivals' teams, so plan your training accordingly.
        </p>

        <p>
          Finally, battle your rivals in an all-out{" "}
          <abbr title="four versus four">4v4</abbr> match!
        </p>

        <p>Gain mastery of type matchups and befriend all the Nimbuds!</p>
      </Dialog>
    </DialogProvider>
  );
}
