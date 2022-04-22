export interface TeamsTypes {
  firstTeam: TeamTypes[] | undefined;
  secondTeam: TeamTypes[] | undefined;
}

export interface TeamTypes {
  damage: number;
  health: number;
  image: string;
  initiative: number;
  name: string;
  doAction: (damage: number) => number;
}

export interface QueueTypes {
  queue: TeamTypes[] | undefined;
}
