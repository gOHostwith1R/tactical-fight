import { Unit } from "../classes/Unit";

export const attackUnits = (
  firstTeam: Unit[] | undefined,
  secondTeam: Unit[] | undefined,
  unit: Unit,
  activeUnit: Unit
) => {
  const teamAttacked =
    (firstTeam?.includes(unit) && firstTeam) ||
    (secondTeam?.includes(unit) && secondTeam);
  let attempt;
  if (teamAttacked !== false && teamAttacked !== undefined) {
    attempt = activeUnit?.doAction(
      activeUnit.damage,
      unit?.currentHealth,
      activeUnit.heal,
      unit.isDefend,
      teamAttacked
    );
  }
  if (attempt !== undefined && typeof attempt === "number") {
    unit!.currentHealth = attempt;
    unit.isDefend = false;
  } else if (typeof attempt === "boolean") {
    unit!.isParalyzed = attempt;
  }
};
