import { Bud } from "../../types";

export function PlayerProfile({ buds }: { buds: Bud[] }) {
  return buds.map(({ name }) => <p key={`player-profile-${name}`}>{name}</p>);
}
