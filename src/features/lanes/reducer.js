import { FETCH_LIVE_LANES, SELECT_LIVE_LANE } from "./actions";

const INITIAL_STATE = {
  data: []
};

const lanesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_LIVE_LANES:
      return {
        ...state,
        data: [...action.payload]
      };
    case SELECT_LIVE_LANE:
      return {
        ...state,
        data: toggleSelectedLane(state.data, action.payload)
      };
    default:
      return state;
  }
};

const toggleSelectedLane = (lanes, selectedLane) => {
  return lanes.map(lane => {
    if (lane.lane === selectedLane) {
      return {
        ...lane,
        isSelected: !lane.isSelected
      };
    } else {
      return lane;
    }
  });
};

export default lanesReducer;
