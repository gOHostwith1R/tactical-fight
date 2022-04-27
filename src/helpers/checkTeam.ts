import { Unit } from "../classes/Unit";

export const checkTeam = (team: Unit[] | undefined, numTeam: number) => {
  const duplicateTeam = team !== undefined ? [...team] : undefined;
  const result = duplicateTeam?.filter((unit) => unit.currentHealth === 0)
  if (result !== undefined && result.length === 6) {
    return numTeam;
  }
};
