import { FC, ReactElement } from "react";
import "./styles.css";

export const Unit: FC<typeProps> = ({
  image,
  name,
  team,
  hoverUnit,
  hoverActiveUnit,
  id,
  outHoverUnit,
}): ReactElement => {
  return (
    <div
      className={`unit__wrapper ${team ? "second-team" : "first-team"} ${
        hoverActiveUnit === id && "active"
      }`}
      onMouseEnter={() => hoverUnit(id)}
      onMouseLeave={() => outHoverUnit(id)}
    >
      <h3 className={`unit__title ${hoverActiveUnit === id && "active__title-unit"}`}>{name}</h3>
      <img src={image} alt="card__unit" className="unit__image" />
    </div>
  );
};

type typeProps = {
  image: string;
  name: string;
  team: number;
  id: number;
  hoverActiveUnit: number;
  hoverUnit: (id: number) => void;
  outHoverUnit: (id: number) => void;
};
