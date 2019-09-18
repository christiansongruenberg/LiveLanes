import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./styles.scss";

const SearchBox = ({ placeholder }) => (
  <div className="searchbox">
    <input placeholder={placeholder} type="text" />
    <div className="searchbox-icon">
      <FontAwesomeIcon icon={faSearch} color="#a7a9ac" />
    </div>
  </div>
);

export default SearchBox;
