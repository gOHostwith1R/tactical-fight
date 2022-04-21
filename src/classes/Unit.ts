export class Unit {
  public unitAction: UnitAction;
  public name: string;
  public health: number;
  public damage: number;
  constructor(unit: UnitType, unitAction: UnitAction) {
    this.name = unit.name;
    this.health = unit.health;
    this.damage = unit.damage;
    this.unitAction = unitAction;
  }

  setUnit(unit: UnitType) {
    this.name = unit.name;
    this.health = unit.health;
    this.damage = unit.damage;
  }

  public doAction(): void {
    this.unitAction.dealDamage();
  }
}

type UnitType = {
  name: string;
  health: number;
  damage: number;
};

interface UnitAction {
  dealDamage: () => void;
}

// melee unit single target
export class Skeleton extends Unit {
  constructor() {
    super({ name: "Skeleton", health: 100, damage: 25 }, new Action());
  }
}

// range unit single target

export class BLa extends Unit {
  constructor() {
    super({ name: "Bandit", health: 150, damage: 50 }, new Action());
  }
}

class Action implements UnitAction {
  dealDamage(): void {
    console.log("action 1");
  }
}

class Action2 implements UnitAction {
  dealDamage(): void {
    console.log("action 2");
  }
}

export const unit = new Unit(new Skeleton(), new Action());
export const unit1 = new Unit(new Skeleton(), new Action2());
export const unit2 = new Unit(new BLa(), new Action2());
