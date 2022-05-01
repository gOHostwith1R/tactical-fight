import { MeleeAction } from "../classes/actions/MeleeAction";
import { Skeleton } from "../classes/units/Skeleton";
import { Unit } from "../classes/Unit";
import { canAttacking } from "../helpers/canAttacking";

const createTeam = (numTeam: number) => {
  const team = [];
  for (let i = 0; i < 6; i++) {
    const skeleton = new Unit(new Skeleton(), new MeleeAction());
    skeleton.team = numTeam;
    team.push(skeleton);
  }
  return team;
};

describe("Melee tests", () => {
  let unit: Unit;
  let firstTeam: Unit[] = [];
  let secondTeam: Unit[] = [];
  beforeEach(() => {
    firstTeam = createTeam(0);
    secondTeam = createTeam(1);
  });
  it(`the unit from first team in second line can't attack`, () => {
    unit = firstTeam[0];
    const attacked = canAttacking(unit, firstTeam, secondTeam);
    expect(attacked?.map((unit) => unit.canAttacked)).toEqual(secondTeam.map(() => false));
  });
  it(`the unit from second team in second line can't attack`, () => {
    unit = secondTeam[5];
    const attacked = canAttacking(unit, firstTeam, secondTeam);
    expect(attacked?.map((unit) => unit.canAttacked)).toEqual(firstTeam.map(() => false));
  });
  it(`the unit from first team in first line can attack only 1 and 2`, () => {
    unit = firstTeam[3];
    const attacked = canAttacking(unit, firstTeam, secondTeam);
      expect(attacked?.map((unit) => unit.canAttacked)).toEqual([true, true, false, false, false, false]);
  });
  it(`the unit from first team in first line can attack only first line`, () => {
    unit = firstTeam[4];
    const attacked = canAttacking(unit, firstTeam, secondTeam);
      expect(attacked?.map((unit) => unit.canAttacked)).toEqual([true, true, true, false, false, false]);
  });
  it(`the unit from first team in first line can attack only 2 and 3`, () => {
    unit = firstTeam[5];
    const attacked = canAttacking(unit, firstTeam, secondTeam);
      expect(attacked?.map((unit) => unit.canAttacked)).toEqual([false, true, true, false, false, false]);
  });
  it(`the unit from second team in first line can attack only 3 and 4`, () => {
    unit = secondTeam[0];
    const attacked = canAttacking(unit, firstTeam, secondTeam);
      expect(attacked?.map((unit) => unit.canAttacked)).toEqual([false, false, false, true, true, false]);
  });
  it(`the unit from second team in first line can attack only first line`, () => {
    unit = secondTeam[1];
    const attacked = canAttacking(unit, firstTeam, secondTeam);
      expect(attacked?.map((unit) => unit.canAttacked)).toEqual([false, false, false, true, true, true]);
  });
  it(`the unit from second team in first line can attack only 4 and 5`, () => {
    unit = secondTeam[2];
    const attacked = canAttacking(unit, firstTeam, secondTeam);
      expect(attacked?.map((unit) => unit.canAttacked)).toEqual([false, false, false, false, true, true]);
  });
});
