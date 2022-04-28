import { Unit } from "../Unit";
import { UnitAction } from "./interfaceUnitAction";

export class HealAllTeamAction implements UnitAction {
  doAction(
    damage: number,
    health: number,
    heal: number,
    isDefend: boolean,
    teamAttacked: Unit[]
  ): Unit[] {
    teamAttacked.forEach((unit) => {
        if (unit.currentHealth !== 0) {
            const attempt = unit.currentHealth + heal;
            if (attempt >= unit.health) unit.currentHealth = unit.health;
            else unit.currentHealth = attempt;
        }
      });
      return teamAttacked;
  }
}
