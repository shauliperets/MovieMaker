import slideOneDropdown from "./images/slide-1-dropdown.jpg";

function SlideOne() {
  return (
    <div className="slide-one">
      <div className="slide-one__sidebar">
        <h2 className="slide-one__title">סלייד 1</h2>
        <img src={slideOneDropdown}></img>

        <div className="slide-one__load-image-buttons">
          <button className="slide-one__button">העלאת תמונה</button>
          <button className="slide-one__button">גלריה</button>
        </div>
        <div className="slide-one__inputs">
          <div className="slide-one__input-line">
            <input placeholder="שם המוצר" className="slide-one__input slide-one__input_text" type="text"></input>
            <label className="slide-one__label" type="text">
              9
            </label>
          </div>
          <div className="slide-one__input-line">
            <input placeholder="שורת הסבר" className="slide-one__input slide-one__input_text" type="text"></input>
            <label className="slide-one__label" type="text">
              14
            </label>
          </div>
          <div className="slide-one__input-line">
            <input className="slide-one__input slide-one__input_text" type="text"></input>
            <label className="slide-one__label" type="text">
              4
            </label>
          </div>
          <div className="slide-one__input-line">
            <input className="slide-one__input slide-one__input_text" type="text"></input>
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
        <div className="slide-one__presentation"></div>
      </div>
    </div>
  );
}

export default SlideOne;
