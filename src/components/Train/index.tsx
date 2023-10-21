import { RandomEvent } from "../RandomEvent";
import {
  selectActiveBudDescription,
  selectActiveBudName,
  selectActiveBudStats,
  selectCanActiveBudAscend,
  selectPlayerId,
} from "../../selectors";
import { useStore } from "../../hooks/useStore";
import { MainBudCanvas } from "../MainBudCanvas";
import { MainElementCanvas } from "../MainElementCanvas";
import { Attacks } from "../Attacks";
import { PlayerButtons } from "../PlayerButtons";
import styles from "./index.module.css";

export function Train() {
  const canAscend = useStore(selectCanActiveBudAscend);
  const description = useStore(selectActiveBudDescription);
  const id = useStore(selectPlayerId);
  const name = useStore(selectActiveBudName);
  const stats = useStore(selectActiveBudStats);

  return (
    <>
      <main className={styles.train}>
        <header>
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
                <button type="button">Switch</button>
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

          <dl className={styles.stats}>
            {stats?.level && (
              <>
                <dt className="sr-only">Level</dt>
                <dd>{stats.level}</dd>
              </>
            )}

            {stats?.attack && (
              <>
                <dt className="sr-only">Attack</dt>
                <dd>{stats.attack}</dd>
              </>
            )}

            {stats?.defense && (
              <>
                <dt className="sr-only">Defense</dt>
                <dd>{stats.defense}</dd>
              </>
            )}

            {stats?.speed && (
              <>
                <dt className="sr-only">Speed</dt>
                <dd>{stats.speed}</dd>
              </>
            )}

            {stats?.xp && (
              <>
                <dt className="sr-only">XP</dt>
                <dd>{stats.xp}</dd>
              </>
            )}
          </dl>

          {description && <p className={styles.description}>{description}</p>}
        </div>
      </main>
    </>
  );
}
