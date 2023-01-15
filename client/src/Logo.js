import logoImage from "./images/movie-logo.png";

function Logo() {
  return (
    <div className="logo">
      <img src={logoImage} alt="Logo image" className="logo__image"></img>
      <div className="logo__title">טיוי.דיאי</div>
    </div>
  );
}

export default Logo;
