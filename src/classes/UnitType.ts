export type UnitType = {
  name: string;
  health: number;
  currentHealth: number;
  damage: number;
  initiative: number;
  image: string;
  uniqueId: number;
  team: number;
  typeAction: string;
  canAttacked: boolean;
  coords: { colIndex: number; rowIndex: number };
  isDefend: boolean;
  
};
