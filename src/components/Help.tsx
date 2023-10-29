import styles from "./index.module.css";
import { Dialog } from "./Dialog";
import { DialogButton } from "./Dialog/DialogButton";
import { DialogProvider } from "./Dialog/DialogContext";
import { SubBudCanvas } from "./SubBudCanvas";
import { buds } from "../data/buds";

export function Help() {
  const mascot = buds.wispyre;

  return (
    <DialogProvider>
      <DialogButton className={styles.button}>
        <span className={styles.icon}>
          <span aria-hidden="true">?</span>
          <span className="sr-only">View How to Play Nimbuds</span>
        </span>
      </DialogButton>

      <Dialog title={<h2>How to Play Nimbuds</h2>}>
        <SubBudCanvas aria-describedby="help-bud-description" bud={mascot} />

        <p id="help-bud-description">This is a Nimbud!</p>

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
          <abbr title="four versus four player">4v4</abbr> match!
        </p>

        <p>Gain mastery of type matchups and befriend all of the Nimbuds!</p>
      </Dialog>
    </DialogProvider>
  );
}
