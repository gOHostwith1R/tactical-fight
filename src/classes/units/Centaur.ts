import { MeleeAction } from "../actions/MeleeAction";
import { Unit } from "../Unit";

export class Centaur extends Unit {
  constructor() {
    super(
      {
        name: "Centaur",
        health: 150,
        currentHealth: 150,
        damage: 50,
        heal: 0,
        isParalyzed: false,
        initiative: 50,
        uniqueId: 0,
        team: 0,
        typeAction: 'melee',
        canAttacked: false,
        coords: { colIndex: -1, rowIndex: -1 },
        isDefend: false,
        image: "../../assets/centaurCard.png",
      },
      new MeleeAction()
    );
  }
}
