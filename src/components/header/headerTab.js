import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.scss";

const HeaderTab = ({ icon, text, selected }) => (
  <div className="header-tab">
    <div className="header-tab-icon">
      <FontAwesomeIcon icon={icon} color="#7c7f82" />
    </div>
    <div className="header-tab-text">{text}</div>
    {selected && (
      <div className="header-tab-selection">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          class="svg-triangle"
          width="12"
          height="12"
          viewBox="0 0 100 100"
        >
          <path className="header-tab-path" d="M 50,5 95,97.5 5,97.5 z" />
        </svg>
      </div>
    )}
  </div>
);

export default HeaderTab;
