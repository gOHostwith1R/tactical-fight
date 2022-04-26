import { FC, useEffect, useState } from "react";
import { Button } from "../../components/Button/Button";
import { Unit } from "../../components/Unit/Unit";
import { canAttacking } from "../../helpers/canAttacking";
import { clearAttacking } from "../../helpers/clearAttacking";
import { TeamsTypes, TeamTypes } from "../../types/teamTypes";
import { Queue } from "../Queue/Queue";
import "./styles.css";

export const Field: FC<FieldProps> = ({
  queue,
  firstTeam,
  secondTeam,
  onChangeQueue,
  onAttackUnit,
}) => {
  const [hoverActiveUnit, setHoverActiveUnit] = useState(-1);
  const [activeUnit, setActiveUnit] = useState(queue![0]);
  const [update, setUpdate] = useState(0);
  const hoverUnit = (id: number) => {
    setHoverActiveUnit(id);
  };
  const outHoverUnit = () => {
    setHoverActiveUnit(-1);
  };

  useEffect(() => {
    canAttacking(activeUnit, firstTeam, secondTeam);
    setUpdate(1);
  }, [activeUnit, firstTeam, secondTeam, update, queue]);

  useEffect(() => {
    queue?.forEach((unit, index) => {
      if (unit.currentHealth === 0) {
        queue.splice(index, 1);
      }
    });
  }, [activeUnit, queue]);

  const onDefend = () => {
    activeUnit.isDefend = true;
    onChangeQueue();
    setActiveUnit(queue![0]);
    clearAttacking(activeUnit.team, firstTeam, secondTeam);
    setUpdate(0);
  };
  return (
    <>
      <Queue
        queue={queue}
        hoverUnit={hoverUnit}
        outHoverUnit={outHoverUnit}
        hoverActiveUnit={hoverActiveUnit}
      />
      <div className="field__wrapper">
        <Button onDefend={onDefend} />
        <div className="container">
          <div className="team__wrapper first-team">
            {firstTeam?.map((unit) => {
              return (
                <Unit
                  image={unit.image}
                  name={unit.name}
                  key={unit.uniqueId}
                  health={unit.health}
                  currentHealth={unit.currentHealth}
                  team={unit.team}
                  id={unit.uniqueId}
                  hoverUnit={hoverUnit}
                  outHoverUnit={outHoverUnit}
                  hoverActiveUnit={hoverActiveUnit}
                  isDefend={unit.isDefend}
                  canAttacked={unit.canAttacked}
                  onAttackUnit={onAttackUnit}
                  activeUnit={activeUnit}
                />
              );
            })}
          </div>
          <div className="team__wrapper second-team">
            {secondTeam?.map((unit) => {
              return (
                <Unit
                  image={unit.image}
                  name={unit.name}
                  key={unit.uniqueId}
                  health={unit.health}
                  currentHealth={unit.currentHealth}
                  team={unit.team}
                  id={unit.uniqueId}
                  hoverUnit={hoverUnit}
                  outHoverUnit={outHoverUnit}
                  hoverActiveUnit={hoverActiveUnit}
                  isDefend={unit.isDefend}
                  canAttacked={unit.canAttacked}
                  onAttackUnit={onAttackUnit}
                  activeUnit={activeUnit}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

interface FieldProps extends TeamsTypes {
  onChangeQueue: () => void;
  onAttackUnit: (id: number, team: number, activeUnit: TeamTypes) => void;
}
