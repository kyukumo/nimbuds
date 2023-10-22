import { useEffect, useRef, useState } from "react";
import { selectDuration } from "../../selectors";
import { useStore } from "../../hooks/useStore";

enum Live {
  Assertive = "assertive",
  Off = "off",
}

enum Role {
  Alert = "alert",
  Timer = "timer",
}

type State = {
  live: Live;
  role: Role;
};

const alert = {
  live: Live.Assertive,
  role: Role.Alert,
};

const timer = {
  live: Live.Off,
  role: Role.Timer,
};

export function Timer({ time }: { time: number }) {
  const [{ live, role }, setState] = useState<State>(timer);
  const duration = useStore(selectDuration);
  const timeLeft = Math.max(0, time - duration);
  const warningTime = time / 4;

  useEffect(() => {
    if (timeLeft === warningTime) setState(alert);
  }, [timeLeft, warningTime]);

  return (
    <div
      aria-live={live}
      aria-atomic="true"
      {...{
        role,
      }}
    >
      {new Date(timeLeft).toISOString().slice(14, 19)}
    </div>
  );
}
