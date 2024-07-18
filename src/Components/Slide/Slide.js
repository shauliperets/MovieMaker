import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Display from "../Display/Display";
import plusImage from "../../Images/plus.jpg";
import moveUpImage from "../../Images/move-up.png";
import moveDownImage from "../../Images/move-down.jpg";

import productPriceSlideImage from "../../Images/product-price-slide.jpg";
import productTitleSlideImage from "../../Images/product-title-slide.jpg";

import { AddSlide, SetAddSlideMouseEnter } from "./SlideSlice";

function Slide(props) {
  const [isAddSlideMenuVisible, setIsAddSlideMenuVisible] = React.useState(false);

  const slide = useSelector((state) => state.Slide);

  console.log("state.slide => ", slide);

  const dispatch = useDispatch(); //

  React.useEffect(() => {
    slide.value.map((item) => {
      if (item.id == props.id) {
        setIsAddSlideMenuVisible(item.isAddSlideMenuVisible);
      }
    });
  }, []);

  function onAddSlideMouseEnter() {
    //state.IsAddSlideMenuVisible = true;
    console.log("onAddSlideMouseEnter");

    slide.value.map((item) => {
      if (item.id == props.id) {
        //item.isAddSlideMenuVisible = true;

        dispatch(() => SetAddSlideMouseEnter(item.id, true));
      }
    });
    setIsAddSlideMenuVisible(true);
  }
  function onAddSlideMouseLeave() {
    //state.IsAddSlideMenuVisible = false;
    console.log("onAddSlideMouseLeave");

    slide.value.map((item) => {
      if (item.id == props.id) {
        //item.isAddSlideMenuVisible = false;
        dispatch(() => SetAddSlideMouseEnter(item.id, false));
      }
    });
    setIsAddSlideMenuVisible(false);
  }

  return (
    <div className="slide">
      <div className="slide__title">123-{props.name}</div>
      <div className="slide__title">456-{props.isAddSlideMenuVisible ? "true" : "false"}</div>
      {props.children}
      <div className="slide__toolbar">
        <button
          className="slide__toolbar-button"
          onClick={props.onAddSlideClick}
          //onMouseEnter={() => dispatch(OnAddSlideMouseEnter())}
          //onMouseLeave={() => dispatch(OnAddSlideMouseLeave())}
          onMouseEnter={onAddSlideMouseEnter}
          onMouseLeave={onAddSlideMouseLeave}
        >
          <img className="slide__toolbar-image" src={plusImage} alt="Add slide image"></img>
        </button>
        <button className="slide__toolbar-button" onClick={props.moveSlideUp}>
          <img src={moveUpImage} className="slide__toolbar-image" alt="Move up image"></img>
        </button>
        <button className="slide__toolbar-button" onClick={props.moveSlideDown}>
          <img src={moveDownImage} className="slide__toolbar-image" alt="Move down image"></img>
        </button>
      </div>
      <div
        className={isAddSlideMenuVisible ? "slide__float-menu slide__float-menu_show" : "slide__float-menu"}
        //onMouseEnter={() => dispatch(OnAddSlideMouseEnter())}
        //onMouseLeave={() => dispatch(OnAddSlideMouseLeave())}
        onMouseEnter={onAddSlideMouseEnter}
        onMouseLeave={onAddSlideMouseLeave}
      >
        <button
          onClick={() => {
            console.log("(slide) id=>", props.id);
            //props.onSelectedSlideClick(props.id, "PriceCard");

            dispatch(AddSlide("PriceCard"));
          }}
          className="slide__float-menu-button"
        >
          <img className="slide__float-menu-image" src={productPriceSlideImage} alt="Add slide image"></img>
        </button>
        <button
          onClick={() => {
            console.log("(slide) id=>", props.id);
            //props.onSelectedSlideClick(props.id, "ProductCard");

            dispatch(AddSlide("ProductCard"));
          }}
          className="slide__float-menu-button"
        >
          <img className="slide__float-menu-image" src={productTitleSlideImage} alt="Add slide image"></img>
        </button>
      </div>
    </div>
  );
}

export default Slide;
