import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Components/Counter/counterSlice";
import ColorSetReducer from "./Components/ColorSet/ColorSetSlice";
import SelectLogoReducer from "./Components/SelectLogo/SelectLogoSlice";
import SlideReducer from "./Components/Slide/SlideSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    ColorSet: ColorSetReducer,
    SelectLogo: SelectLogoReducer,
    Slide: SlideReducer,
  },
});
