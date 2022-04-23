import { FC, ReactElement } from "react";
import "./styles.css";

export const Unit: FC<typeProps> = ({
  image,
  name,
  team,
  health,
  hoverActiveUnit,
  id,
  hoverUnit,
  outHoverUnit,
  onAttack,
  coords,
}): ReactElement => {
  return (
    <div
      className={`unit__wrapper ${team ? "second-team" : "first-team"} ${
        hoverActiveUnit === id && "active"
      }`}
      onMouseEnter={() => hoverUnit(id)}
      onMouseLeave={() => outHoverUnit()}
      onClick={() => onAttack(id, coords, team)}
    >
      <h3
        className={`unit__title ${
          hoverActiveUnit === id && "active__title-unit"
        }`}
      >
        {name}
      </h3>
      <img src={image} alt="card__unit" className="unit__image" />
      <p className="unit__health">{health}</p>
    </div>
  );
};

type typeProps = {
  image: string;
  name: string;
  team: number;
  id: number;
  health: number;
  hoverActiveUnit: number;
  coords: {
    rowIndex: number;
    colIndex: number;
  };
  hoverUnit: (id: number) => void;
  outHoverUnit: () => void;
  onAttack: (
    id: number,
    coords: { rowIndex: number; colIndex: number },
    team: number
  ) => void;
};
