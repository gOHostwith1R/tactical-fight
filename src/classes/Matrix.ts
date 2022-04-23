import { Unit } from "./Unit";

export class Matrix {
  public firstTeam: Unit[] | undefined;
  public secondTeam: Unit[] | undefined;
  constructor(firstTeam: Unit[] | undefined, secondTeam: Unit[] | undefined) {
    this.firstTeam = firstTeam;
    this.secondTeam = secondTeam;
  }

  createMatrix() {
    const matrixFirstTeam: Unit[][] = [];
    const matrixSecondTeam: Unit[][] = [];
    let counter = 0;
    for (let i = 0; i < 2; i++) {
      matrixFirstTeam[i] = [];
      for (let j = 0; j < 3; j++) {
        if (this.firstTeam !== undefined) {
          matrixFirstTeam[i][j] = this.firstTeam[counter];
          this.firstTeam[counter].team = 0;
          this.firstTeam[counter].coords = { colIndex: j, rowIndex: i };
        }
        counter++;
      }
    }
    counter = 0;
    for (let i = 0; i < 2; i++) {
      matrixSecondTeam[i] = [];
      for (let j = 0; j < 3; j++) {
        if (this.firstTeam !== undefined) {
          if (this.secondTeam !== undefined) {
            matrixSecondTeam[i][j] = this.secondTeam[counter];
            this.secondTeam[counter].team = 1;
            this.secondTeam[counter].coords = { colIndex: j, rowIndex: i };
          }
        }
        counter++;
      }
    }

    return {
      matrixFirstTeam,
      matrixSecondTeam,
    };
  }
}
