import {toTime} from "./time"



describe("toTime", () => {
  test("should error if takeEvery is not a number", () => {
    const calcTime = () => {
      toTime({
        value: "hello",
        unit: "min"
      })
    }
    expect(calcTime).toThrowError(/must be a number/)
  })

  test("should error if unit is invalid", () => {
    const wrapper = () => {
      toTime({
        value: 45,
        unit: "lightYear"
      })
    }
    expect(wrapper).toThrow()
    const validWrapper = () => {
      toTime({
        value: 2,
        unit: "h"
      })
    }

    expect(validWrapper).toBeTruthy()
  })

  test("should transform 5 min to 300.000ms", () => {
    expect(toTime({
      value: 5,
      unit: "min"
    })).toBe(300000)
  })
})
