import liveLanes from "./payload.json";

export const FETCH_LIVE_LANES = "FETCH_LIVE_LANES";

export const fetchLanes = () => ({
  type: FETCH_LIVE_LANES,
  payload: liveLanes.data.lanes
});

export const SELECT_LIVE_LANE = "SELECT_LIVE_LANE";

export const selectLiveLane = lane => ({
  type: SELECT_LIVE_LANE,
  payload: lane
});
