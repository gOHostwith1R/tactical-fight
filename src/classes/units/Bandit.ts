import { RangeAction } from "../actions/RangeAction";
import { Unit } from "../Unit";

export class Bandit extends Unit {
  constructor() {
    super(
      {
        name: "Bandit",
        health: 75,
        currentHealth: 75,
        damage: 30,
        heal: 0,
        isParalyzed: false,
        initiative: 60,
        uniqueId: 0,
        team: 0,
        typeAction: 'range',
        canAttacked: false,
        isDefend: false,
        image: "../../assets/banditCard.png",
      },
      new RangeAction()
    );
  }
}
