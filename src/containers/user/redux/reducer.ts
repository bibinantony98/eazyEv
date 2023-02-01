import { Action } from "../../../model";
import Events  from "./events";
import { UserModelReducer } from "../model";

const initialState: UserModelReducer = {
	userDetails: { token: "" }
};

const reducer = (state = initialState, action: Action) => {
	switch (action.type) {
		case Events.SET_LOGIN:
			return {
				...state,
				userDetails: action.payload
			};
		default:
			return state;
	}
};

export default reducer;