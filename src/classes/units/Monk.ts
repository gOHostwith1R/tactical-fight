import { HealSoloAction } from "../actions/HealSoloAction";
import { Unit } from "../Unit";

export class Monk extends Unit {
  constructor() {
    super(
      {
        name: "Monk",
        health: 90,
        currentHealth: 90,
        damage: 0,
        heal: 40,
        isParalyzed: false,
        initiative: 20,
        uniqueId: 0,
        team: 0,
        typeAction: "heal",
        canAttacked: false,
        isDefend: false,
        image: "../../assets/monkCard.png",
      },
      new HealSoloAction()
    );
  }
}
