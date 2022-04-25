export interface UnitAction {
  doAction: (
    damage: number,
    health: number,
  ) => number | null;
}
