function SelectLogo(props) {
  return (
    <div class="select-logo">
      <div className="select-logo__buttons">
        <h2 className="select-logo__title">שם מוצר ופרטים</h2>
        <input
          className="select-logo__textbox select-logo__textbox-product-name"
          type="text"
          placeholder="שם המוצר"
          onChange={(event) => {
            props.onProductChange(event.target.value);
          }}
        ></input>

        <input
          className="select-logo__textbox"
          type="text"
          placeholder="פרטים על המוצר"
          onChange={(event) => {
            props.onDetailsChange(event.target.value);
          }}
        ></input>
        <h2 className="select-logo__title">צבעוניות</h2>
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
        <h2 className="select-logo__title">לוגו</h2>
        <button className="select-logo__upload-button" onClick={props.onLoadImage}></button>
      </div>
      <div class="select-logo__display">
        <h2 className="select-logo__title">תצוגה מקדימה של צבעים</h2>
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
