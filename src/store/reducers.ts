import { combineReducers } from "redux";
import ActionBtnReducer from "../plugins/action-button/redux/reducer";

const rootReducer = combineReducers({
	actionBtn: ActionBtnReducer
	// all reducers
});

export default rootReducer;