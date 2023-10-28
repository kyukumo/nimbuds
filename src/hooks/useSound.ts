import { useEffect } from "react";
import dark from "../sounds/dark.ogg";
import earth from "../sounds/earth.ogg";
import fire from "../sounds/fire.ogg";
import light from "../sounds/light.ogg";
import water from "../sounds/water.ogg";
import wind from "../sounds/wind.ogg";
import { Element } from "../types";
import { useStore } from "./useStore";
import {
  selectCooldowns,
  selectGameEnded,
  selectPlayerId,
  selectPlayerSounds,
} from "../selectors";
import { usePrevious } from "./usePrevious";

const paths = {
  dark: dark,
  earth: earth,
  fire: fire,
  light: light,
  water: water,
  wind: wind,
} as Record<string, string>;

export const useSound = (sounds: string[]) => {
  const id = useStore(selectPlayerId);
  const ended = useStore(selectGameEnded);

  useEffect(() => {
    if (sounds.length) {
      sounds.forEach((sound) => {
        const path = paths[sound];
        const audio = new Audio(path);
        audio.play();
      });

      if (id && !ended)
        Rune.actions.clearSounds({
          id,
          sounds,
        });
    }
  }, [ended, id, sounds]);
};
