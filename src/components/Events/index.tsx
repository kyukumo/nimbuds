import styles from "./index.module.css";

export function Events({ events }: { events: string[] }) {
  return (
    <div className={styles.events}>
      <div className={styles.content}>
        <ul
          aria-atomic="false"
          aria-live="polite"
          className={events.length ? styles.show : styles.hide}
        >
          {events.map((event, index) => (
            <li
              key={`event-${index.toString()}`}
              dangerouslySetInnerHTML={{
                __html: event,
              }}
            />
          ))}
        </ul>

        {!events.length && (
          <p>Train until the timer runs out, then battle your rivals!</p>
        )}
      </div>
    </div>
  );
}
