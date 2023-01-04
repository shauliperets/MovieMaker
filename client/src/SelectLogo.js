function SelectLogo(props) {
  return (
    <div class="select-logo">
      <button
        class={props.isOpen ? "select-logo__button select-logo__button_clicked" : "select-logo__button"}
        onClick={props.openPopup}
      >
        <div className="select-logo__button-text">{props.selectSet}</div>
      </button>
      <div class="select-logo__display">
        <div>לוגו</div>
      </div>
    </div>
  );
}

export default SelectLogo;
