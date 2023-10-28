import { selectPlayerSounds, selectSounds } from "../selectors";
import { useSound } from "./useSound";
import { useStore } from "./useStore";

export const useSounds = () => {
  const playerSounds = useStore(selectPlayerSounds);
  const sounds = useStore(selectSounds);

  useSound(playerSounds);
  useSound(sounds);
};
