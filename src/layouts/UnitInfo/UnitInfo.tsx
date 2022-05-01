import { FC } from "react";
import { Unit } from "../../classes/Unit";
import "./styles.css";

export const UnitInfo: FC<UserInfoProps> = ({ activeUnit }) => {
  return (
    <div className="unit__info">
      <p>Name: {activeUnit?.name}</p>
      <p>Health: {activeUnit?.health}</p>
      <p>Current health: {activeUnit?.currentHealth}</p>
          <p>Initiative: {activeUnit?.initiative}</p>
          <p>Team: {activeUnit?.team === 0 ? '1' : '2'}</p>
      <p>
        {activeUnit?.typeAction === "heal"
          ? `Heal: ${activeUnit.heal} `
          : (activeUnit?.damage !== 0 && `Damage : ${activeUnit?.damage}`) ||
            (activeUnit?.typeAction === "paralyzer" && `Paralyzer`)}
      </p>
      <p>Defend: {activeUnit?.isDefend ? "Yes" : "Not"}</p>
      <p>Paralyzed: {activeUnit?.isParalyzed ? "Yes" : "Not"}</p>
    </div>
  );
};

type UserInfoProps = {
  activeUnit: Unit | undefined;
};
