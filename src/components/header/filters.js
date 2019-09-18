import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import "./styles.scss";


const Filters = () => (
  <div className="filters">
    <div className="filters-text">
      Filters
    </div>
    <div>
      <FontAwesomeIcon icon={faCaretDown} color="#a7a9ac"/>
    </div>
  </div>
)

export default Filters