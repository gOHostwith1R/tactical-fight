import { FC, useState } from "react";
import { Button } from "../../components/Button/Button";
import { Unit } from "../../components/Unit/Unit";
import { TeamsTypes } from "../../types/teamTypes";
import { Queue } from "../Queue/Queue";
import { UnitInfo } from "../UnitInfo/UnitInfo";
import "./styles.css";

export const Field: FC<FieldProps> = ({
  queue,
  firstTeam,
  secondTeam,
  onAttackUnit,
  onDefend,
}) => {
  const [hoverActiveUnit, setHoverActiveUnit] = useState(-1);

  const hoverUnit = (id: number) => {
    setHoverActiveUnit(id);
  };
  const outHoverUnit = () => {
    setHoverActiveUnit(-1);
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
                />
              );
            })}
          </div>
        </div>
      </div>
      <UnitInfo />
    </>
  );
};

interface FieldProps extends TeamsTypes {
  onAttackUnit: (id: number, team: number) => void;
  onDefend: () => void;
}
