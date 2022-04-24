import { UnitAction } from "./actions/interfaceUnitAction";
import { UnitType } from "./UnitType";

export class Unit {
  public unitAction: UnitAction;
  public name: string;
  public health: number;
  public damage: number;
  public uniqueId: number;
  public initiative: number;
  public image: string;
  public team: number;
  public typeAction: string;
  public coords: { colIndex: number; rowIndex: number };
  public isDefend: boolean;
  constructor(unit: UnitType, unitAction: UnitAction) {
    this.name = unit.name;
    this.health = unit.health;
    this.damage = unit.damage;
    this.initiative = unit.initiative;
    this.image = unit.image;
    this.uniqueId = this.createUniqueId();
    this.unitAction = unitAction;
    this.team = unit.team;
    this.typeAction = unit.typeAction;
    this.coords = unit.coords;
    this.isDefend = unit.isDefend;
  }

  setUnit(unit: UnitType, unitAction: UnitAction) {
    this.name = unit.name;
    this.health = unit.health;
    this.damage = unit.damage;
    this.initiative = unit.initiative;
    this.image = unit.image;
    this.uniqueId = unit.uniqueId;
    this.unitAction = unitAction;
    this.team = unit.team;
    this.typeAction = unit.typeAction;
    this.coords = unit.coords;
    this.isDefend = unit.isDefend;
  }

  createUniqueId() {
    const uniqueId = Math.floor(Math.random() * 10000);
    return uniqueId;
  }

  public doAction(
    damage: number,
    health: number,
    attackingCords: { colIndex: number; rowIndex: number },
    attackedCords: { colIndex: number; rowIndex: number }
  ): number | null {
    return this.unitAction.doAction(
      damage,
      health,
      attackingCords,
      attackedCords
    );
  }
}