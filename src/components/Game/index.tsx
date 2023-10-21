import { useRuneClient } from "../../hooks/useRuneClient";
import { useStore } from "../../hooks/useStore";
import { selectPhase } from "../../selectors";
import { Phase } from "../../types";
import { Battle } from "../Battle";
import { Train } from "../Train";
import styles from "./index.module.css";

export function Game() {
  useRuneClient();

  const phase = useStore(selectPhase);

  const changePhase = () =>
    phase === Phase.Battle ? Rune.actions.train() : Rune.actions.battle();

  return (
    <>
      <button className={styles.phase} onClick={changePhase} type="button">
        Phase!
      </button>

      {phase === Phase.Battle ? <Battle /> : <Train />}
    </>
  );
}
