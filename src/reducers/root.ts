import {combineReducers} from "redux"
import { collectionReducer } from "./collection"
import {pillReducer} from "./pill"

export const initialState = {
	pills: []
}

export const rootReducer = combineReducers({
	pills : pillReducer
})
