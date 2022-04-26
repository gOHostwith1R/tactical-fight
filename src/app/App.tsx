import "./styles.css";
import { createQueue } from "../helpers/createQueue";
import { createTeam } from "../helpers/createTeam";
import { Field } from "../layouts/Field/Field";
import { useEffect, useLayoutEffect, useState } from "react";
import { Unit } from "../classes/Unit";
import { canAttacking } from "../helpers/canAttacking";
import { clearAttacking } from "../helpers/clearAttacking";

export const App = () => {
  const [firstTeam, setFirstTeam] = useState<Unit[]>();
  const [secondTeam, setSecondTeam] = useState<Unit[]>();
  const [queue, setQueue] = useState<Unit[]>();
  const [activeUnit, setActiveUnit] = useState<Unit>();
  const [callRender, setCallRender] = useState<number>();

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

  useEffect(() => {
    queue?.forEach((unit, index) => {
      unit.currentHealth === 0 && queue.splice(index, 1);
    });
  }, [queue?.length, queue]);

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
    if (
      unit === undefined ||
      unit.currentHealth === 0 ||
      activeUnit?.team === team
    ) {
      return;
    }
    const attempt = activeUnit?.doAction(
      activeUnit.damage,
      unit?.currentHealth
    );
    if (attempt !== undefined) {
      unit!.currentHealth = attempt;
    }
    onChangeQueue();
  };

  return (
    <div className="app">
      <Field
        firstTeam={firstTeam}
        secondTeam={secondTeam}
        queue={queue}
        onChangeQueue={onChangeQueue}
        onAttackUnit={onAttackUnit}
      />
    </div>
  );
};
