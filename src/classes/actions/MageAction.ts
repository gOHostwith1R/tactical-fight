import { Unit } from "../Unit";
import { UnitAction } from "./interfaceUnitAction";

export class MageAction implements UnitAction {
  doAction(
    damage: number,
    health: number,
    heal: number,
    isDefend: boolean,
    teamAttacked: Unit[]
  ): Unit[] {
    teamAttacked.forEach((unit) => {
      if (unit.currentHealth !== 0) {
        if (unit.isDefend) {
          const attempt = unit.currentHealth - damage * 0.5;
          if (attempt <= 0) unit.currentHealth = 0;
          else unit.currentHealth = attempt;
          unit.isDefend = false;
        } else {
          const attempt = unit.currentHealth - damage;
          if (attempt <= 0) unit.currentHealth = 0;
          else unit.currentHealth = attempt;
        }
      }
    });
    return teamAttacked;
  }
}
