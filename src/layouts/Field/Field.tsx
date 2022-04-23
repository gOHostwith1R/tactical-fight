import { FC, useState } from "react";
import { Unit } from "../../components/Unit/Unit";
import { TeamTypes, TeamsTypes } from "../../types/teamTypes";
import { Queue } from "../Queue/Queue";
import "./styles.css";

export const Field: FC<FieldProps> = ({
  queue,
  matrixFirstTeam,
  matrixSecondTeam,
}) => {
  const [hoverActiveUnit, setHoverActiveUnit] = useState(-1);
  const [activeUnit, setActiveUnit] = useState(queue![0]);
  const [attackedUnit, setAttackedUnit] = useState<TeamTypes | undefined>(
    undefined
  );
  const hoverUnit = (id: number) => {
    setHoverActiveUnit(id);
  };
  const outHoverUnit = (id: number) => {
    setHoverActiveUnit(-1);
  };

  const onAttack = (id: number) => {
    const unit = queue?.find((elem) => elem.uniqueId === id);
    setAttackedUnit(unit);
    unit!.health =
      unit!.health - activeUnit.doAction(activeUnit.damage, unit!.health);
    queue?.shift();
    setActiveUnit(queue![0]);
    console.log(activeUnit.name, "attack", attackedUnit);
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
        <div className="team__wrapper first-team">
          {matrixFirstTeam.map((arrayUnits, rowIndex) => {
            return arrayUnits.map((unit, colIndex) => {
              return (
                <Unit
                  image={unit.image}
                  name={unit.name}
                  key={unit.uniqueId}
                  health={unit.health}
                  team={unit.team}
                  id={unit.uniqueId}
                  hoverUnit={hoverUnit}
                  outHoverUnit={outHoverUnit}
                  hoverActiveUnit={hoverActiveUnit}
                  onAttack={onAttack}
                  coords={{rowIndex, colIndex}}
                />
              );
            });
          })}
        </div>
        <div className="team__wrapper second-team">
          {matrixSecondTeam.map((arrayUnits, rowIndex) => {
            return arrayUnits.map((unit, colIndex) => {
              return (
                <Unit
                  image={unit.image}
                  name={unit.name}
                  key={unit.uniqueId}
                  health={unit.health}
                  team={unit.team}
                  id={unit.uniqueId}
                  coords={{rowIndex, colIndex}}
                  hoverUnit={hoverUnit}
                  outHoverUnit={outHoverUnit}
                  hoverActiveUnit={hoverActiveUnit}
                  onAttack={onAttack}
                />
              );
            });
          })}
        </div>
      </div>
    </>
  );
};

interface FieldProps extends TeamsTypes {
  matrixFirstTeam: TeamTypes[][];
  matrixSecondTeam: TeamTypes[][];
}
