import Display from "./Display";

function Slide(props) {
  return (
    <div className="slide">
      <div className="slide__sidebar">
        <h2 className="slide__title">{props.name}</h2>

        <div className="slide__load-image-buttons">
          <button className="slide__button" onClick={props.onLoadClick}>
            העלאת תמונה
          </button>
          <button className="slide__button" onClick={props.onLoadClick}>
            גלריה
          </button>
        </div>
        <div className="slide__inputs">
          <div className="slide__input-line">
            <input
              placeholder="שם המוצר"
              className="slide__input slide-three__input_text"
              type="text"
              onChange={(event) => {
                props.onProductChange(event.target.value);
              }}
            ></input>
            <label className="slide__label" type="text">
              9
            </label>
          </div>
          <div className="slide__input-line">
            <input
              placeholder="שורת הסבר"
              className="slide__input slide-three__input_text"
              type="text"
              onChange={(event) => {
                props.onDetailsChange(event.target.value);
              }}
            ></input>
            <label className="slide__label" type="text">
              14
            </label>
          </div>
          <div className="slide__input-line">
            <input
              className="slide__input slide-three__input_text"
              type="text"
              value={props.productPriceMajor}
              onChange={(event) => {
                props.onMajorPriceChange(event.target.value);
              }}
            ></input>
            <label className="slide__label" type="text">
              4
            </label>
          </div>
          <div className="slide__input-line">
            <input
              className="slide__input slide-three__input_text"
              type="text"
              value={props.productPriceMinor}
              onChange={(event) => {
                props.onMinorPriceChange(event.target.value);
              }}
            ></input>
            <label className="slide__label" type="text">
              2
            </label>
          </div>
          <div className="slide__input-line">
            <textarea
              placeholder="אותיות קטנות"
              cols="10"
              rows="10"
              className="slide__input slide-three__input_textarea"
              value={props.notes}
              onChange={(event) => {
                props.onNotesChange(event.target.value);
              }}
            ></textarea>
            <label className="slide__label" type="text">
              50
            </label>
          </div>
        </div>
      </div>
      <div className="slide__display">
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

export default Slide;
