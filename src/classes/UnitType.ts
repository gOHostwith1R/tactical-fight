export type UnitType = {
  name: string;
  health: number;
  damage: number;
  initiative: number;
  image: string;
  uniqueId: number;
  team: number;
  typeAction: string;
  coords: { colIndex: number, rowIndex: number },
  isDefend: boolean;
};
