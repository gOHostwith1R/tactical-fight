import { FC, ReactElement } from "react";
import "./styles.css";

export const Unit: FC<typeProps> = ({ image, name, team }): ReactElement => {
  return (
    <div className={`unit__wrapper ${team ? 'second-team' : 'first-team'}`}>
      {name}
      <img src={image} alt="card__unit" className="unit__image" />
    </div>
  );
};

type typeProps = {
  image: string;
  name: string;
  team: number;
};
