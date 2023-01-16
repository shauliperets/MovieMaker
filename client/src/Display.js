function Display(props) {
  return (
    <div className="display">
      <img className="display__logo" src={props.logoSource}></img>
      <div className="display__body">
        <div className="display__details">
          <label className="display__product-name">{props.productName}</label>
          <label className="display__product-details">{props.productDetails}</label>
          <div>
            <label className="display__product-price-major">{props.productPriceMajor}</label>
            <label className="display__product-price-minor">{props.productPriceMinor}</label>
          </div>
        </div>
        <img className="display__image" src={props.backgroundSource}></img>
      </div>
    </div>
  );
}

export default Display;
