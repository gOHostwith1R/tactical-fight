import { Unit } from "../Unit";

export interface UnitAction {
  doAction: (
    damage: number,
    health: number,
    heal: number,
    isDefend: boolean,
    teamAttacked: Unit[]
  ) => number | Unit[];
}
