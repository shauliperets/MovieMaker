import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Logo from "./Logo";
import SelectLogo from "./SelectLogo";
import Popup from "./Popup";
import ColorSet from "./ColorSet";
import UploadFile from "./UploadFile";

function App() {
  const [isColorSetPopupOpen, setIsColorSetPopupOpen] = React.useState(false);
  const [isLogoPopupOpen, setIsLogoPopupOpen] = React.useState(true);
  const [selectSet, setSelectedSet] = React.useState("Tech");
  const [loadedImage, setLoadedImage] = React.useState("");

  function openPopup() {
    setIsColorSetPopupOpen(true);
  }

  function closePopup() {
    setIsColorSetPopupOpen(false);
    setIsLogoPopupOpen(false);
  }

  function selectedColorSet(value) {
    setSelectedSet(value);
  }

  function onLoadImageClick() {
    setIsLogoPopupOpen(true);
  }

  function uploadImage(event) {
    console.log("image load...");
    console.log(event.target.files[0]);
    console.log(event.target.files[0].name);
    //setLoadedImage(event.target.files[0].name);

    const file = event.target.files[0];

    //file content
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      //console.log(reader.result);
    };

    setLoadedImage(URL.createObjectURL(file));
    closePopup();
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
          onLoadImage={onLoadImageClick}
          source={loadedImage}
        ></SelectLogo>
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
        <Popup isOpen={isLogoPopupOpen} onClose={closePopup}>
          <UploadFile onSubmit={closePopup} onChange={uploadImage} source={loadedImage}></UploadFile>
        </Popup>
      </main>
      <footer class="footer"></footer>
    </div>
  );
}

export default App;
