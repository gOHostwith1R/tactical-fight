import { FC, ReactElement } from "react";
import { fillUnit } from "../../helpers/fillUnit";
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
  isDefend,
  canAttacked,
  onAttackUnit,
}): ReactElement => {
  return (
    <div
      className={`unit__wrapper
       ${team ? "second-team" : "first-team"} ${
        hoverActiveUnit === id && "active"
      } ${canAttacked && "can-attacked"}`}
      onMouseEnter={() => hoverUnit(id)}
      onMouseLeave={() => outHoverUnit()}
      onClick={() => {
        onAttackUnit(id, team);
      }}
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
      <div
        className="filling"
        style={{ height: `${fillUnit(health, currentHealth)}px` }}
      />
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
  onAttackUnit: (id: number, team: number) => void;
  outHoverUnit: () => void;
};
