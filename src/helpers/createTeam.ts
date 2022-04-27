import { MageAction } from "../classes/actions/MageAction";
import { MeleeAction } from "../classes/actions/MeleeAction";
import { RangeAction } from "../classes/actions/RangeAction";
import { Unit } from "../classes/Unit";
import { Archimage } from "../classes/units/Archimage";
import { Bandit } from "../classes/units/Bandit";
import { Centaur } from "../classes/units/Centaur";
import { Elf } from "../classes/units/Elf";
import { Skeleton } from "../classes/units/Skeleton";
import { SkeletonMage } from "../classes/units/SkeletonMage";

export const createTeam = (numTeam: number) => {
  const team = [];
  for (let i = 0; i < 6; i++) {
    const id = Math.floor(Math.random() * 6);
    switch (id) {
      case 0: {
        const skeleton = new Unit(new Skeleton(), new MeleeAction());
        skeleton.team = numTeam;
        team.push(skeleton);
        break;
      }
      case 1: {
        const centaur = new Unit(new Centaur(), new MeleeAction());
        centaur.team = numTeam;
        team.push(centaur);
        break;
      }
      case 2: {
        const bandit = new Unit(new Bandit(), new RangeAction());
        bandit.team = numTeam;
        team.push(bandit);
        break;
      }
      case 3: {
        const elf = new Unit(new Elf(), new RangeAction());
        elf.team = numTeam;
        team.push(elf);
        break;
      }
      case 4: {
        const skeletonMage = new Unit(new SkeletonMage(), new MageAction());
        skeletonMage.team = numTeam;
        team.push(skeletonMage);
        break;
      }
      case 5: {
        const archimage = new Unit(new Archimage(), new MageAction());
        archimage.team = numTeam;
        team.push(archimage);
        break;
      }
      default:
        return;
    }
  }

  return team;
};
