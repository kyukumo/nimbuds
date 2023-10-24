import { PlayerProfile } from "../PlayerProfile";
import { Player } from "../../types";
import { Dialog } from "../Dialog";
import { DialogProvider } from "../Dialog/DialogContext";
import { DialogButton } from "../Dialog/DialogButton";
import { SubBudCanvas } from "../SubBudCanvas";
import styles from "./index.module.css";

export function PlayerButton({ buds }: Player) {
  const [bud] = buds;

  return (
    <DialogProvider>
      <DialogButton className={styles.button}>
        <SubBudCanvas
          {...{
            bud,
          }}
        />
      </DialogButton>

      <Dialog
        {...{
          close,
        }}
      >
        <PlayerProfile
          {...{
            buds,
          }}
        />
      </Dialog>
    </DialogProvider>
  );
}
