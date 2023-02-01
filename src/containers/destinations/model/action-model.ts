import { AxiosPromise, AxiosResponse } from "axios";
import Events  from "../redux/events";

interface GetAllPlaces {
    type: Events.GET_ALL_PLACES;
    payload: AxiosPromise;
}
interface GetAllPlacesFulfilled {
    type: Events.GET_ALL_PLACES_FULFILLED;
    payload: AxiosResponse
}
interface GetAllPlacesRejected {
    type: Events.GET_ALL_PLACES_REJECTED;
}
interface ClearGetAllPlaces {
    type: Events.CLEAR_GET_ALL_PLACES;
}

interface GetPlacesData {
    type: Events.GET_ALL_PLACES;
    payload: AxiosPromise;
}
interface GetPlacesDataFulfilled {
    type: Events.GET_ALL_PLACES_FULFILLED;
    payload: AxiosResponse
}
interface GetPlacesDataRejected {
    type: Events.GET_ALL_PLACES_REJECTED;
}
interface ClearGetPlacesData {
    type: Events.CLEAR_GET_ALL_PLACES;
}

export type Action = 
    | GetAllPlaces
    | GetAllPlacesFulfilled
    | GetAllPlacesRejected
    | ClearGetAllPlaces
    | GetPlacesData
    | GetPlacesDataFulfilled
    | GetPlacesDataRejected
    | ClearGetPlacesData;