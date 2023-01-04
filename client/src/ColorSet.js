function ColorSet(props) {
  return (
    <div className="color-vector">
      <label className="color-vector__name">{props.name}</label>
      <div className="color-vector__tech"></div>
    </div>
  );
}

export default ColorSet;
