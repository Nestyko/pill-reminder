/**
 * Created by nltob on 31/3/2017.
 * @description: Simple Reducer for CRUD operations over an array or collection like store
 * @actions: CREATE, UPDATE, DELETE actions supported, the reducer will try to find these words inside the
 * action.type, and will perform the updates/deletes based on the id
 */


const matchString = (actionType) => {
  return (str) => actionType.match(str) ? true : false
}

const rootReducer = (state = [], action) => {
  if(!action.hasOwnProperty("type")){
    throw new TypeError("Action requires to have a property type")
  }
  const isType = matchString(action.type)
  if(isType("CREATE")){
    return state.concat(action.payload)
  }else if(isType("UPDATE")){
    return state.map(
      s => s.id === action.payload.id ?
        Object.assign({}, s, action.payload) :
        s
    )
  }else if(isType("DELETE")){
    return state.filter(s => s.id !== action.payload.id)
  }else if(isType("LOAD")){
    return action.payload
  }
  return state
}


export const collectionReducer = (token) =>{
  return (state = [], action) => {
    return action.type.match(token) ? rootReducer(state, action) : state
  }
}
