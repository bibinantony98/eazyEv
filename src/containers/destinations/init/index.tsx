import { PlacesData, PlacesListingData } from "../model";

export const initPlacesData = (): PlacesData => ({
	id: 0,
	name: ""
});

export const initPlaceListData = (): PlacesListingData => ({
	id: 0,
	name: "",
	placeImageUrl: "",
	weather: "",
	season: "",
	recreation: "",
	recreationImageUrl: ""
});