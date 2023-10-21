import { PlayerProfile } from "../PlayerProfile";
import { Player } from "../../types";
import { Dialog } from "../Dialog";
import { DialogProvider } from "../Dialog/DialogContext";
import { DialogButton } from "../Dialog/DialogButton";

export function PlayerButton({ buds, name }: Player) {
  return (
    <DialogProvider>
      <DialogButton>{name}</DialogButton>

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
