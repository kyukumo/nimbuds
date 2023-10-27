import styles from "./index.module.css";
import { Bud } from "../../types";
import { selectGameOverBuds } from "../../selectors";
import { useStore } from "../../hooks/useStore";
import { SubBudCanvas } from "../SubBudCanvas";
import { Background } from "../Background";

const addAnd = (index: number, length: number, text: string) =>
  [index && index === length - 1 && "and", text].filter(Boolean).join(" ");

const joinNamesWithSerialComma = (buds: Bud[]) =>
  buds
    .map(({ name }, index, { length }) => addAnd(index, length, name))
    .join(buds.length <= 2 ? " " : ", ");

export function GameOver({ title }: { title: string }) {
  const gameOverBuds = useStore(selectGameOverBuds);
  const [{ element }] = gameOverBuds;

  return (
    <>
      <Background
        {...{
          element,
        }}
      />

      <section className={styles.gameOver}>
        <h1>{title}</h1>

        <div className={styles.buds}>
          {gameOverBuds.map((bud, index) => (
            <SubBudCanvas
              key={`game-over-${bud.id}-${index.toString()}`}
              {...{
                bud,
              }}
            />
          ))}
        </div>

        <p>
          Don't worry, you'll meet {joinNamesWithSerialComma(gameOverBuds)}{" "}
          again someday!
        </p>
      </section>
    </>
  );
}
