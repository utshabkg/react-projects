import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    Increment: (state, action) => {
      return (state += action.payload);
    },

    Decrement: (state, action) => {
      return (state -= action.payload);
    },
  },
});

export const { Increment, Decrement } = counterSlice.actions;
export default counterSlice.reducer;
