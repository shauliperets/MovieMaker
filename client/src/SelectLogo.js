function SelectLogo(props) {
  return (
    <div class="select-logo">
      <div className="select-logo__buttons">
        <input
          className="select-logo__product-name"
          type="text"
          placeholder="שם המוצר"
          onChange={(event) => {
            props.onProductChange(event.target.value);
          }}
        ></input>

        <input
          className="select-logo__product-details"
          type="text"
          placeholder="פרטים על המוצר"
          onChange={(event) => {
            props.onDetailsChange(event.target.value);
          }}
        ></input>
        <label className="select-logo__label">צבעוניות</label>
        <button
          class={
            props.isOpen
              ? "select-logo__colors-button select-logo__colors-button_clicked"
              : "select-logo__colors-button"
          }
          onClick={props.openPopup}
        >
          <div className="select-logo__colors-button-text">{props.selectSet}</div>
        </button>
        <label className="select-logo__label">לוגו</label>
        <button className="select-logo__upload-button" onClick={props.onLoadImage}></button>
      </div>
      <div class="select-logo__display">
        <div className="select-logo__presentation">
          {props.logo}
          <label className="select-logo__display-product-name">{props.productName}</label>
          <label className="select-logo__display-product-details">{props.productDetails}</label>
        </div>
      </div>
    </div>
  );
}

export default SelectLogo;
