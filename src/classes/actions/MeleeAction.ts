import { UnitAction } from "./interfaceUnitAction";

export class MeleeAction implements UnitAction {
  doAction(
    damage: number,
    health: number,
    attacking: { colIndex: number; rowIndex: number },
    attacked: { colIndex: number; rowIndex: number }
  ): number | null {
    if (attacking.rowIndex === 0) {
      return null;
    } else if (attacked.rowIndex === 1) {
      return null;
    }
    return health - damage;
  }
}
