import {
  selectActiveBud,
  selectBattleType,
  selectRivalActiveBuds,
} from "../../selectors";
import { useStore } from "../../hooks/useStore";
import { BattleType } from "../../types";
import { SubBudCanvas } from "../SubBudCanvas";
import { Attacks } from "../Attacks";
import styles from "./index.module.css";

const label = {
  [BattleType.Four]: "4v4",
  [BattleType.Three]: "3v1",
  [BattleType.Two]: "2v2",
};

export function Battle() {
  const activeBud = useStore(selectActiveBud);
  const battleType = useStore(selectBattleType);
  const rivalActiveBuds = useStore(selectRivalActiveBuds);

  return (
    <main className={styles.battle}>
      <header>
        <h1>Battle!</h1>
      </header>

      <section>
        <p>{label[battleType]}</p>

        <fieldset className={styles.buds}>
          <legend>Choose a Target</legend>

          {rivalActiveBuds.map(({ name, playerId, ...bud }) => (
            <label key={`${playerId}-rival-bud`}>
              <input
                className="sr-only"
                name="rival-target"
                type="radio"
                value={playerId}
              />

              <span className="sr-only">{name}</span>

              <SubBudCanvas
                bud={{
                  ...bud,
                  name,
                }}
              />
            </label>
          ))}

          {activeBud && <SubBudCanvas bud={activeBud} />}
        </fieldset>

        <nav>
          <Attacks />
          <button type="button">Switch</button>
        </nav>
      </section>
    </main>
  );
}
