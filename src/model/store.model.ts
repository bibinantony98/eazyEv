import { ActionBtnReducer } from "../plugins/action-button/redux/model";
import { DestinationReducer } from "../containers/destinations/model";

export interface AppStore {
    actionBtn: ActionBtnReducer;
    destinationReducer: DestinationReducer
}