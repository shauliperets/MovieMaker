function SelectLogo(props) {
  return (
    <div class="select-logo">
      <div className="select-logo__name">{props.selectSet}</div>
      <button
        class={props.isOpen ? "select-logo__button select-logo__button_clicked" : "select-logo__button"}
        onClick={props.openPopup}
      ></button>
      <div class="select-logo__display">
        <div>לוגו</div>
      </div>
    </div>
  );
}

export default SelectLogo;
