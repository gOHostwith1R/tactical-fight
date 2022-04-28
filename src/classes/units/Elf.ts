import { RangeAction } from "../actions/RangeAction";
import { Unit } from "../Unit";

export class Elf extends Unit {
    constructor() {
      super(
        {
          name: "Elf",
          health: 90,
          currentHealth: 90,
          damage: 45,
          heal: 0,
          isParalyzed: false,
          initiative: 60,
          uniqueId: 0,
          team: 0,
          typeAction: 'range',
          canAttacked: false,
          coords: { colIndex: -1, rowIndex: -1 },
          isDefend: false,
          image: "../../assets/elfCard.png",
        },
        new RangeAction()
      );
    }
  }
  