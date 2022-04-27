import "./styles.css";
import { createQueue } from "../helpers/createQueue";
import { createTeam } from "../helpers/createTeam";
import { Field } from "../layouts/Field/Field";
import { useEffect, useLayoutEffect, useState } from "react";
import { Unit } from "../classes/Unit";
import { canAttacking } from "../helpers/canAttacking";
import { clearAttacking } from "../helpers/clearAttacking";
import { checkTeam } from "../helpers/checkTeam";

export const App = () => {
  const [firstTeam, setFirstTeam] = useState<Unit[]>();
  const [secondTeam, setSecondTeam] = useState<Unit[]>();
  const [queue, setQueue] = useState<Unit[]>();
  const [activeUnit, setActiveUnit] = useState<Unit>();
  const [callRender, setCallRender] = useState<number>();
  const [winTeam, setWinTeam] = useState<number | undefined>();

  //create team
  useLayoutEffect(() => {
    setFirstTeam(createTeam(0));
    setSecondTeam(createTeam(1));
  }, []);
  //crete queue
  useLayoutEffect(() => {
    setQueue(createQueue(firstTeam, secondTeam));
  }, [firstTeam, secondTeam]);

  //add active unit
  useEffect(() => {
    if (queue !== undefined) {
      setActiveUnit(queue[0]);
    }
  }, [queue, activeUnit]);
  // add can attack
  useEffect(() => {
    if (activeUnit !== undefined) {
      canAttacking(activeUnit, firstTeam, secondTeam);
      setCallRender(1);
    }
  }, [activeUnit, firstTeam, secondTeam, callRender]);

  //clear queue
  useEffect(() => {
    queue?.forEach((unit, index) => {
      unit.currentHealth === 0 && queue.splice(index, 1);
    });
  }, [queue?.length, queue, firstTeam, secondTeam]);

  const onChangeQueue = () => {
    queue?.shift();
    if (queue !== undefined) setActiveUnit(queue[0]);
    if (queue?.length === 0) {
      const currentFirstTeam = firstTeam?.filter(
        (unit) => unit.currentHealth > 0
      );
      const currentSecondTeam = secondTeam?.filter(
        (unit) => unit.currentHealth > 0
      );
      if (activeUnit !== undefined) {
        setQueue(createQueue(currentFirstTeam, currentSecondTeam));
      }
    }
    activeUnit?.team !== undefined &&
      clearAttacking(activeUnit.team, firstTeam, secondTeam);
  };

  const onAttackUnit = (id: number, team: number) => {
    const unit =
      firstTeam?.find((elem) => elem.uniqueId === id) ||
      secondTeam?.find((elem) => elem.uniqueId === id);
    if (unit === undefined) {
      return;
    }
    if (
      unit!.currentHealth !== 0 ||
      unit!.typeAction === "healAll" ||
      unit!.typeAction === "healSolo"
    ) {
      const temHeal =
        (firstTeam?.includes(unit) && firstTeam) ||
        (secondTeam?.includes(unit) && secondTeam);
      if (temHeal !== false && temHeal !== undefined) {
        if (unit.currentHealth === 0) {
          return;
        }
        const attempt = activeUnit?.doAction(
          activeUnit.damage,
          unit!.currentHealth,
          activeUnit.heal,
          unit!.isDefend,
          temHeal
        );
        if (typeof attempt === "number") {
          unit.currentHealth = attempt;
          if (unit.currentHealth >= unit.health) {
            unit.currentHealth = unit.health;
          } else {
            unit.currentHealth = attempt;
          }
        }
      }
      onChangeQueue();
      clearAttacking(activeUnit!.team, firstTeam, secondTeam);
    }
    if (unit.currentHealth === 0 || activeUnit?.team === team) {
      return;
    }
    const teamAttacked =
      (firstTeam?.includes(unit) && firstTeam) ||
      (secondTeam?.includes(unit) && secondTeam);
    let attempt;
    if (teamAttacked !== false && teamAttacked !== undefined) {
      attempt = activeUnit?.doAction(
        activeUnit.damage,
        unit?.currentHealth,
        activeUnit.heal,
        unit.isDefend,
        teamAttacked
      );
    }
    if (attempt !== undefined && typeof attempt === "number") {
      unit!.currentHealth = attempt;
      unit.isDefend = false;
    }
    setWinTeam(checkTeam(firstTeam, 1) || checkTeam(secondTeam, 2));
    onChangeQueue();
  };

  const onDefend = () => {
    activeUnit!.isDefend = true;
    onChangeQueue();
    setCallRender(2);
  };
  return (
    <div className="app">
      <p className="win">{winTeam && `The team ${winTeam} lost`}</p>
      <Field
        firstTeam={firstTeam}
        secondTeam={secondTeam}
        queue={queue}
        onAttackUnit={onAttackUnit}
        onDefend={onDefend}
      />
    </div>
  );
};
