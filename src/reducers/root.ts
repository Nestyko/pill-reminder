import {combineReducers} from "redux"
import { collectionReducer } from "./collection"


export const initialState = {
	pills: [
	{
		name: "ibuprofen"
	},{
		name: "tantum"
	},{
		name: "acetaminofen"
	},{
		name: "deslorat"
	}
	]
}

export const rootReducer = combineReducers({
	pills : collectionReducer("PILL")
})