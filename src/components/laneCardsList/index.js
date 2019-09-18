import React, { Component } from "react"
import LaneCard from "components/laneCard"
import SearchBox from "components/searchBox"
import Tab from "./tab"
import "./styles.scss"

export default class LaneCardslist extends Component {

  constructor(props){
    super(props)

    this.state = {
      filter: ""
    }
  }

  handleTabClick = (filter) => {
    this.setState({
      filter
    })
  }

  render(){
    const { lanes, onCardClick } = this.props;
    const { filter } = this.state;

    return (
      <div className="lane-cards-list">
        <SearchBox placeholder="Search Live Lanes"/>
        <div className="lane-cards-list-tabs">
          <Tab
            onClick={() => { this.handleTabClick("") }}
            selected={filter === ""}
            text="all"/>
          <Tab
            onClick={() => { this.handleTabClick("isOutbid") }}
            selected={filter === "isOutbid"}
            text="outbid" badge={getOutbidCount(lanes)}
            badgeColor="#e76f67"/>
          <Tab
            onClick={() => { this.handleTabClick("isWatching") }}
            selected={filter === "isWatching"}
            text="watching" />
          <Tab
            onClick={() => { this.handleTabClick("isWinning") }}
            selected={filter === "isWinning"}
            text="winning" badge={getWinningCount(lanes)}/>
        </div>
        { lanes.filter(filterLanes(filter)).map( lane => (
          <LaneCard onClick={onCardClick} key={`${lane.lane}-${lane.auction}`} {...lane}/>
        ))}
      </div>

    )
  }
}

const filterLanes = (filterBy) => {

  return lane => {
    // if there is no filter, return everything
    if(!filterBy) return true

    return lane[filterBy]
  }
}

const getOutbidCount = lanes => lanes.reduce( (total, lane) => lane.isOutbid ? total + 1 : total, 0)

const getWinningCount = lanes => lanes.reduce( (total, lane) => lane.isWinning ? total + 1 : total, 0)