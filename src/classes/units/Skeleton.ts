import { MeleeAction } from "../actions/MeleeAction";
import { Unit } from "../Unit";

export class Skeleton extends Unit {
    constructor() {
      super({ name: "Skeleton", health: 100, damage: 25, initiative: 50, image: '../../assets/skeletonCard.png' }, new MeleeAction());
    }
  }
  