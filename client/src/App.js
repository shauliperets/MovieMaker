import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Logo from "./Logo";
import SelectLogo from "./SelectLogo";
import Popup from "./Popup";
import ColorSet from "./ColorSet";

function App() {
  const [isColorSetPopupOpen, setIsColorSetPopupOpen] = React.useState(false);
  const [selectSet, setSelectedSet] = React.useState("Tech");

  function openPopup() {
    setIsColorSetPopupOpen(true);
  }

  function closePopup() {
    setIsColorSetPopupOpen(false);
  }

  function selectedColorSet(value) {
    setSelectedSet(value);
  }

  return (
    <div className="app">
      <main>
        <Logo></Logo>
        <Header></Header>
        <SelectLogo openPopup={openPopup} isOpen={isColorSetPopupOpen} selectSet={selectSet}></SelectLogo>
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
      </main>
      <footer class="footer"></footer>
    </div>
  );
}

export default App;
