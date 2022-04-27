import { MageAction } from "../actions/MageAction";
import { Unit } from "../Unit";

export class Archimage extends Unit {
  constructor() {
    super(
      {
        name: "Archimage",
        health: 90,
        currentHealth: 30,
        damage: 30,
        initiative: 40,
        uniqueId: 0,
        team: 0,
        typeAction: 'melee',
        canAttacked: false,
        coords: { colIndex: -1, rowIndex: -1 },
        isDefend: false,
        image: "../../assets/archimageCard.png",
      },
      new MageAction()
    );
  }
}