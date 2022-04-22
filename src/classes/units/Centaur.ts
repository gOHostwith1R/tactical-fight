import { MeleeAction } from "../actions/MeleeAction";
import { Unit } from "../Unit";

export class Centaur extends Unit {
  constructor() {
    super(
      {
        name: "Centaur",
        health: 150,
        damage: 50,
        initiative: 50,
        uniqueId: 0,
        image: "../../assets/centaurCard.png",
      },
      new MeleeAction()
    );
  }
}
