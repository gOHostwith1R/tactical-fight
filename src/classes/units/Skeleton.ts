import { MeleeAction } from "../actions/MeleeAction";
import { Unit } from "../Unit";

export class Skeleton extends Unit {
  constructor() {
    super(
      {
        name: "Skeleton",
        health: 100,
        damage: 25,
        initiative: 50,
        uniqueId: 0,
        team: 0,
        typeAction: 'melee',
        coords: { colIndex: -1, rowIndex: -1 },
        isDefend: false,
        image: "../../assets/skeletonCard.png",
      },
      new MeleeAction()
    );
  }
}