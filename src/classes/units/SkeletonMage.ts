import { MageAction } from "../actions/MageAction";
import { Unit } from "../Unit";

export class SkeletonMage extends Unit {
  constructor() {
    super(
      {
        name: "Skeleton Mage",
        health: 50,
        currentHealth: 50,
        damage: 20,
        heal: 0,
        isParalyzed: false,
        initiative: 40,
        uniqueId: 0,
        team: 0,
        typeAction: "mage",
        canAttacked: false,
        isDefend: false,
        image: "../../assets/skeletonMagCard.png",
      },
      new MageAction()
    );
  }
}
