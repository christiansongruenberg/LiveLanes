import React from "react";
import classNames from "classnames";
import "./styles.scss";

const Tab = ({ text, badge, badgeColor, selected, onClick }) => (
  <div
    onClick={onClick}
    className={classNames("lane-cards-list-tab", {
      "lane-cards-list-tab--selected": selected
    })}
  >
    {text}

    {badge && (
      <div
        className="lane-cards-list-badge"
        style={{
          backgroundColor: badgeColor || "#1abb99"
        }}
      >
        {badge}
      </div>
    )}
  </div>
);

export default Tab;
