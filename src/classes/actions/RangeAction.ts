import { UnitAction } from "./interfaceUnitAction";

export class RangeAction implements UnitAction {
  doAction(damage: number, health: number): number | null {
    return health - damage;
  }
}
