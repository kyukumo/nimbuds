import styles from "./index.module.css";
import { Bud } from "../../types";
import {
  selectGameOverBuds,
  selectPlayerId,
  selectWinningBuds,
} from "../../selectors";
import { useStore } from "../../hooks/useStore";
import { SubBudCanvas } from "../SubBudCanvas";
import { Background } from "../Background";
import { Music } from "../Music";
import { Help } from "../Help";
import { Header } from "../Header";

const addAnd = (index: number, length: number, text: string) =>
  [index && index === length - 1 && "and", text].filter(Boolean).join(" ");

const joinNamesWithSerialComma = (buds: Bud[]) =>
  buds
    .map(({ name }, index, { length }) => addAnd(index, length, name))
    .join(buds.length <= 2 ? " " : ", ");

export function GameOver({ title }: { title: string }) {
  const id = useStore(selectPlayerId);
  const spectating = !id;

  const gameOverBuds = useStore(selectGameOverBuds);
  const winningBuds = useStore(selectWinningBuds);
  const buds = spectating ? winningBuds : gameOverBuds;
  const [{ element }] = buds;

  const budsLabel = joinNamesWithSerialComma(buds);

  return (
    <>
      <Background
        {...{
          element,
        }}
      />

      <section className={styles.gameOver}>
        <Header />

        <div className={styles.content}>
          <strong>{title}</strong>

          <div className={styles.buds}>
            {buds.map((bud, index) => (
              <SubBudCanvas
                key={`game-over-${bud.id}-${index.toString()}`}
                {...{
                  bud,
                }}
              />
            ))}
          </div>

          <footer>
            <p>
              {spectating
                ? `Next time, you can join the fray and befriend ${budsLabel}!`
                : `Don't worry, you'll befriend 
        ${budsLabel} again soon!`}
            </p>

            {!spectating && <p>Thanks for playing!</p>}
          </footer>
        </div>
      </section>
    </>
  );
}
