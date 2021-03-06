import { Unit } from "../classes/Unit";

export interface TeamsTypes {
  firstTeam: Unit[] | undefined;
  secondTeam: Unit[] | undefined;
  queue: Unit[] | undefined;
}

export interface TeamTypes {
  damage: number;
  health: number;
  heal: number;
  isParalyzed: boolean;
  currentHealth: number;
  image: string;
  initiative: number;
  name: string;
  uniqueId: number;
  typeAction: string;
  team: number;
  canAttacked: boolean;
  coords: { colIndex: number; rowIndex: number };
  isDefend: boolean;
  doAction: (
    damage: number,
    health: number,
    isDefend: boolean,
    heal: number,
    teamAttacked: TeamTypes[]
  ) => number;
}

export interface QueueTypes {
  queue: Unit[] | undefined;
}
