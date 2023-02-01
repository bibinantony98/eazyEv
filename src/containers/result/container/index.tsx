import { FunctionComponent, useEffect, useState } from "react";
import "./result.scss";
import Places from "./places";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearGetPlacesData, getPlacesData } from "../../destinations/redux/action";
import { DestinationReducer, PlacesListingData } from "../../destinations/model";
import { AppStore } from "../../../model/store.model";
import { ResponseType } from "../../../constants";

const data = [
	{
		name: "test",
		averageHotelPrice: "2000",
		wether: "21",
		bestSeason: "jan - dec",
		topHotel: [
			{
				name: "hotel1",
				price: 5000,
				img: ""
			},
			{
				name: "hotel1",
				price: 5000,
				img: ""
			}
		],
		recreations: [
			{
				name: "recreation1",
				img: ""
			}
		],
		images: [
			{
				url: ""
			},
			{
				url: ""
			}
		]
	}
];

export const Result: FunctionComponent = () => {
	const dispatch = useDispatch();
	const [index, setIndex] = useState(0);
	const [places, setPlaces] = useState<PlacesListingData[]>([]);
	const resultReducer: DestinationReducer = useSelector((state: AppStore) => state.destinationReducer);
	const [searchParams] = useSearchParams();
	
	useEffect(() => {
		const places = searchParams.get("placesId");
		dispatch(getPlacesData(places?.split(",")));
	}, [searchParams]);

	useEffect(() => {
		if (resultReducer.getAllPlacesCompleted === ResponseType.FULFILLED) {
			setPlaces([...places, ...resultReducer.placeListData]);
			dispatch(clearGetPlacesData());
		}
		if (resultReducer.getAllPlacesCompleted === ResponseType.REJECTED) {
			dispatch(clearGetPlacesData());
		}
	}, [resultReducer.getAllPlacesCompleted]);
	
	const prevClicked = () => {
		setIndex((prev) => prev - 1);	
	};

	const nextClicked = () => {
		setIndex((prev) => prev + 1);	
	};

	return (
		<div className="places_main_wrapper">
			<div className="place_out_pagination_container">
				<Places data={data[index]} />
			</div>
			<div className="pagination_switch_container">
				<button disabled={index <= 1} onClick={prevClicked} className="no_btn_theme">Previous</button>
				<button disabled={index < data.length} onClick={nextClicked} className="no_btn_theme">Next</button>
			</div>
		</div>
	);
};
export default Result;
