import { useLayoutEffect } from "react";
import { useStore } from "./useStore";
import { selectGameEnded, selectPlayerId } from "../selectors";
import { paths } from "../data/sounds";

export const useSound = (sounds: string[]) => {
  const id = useStore(selectPlayerId);
  const ended = useStore(selectGameEnded);

  useLayoutEffect(() => {
    if (sounds.length) {
      sounds.forEach((sound) => {
        const path = paths[sound];
        const audio = new Audio(path);
        audio.load();
        audio.play();
      });

      if (id && !ended)
        Rune.actions.clearSounds({
          sounds,
        });
    }
  }, [ended, id, sounds]);
};
