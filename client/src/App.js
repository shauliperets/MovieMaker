import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Logo from "./Logo";
import SelectLogo from "./SelectLogo";
import Popup from "./Popup";
import ColorSet from "./ColorSet";
import UploadFile from "./UploadFile";
import Slide from "./Slide";
import SlideOne from "./SlideOne";
import SlideThree from "./SlideThree";
import SlideProductPrice from "./SlideProductPrice";

function App() {
  const [isColorSetPopupOpen, setIsColorSetPopupOpen] = React.useState(false);
  const [isLogoPopupOpen, setIsLogoPopupOpen] = React.useState(false);
  const [isBackgroundPopupOpen, setIsBackgroundPopupOpen] = React.useState(false);
  const [selectSet, setSelectedSet] = React.useState("Tech");
  const [loadedImage, setLoadedImage] = React.useState(""); //delete
  const [logo, setLogo] = React.useState(<img className="select-logo__logo" src="./logo.png"></img>); //delete
  const [popupLogo, setPopupLogo] = React.useState(<img className="popup__logo" src="./logo.png"></img>); //delete
  const [logoSource, setLogoSource] = React.useState("./logo.png");
  const [backgroundSource, setBackgroundSource] = React.useState("./image-load.png");
  const [slideOneProductName, setSlideOneProductName] = React.useState("שם המוצר");
  const [slideOneProductDetails, setSlideOneProductDetails] = React.useState("פרטים על המוצר");
  const [slideOneProductPriceMajor, setSlideOneProductPriceMajor] = React.useState("0");
  const [slideOneProductPriceMinor, setSlideOneProductPriceMinor] = React.useState("00");
  const [slideOneNotes, setSlideOneNotes] = React.useState("האותיות הקטנות");
  const [slideThreeProductName, setSlideThreeProductName] = React.useState("שם המוצר");
  const [slideThreeProductDetails, setSlideThreeProductDetails] = React.useState("פרטים על המוצר");
  const [slideThreeProductPriceMajor, setSlideThreeProductPriceMajor] = React.useState("0");
  const [slideThreeProductPriceMinor, setSlideThreeProductPriceMinor] = React.useState("00");
  const [slideThreeNotes, setSlideThreeNotes] = React.useState("האותיות הקטנות");

  const [slides, setSlides] = React.useState([]);

  function onSelectedSlide(name) {
    console.log("slide added: ", name);
    const updateSlides = [...slides];
    updateSlides.push({ name: name });
    setSlides(updateSlides);
    console.log("slides: ", slides);
  }

  React.useEffect(() => {
    console.log("on load sildes", slides);
    //setSlides([]);
    //addSlide("my name111");
    //console.log(slides);
    //document.querySelector(".select-logo__logo").src = "./images/logo.png";
    //URL.createObjectURL("./images/logo.png");
    //new FileReader()
    //getBlob().then((data) => console.log("blob data", data));
    //console.log("blob =>", getBlob());
    //const file = new File([getBlob()], "name");
    //setLoadedImage(URL.createObjectURL(file));loadedImage
  }, []);

  /*function getBlob() {
    return fetch("./logo.png")
      .then((response) => {
        console.log("response =>", response);
        return response.blob();
      })
      .then((data) => {
        console.log("blob data: ==>", data);
        return data;
      });
  }*/

  function openPopup() {
    setIsColorSetPopupOpen(true);
  }

  function closePopup() {
    setIsColorSetPopupOpen(false);
    setIsLogoPopupOpen(false);
    setIsBackgroundPopupOpen(false);
  }

  function selectedColorSet(value) {
    setSelectedSet(value);
  }

  function openLogoPopup() {
    setIsLogoPopupOpen(true);
  }

  function openBackroundPopup() {
    setIsBackgroundPopupOpen(true);
  }

  function updateSlideOneProductName(value) {
    setSlideOneProductName(value);
  }

  function updateSlideOneProductDetails(value) {
    setSlideOneProductDetails(value);
  }

  function updateSlideOneProductPriceMajor(value) {
    setSlideOneProductPriceMajor(value);
  }

  function updateSlideOneProductPriceMinor(value) {
    setSlideOneProductPriceMinor(value);
  }

  function updateSlideOneNotes(value) {
    setSlideOneNotes(value);
  }

  function updateSlideThreeNotes(value) {
    setSlideThreeNotes(value);
  }

  function updateSlideThreeProductName(value) {
    setSlideThreeProductName(value);
  }

  function updateSlideThreeProductDetails(value) {
    setSlideThreeProductDetails(value);
  }

  function updateSlideThreeProductPriceMajor(value) {
    setSlideThreeProductPriceMajor(value);
  }

  function updateSlideThreeProductPriceMinor(value) {
    setSlideThreeProductPriceMinor(value);
  }

  function uploadLogo(event) {
    console.log("image load...");
    console.log(event.target.files[0]);
    console.log(event.target.files[0].name);
    //setLoadedImage(event.target.files[0].name);

    const file = event.target.files[0];

    console.log("file => ", file);

    //--- read file content ------
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      //console.log(reader.result);
    };
    //-----------------------------

    setLoadedImage(URL.createObjectURL(file));

    setLogo(<img className="select-logo__logo" src={URL.createObjectURL(file)}></img>);
    setPopupLogo(<img className="popup__logo" src={URL.createObjectURL(file)}></img>);

    setLogoSource(URL.createObjectURL(file));

    closePopup();
  }

  function uploadBackground(event) {
    const file = event.target.files[0];
    setBackgroundSource(URL.createObjectURL(file));
    closePopup();

    //console.log("upload bakground");
  }

  function selectSlide(name) {
    console.log("Slide name: ", name);
  }

  return (
    <div className="app">
      <main>
        <Logo></Logo>
        <Header></Header>
        <SelectLogo
          openPopup={openPopup}
          isOpen={isColorSetPopupOpen}
          selectSet={selectSet}
          //onLoadImage={onLoadImageClick}
          onLoadClick={openLogoPopup}
          source={loadedImage} //selet it
          logo={logo} //delete
          logoSource={logoSource}
          productName="שם המוצר"
          productDetails="פרטים על המוצר"
          backgroundSource="./cup.png"
          onProductChange={updateSlideOneProductName}
          onDetailsChange={updateSlideOneProductDetails}
        ></SelectLogo>

        <div className="app__slides">
          {slides.map((element, index) => (
            <Slide key={"slide-" + index} onSelectedSlideClick={onSelectedSlide}>
              <SlideProductPrice
                name={element.name}
                key={"product-price-slide-" + index}
                logoSource={logoSource}
                productName={slideOneProductName}
                productDetails={slideOneProductDetails}
                productPriceMajor={slideOneProductPriceMajor}
                productPriceMinor={slideOneProductPriceMinor}
                backgroundSource={backgroundSource}
                notes={slideOneNotes}
                onLoadClick={openBackroundPopup}
                onProductChange={updateSlideOneProductName}
                onDetailsChange={updateSlideOneProductDetails}
                onMajorPriceChange={updateSlideOneProductPriceMajor}
                onMinorPriceChange={updateSlideOneProductPriceMinor}
                onNotesChange={updateSlideOneNotes}
              ></SlideProductPrice>
            </Slide>
          ))}
        </div>

        <Slide key={"1234567890"} onSelectedSlideClick={onSelectedSlide}>
          <SlideProductPrice
            key={"wertyui"}
            name="סלייד מחיר"
            logoSource={logoSource}
            productName={slideOneProductName}
            productDetails={slideOneProductDetails}
            productPriceMajor={slideOneProductPriceMajor}
            productPriceMinor={slideOneProductPriceMinor}
            backgroundSource={backgroundSource}
            notes={slideOneNotes}
            onLoadClick={openBackroundPopup}
            onProductChange={updateSlideOneProductName}
            onDetailsChange={updateSlideOneProductDetails}
            onMajorPriceChange={updateSlideOneProductPriceMajor}
            onMinorPriceChange={updateSlideOneProductPriceMinor}
            onNotesChange={updateSlideOneNotes}
          ></SlideProductPrice>
        </Slide>

        <Popup isOpen={isColorSetPopupOpen} onClose={closePopup}>
          <ColorSet name="Tech" onSelect={selectedColorSet}></ColorSet>
          <ColorSet name="Sunset" onSelect={selectedColorSet}></ColorSet>
          <ColorSet name="Solid" onSelect={selectedColorSet}></ColorSet>
          <ColorSet name="Retro" onSelect={selectedColorSet}></ColorSet>
          <ColorSet name="Lavender" onSelect={selectedColorSet}></ColorSet>
          <ColorSet name="Italia" onSelect={selectedColorSet}></ColorSet>
          <ColorSet name="Electronic" onSelect={selectedColorSet}></ColorSet>
          <ColorSet name="Cafe" onSelect={selectedColorSet}></ColorSet>
        </Popup>
        <Popup name="upload-logo" isOpen={isLogoPopupOpen} onClose={closePopup}>
          <UploadFile onChange={uploadLogo} source={logoSource} logo={popupLogo}></UploadFile>
        </Popup>
        <Popup isOpen={isBackgroundPopupOpen} onClose={closePopup}>
          <UploadFile name="upload-background" onChange={uploadBackground} source={backgroundSource}></UploadFile>
        </Popup>
      </main>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
