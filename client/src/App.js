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

  return (
    <div className="app">
      <main>
        <Logo></Logo>
        <Header></Header>
        <SelectLogo openPopup={openPopup} isOpen={isColorSetPopupOpen} selectSet={selectSet}></SelectLogo>
        <Popup isOpen={isColorSetPopupOpen} onClose={closePopup}>
          <ColorSet name="Tech"></ColorSet>
          <ColorSet name="Sunset"></ColorSet>
          <ColorSet name="Solid"></ColorSet>
          <ColorSet name="Retro"></ColorSet>
          <ColorSet name="Lavender"></ColorSet>
          <ColorSet name="Italia"></ColorSet>
          <ColorSet name="Electronic"></ColorSet>
          <ColorSet name="Cafe"></ColorSet>
        </Popup>
      </main>
      <footer class="footer"></footer>
    </div>
  );
}

export default App;
