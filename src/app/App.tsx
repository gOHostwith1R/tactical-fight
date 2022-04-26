import "./styles.css";
import { createQueue } from "../helpers/createQueue";
import { createTeam } from "../helpers/createTeam";
import { Field } from "../layouts/Field/Field";
import { TeamTypes } from "../types/teamTypes";
import { clearAttacking } from "../helpers/clearAttacking";

export const App = () => {
  const firstTeam = createTeam(0);
  const secondTeam = createTeam(1);
  const queue = createQueue(firstTeam, secondTeam);

  const onChangeQueue = () => {
    queue.shift();
  };

  const onAttackUnit = (id: number, team: number, activeUnit: TeamTypes) => {
    const unit =
      firstTeam?.find((elem) => elem.uniqueId === id) ||
      secondTeam?.find((elem) => elem.uniqueId === id);
    if (activeUnit.team !== unit?.team) {
      if (unit?.currentHealth === 0) {
        return;
      }
      const attempt = activeUnit.doAction(
        activeUnit.damage,
        unit!.currentHealth
      );
      unit!.currentHealth = attempt;
      onChangeQueue();
      clearAttacking(activeUnit.team, firstTeam, secondTeam);
    }
  };
  return (
    <div className="app">
      <Field
        firstTeam={firstTeam}
        secondTeam={secondTeam}
        queue={queue}
        onChangeQueue={onChangeQueue}
        onAttackUnit={onAttackUnit}
      />
    </div>
  );
};
