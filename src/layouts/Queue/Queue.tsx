import { FC } from "react";
import { QueueTypes } from "../../types/teamTypes";
import "./styles.css";

export const Queue: FC<QueueProps> = ({ queue }) => {
  return (
    <div className="queue">
      <h3>Queue</h3>
      <div className="queue__wrapper">
        {queue?.map((unit, index) => (
          <div key={index}>
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

interface QueueProps extends QueueTypes {}
