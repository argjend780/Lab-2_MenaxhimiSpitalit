import { combineReducers } from "redux";
import qytetiReducer from "./QyteteReducers";
import errorReducer from "./errorReducer";


import { RESET_STORE } from "../actions/type";
const rootReducer= combineReducers({
    errorReducerContent: errorReducer,
    qytetiReducerContent: qytetiReducer,
   
});
const rootReducerr = (state, action) => {
    if (action.type === RESET_STORE) {
      state = undefined; // Reset the state
    }
    return rootReducer(state, action);
  };

export default rootReducer;