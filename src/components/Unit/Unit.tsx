import { FC, ReactElement } from "react";
import "./styles.css";

export const Unit: FC<UnitProps> = ({
  image,
  name,
  team,
  health,
  currentHealth,
  hoverActiveUnit,
  id,
  hoverUnit,
  outHoverUnit,
  onAttack,
  isDefend,
  canAttacked
}): ReactElement => {
  return (
    <div
      className={`unit__wrapper ${team ? "second-team" : "first-team"} ${
        hoverActiveUnit === id && "active"
      } ${canAttacked && 'can-attacked'}`}
      onMouseEnter={() => hoverUnit(id)}
      onMouseLeave={() => outHoverUnit()}
      onClick={() => onAttack(id, team)}
    >
      <div className="unit__wrapper-title">
        <h3
          className={`unit__title ${
            hoverActiveUnit === id && "active__title-unit"
          }`}
        >
          {name}
        </h3>
        {isDefend && <img src="../../assets/shield.svg" alt="shield" />}
      </div>
      <img src={image} alt="card__unit" className="unit__image" />
      <div>
        <p className="unit__health">
          {currentHealth} / {health}
        </p>
      </div>
    </div>
  );
};

type UnitProps = {
  image: string;
  name: string;
  team: number;
  id: number;
  health: number;
  currentHealth: number;
  hoverActiveUnit: number;
  isDefend: boolean;
  canAttacked: boolean;
  hoverUnit: (id: number) => void;
  outHoverUnit: () => void;
  onAttack: (
    id: number,
    team: number
  ) => void;
};
