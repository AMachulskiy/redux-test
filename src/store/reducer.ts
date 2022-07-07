import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  counter: number
}

const initialState: CounterState = {
  counter: 0,
}

export const counterSlice = createSlice({
  name: 'ocunter',
  initialState,
  reducers: {
    increment(state, action) {
      state.counter += 1
    },
    decrement(state, action) {
      state.counter -= 1
    },
    random(state, action: PayloadAction<number>) {
      state.counter = action.payload
    },
  },
})

export default counterSlice.reducer
