import "./App.css";
import { gameActor } from "./game/index.ts";
import { useActor, useSelector } from "@xstate/react";
import { selectMyBuds, selectRivals } from "./game/selectors.ts";

function App() {
  const [state] = useActor(gameActor);
  const rivals = useSelector(gameActor, selectRivals);
  const myBuds = useSelector(gameActor, selectMyBuds);

  return (
    <main>
      <p>{state.context.player?.lastEvent}</p>
      <p>{rivals}</p>
      <p>{myBuds}</p>
    </main>
  );
}

export default App;
