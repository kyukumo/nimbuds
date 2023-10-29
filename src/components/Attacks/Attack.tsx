import { elementLabel } from "../../data/elements";
import { useStore } from "../../hooks/useStore";
import { selectActiveBudSpeed } from "../../selectors";
import { Cooldown, Element, Move } from "../../types";
import { SubElementCanvas } from "../SubElementCanvas";
import styles from "./index.module.css";

export function Attack({
  cooldown,
  disabled: groupDisabled,
  element,
  label,
  move,
}: {
  cooldown?: Cooldown;
  disabled?: boolean;
  element: Element;
  label: string;
  move: Move;
}) {
  const speed = useStore(selectActiveBudSpeed);
  const disabled = groupDisabled || typeof cooldown !== "undefined";

  const attack = () =>
    Rune.actions.attack({
      move,
      speed,
    });

  const moveType = `${elementLabel[element]} element move`;

  return (
    <li>
      <button
        className={[disabled && styles.disabled].filter(Boolean).join(" ")}
        onClick={attack}
        type="button"
      >
        <SubElementCanvas
          aria-label={moveType}
          {...{
            element,
          }}
        />

        <span>{label}</span>
      </button>

      <p className="sr-only" role="status">
        {disabled ? `${label} is on cool down` : `${label} is ready to use`}
      </p>
    </li>
  );
}
