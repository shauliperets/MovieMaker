import slideOneDropdown from "./images/slide-1-dropdown.jpg";
import Display from "./Display";

function SlideOne(props) {
  return (
    <div className="slide-one">
      <div className="slide-one__sidebar">
        <h2 className="slide-one__title">סלייד 1</h2>
        <img src={slideOneDropdown}></img>

        <div className="slide-one__load-image-buttons">
          <button className="slide-one__button" onClick={props.onLoadClick}>
            העלאת תמונה
          </button>
          <button className="slide-one__button" onClick={props.onLoadClick}>
            גלריה
          </button>
        </div>
        <div className="slide-one__inputs">
          <div className="slide-one__input-line">
            <input
              placeholder="שם המוצר"
              className="slide-one__input slide-one__input_text"
              type="text"
              onChange={(event) => {
                props.onProductChange(event.target.value);
              }}
            ></input>
            <label className="slide-one__label" type="text">
              9
            </label>
          </div>
          <div className="slide-one__input-line">
            <input
              placeholder="שורת הסבר"
              className="slide-one__input slide-one__input_text"
              type="text"
              onChange={(event) => {
                props.onDetailsChange(event.target.value);
              }}
            ></input>
            <label className="slide-one__label" type="text">
              14
            </label>
          </div>
          <div className="slide-one__input-line">
            <input
              className="slide-one__input slide-one__input_text"
              type="text"
              value={props.slideOneProductPriceMajor}
              onChange={(event) => {
                console.log("major price...");
                props.onMajorPriceChange(event.target.value);
              }}
            ></input>
            <label className="slide-one__label" type="text">
              4
            </label>
          </div>
          <div className="slide-one__input-line">
            <input
              className="slide-one__input slide-one__input_text"
              type="text"
              value={props.slideOneProductPriceMinor}
              onChange={(event) => {
                props.onMinorPriceChange(event.target.value);
              }}
            ></input>
            <label className="slide-one__label" type="text">
              2
            </label>
          </div>
          <div className="slide-one__input-line">
            <textarea
              placeholder="אותיות קטנות"
              cols="10"
              rows="10"
              className="slide-one__input slide-one__input_textarea"
            ></textarea>
            <label className="slide-one__label" type="text">
              50
            </label>
          </div>
        </div>
      </div>
      <div className="slide-one__display">
        <Display
          logoSource={props.logoSource}
          productName={props.productName}
          productDetails={props.productDetails}
          productPriceMajor={props.productPriceMajor}
          productPriceMinor={props.productPriceMinor}
          backgroundSource={props.backgroundSource}
          onLoadClick={props.openBackroundPopup}
          onProductChange={props.updateProductName}
          onDetailsChange={props.updateProductDetails}
        ></Display>
      </div>
    </div>
  );
}

export default SlideOne;
