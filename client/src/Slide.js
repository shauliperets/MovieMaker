import Display from "./Display";
import plusImage from "./images/plus.jpg";
import moveUpImage from "./images/move-up.png";
import moveDownImage from "./images/move-down.jpg";

import productPriceSlideImage from "./images/product-price-slide.jpg";
import productTitleSlideImage from "./images/product-title-slide.jpg";

function Slide(props) {
  return (
    <div className="slide">
      {props.children}
      <div className="slide__toolbar">
        <button className="slide__toolbar-button" onClick={props.onAddSlideClick}>
          <img className="slide__toolbar-image" src={plusImage} alt="Add slide image"></img>
        </button>
        <button className="slide__toolbar-button" onClick={props.moveSlideUp}>
          <img src={moveUpImage} className="slide__toolbar-image" alt="Move up image"></img>
        </button>
        <button className="slide__toolbar-button" onClick={props.moveSlideDown}>
          <img src={moveDownImage} className="slide__toolbar-image" alt="Move down image"></img>
        </button>
      </div>
      <div className="slide__float-menu">
        <button
          onClick={() => {
            props.onSelectedSlideClick("product-price");
          }}
          className="slide__float-menu-button"
        >
          <img className="slide__float-menu-image" src={productPriceSlideImage} alt="Add slide image"></img>
        </button>
        <button
          onClick={() => {
            props.onSelectedSlideClick("product-title");
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
