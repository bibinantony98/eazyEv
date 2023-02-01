import { FunctionComponent } from "react";
import I18 from "../../i18";

interface UserProps {}

const User: FunctionComponent<UserProps> = () => {
    
	return (
		<div className="App">
			<I18 tkey="User" />
		</div>
	);
};

export default User;
