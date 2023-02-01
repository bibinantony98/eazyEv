export interface DestinationReducer {
	getAllPlacesCompleted: string | null;
	placesData: PlacesData[];
    // getAllPlacesListingData: string | null;
	// placeListData: PlacesListingData;
}

export interface PlacesData {
    id: number;
    name: string
}