export interface UnitAction {
  doAction: (
    damage: number,
    health: number,
    isDefend: boolean,
  ) => number;
}
