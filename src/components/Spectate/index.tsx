import { useStore } from "../../hooks/useStore";
import {
  selectActiveBuds,
  selectPhase,
  selectTrainPhaseDuration,
} from "../../selectors";
import { Phase } from "../../types";
import { BattleBud } from "../BattleBud";
import { ElementCanvas } from "../ElementCanvas";
import { Header } from "../Header";
import { SpectatorEvents } from "../SpectatorEvents";
import { Timer } from "../Timer";
import styles from "./index.module.css";

export function Spectate() {
  const phase = useStore(selectPhase);
  const phaseDuration = useStore(selectTrainPhaseDuration);
  const buds = useStore(selectActiveBuds);
  const [{ element }] = buds;

  return (
    <main className={[styles.spectate, element.join("-")].join(" ")}>
      <Header>
        <SpectatorEvents />
      </Header>

      <section className={styles.content}>
        <header className={styles.header}>
          <h2>You're Spectating</h2>

          <dl>
            <dt>Phase:</dt>

            <dd aria-live="polite" aria-atomic="false">
              {phase === Phase.Train ? "Training" : "Battling"}
            </dd>

            {phase === Phase.Train && (
              <>
                <dt>Timer:</dt>

                <dd>
                  <Timer time={phaseDuration} />
                </dd>
              </>
            )}
          </dl>
        </header>

        <article className={styles.buds}>
          <ul>
            {buds.map((bud) => {
              const {
                element: elements,
                id,
                name,
                playerId,
                stats: { level },
              } = bud;

              return (
                <li key={`spectate-${playerId}-${id}`}>
                  <dl>
                    <dt className="sr-only">Name:</dt>

                    <dd>
                      <strong>{name}</strong>
                    </dd>

                    <div className={styles.stats}>
                      <div className={styles.level}>
                        <dt>
                          <abbr title="Level">Lv</abbr>:
                        </dt>

                        <dd>{level}</dd>
                      </div>

                      <dt className="sr-only">Elements:</dt>

                      <dd>
                        <ElementCanvas
                          {...{
                            elements,
                          }}
                        />
                      </dd>
                    </div>
                  </dl>

                  <BattleBud
                    className={styles.me}
                    {...{
                      bud,
                      playerId,
                    }}
                  />
                </li>
              );
            })}
          </ul>
        </article>
      </section>
    </main>
  );
}
