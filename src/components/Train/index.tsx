import {
  selectActiveBudDescription,
  selectActiveBudElements,
  selectActiveBudLevel,
  selectActiveBudName,
  selectAscendedActiveBudName,
  selectCanActiveBudAscend,
  selectTrainPhaseDuration,
} from "../../selectors";
import styles from "./index.module.css";
import { Attacks } from "../Attacks";
import { MainBudCanvas } from "../MainBudCanvas";
import { MainElementCanvas } from "../MainElementCanvas";
import { PlayerButtons } from "../PlayerButtons";
import { Switch } from "../Switch";
import { Timer } from "../Timer";
import { useStore } from "../../hooks/useStore";
import { Header } from "../Header";
import { PlayerEvents } from "../PlayerEvents";

export function Train() {
  const canAscend = useStore(selectCanActiveBudAscend);
  const ascended = useStore(selectAscendedActiveBudName);
  const description = useStore(selectActiveBudDescription);
  const name = useStore(selectActiveBudName);
  const phaseDuration = useStore(selectTrainPhaseDuration);
  const level = useStore(selectActiveBudLevel);
  const elements = useStore(selectActiveBudElements);

  return (
    <>
      <main className={[styles.train, elements?.join("-")].join(" ")}>
        <Header>
          <PlayerEvents />
        </Header>

        <div className="sr-only" role="status">
          {canAscend && `${name} can now ascend to ${ascended}!`}
        </div>

        <div className={styles.content}>
          <header>
            <h2 className="sr-only">Train!</h2>

            <div className={styles.heading}>
              <dl aria-describedby="bud-description">
                <dt className="sr-only">Name:</dt>

                <dd className={styles.name}>
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
            <Attacks />

            <nav className={styles.actions}>
              <button
                className={styles.ascend}
                disabled={!canAscend}
                onClick={() => Rune.actions.ascend()}
                type="button"
              >
                Ascend!
              </button>

              <Switch />
            </nav>
          </div>

          <footer>
            <PlayerButtons />

            {description && (
              <p
                aria-live="polite"
                className={styles.description}
                id="bud-description"
              >
                {description}
              </p>
            )}
          </footer>
        </div>
      </main>
    </>
  );
}
