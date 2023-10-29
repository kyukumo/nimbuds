import {
  selectActiveBud,
  selectActiveBudElements,
  selectPlayerId,
  selectRivalActiveBuds,
  selectTarget,
} from "../../selectors";
import { useStore } from "../../hooks/useStore";
import { Attacks } from "../Attacks";
import styles from "./index.module.css";
import { Switch } from "../Switch";
import { Rival } from "../Rival";
import { BattleBud } from "../BattleBud";
import { SpectatorEvents } from "../SpectatorEvents";
import { Header } from "../Header";

export function Battle() {
  const activeBud = useStore(selectActiveBud);
  const elements = useStore(selectActiveBudElements);
  const currentTarget = useStore(selectTarget);
  const rivalActiveBuds = useStore(selectRivalActiveBuds);
  const id = useStore(selectPlayerId);

  return (
    <main className={[styles.battle, elements?.join("-")].join(" ")}>
      <Header>
        <SpectatorEvents />
      </Header>

      <div className={styles.content}>
        <header>
          <h2>Battle!</h2>
        </header>

        <form>
          <fieldset>
            <legend>Choose a Target</legend>

            <div className={styles.buds}>
              {activeBud && (
                <BattleBud
                  bud={activeBud}
                  className={styles.me}
                  playerId={id}
                />
              )}

              {rivalActiveBuds.map(({ playerId, ...bud }) => (
                <>
                  <div className="sr-only" role="status">
                    {playerId === currentTarget &&
                      `You're targeting ${bud.name}`}
                  </div>

                  <Rival
                    key={`${playerId}-rival-bud`}
                    {...{
                      bud,
                      playerId,
                    }}
                  />
                </>
              ))}
            </div>
          </fieldset>

          <nav>
            <Switch />
            <Attacks />
          </nav>
        </form>
      </div>
    </main>
  );
}
