import { createSlice } from '@reduxjs/toolkit';
// ademas internamente se instala la libreria immer

// const initialState = {
//   counter: 0,
// }

export const counterSlice = createSlice({
  name: 'counter',
  // initialState, // si se crea afuera
  initialState: {
    counter: 11,
  },
  reducers: { // estos son los "actions"
    increment: (state) => {
      state.counter += 1
    },
    decrement: (state) => {
      state.counter -= 1
    },
    incrementBy: (state, action) => {
      state.counter += action.payload
    },
    // incrementByAmount: (state, action) => {
    //   state.counter += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementBy } = counterSlice.actions
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

// Mejor no usar este default
// export default counterSlice.reducer