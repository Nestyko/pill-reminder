import {collectionReducer} from "./collection"
import {toTime} from "../utils/time"

const pillColectionReducer = collectionReducer("PILL")
export const CREATE_PILL = "CREATE_PILL"

export const pillReducer = (state = [], action) => {
  switch(action.type){
    case CREATE_PILL:{
      const {takeEvery, unit} = action.payload
      const duration = toTime({value: takeEvery, unit})
      const newAction = Object.assign({}, action,
        {payload: Object.assign({} , action.payload, {time: duration})})
      return pillColectionReducer(state, newAction)
    }
    default:
      return state
  }
}
