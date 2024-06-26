import { useRuneClient } from "../../hooks/useRuneClient";
import { useSounds } from "../../hooks/useSounds";
import { useStore } from "../../hooks/useStore";
import {
  selectGameEnded,
  selectGameOver,
  selectIsSpectator,
  selectPhase,
  selectReady,
} from "../../selectors";
import { Phase } from "../../types";
import { Battle } from "../Battle";
import { GameOver } from "../GameOver";
import { Spectate } from "../Spectate";
import { Train } from "../Train";

export function Game() {
  useRuneClient();
  useSounds();

  const ended = useStore(selectGameEnded);
  const gameOver = useStore(selectGameOver);
  const isSpectator = useStore(selectIsSpectator);
  const phase = useStore(selectPhase);
  const ready = useStore(selectReady);

  if (!ready) return "Loading!";

  if (isSpectator) {
    if (ended) return <GameOver title="Game Over!" />;
    return <Spectate />;
  }

  if (gameOver) return <GameOver title="You Lost!" />;
  if (ended) return <GameOver title="You Won!!" />;

  return phase === Phase.Battle ? <Battle /> : <Train />;
}
