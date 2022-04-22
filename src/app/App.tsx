import "./styles.css";
import { createQueue } from "../helpers/createQueue";
import { createTeam } from "../helpers/createTeam";
import { Field } from "../layouts/Field/Field";
import { Queue } from "../layouts/Queue/Queue";

export const App = () => {
  const firstTeam = createTeam();
  const secondTeam = createTeam();
  const queue = createQueue(firstTeam, secondTeam);
  return (
    <div className="app">
      <Queue queue={queue }/>
      <Field firstTeam={firstTeam} secondTeam={secondTeam} />
    </div>
  );
};
