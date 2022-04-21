import { UnitAction } from "./actions/interfaceUnitAction";
import { UnitType } from "./UnitType";

export class Unit {
  public unitAction: UnitAction;
  public name: string;
  public health: number;
  public damage: number;
  public initiative: number;
  public image: string;
  constructor(unit: UnitType, unitAction: UnitAction) {
    this.name = unit.name;
    this.health = unit.health;
    this.damage = unit.damage;
    this.initiative = unit.initiative;
    this.image = unit.image;
    this.unitAction = unitAction;
  }

  setUnit(unit: UnitType, unitAction: UnitAction) {
    this.name = unit.name;
    this.health = unit.health;
    this.damage = unit.damage;
    this.initiative = unit.initiative;
    this.image = unit.image;
    this.unitAction = unitAction;
  }

  public doAction(damage: number): number {
    return this.unitAction.doAction(damage);
  }
}
