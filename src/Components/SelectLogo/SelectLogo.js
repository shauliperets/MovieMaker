import Display from "../Display/Display";
import { useSelector, useDispatch } from "react-redux";
//import { SelectLogoActions } from "./SelectLogoSlice";
import { OpenLogo } from "./SelectLogoSlice";

function SelectLogo(props) {
  const selectLogo = useSelector((state) => state.SelectLogo);
  const dispatch = useDispatch();

  return (
    <div className="select-logo">
      <div className="select-logo__buttons">
        <h2 className="select-logo__title">צבעוניות</h2>
        <button
          className={
            selectLogo.IsOpen
              ? "select-logo__colors-button select-logo__colors-button_clicked"
              : "select-logo__colors-button"
          }
          onClick={() => dispatch(OpenLogo())}
        >
          <div className="select-logo__colors-button-text">{props.selectSet}</div>
        </button>
        <h2 className="select-logo__title">לוגו</h2>
        <button className="select-logo__upload-button" onClick={props.onLoadClick}></button>
      </div>
      <div className="select-logo__display">
        <Display
          logoSource={selectLogo.Logo}
          productName={selectLogo.Name}
          productDetails={selectLogo.Details}
          productPriceMajor={selectLogo.Major}
          productPriceMinor={selectLogo.Minor}
          backgroundSource={selectLogo.Background}
          notes={selectLogo.Notes}
        ></Display>
      </div>
    </div>
  );
}

export default SelectLogo;
