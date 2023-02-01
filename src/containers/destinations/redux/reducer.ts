import { Action } from "../../../model";
import Events  from "./events";
import { DestinationReducer } from "../model";
import { ResponseType } from "../../../constants";
import { initPlaceListData, initPlacesData } from "../init";

const initialState: DestinationReducer = {
	getAllPlacesCompleted: null,
	placesData: [initPlacesData()],
	getAllPlacesListingData: null,
	placeListData: [initPlaceListData()]
};

const reducer = (state:  DestinationReducer = initialState, action: Action) : DestinationReducer => {
	switch (action.type) {
		case Events.GET_ALL_PLACES:
			return {
				...state,
				getAllPlacesCompleted: null,
				placesData: [initPlacesData()]
			};
		case Events.GET_ALL_PLACES_FULFILLED:
			return {
				...state,
				getAllPlacesCompleted: ResponseType.FULFILLED,
				placesData: action.payload.data
			};
		case Events.GET_ALL_PLACES_REJECTED:
			return {
				...state,
				getAllPlacesCompleted: ResponseType.REJECTED
			};
		case Events.CLEAR_GET_ALL_PLACES:
			return {
				...state,
				getAllPlacesCompleted: null
			};
		case Events.GET_PLACE_DATA:
			return {
				...state,
				getAllPlacesListingData: null,
				placeListData: [initPlaceListData()]
			};
		case Events.GET_PLACE_DATA_FULFILLED:
			return {
				...state,
				getAllPlacesListingData: ResponseType.FULFILLED,
				placeListData: action.payload.data
			};
		case Events.GET_PLACE_DATA_REJECTED:
			return {
				...state,
				getAllPlacesListingData: ResponseType.REJECTED
			};
		case Events.CLEAR_GET_PLACE_DATA:
			return {
				...state,
				getAllPlacesListingData: null
			};
		default:
			return state;
	}
};

export default reducer;