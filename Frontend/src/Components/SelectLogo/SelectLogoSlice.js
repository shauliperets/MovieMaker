import { createSlice } from "@reduxjs/toolkit";

export const SelectLogoSlice = createSlice({
  name: "SelectLogoSlice",
  initialState: {
    IsOpen: false,
    Logo: "./logo.png",
    Name: "שם המוצר",
    Details: "פרטים על המוצר",
    PriceMajor: "00",
    PriceMinor: "00",
    Background: "./cup.png",
    Notes: "האותיות הקטנות",
  },
  reducers: {
    OpenLogo: (state) => {
      state.IsOpen = true;
    },
    CloseLogo: (state) => {
      state.IsOpen = false;
    },
    ChangeLogoName: (state, action) => {
      state.Name = action.payload;
    },
    ChangeLogoDetails: (state, action) => {
      state.Details = action.payload;
    },
  },
});

export const { OpenLogo, CloseLogo, ChangeLogoName, ChangeLogoDetails } = SelectLogoSlice.actions;
//export const { Open, ChangeName, ChangeDetails } = SelectLogoSlice.actions;
//export const SelectLogoActions = SelectLogoSlice.actions;

export default SelectLogoSlice.reducer;
