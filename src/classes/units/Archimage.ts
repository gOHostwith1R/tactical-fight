import { MageAction } from "../actions/MageAction";
import { Unit } from "../Unit";

export class Archimage extends Unit {
  constructor() {
    super(
      {
        name: "Archimage",
        health: 90,
        currentHealth: 90,
        damage: 30,
        heal: 0,
        isParalyzed: false,
        initiative: 40,
        uniqueId: 0,
        team: 0,
        typeAction: "mage",
        canAttacked: false,
        isDefend: false,
        image: "../../assets/archimageCard.png",
      },
      new MageAction()
    );
  }
}
