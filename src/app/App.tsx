import "./styles.css";
import { createQueue } from "../helpers/createQueue";
import { createTeam } from "../helpers/createTeam";
import { Field } from "../layouts/Field/Field";

export const App = () => {
  const firstTeam = createTeam(0);
  const secondTeam = createTeam(1);
  const queue = createQueue(firstTeam, secondTeam);
  return (
    <div className="app">
      <Field
        firstTeam={firstTeam}
        secondTeam={secondTeam}
        queue={queue}
      />
    </div>
  );
};
