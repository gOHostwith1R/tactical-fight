import { UnitAction } from "./interfaceUnitAction";

export class MeleeAction implements UnitAction {
    doAction(damage: number): number {
        return damage;
      }
}