import { useStore } from "../../hooks/useStore";
import {
  selectActiveBudMoves,
  selectHasCooldown,
  selectPhase,
} from "../../selectors";
import { Phase } from "../../types";
import { Attack } from "./Attack";
import styles from "./index.module.css";

export function Attacks() {
  const moves = useStore(selectActiveBudMoves);
  const phase = useStore(selectPhase);

  const hasCooldown = useStore(selectHasCooldown);
  const battle = phase === Phase.Battle;
  const disabled = battle && hasCooldown;

  return (
    <fieldset className={styles.fieldset}>
      <legend className="sr-only">Attack!</legend>

      <ul className={styles.attacks}>
        {moves.map(({ move, ...props }) => (
          <Attack
            key={`${move}-bud`}
            {...{
              ...props,
              disabled,
              move,
            }}
          />
        ))}
      </ul>
    </fieldset>
  );
}
