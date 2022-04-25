import { TeamTypes } from "../types/teamTypes";

export const clearAttacking = (
  team: number,
  firstTeam: TeamTypes[] | undefined,
  secondTeam: TeamTypes[] | undefined
) => {
  const teamArray = team ? firstTeam : secondTeam;
  teamArray?.forEach((unit) => (unit.canAttacked = false));
};
