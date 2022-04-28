import { HealSoloAction } from "../actions/HealSoloAction";
import { Unit } from "../Unit";

export class Monk extends Unit {
  constructor() {
    super(
      {
        name: "Monk",
        health: 90,
        currentHealth: 20,
        damage: 0,
        heal: 40,
        isParalyzed: false,
        initiative: 20,
        uniqueId: 0,
        team: 0,
        typeAction: "healSolo",
        canAttacked: false,
        coords: { colIndex: -1, rowIndex: -1 },
        isDefend: false,
        image: "../../assets/monkCard.png",
      },
      new HealSoloAction()
    );
  }
}
