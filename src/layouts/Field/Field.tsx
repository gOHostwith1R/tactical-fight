import { FC } from "react";
import { Unit } from "../../components/Unit/Unit";
import { TeamsTypes } from "../../types/teamTypes";
import "./styles.css";

export const Field: FC<FieldProps> = ({ firstTeam, secondTeam }) => {
  return (
    <div className="field__wrapper">
      <div className="team__wrapper first-team">
        {firstTeam?.map((unit, index) => {
          return (
            <Unit image={unit.image} name={unit.name} key={index} team={0} />
          );
        })}
      </div>
      <div className="team__wrapper second-team">
        {secondTeam?.map((unit, index) => (
          <Unit image={unit.image} name={unit.name} key={index} team={1} />
        ))}
      </div>
    </div>
  );
};

interface FieldProps extends TeamsTypes {}
