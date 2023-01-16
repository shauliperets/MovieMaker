import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Logo from "./Logo";
import SelectLogo from "./SelectLogo";
import Popup from "./Popup";
import ColorSet from "./ColorSet";
import UploadFile from "./UploadFile";
import SlideOne from "./SlideOne";
import SlideThree from "./SlideThree";

function App() {
  const [isColorSetPopupOpen, setIsColorSetPopupOpen] = React.useState(false);
  const [isLogoPopupOpen, setIsLogoPopupOpen] = React.useState(false);
  const [isBackgroundPopupOpen, setIsBackgroundPopupOpen] = React.useState(false);
  const [selectSet, setSelectedSet] = React.useState("Tech");
  const [loadedImage, setLoadedImage] = React.useState("");
  const [logo, setLogo] = React.useState(<img className="select-logo__logo" src="./logo.png"></img>); //delete
  const [popupLogo, setPopupLogo] = React.useState(<img className="popup__logo" src="./logo.png"></img>); //delete
  const [logoSource, setLogoSource] = React.useState("./logo.png");
  const [backgroundSource, setBackgroundSource] = React.useState("./image-load.png");
  const [productName, setProductName] = React.useState("שם המוצר");
  const [productDetails, setProductDetails] = React.useState("פרטים על המוצר");
  const [productPriceMajor, setProductPriceMajor] = React.useState("0");
  const [productPriceMinor, setProductPriceMinor] = React.useState("00");

  React.useEffect(() => {
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

  function updateProductName(value) {
    setProductName(value);
  }

  function updateProductDetails(value) {
    console.log("11value:", value);
    setProductDetails(value);
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
          logo={logo}
          productName={productName}
          productDetails={productDetails}
          onProductChange={updateProductName}
          onDetailsChange={updateProductDetails}
        ></SelectLogo>
        <SlideOne
          logo={logo}
          logoSource={logoSource}
          productName={productName}
          productDetails={productDetails}
          productPriceMajor={productPriceMajor}
          productPriceMinor={productPriceMinor}
          backgroundSource={backgroundSource}
          onLoadClick={openBackroundPopup}
          onProductChange={updateProductName}
          onDetailsChange={updateProductDetails}
        ></SlideOne>
        <SlideThree
          logoSource={logoSource}
          productName={productName}
          productDetails={productDetails}
          productPriceMajor={productPriceMajor}
          productPriceMinor={productPriceMinor}
          backgroundSource={backgroundSource}
          onLoadClick={openBackroundPopup}
          onProductChange={updateProductName}
          onDetailsChange={updateProductDetails}
        ></SlideThree>
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
          <UploadFile onChange={uploadLogo} source={loadedImage} logo={popupLogo}></UploadFile>
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
