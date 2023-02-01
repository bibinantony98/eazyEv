import { FunctionComponent } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Locations } from "../locations";
import Destination from "./destinations/container";
import Result from "./result/container";
import HotelList from "./result/container/hotel";
import Recreation from "./result/container/recreation";
import "./main-container.scss";

export const MainContainer: FunctionComponent = () => {
	return (
		<Routes>
			<Route path={`${Locations.DESTINATION}*`} element={<Destination />} />
			<Route path={`${Locations.RESULT}*`} element={<Result />} />
			<Route path={`${Locations.RESULT_HOTEL}*`} element={<HotelList />} />
			<Route path={`${Locations.RESULT_RECREATION}*`} element={<Recreation />} />
			<Route path="*" element={<Navigate to={Locations.DESTINATION} replace />} />
		</Routes>
	);
};
export default MainContainer;