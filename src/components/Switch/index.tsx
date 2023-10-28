import { useStore } from "../../hooks/useStore";
import { selectCanSwitch, selectHasCooldown } from "../../selectors";
import styles from "./index.module.css";

export function Switch() {
  const hasCooldown = useStore(selectHasCooldown);
  const canSwitch = useStore(selectCanSwitch);

  const onClick = () => Rune.actions.switch();

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
