import Display from "./Display";

function SlideProductPrice(props) {
  return (
    <div className="slide-product-price">
      <div className="slide-product-price__sidebar">
        <h2 className="slide-product-price__title">{props.name}</h2>
        <div className="slide-product-price__load-image-buttons">
          <button className="slide-product-price__button" onClick={props.onLoadClick}>
            העלאת תמונה
          </button>
          <button className="slide-product-price__button" onClick={props.onLoadClick}>
            גלריה
          </button>
        </div>
        <div className="slide-product-price__inputs">
          <div className="slide-product-price__input-line">
            <input
              placeholder="שם המוצר"
              className="slide-product-price__input slide-three__input_text"
              type="text"
              onChange={(event) => {
                props.onProductChange(event.target.value);
              }}
            ></input>
            <label className="slide-product-price__label" type="text">
              9
            </label>
          </div>
          <div className="slide-product-price__input-line">
            <input
              placeholder="שורת הסבר"
              className="slide-product-price__input slide-three__input_text"
              type="text"
              onChange={(event) => {
                props.onDetailsChange(event.target.value);
              }}
            ></input>
            <label className="slide-product-price__label" type="text">
              14
            </label>
          </div>
          <div className="slide-product-price__input-line">
            <input
              className="slide-product-price__input slide-three__input_text"
              type="text"
              value={props.productPriceMajor}
              onChange={(event) => {
                props.onMajorPriceChange(event.target.value);
              }}
            ></input>
            <label className="slide-product-price__label" type="text">
              4
            </label>
          </div>
          <div className="slide-product-price__input-line">
            <input
              className="slide-product-price__input slide-three__input_text"
              type="text"
              value={props.productPriceMinor}
              onChange={(event) => {
                props.onMinorPriceChange(event.target.value);
              }}
            ></input>
            <label className="slide-product-price__label" type="text">
              2
            </label>
          </div>
          <div className="slide-product-price__input-line">
            <textarea
              placeholder="אותיות קטנות"
              cols="10"
              rows="10"
              className="slide-product-price__input slide-three__input_textarea"
              value={props.notes}
              onChange={(event) => {
                props.onNotesChange(event.target.value);
              }}
            ></textarea>
            <label className="slide-product-price__label" type="text">
              50
            </label>
          </div>
        </div>
      </div>
      <div className="slide-product-price__display">
        <Display
          logoSource={props.logoSource}
          productName={props.productName}
          productDetails={props.productDetails}
          productPriceMajor={props.productPriceMajor}
          productPriceMinor={props.productPriceMinor}
          backgroundSource={props.backgroundSource}
          notes={props.notes}
          onLoadClick={props.openBackroundPopup}
          onProductChange={props.updateProductName}
          onDetailsChange={props.updateProductDetails}
        ></Display>
      </div>
    </div>
  );
}

export default SlideProductPrice;
