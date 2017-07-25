import {collectionReducer as reducer} from './collection'

describe("Reducer for Collection like state", () => {
  const item1 = {
    id: 1,
    name: "something"
  }

  test("CREATE an item", () => {
    const action = {
      type: "CREATE_ITEM",
      payload: item1
    }
    expect(reducer("ITEM")([], action)).toEqual([item1])
  })

  test("UPDATE an item", () => {
    const initialState = [item1, {id : 2, name: "something else"}]
    const expected = [{id: 1, name: "modified"},{id : 2, name: "something else"}]
    const action = {
      type: "UPDATE_ITEM"
      , payload: {
        id: 1
        , name: "modified"
      }
    }
    expect(reducer("ITEM")(initialState, action)).toEqual(expected)
  })

  test("DELETE an item", () => {
    const initialState = [{id: 1, name: "modified"},{id : 2, name: "something else"}]
    const expected = [{id : 2, name: "something else"}]
    const action = {
      type: "DELETE_ITEM"
      , payload: {id: 1}
    }
    const result = reducer("ITEM")(initialState, action)
    expect(result).toEqual(expected)
    expect(result.length).toBe(1)

  })

  test("should load the array to the store", () => {
    const newItems = [1,2,3,4,5].map(i => ({id: i, name: "something "+i}))
    const action = {
      type: "LOAD_ITEM",
      payload: newItems
    }
    expect(reducer("ITEM")([], action)).toEqual(newItems)
  })

  test("should do nothing if the redicer doesnt match the token", () => {
    const itemReducer = reducer("ITEM")
    const action = {
      type: "ADD_SOMETHING_ELSE",
      payload: {
        id: 5,
        name: "something else"
      }
    }
    expect(itemReducer([], action)).toEqual([])
  })
})
