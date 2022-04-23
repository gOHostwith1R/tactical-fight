import "./styles.css";
import { createQueue } from "../helpers/createQueue";
import { createTeam } from "../helpers/createTeam";
import { Field } from "../layouts/Field/Field";
import { Matrix } from "../classes/Matrix";

export const App = () => {
  const firstTeam = createTeam();
  const secondTeam = createTeam();
  const queue = createQueue(firstTeam, secondTeam);
  const { matrixFirstTeam, matrixSecondTeam } = new Matrix(
    firstTeam,
    secondTeam
  ).createMatrix();
  return (
    <div className="app">
      <Field
        firstTeam={firstTeam}
        secondTeam={secondTeam}
        queue={queue}
        matrixFirstTeam={matrixFirstTeam}
        matrixSecondTeam={matrixSecondTeam}
      />
    </div>
  );
};
