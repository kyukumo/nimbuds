import styles from "./index.module.css";

export function Events({ events }: { events: string[] }) {
  return (
    <div className={styles.events}>
      <div>
        {events.length ? (
          <ul>
            {events.map((event, index) => (
              <li aria-live="polite" key={`event-${index}`}>
                {event}
              </li>
            ))}
          </ul>
        ) : (
          <p>Train until the timer runs out, then battle your rivals!</p>
        )}
      </div>
    </div>
  );
}
