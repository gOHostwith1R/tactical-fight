import { FC, useState } from "react";
import { Unit } from "../../components/Unit/Unit";
import { TeamsTypes } from "../../types/teamTypes";
import { Queue } from "../Queue/Queue";
import "./styles.css";

export const Field: FC<FieldProps> = ({
  firstTeam,
  secondTeam,
  queue,
}) => {
  const [hoverActiveUnit, setHoverActiveUnit] = useState(-1);
  const hoverUnit = (id: number) => {
    setHoverActiveUnit(id);
  };
  const outHoverUnit = (id: number) => {
    setHoverActiveUnit(-1);
  };
  return (
    <>
      <Queue queue={queue} hoverUnit={hoverUnit} outHoverUnit={outHoverUnit} hoverActiveUnit={hoverActiveUnit }/>
      <div className="field__wrapper">
        <div className="team__wrapper first-team">
          {firstTeam?.map((unit) => {
            return (
              <Unit
                image={unit.image}
                name={unit.name}
                key={unit.uniqueId}
                team={0}
                id={unit.uniqueId}
                hoverUnit={hoverUnit}
                outHoverUnit={outHoverUnit}
                hoverActiveUnit={hoverActiveUnit}
              />
            );
          })}
        </div>
        <div className="team__wrapper second-team">
          {secondTeam?.map((unit) => (
            <Unit
              image={unit.image}
              name={unit.name}
              key={unit.uniqueId}
              team={1}
              id={unit.uniqueId}
              hoverUnit={hoverUnit}
              outHoverUnit={outHoverUnit}
              hoverActiveUnit={hoverActiveUnit}
            />
          ))}
        </div>
      </div>
    </>
  );
};

interface FieldProps extends TeamsTypes {
}
