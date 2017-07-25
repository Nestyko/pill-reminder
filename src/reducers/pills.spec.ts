import {pillReducer, CREATE_PILL} from "./pill"


describe("pill reducer", () => {
  test("Add pill", () => {
    const action = {
      type: CREATE_PILL,
      payload: {
        takeEvery: 5,
        unit: "min",
        name: "Ibuprofen"
      }
    }
    const result = {
      name: "Ibuprofen",
      time: 5*60*1000
    }
    expect(pillReducer([], action)[0]).toMatchObject(result)
  })
})
