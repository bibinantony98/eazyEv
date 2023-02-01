export interface DestinationReducer {
	getAllPlacesCompleted: string | null;
	placesData: PlacesData[];
    getAllPlacesListingData: string | null;
	placeListData: PlacesListingData[];
}

export interface PlacesData {
    id: number;
    name: string
}

export interface PlacesListingData {
    id: number;
    name: string;
    placeImageUrl: any;
    weather: any;
    season: any;
    recreation: any;
    recreationImageUrl: any
}