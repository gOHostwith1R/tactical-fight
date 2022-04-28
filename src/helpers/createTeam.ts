import { HealAllTeamAction } from "../classes/actions/HealAllTeamAction";
import { HealSoloAction } from "../classes/actions/HealSoloAction";
import { MageAction } from "../classes/actions/MageAction";
import { MeleeAction } from "../classes/actions/MeleeAction";
import { ParalyzerAction } from "../classes/actions/ParalyzerAction";
import { RangeAction } from "../classes/actions/RangeAction";
import { Unit } from "../classes/Unit";
import { Archimage } from "../classes/units/Archimage";
import { Bandit } from "../classes/units/Bandit";
import { Bishop } from "../classes/units/Bishop";
import { Centaur } from "../classes/units/Centaur";
import { Elf } from "../classes/units/Elf";
import { Medusa } from "../classes/units/Medusa";
import { Monk } from "../classes/units/Monk";
import { Skeleton } from "../classes/units/Skeleton";
import { SkeletonMage } from "../classes/units/SkeletonMage";

export const createTeam = (numTeam: number) => {
  const team = [];
  for (let i = 0; i < 6; i++) {
    const id = Math.floor(Math.random() * 9);
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
      case 6: {
        const monk = new Unit(new Monk(), new HealSoloAction());
        monk.team = numTeam;
        team.push(monk);
        break;
      }
      case 7: {
        const bishop = new Unit(new Bishop(), new HealAllTeamAction());
        bishop.team = numTeam;
        team.push(bishop);
        break;
      }
      case 8: {
        const medusa = new Unit(new Medusa(), new ParalyzerAction());
        medusa.team = numTeam;
        team.push(medusa);
        break;
      }
      default:
        return;
    }
  }

  return team;
};
