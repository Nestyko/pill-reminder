

interface IState {
  pills: Pill
}

type timeUnit = "month" | "w" | "d" | "h" | "min"

interface TimeUnit {
  value: number
  unit: timeUnit
}

interface Pill {
  name: string
  takeEvery: number
  unit: timeUnit
}

