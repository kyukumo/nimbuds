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
import { Events } from "../Events";

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
            <dl aria-describedby="bud-description">
              <dt className="sr-only">Name:</dt>
              <dd>{name}</dd>
            </dl>

            <MainElementCanvas />
          </div>
        </header>

        <MainBudCanvas />
        <Timer time={phaseDuration} />

        <div>
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

        <Events />

        <footer>
          <PlayerButtons />

          {description && <p className={styles.description}>{description}</p>}
        </footer>
      </main>
    </>
  );
}
