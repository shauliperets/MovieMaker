import Display from "./Display";

function SelectLogo(props) {
  return (
    <div className="select-logo">
      <div className="select-logo__buttons">
        <h2 className="select-logo__title">צבעוניות</h2>
        <button
          className={
            props.isOpen
              ? "select-logo__colors-button select-logo__colors-button_clicked"
              : "select-logo__colors-button"
          }
          onClick={props.openPopup}
        >
          <div className="select-logo__colors-button-text">{props.selectSet}</div>
        </button>
        <h2 className="select-logo__title">לוגו</h2>
        <button className="select-logo__upload-button" onClick={props.onLoadClick}></button>
      </div>
      <div className="select-logo__display">
        <Display
          logoSource={props.logoSource}
          productName="שם המוצר"
          productDetails="פרטים על המוצר"
          productPriceMajor="00"
          productPriceMinor="00"
          backgroundSource={props.backgroundSource}
          notes="האותיות הקטנות"
        ></Display>
      </div>
    </div>
  );
}

export default SelectLogo;
