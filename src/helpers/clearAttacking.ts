import { Unit } from "../classes/Unit";

export const clearAttacking = (
  team: number,
  firstTeam: Unit[] | undefined,
  secondTeam: Unit[] | undefined
) => {
  const teamArray = team ? firstTeam : secondTeam;
  const friendTeamArray = team ? secondTeam : firstTeam;
  teamArray?.forEach((unit) => (unit.canAttacked = false));
  friendTeamArray?.forEach((unit) => (unit.canAttacked = false));
};
