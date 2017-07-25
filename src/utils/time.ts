

import * as R from "ramda"

export const valuesInSecond = (() => {
  const ms = 1,
    sec = 1000*ms,
    min = sec*60,
    h = min*60,
    d = h*24,
    w = d*7,
    month = w*4
  return {
    ms, sec, min, h, d, w, month
  }
})()

export const toTime = ({value, unit}: TimeUnit) => {
  if(!valuesInSecond.hasOwnProperty(unit)){
    const validUnits = R.join(" | ", R.keys(valuesInSecond))
    throw "Invalid unit passed to function toTime, valid units: " + validUnits + ". Unit Provided: "+ unit
  }
  if(!R.is(Number, value)){
    throw "Parameter value must be a number"
  }
  return value*valuesInSecond[unit]
}
