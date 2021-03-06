import { UnitAction } from "./interfaceUnitAction";

export class MeleeAction implements UnitAction {
  doAction(damage: number, health: number, heal: number, isDefend: boolean): number {
    let unitHealth;
    if (isDefend) {
      unitHealth = health - damage * 0.5;
    } else {
      unitHealth = health - damage;
    }
    if (unitHealth <= 0) {
      return 0;
    } else return unitHealth;
  }
}
