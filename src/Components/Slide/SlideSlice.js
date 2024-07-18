import { createSlice } from "@reduxjs/toolkit";

export const SlideSlice = createSlice({
  name: "SlideSlice",
  initialState: { value: [] },
  reducers: {
    AddSlide: (state, action) => {
      //console.log("Add redux slide. state.value 1 => ", state.value);
      //console.log("Add redux slide. action => ", action);
      const type = action.payload;
      //state.value.push(getSlideDetails(state, type));
      state.value = [...state.value, getSlideDetails(state, type)];

      console.log("Add redux slide. state.value 2 => ", state.value);
    },

    SetAddSlideMouseEnter: (state, id, value) => {
      //state.IsAddSlideMenuVisible = true;

      state.value.map((slide) => {
        if (slide.id == id) {
          slide.isAddSlideMenuVisible = value;
        }
      });
    },

    OnAddSlideMouseEnter: (state) => {
      //state.IsAddSlideMenuVisible = true;

      state.value.map((slide) => {
        if (slide.id == state.value.id) {
          slide.isAddSlideMenuVisible = true;
        }
      });
    },
    OnAddSlideMouseLeave: (state) => {
      //state.IsAddSlideMenuVisible = false;

      state.value.map((slide) => {
        if (slide.id == state.value.id) {
          slide.isAddSlideMenuVisible = false;
        }
      });
    },
  },
});

function getSlideDetails(state, type) {
  //console.log("slide details id: ", id);
  //console.log("slide details type: ", type);

  if (type === "PriceCard") {
    return {
      id: `slide-${state.value.length + 1}`,
      type: type,
      name: "כרטיסיית מחיר",
      image: "add-image.jpg",
      isAddSlideMenuVisible: false,
    };
  } else if (type === "ProductCard") {
    return {
      id: `slide-${state.value.length + 1}`,
      type: type,
      name: "כרטיסיית מוצר",
      image: "add-image.jpg",
      isAddSlideMenuVisible: false,
    };
  }
}

export const {
  AddSlide,
  SetAddSlideMouseEnter,
  //OnAddSlideMouseEnter,
  //OnAddSlideMouseLeave,
} = SlideSlice.actions;
//export const { Open, ChangeName, ChangeDetails } = SelectLogoSlice.actions;
//export const SelectLogoActions = SelectLogoSlice.actions;

export default SlideSlice.reducer;
