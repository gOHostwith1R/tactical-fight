import { FC } from "react";
import { QueueTypes } from "../../types/teamTypes";
import "./styles.css";

export const Queue: FC<QueueProps> = ({
  queue,
  hoverUnit,
  outHoverUnit,
  hoverActiveUnit,
}) => {
  return (
    <div className="queue">
      <h3>Queue</h3>
      <div className="queue__wrapper">
        {queue?.map((unit) => (
          <div
            className={`${hoverActiveUnit === unit.uniqueId && "active"}`}
            key={unit.uniqueId}
            onMouseEnter={() => hoverUnit(unit.uniqueId)}
            onMouseLeave={() => outHoverUnit()}
          >
            <img
              className="queue-image"
              src={unit.image}
              alt={`${unit.name}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

interface QueueProps extends QueueTypes {
  hoverUnit: (id: number) => void;
  outHoverUnit: () => void;
  hoverActiveUnit: number;
}
