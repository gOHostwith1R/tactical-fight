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
        team: 0,
        typeAction: 'melee',
        coords: { colIndex: -1, rowIndex: -1 },
        isDefend: false,
        image: "../../assets/centaurCard.png",
      },
      new MeleeAction()
    );
  }
}
