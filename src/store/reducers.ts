import { combineReducers } from "redux";
import ActionBtnReducer from "../plugins/action-button/redux/reducer";
import DestinationReducer from "../containers/destinations/redux/reducer";

const rootReducer = combineReducers({
	actionBtn: ActionBtnReducer,
	destinationReducer: DestinationReducer
	// all reducers
});

export default rootReducer;