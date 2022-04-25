export interface TeamsTypes {
  firstTeam: TeamTypes[] | undefined;
  secondTeam: TeamTypes[] | undefined;
  queue: TeamTypes[] | undefined;
}

export interface TeamTypes {
  damage: number;
  health: number;
  currentHealth: number;
  image: string;
  initiative: number;
  name: string;
  uniqueId: number;
  typeAction: string;
  team: number;
  canAttacked: boolean,
  coords: { colIndex: number; rowIndex: number };
  isDefend: boolean;
  doAction: (
    damage: number,
    health: number,
  ) => number | null;
}

export interface QueueTypes {
  queue: TeamTypes[] | undefined;
}
