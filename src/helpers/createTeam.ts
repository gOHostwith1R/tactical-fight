import { MeleeAction } from "../classes/actions/MeleeAction";
import { Unit } from "../classes/Unit";
import { Centaur } from "../classes/units/Centaur";
import { Skeleton } from "../classes/units/Skeleton";

export const createTeam = () => {
  const team = [];
  for (let i = 0; i < 6; i++) {
    const id = Math.floor(Math.random() * 2);
    switch (id) {
      case 0: {
        const skeleton = new Unit(new Skeleton(), new MeleeAction());
        team.push(skeleton);
        break;
      }
      case 1: {
        const centaur = new Unit(new Centaur(), new MeleeAction());
        team.push(centaur);
        break;
      }
      default:
        return;
    }
  }
  return team;
};
