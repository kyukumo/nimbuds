import { useStore } from "../../hooks/useStore";
import { selectTarget } from "../../selectors";
import { Bud } from "../../types";
import { BattleBud } from "../BattleBud";
import styles from "./index.module.css";

type Props = {
  bud: Bud;
  playerId: string;
};

export function Rival({ bud, playerId }: Props) {
  const currentTarget = useStore(selectTarget);
  const checked = playerId === currentTarget;

  const onChange = () =>
    Rune.actions.target({
      target: playerId,
    });

  return (
    <label
      className={[styles.rival, checked && styles.checked]
        .filter(Boolean)
        .join(" ")}
    >
      <input
        className="sr-only"
        name="rival-target"
        type="radio"
        value={playerId}
        {...{
          checked,
          onChange,
        }}
      />

      <BattleBud
        {...{
          bud,
          playerId,
        }}
      />
    </label>
  );
}
