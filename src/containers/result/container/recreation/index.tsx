import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import { Locations } from "../../../../locations";

export const Recreation: FunctionComponent = () => {
	const navigate = useNavigate();
	
	return (
		<div className="placeHolder">
			This feature is Under development
			<button className="primary_border_btn destination_btn mt-2" onClick={() => navigate(Locations.RESULT)}>Go back</button>
		</div>
	);
};
export default Recreation;
