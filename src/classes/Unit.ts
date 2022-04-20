export class Unit {
  name: string;
  health: number;
  constructor(unit: UnitType) {
    this.name = unit.name;
    this.health = unit.health;
  }

  setUnit(unit: UnitType) {
    this.name = unit.name;
    this.health = unit.health;
  }
}

type UnitType = {
  name: string;
  health: number;
};

export class Skeleton extends Unit {
  constructor() {
    super({ name: "Skeleton", health: 150 });
  }
}

export class BLa extends Unit {
  constructor() {
    super({ name: "BLa", health: 0 });
  }
}
