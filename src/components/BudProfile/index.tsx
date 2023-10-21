import { Bud } from "../../types";

export function BudProfile({ bud }: { bud: Bud }) {
  return <p>{bud.name}</p>;
}
