import { combineReducers } from "redux";
import qytetiReducer from "./QyteteReducers";
import spitaliReducer from "./SpitaliReducer";
import repartiReducer from "./RepartiReducers";
import PacinetReducer from "./PacinetiReducers";
import errorReducer from "./errorReducer";
import mjeketReducer from "./MjeketReduser";

import { RESET_STORE } from "../actions/type";
const rootReducer= combineReducers({
    errorReducerContent: errorReducer,
    qytetiReducerContent: qytetiReducer,
    spitaliReducerContent:spitaliReducer,
    repartiReducerContent: repartiReducer,
   
});
const rootReducerr = (state, action) => {
    if (action.type === RESET_STORE) {
      state = undefined; // Reset the state
    }
    return rootReducer(state, action);
  };

export default rootReducer;