export interface TeamsTypes {
  firstTeam: TeamTypes[] | undefined;
  secondTeam: TeamTypes[] | undefined;
  queue: TeamTypes[] | undefined;
}

export interface TeamTypes {
  damage: number;
  health: number;
  image: string;
  initiative: number;
  name: string;
  uniqueId: number;
  team: number;
  coords: { colIndex: number; rowIndex: number };
  isDefend: boolean;
  doAction: (
    damage: number,
    health: number,
    attacking: { colIndex: number; rowIndex: number },
    attacked: { colIndex: number; rowIndex: number }
  ) => number | null;
}

export interface QueueTypes {
  queue: TeamTypes[] | undefined;
}
