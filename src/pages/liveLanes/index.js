import React, { Component } from "react";
import { fetchLanes, selectLiveLane } from "features/lanes/actions";
import { getLanes, getSelectedLanes } from "features/lanes/selectors";
import { connect } from "react-redux";
import { createSelector } from "reselect";
import LaneCardsList from "components/laneCardsList";
import Lane from "components/lane";

import "./styles.scss";

class LiveLanesPage extends Component {
  constructor(props) {
    super(props);
    // init data
    this.props.fetchLanes();
  }

  render() {
    const { lanes, selectLiveLane, selectedLanes } = this.props;

    return (
      <div className="live-lanes-page">
        <div className="side-panel">
          <LaneCardsList
            onCardClick={laneName => selectLiveLane(laneName)}
            lanes={lanes}
          />
        </div>
        {selectedLanes.length > 0 && (
          <div className="lanes-wrapper">
            {selectedLanes.map(lane => (
              <Lane />
            ))}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = createSelector(
  [getLanes, getSelectedLanes],
  (lanes, selectedLanes) => ({
    lanes: lanes,
    selectedLanes
  })
);

const mapDispatchToProps = {
  fetchLanes,
  selectLiveLane
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LiveLanesPage);
