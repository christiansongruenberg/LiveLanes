import { createSelector } from "reselect"

export const getLanes = state => state.lanes.data

export const getSelectedLanes = createSelector(getLanes, lanes => lanes.filter( lane => lane.isSelected))