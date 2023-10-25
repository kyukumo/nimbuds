import {
  selectActiveBud,
  selectActiveBudStats,
  selectBattleType,
  selectRivalActiveBuds,
} from "../../selectors";
import { useStore } from "../../hooks/useStore";
import { BattleType } from "../../types";
import { SubBudCanvas } from "../SubBudCanvas";
import { Attacks } from "../Attacks";
import styles from "./index.module.css";
import { Switch } from "../Switch";
import { Rival } from "../Rival";
import { HitPoints } from "../HitPoints";

export function Battle() {
  const activeBud = useStore(selectActiveBud);
  const rivalActiveBuds = useStore(selectRivalActiveBuds);
  const stats = useStore(selectActiveBudStats);
  const { level, hp } = stats ?? {};

  return (
    <main className={styles.battle}>
      <header>
        <h1>Battle!</h1>
      </header>

      <section>
        <fieldset className={styles.fieldset}>
          <legend>Choose a Target</legend>

          <div className={styles.buds}>
            {activeBud && (
              <div className={styles.bud}>
                <HitPoints
                  id="my-hp"
                  {...{
                    hp,
                    level,
                  }}
                />

                <SubBudCanvas bud={activeBud} />
              </div>
            )}

            {rivalActiveBuds.map(({ playerId, ...bud }) => (
              <Rival
                key={`${playerId}-rival-bud`}
                {...{
                  ...bud,
                  playerId,
                }}
              />
            ))}
          </div>
        </fieldset>

        <nav>
          <Attacks />
          <Switch />
        </nav>
      </section>
    </main>
  );
}
