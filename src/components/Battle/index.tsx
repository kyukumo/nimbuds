import {
  selectActiveBud,
  selectPlayerId,
  selectRivalActiveBuds,
} from "../../selectors";
import { useStore } from "../../hooks/useStore";
import { Attacks } from "../Attacks";
import styles from "./index.module.css";
import { Switch } from "../Switch";
import { Rival } from "../Rival";
import { Events } from "../Events";
import { BattleBud } from "../BattleBud";

export function Battle() {
  const activeBud = useStore(selectActiveBud);
  const rivalActiveBuds = useStore(selectRivalActiveBuds);
  const id = useStore(selectPlayerId);

  return (
    <main className={styles.battle}>
      <Events />

      <div className={styles.content}>
        <header>
          <h1>Battle!</h1>
        </header>

        <form>
          <fieldset>
            <legend>Choose a Target</legend>

            <div className={styles.buds}>
              {activeBud && (
                <BattleBud
                  bud={activeBud}
                  className={styles.me}
                  playerId={id}
                />
              )}

              {rivalActiveBuds.map(({ playerId, ...bud }) => (
                <Rival
                  key={`${playerId}-rival-bud`}
                  {...{
                    bud,
                    playerId,
                  }}
                />
              ))}
            </div>
          </fieldset>

          <nav>
            <Switch />
            <Attacks />
          </nav>
        </form>
      </div>
    </main>
  );
}
