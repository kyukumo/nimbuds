import "./index.css";
import { RandomEvent } from "../RandomEvent";
import {
  selectActiveBudElements,
  selectActiveBudName,
  selectCanActiveBudAdvance,
  selectPlayerId,
} from "../../selectors";
import { useRuneClient } from "../../hooks/useRuneClient";
import { useStore } from "../../hooks/useStore";
import { BudCanvas } from "../BudCanvas";
import { ElementCanvas } from "../ElementCanvas";

export function Game() {
  useRuneClient();

  const canAdvance = useStore(selectCanActiveBudAdvance);
  const id = useStore(selectPlayerId);
  const elements = useStore(selectActiveBudElements);
  const name = useStore(selectActiveBudName);

  return (
    <main className={elements?.join("-")}>
      <header>
        <dl>
          <dt className="sr-only">Name:</dt>
          <dd>{name}</dd>
        </dl>

        <ElementCanvas />
      </header>

      <BudCanvas />

      {canAdvance && (
        <button
          onClick={() =>
            Rune.actions.advance({
              id,
            })
          }
          type="button"
        >
          Advance!
        </button>
      )}

      <RandomEvent />
    </main>
  );
}
