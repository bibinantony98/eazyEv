import { UserDetails } from "../../../model/user.model";
import Events from "./events";

export const setLogin = (userDetails: UserDetails) => ({
	type: Events.SET_LOGIN,
	payload: userDetails
});

