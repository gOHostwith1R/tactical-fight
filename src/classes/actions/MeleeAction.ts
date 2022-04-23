import { UnitAction } from "./interfaceUnitAction";

export class MeleeAction implements UnitAction {
    doAction(damage: number, health: number): number {
        return health - damage;
      }
}