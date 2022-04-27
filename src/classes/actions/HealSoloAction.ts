import { UnitAction } from "./interfaceUnitAction";

export class HealSoloAction implements UnitAction {
  doAction(damage: number, health: number, heal: number): number {
    return health + heal;
  }
}
