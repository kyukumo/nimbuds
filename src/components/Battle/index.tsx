import "./index.css";
import {
  selectActiveBudName,
  selectActiveBudStats,
  selectRivals,
} from "../../selectors";
import { useStore } from "../../hooks/useStore";

export function Battle() {
  const bud = useStore(selectActiveBudName);
  const rivals = useStore(selectRivals);
  const stats = useStore(selectActiveBudStats);

  return (
    <main>
      <header>
        <h1>{bud}</h1>
      </header>

      <section>
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

        <hr aria-hidden="true" />

        <ul>
          {rivals.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
