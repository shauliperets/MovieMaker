import Display from "../Display/Display";
import plusImage from "../../Images/plus.jpg";
import moveUpImage from "../../Images/move-up.png";
import moveDownImage from "../../Images/move-down.jpg";

import productPriceSlideImage from "../../Images/product-price-slide.jpg";
import productTitleSlideImage from "../../Images/product-title-slide.jpg";

function Slide(props) {
  return (
    <div className="slide">
      <div className="slide__title">{props.name}</div>
      {props.children}
      <div className="slide__toolbar">
        <button
          className="slide__toolbar-button"
          onClick={props.onAddSlideClick}
          onMouseEnter={() => props.onAddSlideMouseEnter(props.id)}
          onMouseLeave={() => props.onAddSlideMouseLeave(props.id)}
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
        className={props.isAddSlideMenuVisible ? "slide__float-menu slide__float-menu_show" : "slide__float-menu"}
        onMouseEnter={() => props.onAddSlideMouseEnter(props.id)}
        onMouseLeave={() => props.onAddSlideMouseLeave(props.id)}
      >
        <button
          onClick={() => {
            console.log("(slide) id=>", props.id);
            props.onSelectedSlideClick(props.id, "PriceCard");
          }}
          className="slide__float-menu-button"
        >
          <img className="slide__float-menu-image" src={productPriceSlideImage} alt="Add slide image"></img>
        </button>
        <button
          onClick={() => {
            console.log("(slide) id=>", props.id);
            props.onSelectedSlideClick(props.id, "ProductCard");
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
