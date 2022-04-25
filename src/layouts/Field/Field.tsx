import { FC, useEffect, useState } from "react";
import { Button } from "../../components/Button/Button";
import { Unit } from "../../components/Unit/Unit";
import { canAttacking } from "../../helpers/canAttacking";
import { clearAttacking } from "../../helpers/clearAttacking";
import { TeamsTypes } from "../../types/teamTypes";
import { Queue } from "../Queue/Queue";
import "./styles.css";

export const Field: FC<FieldProps> = ({ queue, firstTeam, secondTeam }) => {
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
  }, [activeUnit, firstTeam, secondTeam, update]);

  const onAttack = (id: number, team: number) => {
    if (activeUnit.team !== team) {
      const unit =
        firstTeam?.find((elem) => elem.uniqueId === id) ||
        secondTeam?.find((elem) => elem.uniqueId === id);
      const attempt = activeUnit.doAction(
        activeUnit.damage,
        unit!.currentHealth
      );
      if (attempt === null) {
        return;
      }
      unit!.currentHealth = attempt;
      queue?.shift();
      setActiveUnit(queue![0]);
      clearAttacking(activeUnit.team, firstTeam, secondTeam);
      setUpdate(0);
    }
  };

  const onDefend = () => {
    activeUnit.isDefend = true;
    queue?.shift();
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
                  onAttack={onAttack}
                  isDefend={unit.isDefend}
                  canAttacked={unit.canAttacked}
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
                  onAttack={onAttack}
                  isDefend={unit.isDefend}
                  canAttacked={unit.canAttacked}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

interface FieldProps extends TeamsTypes {}
