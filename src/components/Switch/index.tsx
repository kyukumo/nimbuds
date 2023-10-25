import { useStore } from "../../hooks/useStore";
import {
  selectCanSwitch,
  selectHasCooldown,
  selectPlayerId,
} from "../../selectors";
import styles from "./index.module.css";

export function Switch() {
  const id = useStore(selectPlayerId);
  const hasCooldown = useStore(selectHasCooldown);
  const canSwitch = useStore(selectCanSwitch);

  const onClick = () =>
    Rune.actions.switch({
      id,
    });

  return (
    <button
      className={styles.button}
      disabled={hasCooldown || !canSwitch}
      onClick={onClick}
      type="button"
    >
      Switch
    </button>
  );
}
