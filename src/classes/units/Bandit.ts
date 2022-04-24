import { RangeAction } from "../actions/RangeAction";
import { Unit } from "../Unit";

export class Bandit extends Unit {
  constructor() {
    super(
      {
        name: "Bandit",
        health: 75,
        damage: 30,
        initiative: 60,
        uniqueId: 0,
        team: 0,
        typeAction: 'range',
        coords: { colIndex: -1, rowIndex: -1 },
        isDefend: false,
        image: "../../assets/banditCard.png",
      },
      new RangeAction()
    );
  }
}
