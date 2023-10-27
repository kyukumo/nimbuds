import { useStore } from "../hooks/useStore";
import { selectEvents } from "../selectors";
import { Events } from "./Events";

export function SpectatorEvents() {
  const events = useStore(selectEvents);

  return (
    <Events
      {...{
        events,
      }}
    />
  );
}
