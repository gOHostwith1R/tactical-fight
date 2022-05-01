import { ParalyzerAction } from "../actions/ParalyzerAction";
import { Unit } from "../Unit";

export class Medusa extends Unit {
  constructor() {
    super(
      {
        name: "Medusa",
        health: 80,
        currentHealth: 80,
        damage: 0,
        heal: 0,
        isParalyzed: false,
        initiative: 20,
        uniqueId: 0,
        team: 0,
        typeAction: "paralyzer",
        canAttacked: false,
        isDefend: false,
        image: "../../assets/medusaCard.png",
      },
      new ParalyzerAction()
    );
  }
}
