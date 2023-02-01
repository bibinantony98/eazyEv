import { FunctionComponent, useEffect, useState } from "react";
import "./result.scss";
import Places from "./places";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearGetPlacesData, getPlacesData } from "../../destinations/redux/action";
import { DestinationReducer } from "../../destinations/model";
import { AppStore } from "../../../model/store.model";
import { ResponseType } from "../../../constants";


export const Result: FunctionComponent = () => {
	const dispatch = useDispatch();
	const [index, setIndex] = useState(0);
	const [places, setPlaces] = useState<any[]>([]);
	const resultReducer: DestinationReducer = useSelector((state: AppStore) => state.destinationReducer);
	const [searchParams] = useSearchParams();
	
	useEffect(() => {
		const placesId = searchParams.get("placesId");
		if (placesId) {
			dispatch(getPlacesData(placesId?.split(",")));
		}
	}, [searchParams]);

	useEffect(() => {
		if (resultReducer.getAllPlacesListingData === ResponseType.FULFILLED) {
			setPlaces(resultReducer.placeListData);
			dispatch(clearGetPlacesData());
		}
		if (resultReducer.getAllPlacesListingData === ResponseType.REJECTED) {
			dispatch(clearGetPlacesData());
		}
	}, [resultReducer.getAllPlacesListingData]);
	
	const prevClicked = () => {
		setIndex((prev) => prev - 1);	
	};

	const nextClicked = () => {
		setIndex((prev) => prev + 1);	
	};

	return (
		<div className="places_main_wrapper">
			<div className="place_out_pagination_container">
				{places.length ? <Places data={places[index]} /> : ""}
			</div>
			<div className="pagination_switch_container">
				<button disabled={index < 1} onClick={prevClicked} className="no_btn_theme">Previous</button>
				<button disabled={index === places.length - 1} onClick={nextClicked} className="no_btn_theme">Next</button>
			</div>
		</div>
	);
};
export default Result;
