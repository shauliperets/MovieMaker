import React from "react";
//import logo from "../Images/logo.png";
import Header from "./Header";
import Logo from "./Logo/Logo";
import SelectLogo from "./SelectLogo/SelectLogo";
import Popup from "./Popup";
import ColorSet from "./ColorSet/ColorSet";
import UploadFile from "./UploadFile";
import Slide from "./Slide/Slide";
//import SlideOne from "./SlideOne";
//import SlideThree from "./SlideThree";
import SlideProductPrice from "./SlideProductPrice";

import { api } from "../Utils/Api";
import { Counter } from "./Counter/Counter";

import { useSelector, useDispatch } from "react-redux";

import { Open, Close } from "./ColorSet/ColorSetSlice";

//import { SelectLogoActions } from "./SelectLogo/SelectLogoSlice";
//import { Open, Close } from "./SelectLogo/SelectLogoSlice";
import { CloseLogo } from "./SelectLogo/SelectLogoSlice";

//import SlideSlice from "./Slide/SlideSlice";
//import { AddSlide } from "./Slide/SlideSlice";

// 1. Add route
// 2. Use Suspense for lazy loading. Link - https://linguinecode.com/post/code-splitting-react-router-with-react-lazy-and-react-suspense#:~:text=Step%203%3A%20Use%20React%20Suspense%20component
// 3. Popup move with mouse
// 4. Learn clean architecture?
// 5. float on + show all

function App() {
  //const [isColorSetPopupOpen, setIsColorSetPopupOpen] = React.useState(false);
  //const [isLogoPopupOpen, setIsLogoPopupOpen] = React.useState(false);
  const [isBackgroundPopupOpen, setIsBackgroundPopupOpen] = React.useState(false);
  const [selectSet, setSelectedSet] = React.useState("Tech");
  const [loadedImage, setLoadedImage] = React.useState(""); //delete
  const [logo, setLogo] = React.useState(<img className="select-logo__logo" src="./logo.png" alt="Logo"></img>); //delete
  const [popupLogo, setPopupLogo] = React.useState(
    <img className="popup__logo" src="./logo.png" alt="Popup Logo"></img>
  ); //del
  const [logoSource, setLogoSource] = React.useState("./logo.png");
  const [backgroundSource, setBackgroundSource] = React.useState("./image-load.png");
  const [selectSlide, setSelectedSlide] = React.useState("");
  //const [isAddSlideMenuVisible, setIsAddSlideMenuVisible] = React.useState(false);
  const [slideOneProductName, setSlideOneProductName] = React.useState("שם המוצר");
  const [slideOneProductDetails, setSlideOneProductDetails] = React.useState("פרטים על המוצר");
  const [slideOneProductPriceMajor, setSlideOneProductPriceMajor] = React.useState("0");
  const [slideOneProductPriceMinor, setSlideOneProductPriceMinor] = React.useState("00");
  const [slideOneNotes, setSlideOneNotes] = React.useState("האותיות הקטנות");
  //const [slideThreeProductName, setSlideThreeProductName] = React.useState("שם המוצר");
  //const [slideThreeProductDetails, setSlideThreeProductDetails] = React.useState("פרטים על המוצר");
  //const [slideThreeProductPriceMajor, setSlideThreeProductPriceMajor] = React.useState("0");
  //const [slideThreeProductPriceMinor, setSlideThreeProductPriceMinor] = React.useState("00");
  //const [slideThreeNotes, setSlideThreeNotes] = React.useState("האותיות הקטנות");
  const [slides, setSlides] = React.useState([]);

  const isColorSetOpen = useSelector((state) => state.ColorSet.value);
  const selectLogo = useSelector((state) => state.SelectLogo);
  const slide = useSelector((state) => state.Slide);

  const dispatch = useDispatch();

  React.useEffect(() => {
    console.log("on load sildes", slides);

    console.log("localStorage: ", localStorage.getItem("slides"));

    const storedSlides = JSON.parse(localStorage.getItem("slides"));

    /*if (storedSlides.length == null) {
      console.log("storedSlides is null");
    } else if (storedSlides.length == undefined) {
      console.log("storedSlides is undefined");
    } else if (storedSlides.length == 0) {
      console.log("storedSlides is empty string");
    }*/

    /*if (storedSlides.length > 0) {
      console.log("storedSlides.length > 0. slides =>", storedSlides);

      setSlides(storedSlides);
    }*/

    //setSlides(localStorage.getItem("slides"));
  }, []);

  React.useEffect(() => {
    console.log("on load sildes", slides);

    localStorage.setItem("slides", JSON.stringify(slides));

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
  }, [slides]);

  /*function onSelectedSlide(id, type) {
    console.log("slide added: ", id);
    console.log("slide added array: ", [...slides]);
    console.log("slide details: ", getSlideDetails(id, type));
    /*let updateSlides = [...slides];
    //updateSlides.push({ name: name });
    //setSlides(updateSlides);

    setSlides([...slides, getSlideDetails(id, type)]);

    //console.log("onSelectedSlide. slides =>: ", slides);
    //console.log("onSelectedSlide. slides.length =>: ", slides.length);
  }*/

  function getSlideDetails(id, type) {
    console.log("slide details id: ", id);
    console.log("slide details type: ", type);

    if (type === "PriceCard") {
      return {
        id: `slide-${slides.length + 1}`,
        type: type,
        name: "כרטיסיית מחיר",
        image: "add-image.jpg",
        isAddSlideMenuVisible: false,
      };
    } else if (type === "ProductCard") {
      return {
        id: `slide-${slides.length + 1}`,
        type: type,
        name: "כרטיסיית מוצר",
        image: "add-image.jpg",
        isAddSlideMenuVisible: false,
      };
    }
  }

  /*function onAddSlideMouseEnter(id) {
    console.log("On Mouse enter. id =>", id);
    console.log("On Mouse enter. slides =>", slides);

    slides.map((slide) => {
      if (slide.id == id) {
        slide.isAddSlideMenuVisible = true;
      }
    });

    setIsAddSlideMenuVisible(true); //delete it - inside slides now
  }*/

  /*function onAddSlideMouseLeave(id) {
    console.log("On Mouse leave. id =>", id);

    slides.map((slide) => {
      if (slide.id == id) {
        slide.isAddSlideMenuVisible = false;
      }
    });

    setIsAddSlideMenuVisible(false); //delete it - inside slides now
  }*/

  function onResetClick() {
    setSlides([]);

    localStorage.removeItem("slides");
    localStorage.setItem("slides", []);
  }

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
    //setIsColorSetPopupOpen(true);
    dispatch(Open());
  }

  function closePopup() {
    dispatch(Close());
    dispatch(CloseLogo());

    //setIsColorSetPopupOpen(false);
    //setIsLogoPopupOpen(false);
    setIsBackgroundPopupOpen(false);
  }

  function selectedColorSet(value) {
    setSelectedSet(value);
  }

  /*function openLogoPopup() {
    setIsLogoPopupOpen(true);
  }*/

  function openBackroundPopup(id) {
    setIsBackgroundPopupOpen(true);

    setSelectedSlide(id);

    console.log("open background popup id =>", id);
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

  /*function updateSlideThreeNotes(value) {
    setSlideThreeNotes(value);
  }*/

  /*function updateSlideThreeProductName(value) {
    setSlideThreeProductName(value);
  }*/

  /*function updateSlideThreeProductDetails(value) {
    setSlideThreeProductDetails(value);
  }*/

  /*function updateSlideThreeProductPriceMajor(value) {
    setSlideThreeProductPriceMajor(value);
  }*/

  /*function updateSlideThreeProductPriceMinor(value) {
    setSlideThreeProductPriceMinor(value);
  }*/

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

    setLogo(<img className="select-logo__logo" src={URL.createObjectURL(file)} alt="Logo"></img>);
    setPopupLogo(<img className="popup__logo" src={URL.createObjectURL(file)} alt="Popup Logo"></img>);

    setLogoSource(URL.createObjectURL(file));

    closePopup();
  }

  function uploadBackground(event) {
    console.log("background load...");
    console.log(event.target.files[0]);
    console.log(event.target.files[0].name);

    //var FileSaver = require("file-saver");
    var blob = new Blob([event.target.files[0]], { type: "text/plain;charset=utf-8" });
    //FileSaver.saveAs(blob, event.target.files[0].name); // this save image to local

    console.log("selected slde: ", selectSlide);
    console.log("blob: ", blob);

    /*slides.map((slide) => {
      if (slide.id == selectSlide) {
        slide.image = blob;
      }
    });*/

    //localStorage.setItem("slides", slides);

    console.log("(app.uploadBackground) sildes: ", slides);

    //localStorage.setItem(selectSlide, blob);

    api.LoadImage(blob);

    //const file = event.target.files[0];
    //setBackgroundSource(URL.createObjectURL(file));

    //const data = new FormData();
    //data.append("file", file);

    closePopup();
  }

  function isAddSlideMenuVisible(id) {
    console.log("isAddSlideMenuVisible. id => ", isAddSlideMenuVisible);
    slide.value.map((item) => {
      if (item.id == id) return item.isAddSlideMenuVisible;
    });
  }

  return (
    <div className="app">
      <main>
        <Counter></Counter>
        <Logo></Logo>
        <Header></Header>
        <SelectLogo
          //openPopup={openPopup}
          //isOpen={isColorSetPopupOpen}
          selectSet={selectSet}
          //onLoadImage={onLoadImageClick}
          //onLoadClick={openLogoPopup}
          source={loadedImage} //selet it
          logo={logo} //delete
          logoSource={logoSource}
          productName="שם המוצר"
          productDetails="פרטים על המוצר"
          backgroundSource="./cup.png"
          onProductChange={updateSlideOneProductName}
          onDetailsChange={updateSlideOneProductDetails}
        ></SelectLogo>

        <Slide
          id="slide-0"
          key="slide-0"
          name="EmptySlide"
          //onSelectedSlideClick={onSelectedSlide}
          //onAddSlideMouseEnter={onAddSlideMouseEnter}
          //onAddSlideMouseLeave={onAddSlideMouseLeave}
          isAddSlideMenuVisible={() => {
            console.log("1234--");
            isAddSlideMenuVisible("");
            console.log("1234--");
          }}
        ></Slide>

        <div className="app__button-panel">
          <button className="app__reset-button" onClick={onResetClick}>
            מחק סליידים
          </button>
        </div>

        <div className="app__slides">
          {console.log("(App-View) slides =>", slides)}
          {slide.value.map((slide, index) => (
            <Slide
              id={`slide-${index + 1}`}
              key={`slide-${index + 1}`}
              name={slide.name}
              //onSelectedSlideClick={onSelectedSlide}
              //onAddSlideMouseEnter={onAddSlideMouseEnter}
              //onAddSlideMouseLeave={onAddSlideMouseLeave}
              isAddSlideMenuVisible={isAddSlideMenuVisible(`slide-${index + 1}`)}
            >
              <SlideProductPrice
                id={"product-price-slide-" + index} //remove index from key - put id from DB
                key={"product-price-slide-" + index} //remove index from key - put id from DB
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

        {/*<Slide key={"1234567890"} onSelectedSlideClick={onSelectedSlide}>
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
        </Slide>*/}
        {/**change it to redux */}
        <Popup isOpen={isColorSetOpen} onClose={closePopup}>
          <ColorSet name="Tech" onSelect={selectedColorSet}></ColorSet>
          <ColorSet name="Sunset" onSelect={selectedColorSet}></ColorSet>
          <ColorSet name="Solid" onSelect={selectedColorSet}></ColorSet>
          <ColorSet name="Retro" onSelect={selectedColorSet}></ColorSet>
          <ColorSet name="Lavender" onSelect={selectedColorSet}></ColorSet>
          <ColorSet name="Italia" onSelect={selectedColorSet}></ColorSet>
          <ColorSet name="Electronic" onSelect={selectedColorSet}></ColorSet>
          <ColorSet name="Cafe" onSelect={selectedColorSet}></ColorSet>
        </Popup>
        <Popup name="upload-logo" isOpen={selectLogo.IsOpen} onClose={closePopup}>
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
