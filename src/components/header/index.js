import React from "react"
import Logo from "./logo"
import HeaderTab from "./headerTab"
import SubHeaderTab from "./subHeaderTab"
import Profile from "./profile"
import Filters from "./filters"
import "./styles.scss"
import { faList } from '@fortawesome/free-solid-svg-icons'
import { faCar } from '@fortawesome/free-solid-svg-icons'
import { faStopwatch } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const Header = () => (
  <>
    <div className="header">
      <div className="header-content">
        <Logo />
        <div className="header-logo">Block</div>
        <div className="tabs">
          <HeaderTab icon={faList} text="buy" selected/>
          <HeaderTab icon={faCar} text="sell"/>
          <HeaderTab icon={faStopwatch} text="pending"/>
          <HeaderTab icon={faCheck} text="finished"/>
        </div>
        <Profile />
      </div>
    </div>
    <div className="sub-header">
      <div className="sub-header-content">
        <SubHeaderTab text="upcoming"/>
        <SubHeaderTab text="Live Appraisals"/>
        <SubHeaderTab text="Live 24H Auctions"/>
        <SubHeaderTab text="Live Lanes" selected={true}/>
        <Filters />
      </div>
    </div>
  </>
)

export default Header