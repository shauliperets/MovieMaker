import { createSlice } from "@reduxjs/toolkit";

export const ColorSetSlice = createSlice({
  name: "ColorSet",
  initialState: {
    value: false,
  },
  reducers: {
    Open: (state) => {
      state.value = true;
    },
    Close: (state) => {
      state.value = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { Open, Close } = ColorSetSlice.actions;

export default ColorSetSlice.reducer;
