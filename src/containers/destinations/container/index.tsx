import { Select } from "antd";
import { FunctionComponent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppStore } from "../../../model/store.model";
import LogoSvg from "../components/logo-svg";
import { DestinationReducer, PlacesData } from "../model";
import { ResponseType } from "../../../constants";
import "./destination.scss";
import { clearGetAllPlaces, getAllPlaces } from "../redux/action";
import { Locations } from "../../../locations";
import { useNavigate } from "react-router-dom";

export const Destination: FunctionComponent = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { Option } = Select;
	const destinationReducer: DestinationReducer = useSelector((state: AppStore) => state.destinationReducer);
	const [places, setPlaces] = useState<PlacesData[]>([]);
	const [placeValue, setPlaceValue] = useState<number[] | undefined>();

	useEffect(() => {
		dispatch(getAllPlaces());
	}, []);

	useEffect(() => {
		if (destinationReducer.getAllPlacesCompleted === ResponseType.FULFILLED) {
			setPlaces(destinationReducer.placesData);
			dispatch(clearGetAllPlaces());
		}
		if (destinationReducer.getAllPlacesCompleted === ResponseType.REJECTED) {
			dispatch(clearGetAllPlaces());
		}
	}, [destinationReducer.getAllPlacesCompleted]);

	const placeDataChanged = (id: number[]) => {
		setPlaceValue(id);
	};

	const explore = () => {
		navigate({
			pathname: Locations.RESULT,
			search: `?placesId=${placeValue?.join(",")}`
		});
	};

	return (
		<div className="destination_container">
			<div className="destination_bg">
				<img src="/images/destinations.png" />
			</div>
			<div className="destination_content_container">
				<div className="destination_header">
					<LogoSvg />
				</div>
				<div className="d-flex align-items-center">
					<div className="destination_input_container">
						<Select 
							mode="multiple"
							allowClear
							value={placeValue}
							onChange={placeDataChanged}
						>
							{places.map((data, i: number) => {
								return (
									<Option key={`places_select_${i}`} value={data.id}>{data.name}</Option>
								);
							})}
						</Select>
					</div>
					<button onClick={() => explore()} className="primary_border_btn destination_btn ml-3">Explore</button>
				</div>
			</div>
		</div>
	);
};
export default Destination;