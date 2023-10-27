import {
  selectActiveBudDescription,
  selectActiveBudLevel,
  selectActiveBudName,
  selectCanActiveBudAscend,
  selectPlayerId,
  selectTrainPhaseDuration,
} from "../../selectors";
import styles from "./index.module.css";
import { Attacks } from "../Attacks";
import { Events } from "../Events";
import { MainBudCanvas } from "../MainBudCanvas";
import { MainElementCanvas } from "../MainElementCanvas";
import { PlayerButtons } from "../PlayerButtons";
import { Switch } from "../Switch";
import { Timer } from "../Timer";
import { useStore } from "../../hooks/useStore";

export function Train() {
  const canAscend = useStore(selectCanActiveBudAscend);
  const description = useStore(selectActiveBudDescription);
  const id = useStore(selectPlayerId);
  const name = useStore(selectActiveBudName);
  const phaseDuration = useStore(selectTrainPhaseDuration);
  const level = useStore(selectActiveBudLevel);

  return (
    <>
      <main className={styles.train}>
        <Events />

        <div className={styles.content}>
          <header>
            <h1 className="sr-only">Train!</h1>

            <div className={styles.heading}>
              <dl>
                <dt className="sr-only">Name:</dt>

                <dd>
                  <strong>{name}</strong>
                </dd>
              </dl>

              <div className={styles.attributes}>
                <dl>
                  <dt>
                    <abbr title="Level">Lv: </abbr>
                  </dt>

                  <dd>{level}</dd>
                </dl>

                <MainElementCanvas />
              </div>
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
