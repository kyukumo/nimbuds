import { RandomEvent } from "../RandomEvent";
import {
  selectActiveBudDescription,
  selectActiveBudElements,
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
  const elements = useStore(selectActiveBudElements);

  return (
    <>
      <main className={styles.train}>
        <div
          aria-hidden
          className={[styles.background, elements?.join("-")].join(" ")}
        />

        <header>
          <h1 className="sr-only">Train!</h1>

          <div className={styles.heading}>
            <div>
              <span className={styles.type} id="bud-description">
                Basic Nimbud
              </span>

              <dl aria-describedby="bud-description">
                <dt className="sr-only">Name:</dt>
                <dd>{name}</dd>
              </dl>
            </div>

            <MainElementCanvas />
          </div>
        </header>

        <section className={styles.window}>
          <MainBudCanvas />

          <div className={styles.actions}>
            <span></span>
            <span></span>

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
          </div>

          <Timer time={phaseDuration} />
        </section>

        <Attacks />

        <footer>
          <PlayerButtons />

          {description && <p className={styles.description}>{description}</p>}
        </footer>
      </main>
    </>
  );
}
