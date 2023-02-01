import axios from "axios";
import config from "../../../config";
import { Action } from "../model/action-model";
import events from "./events";

export const getAllPlaces = (): Action => ({
	type: events.GET_ALL_PLACES,
	payload: axios.get(`${config.API_URL}/placeList`)
});

export const clearGetAllPlaces = (): Action => ({
	type: events.CLEAR_GET_ALL_PLACES
});

export const getPlacesData = (query: string[] | undefined): Action => ({
	type: events.GET_PLACE_DATA,
	payload: axios.get(`${config.API_URL}/placeList?${query}`)
});

export const clearGetPlacesData = (): Action => ({
	type: events.CLEAR_GET_PLACE_DATA
});
