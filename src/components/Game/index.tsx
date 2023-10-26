import { useRuneClient } from "../../hooks/useRuneClient";
import { useStore } from "../../hooks/useStore";
import {
  selectActiveBudElements,
  selectGameEnded,
  selectGameOver,
  selectIsSpectator,
  selectPhase,
  selectReady,
} from "../../selectors";
import { Phase } from "../../types";
import { Battle } from "../Battle";
import { Spectate } from "../Spectate";
import { Train } from "../Train";
import styles from "./index.module.css";

export function Game() {
  useRuneClient();

  const elements = useStore(selectActiveBudElements);
  const ended = useStore(selectGameEnded);
  const gameOver = useStore(selectGameOver);
  const isSpectator = useStore(selectIsSpectator);
  const phase = useStore(selectPhase);
  const ready = useStore(selectReady);

  const changePhase = () =>
    phase === Phase.Battle ? Rune.actions.train() : Rune.actions.battle();

  if (!ready) return "Loading!";

  if (isSpectator) {
    if (ended) return "Game over!";
    return <Spectate />;
  }

  if (gameOver) return "You lost! :(";
  if (ended) return "You won!! :)";

  return (
    <>
      <div
        aria-hidden
        className={[styles.background, elements?.join("-")].join(" ")}
      />

      <button className={styles.phase} onClick={changePhase} type="button">
        Phase!
      </button>

      {phase === Phase.Battle ? <Battle /> : <Train />}
    </>
  );
}
