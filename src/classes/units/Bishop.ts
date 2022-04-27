import { HealAllTeam } from "../actions/HealAllTeamAction";
import { Unit } from "../Unit";

export class Bishop extends Unit {
  constructor() {
    super(
      {
        name: "Bishop",
        health: 130,
        currentHealth: 10,
        damage: 0,
        heal: 25,
        initiative: 20,
        uniqueId: 0,
        team: 0,
        typeAction: "healAll",
        canAttacked: false,
        coords: { colIndex: -1, rowIndex: -1 },
        isDefend: false,
        image: "../../assets/bishopCard.png",
      },
      new HealAllTeam()
    );
  }
}
