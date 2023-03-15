import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    Increment: (state, action) => {
      return (state += 1);
    },

    Decrement: (state, action) => {
      return (state -= 1);
    },
  },
});

export const { Increment, Decrement } = counterSlice.actions;
export default counterSlice.reducer;
