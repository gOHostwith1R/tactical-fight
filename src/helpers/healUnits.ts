import { Unit } from "../classes/Unit";

export const healUnits = (
  firstTeam: Unit[] | undefined,
  secondTeam: Unit[] | undefined,
  unit: Unit,
  activeUnit: Unit
) => {
  const temHeal =
    (firstTeam?.includes(unit) && firstTeam) ||
    (secondTeam?.includes(unit) && secondTeam);
  if (temHeal !== false && temHeal !== undefined && unit.currentHealth === 0) {
    const attempt = activeUnit?.doAction(
      activeUnit.damage,
      unit!.currentHealth,
      activeUnit.heal,
      unit!.isDefend,
      temHeal
    );
    if (typeof attempt === "number") {
      unit.currentHealth = attempt;
      if (unit.currentHealth >= unit.health) {
        unit.currentHealth = unit.health;
      } else {
        unit.currentHealth = attempt;
      }
    }
  }
};
