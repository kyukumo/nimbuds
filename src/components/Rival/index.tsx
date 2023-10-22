import { useStore } from "../../hooks/useStore";
import { getHp } from "../../lib/getHp";
import { selectPlayerId, selectTarget } from "../../selectors";
import { Bud } from "../../types";
import { HitPoints } from "../HitPoints";
import { SubBudCanvas } from "../SubBudCanvas";
import styles from "./index.module.css";

type Props = Bud & {
  playerId: string;
};

export function Rival({ playerId, ...bud }: Props) {
  const currentTarget = useStore(selectTarget);
  const checked = playerId === currentTarget;
  const id = useStore(selectPlayerId);
  const { id: budId, name, stats } = bud;
  const { hp, level } = stats;
  const hpId = `${playerId}-${budId}-hp`;

  const onChange = () =>
    Rune.actions.target({
      id,
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

      <span className="sr-only">{name}</span>

      <div className={styles.display}>
        <HitPoints
          id={hpId}
          {...{
            hp,
            level,
          }}
        />

        <SubBudCanvas
          {...{
            bud,
          }}
        />
      </div>
    </label>
  );
}
