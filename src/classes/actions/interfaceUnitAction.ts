export interface UnitAction {
  doAction: (
    damage: number,
    health: number,
    attacking: { colIndex: number; rowIndex: number },
    attacked: { colIndex: number; rowIndex: number }
  ) => number | null;
}
