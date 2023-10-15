import { useEffect } from "react";
import { useStore } from "./useStore";

export function useRuneClient() {
  const setGame = useStore((state) => state.setGame);

  useEffect(() => {
    Rune.initClient({
      onChange: setGame,
    });
  }, [setGame]);
}
