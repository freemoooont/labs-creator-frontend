import { combineReducers } from "redux";
import { userReducer } from "./ducks/user/reducers";
import { HYDRATE } from "next-redux-wrapper";

const rootReducer = combineReducers({
  user: userReducer,
});

export const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    if (state.count) nextState.count = state.count; // preserve count value on client side navigation
    return nextState;
  } else {
    return rootReducer(state, action);
  }
};
