import { useStore } from "../../hooks/useStore";
import {
  selectCanSwitch,
  selectHasCooldown,
  selectPlayerId,
} from "../../selectors";

export function Switch() {
  const id = useStore(selectPlayerId);
  const hasCooldown = useStore(selectHasCooldown);
  const canSwitch = useStore(selectCanSwitch);

  const onClick = () =>
    Rune.actions.switch({
      id,
    });

  return (
    canSwitch && (
      <button disabled={hasCooldown} onClick={onClick} type="button">
        Switch
      </button>
    )
  );
}
