import "./index.css";
import { RandomEvent } from "../RandomEvent";
import {
  selectActiveBudDescription,
  selectActiveBudName,
  selectActiveBudStats,
  selectCanActiveBudAscend,
  selectPlayerId,
  selectRivals,
} from "../../selectors";
import { useStore } from "../../hooks/useStore";
import { BudCanvas } from "../BudCanvas";
import { ElementCanvas } from "../ElementCanvas";
import { Ping } from "../Ping";

export function Train() {
  const canAscend = useStore(selectCanActiveBudAscend);
  const description = useStore(selectActiveBudDescription);
  const id = useStore(selectPlayerId);
  const name = useStore(selectActiveBudName);
  const rivals = useStore(selectRivals);
  const stats = useStore(selectActiveBudStats);

  return (
    <main>
      <header>
        <h2>
          <dl>
            <dt className="sr-only">Name:</dt>
            <dd>{name}</dd>
          </dl>
        </h2>

        <ElementCanvas />
      </header>

      <div className="content">
        <section className="window">
          <BudCanvas />

          <div className="events">
            <RandomEvent />
            <Ping />
          </div>
        </section>

        {description && <p>{description}</p>}

        <dl className="stats">
          {stats?.attack && (
            <>
              <dt>Attack</dt>
              <dd>{stats?.attack}</dd>
            </>
          )}

          {stats?.defense && (
            <>
              <dt>Defense</dt>
              <dd>{stats?.defense}</dd>
            </>
          )}

          {stats?.speed && (
            <>
              <dt>Speed</dt>
              <dd>{stats?.speed}</dd>
            </>
          )}
        </dl>

        <hr />

        <nav>
          <ul>
            <li>
              <button type="button">Train</button>
            </li>

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
        </nav>

        <hr />

        <nav>
          <ul>
            {rivals.map(({ id, name }) => (
              <li key={id}>
                <button
                  onClick={() =>
                    Rune.actions.ping({
                      id,
                    })
                  }
                  type="button"
                >
                  {name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </main>
  );
}
