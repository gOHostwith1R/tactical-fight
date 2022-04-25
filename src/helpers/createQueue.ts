import { Unit } from "../classes/Unit";

export const createQueue = (
  firstTeam: Unit[] | undefined,
  secondTeam: Unit[] | undefined
) => {
  const queue: Unit[] = [];
  firstTeam?.forEach((elem) => {
    queue.push(elem);
  });
  secondTeam?.forEach((elem) => {
    queue.push(elem);
  });
  const trueQueue = queue
    .sort(() => 0.5 - Math.random())
    .sort((a, b) => b.initiative - a.initiative);
  return trueQueue;
};
