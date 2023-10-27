import { Bud } from "../../types";

export function PlayerProfile({ buds }: { buds: Bud[] }) {
  return (
    <>
      <h2>Your Rival</h2>
      <p>Train to take down your rivals! This rival has the following buds:</p>

      {buds.map(({ id, name }, index) => (
        <p key={`player-profile-${id}-${index}`}>{name}</p>
      ))}
    </>
  );
}
