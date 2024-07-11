import React from "react";
import { useSelector, useDispatch } from "react-redux";

function ColorSet(props) {
  const [colorSet, setColorSet] = React.useState("");
  //const isSetColorOpen = useSelector((state) => state.ColorSet.value);

  React.useEffect(() => {
    console.log(props.name);
    setColorSet(props.name);
  }, []);

  return (
    <div className="color-set">
      <label className="color-set__name">{colorSet}</label>
      <div className="color-set__tech" onClick={() => props.onSelect(colorSet)}></div>
    </div>
  );
}

export default ColorSet;
