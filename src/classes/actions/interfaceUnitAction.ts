import { Unit } from "../Unit";

export interface UnitAction {
  doAction: (
    damage: number,
    health: number,
    isDefend: boolean,
    teamAttacked: Unit[]
  ) => number | Unit[];
}
