import React from "react"
import classNames from "classnames";
import "./styles.scss";

const SubHeaderTab = ( { text, selected }) => (
  <div className={classNames("sub-header-tab", {
    "sub-header-tab--selected": selected
  })}><div>{text}</div></div>
)

export default SubHeaderTab