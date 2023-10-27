import styles from "./index.module.css";
import { Bud } from "../../types";
import { HitPoints } from "../HitPoints";
import { SubBudCanvas } from "../SubBudCanvas";

export function BattleBud({
  bud,
  className,
  playerId,
}: {
  bud: Bud;
  className?: string;
  playerId: string;
}) {
  const {
    id: budId,
    name,
    stats: { hp, level },
  } = bud;

  const hpId = `${playerId}-${budId}-hp`;

  return (
    <div className={[styles.display, className].filter(Boolean).join(" ")}>
      <span className="sr-only">{name}</span>

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
  );
}
