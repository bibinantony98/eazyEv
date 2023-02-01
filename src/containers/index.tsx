import { FunctionComponent } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Locations } from "../locations";
import Destination from "./destinations/container";
import Result from "./result/container";

export const MainContainer: FunctionComponent = () => {
	return (
		<Routes>
			<Route path={`${Locations.DESTINATION}*`} element={<Destination />} />
			<Route path={`${Locations.RESULT}*`} element={<Result />} />
			<Route path="*" element={<Navigate to={Locations.DESTINATION} replace />} />
		</Routes>
	);
};
export default MainContainer;