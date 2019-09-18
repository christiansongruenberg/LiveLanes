import { createStore, combineReducers } from "redux"
import lanesReducer from "features/lanes"

const rootReducer = combineReducers({
  lanes: lanesReducer
})

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

export default store