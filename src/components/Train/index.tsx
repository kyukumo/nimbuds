import { RandomEvent } from "../RandomEvent";
import {
  selectActiveBudDescription,
  selectActiveBudName,
  selectCanActiveBudAscend,
  selectPlayerId,
  selectTrainPhaseDuration,
} from "../../selectors";
import { useStore } from "../../hooks/useStore";
import { MainBudCanvas } from "../MainBudCanvas";
import { MainElementCanvas } from "../MainElementCanvas";
import { Attacks } from "../Attacks";
import { PlayerButtons } from "../PlayerButtons";
import styles from "./index.module.css";
import { Switch } from "../Switch";
import { Timer } from "../Timer";

export function Train() {
  const canAscend = useStore(selectCanActiveBudAscend);
  const description = useStore(selectActiveBudDescription);
  const id = useStore(selectPlayerId);
  const name = useStore(selectActiveBudName);
  const phaseDuration = useStore(selectTrainPhaseDuration);

  return (
    <>
      <main className={styles.train}>
        <header>
          <Timer time={phaseDuration} />
          <h1 className="sr-only">Train!</h1>

          <div>
            <dl>
              <dt className="sr-only">Name:</dt>
              <dd>{name}</dd>
            </dl>

            <MainElementCanvas />
          </div>
        </header>

        <div className="content">
          <section className={styles.window}>
            <MainBudCanvas />

            <div className={styles.events}>
              <RandomEvent />
            </div>
          </section>

          <nav>
            <Attacks />

            <ul>
              <li>
                <Switch />
              </li>

              {canAscend && (
                <li>
                  <button
                    onClick={() =>
                      Rune.actions.ascend({
                        id,
                      })
                    }
                    type="button"
                  >
                    Ascend!
                  </button>
                </li>
              )}
            </ul>

            <PlayerButtons />
          </nav>

          {description && <p className={styles.description}>{description}</p>}
        </div>
      </main>
    </>
  );
}
