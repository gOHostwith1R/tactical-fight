import { Unit } from "../../components/Unit/Unit";
import { createTeam } from "../../helpers/createTeam";
import "./styles.css";

export const Field = () => {
  const firstTeam = createTeam();
  const secondTeam = createTeam();
  return (
    <div className="field__wrapper">
      <div className="team__wrapper first-team">
        {firstTeam !== undefined &&
          firstTeam.map((unit, index) => (
            <Unit image={unit.image} name={unit.name} key={index} team={0} />
          ))}
      </div>
      <div className="team__wrapper second-team">
        {secondTeam !== undefined &&
          secondTeam.map((unit, index) => (
            <Unit image={unit.image} name={unit.name} key={index} team={1} />
          ))}
      </div>
    </div>
  );
};
