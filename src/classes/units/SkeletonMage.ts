import { MageAction } from "../actions/MageAction";
import { Unit } from "../Unit";

export class SkeletonMage extends Unit {
  constructor() {
    super(
      {
        name: "Skeleton Mage",
        health: 50,
        currentHealth: 10,
        damage: 20,
        initiative: 40,
        uniqueId: 0,
        team: 0,
        typeAction: 'melee',
        canAttacked: false,
        coords: { colIndex: -1, rowIndex: -1 },
        isDefend: false,
        image: "../../assets/skeletonMagCard.png",
      },
      new MageAction()
    );
  }
}