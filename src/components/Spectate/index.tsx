import { useStore } from "../../hooks/useStore";
import { selectActiveBuds } from "../../selectors";
import { SubBudCanvas } from "../SubBudCanvas";
import styles from "./index.module.css";

export function Spectate() {
  const buds = useStore(selectActiveBuds);

  return (
    <main>
      <header>
        <h1>Spectate</h1>
      </header>

      <section className={styles.buds}>
        <ul>
          {buds.map((bud) => (
            <li key={`spectate-${bud.playerId}-${bud.id}`}>
              <SubBudCanvas
                {...{
                  bud,
                }}
              />

              {bud.name}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
