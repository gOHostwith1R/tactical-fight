import { Unit } from "../classes/Unit";

export const clearAttacking = (
  team: number,
  firstTeam: Unit[] | undefined,
  secondTeam: Unit[] | undefined
) => {
  const teamArray = team ? firstTeam : secondTeam;
  teamArray?.forEach((unit) => (unit.canAttacked = false));
};
