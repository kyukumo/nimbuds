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
import { Events } from "../Events";

export function Train() {
  const canAscend = useStore(selectCanActiveBudAscend);
  const description = useStore(selectActiveBudDescription);
  const id = useStore(selectPlayerId);
  const name = useStore(selectActiveBudName);
  const phaseDuration = useStore(selectTrainPhaseDuration);

  return (
    <>
      <main className={styles.train}>
        <Events />

        <div className={styles.content}>
          <header>
            <h1 className="sr-only">Train!</h1>

            <div className={styles.heading}>
              <dl aria-describedby="bud-description">
                <dt className="sr-only">Name:</dt>

                <dd>
                  <strong>{name}</strong>
                </dd>
              </dl>

              <MainElementCanvas />
            </div>
          </header>

          <div className={styles.window}>
            <MainBudCanvas />

            <div className={styles.timer}>
              <Timer time={phaseDuration} />
            </div>
          </div>

          <div className={styles.choices}>
            <nav className={styles.actions}>
              <Switch />

              <button
                className={styles.ascend}
                disabled={!canAscend}
                onClick={() =>
                  Rune.actions.ascend({
                    id,
                  })
                }
                type="button"
              >
                Ascend!
              </button>
            </nav>

            <Attacks />
          </div>

          <footer>
            <PlayerButtons />

            {description && <p className={styles.description}>{description}</p>}
          </footer>
        </div>
      </main>
    </>
  );
}
