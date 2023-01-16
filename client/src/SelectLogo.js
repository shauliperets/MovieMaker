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
        <h2 className="select-logo__title">תצוגה מקדימה של צבעים</h2>
        <div className="select-logo__presentation">
          {props.logo}
          <label className="select-logo__display-product-name">שם המוצר</label>
          <label className="select-logo__display-product-details">פרטים על המוצר</label>
        </div>
        <label className="select-logo__display-product-details">פרטים על המוצר</label>
      </div>
    </div>
  );
}

export default SelectLogo;
