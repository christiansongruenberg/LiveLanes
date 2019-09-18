import React from "react";
import classNames from "classnames";
import "./styles.scss";

const LaneCard = ({
  lane,
  auction,
  year,
  make,
  model,
  itemsRemaining,
  itemsWatching,
  onClick,
  isSelected
}) => (
  <div
    onClick={() => onClick(lane)}
    className={classNames("lane-card", {
      "lane-card--selected": isSelected
    })}
  >
    <div className="card-row">
      <span className="card-name">{lane} </span>{" "}
      <span className="card-auction">• {auction}</span>
    </div>
    <div className="card-row card-car-model">
      {year} {make} {model} is live
    </div>
    <div className="card-row">
      <span className="card-items-remaining">
        {itemsRemaining} Items Remaining{itemsWatching && ", "}{" "}
      </span>
      {itemsWatching && (
        <span className="card-watchlist">
          {itemsWatching} is on your watchlist{" "}
        </span>
      )}
    </div>
  </div>
);

export default LaneCard;
