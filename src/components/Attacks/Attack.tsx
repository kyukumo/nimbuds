import { useStore } from "../../hooks/useStore";
import { selectActiveBudSpeed, selectPlayerId } from "../../selectors";
import { Element, Move } from "../../types";
import { SubElementCanvas } from "../SubElementCanvas";
import styles from "./index.module.css";

export function Attack({
  cooldown,
  disabled: groupDisabled,
  element,
  label,
  move,
}: {
  cooldown?: number;
  disabled?: boolean;
  element: Element;
  label: string;
  move: Move;
}) {
  const id = useStore(selectPlayerId);
  const speed = useStore(selectActiveBudSpeed);
  const disabled = groupDisabled || typeof cooldown !== "undefined";

  const attack = () =>
    Rune.actions.attack({
      id,
      move,
      speed,
    });

  const progressBarId = `${move}-progress`;

  return (
    <li>
      <button
        className={[disabled && styles.disabled].filter(Boolean).join(" ")}
        onClick={attack}
        type="button"
      >
        <SubElementCanvas
          {...{
            element,
          }}
        />

        <span>{label}</span>
      </button>

      <div className="sr-only">
        <label htmlFor={progressBarId}>Loading:</label>
        <progress aria-busy={disabled} id={progressBarId} />
      </div>
    </li>
  );
}
