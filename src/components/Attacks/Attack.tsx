import { useStore } from "../../hooks/useStore";
import { selectActiveBudSpeed, selectPlayerId } from "../../selectors";
import { Element, Move } from "../../types";
import { SubElementCanvas } from "../SubElementCanvas";

// if you click on an attack before cool down,
// cool down will reset

export function Attack({
  cooldown,
  element,
  label,
  move,
}: {
  cooldown: number;
  element: Element;
  label: string;
  move: Move;
}) {
  const id = useStore(selectPlayerId);
  const speed = useStore(selectActiveBudSpeed);

  const onClick = () =>
    Rune.actions.attack({
      id,
      move,
      speed,
    });

  return (
    <li>
      <button
        disabled={Boolean(cooldown)}
        type="button"
        {...{
          onClick,
        }}
      >
        <SubElementCanvas
          {...{
            element,
          }}
        />

        <span>{label}</span>
      </button>
    </li>
  );
}
