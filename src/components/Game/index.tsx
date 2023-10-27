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
import { Bud, Buds, Phase } from "../../types";
import { Background } from "../Background";
import { Battle } from "../Battle";
import { GameOver } from "../GameOver";
import { Spectate } from "../Spectate";
import { Train } from "../Train";
import styles from "./index.module.css";

export function Game() {
  useRuneClient();

  const element = useStore(selectActiveBudElements);
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

  if (gameOver) return <GameOver title="You Lost! :(" />;
  if (ended) return <GameOver title="You Won!! :)" />;

  return (
    <>
      <Background
        {...{
          element,
        }}
      />

      <button className={styles.phase} onClick={changePhase} type="button">
        Phase!
      </button>

      {phase === Phase.Battle ? <Battle /> : <Train />}
    </>
  );
}
