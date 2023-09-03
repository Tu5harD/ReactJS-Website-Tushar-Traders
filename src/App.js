import React, { useEffect } from "react";

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/HomePage/Home";
import About from "./Components/About/About";
import Contact from "./Components/ContactUs/Contact";
import Product from "./Components/Product/Product";
import Gallery from "./Components/Gallery/Gallery";
import Order from "./Components/Order/Order";
import Translater from "./Components/Translater/Translater";
const App = () => {
  // const googleTranslateElementInit = () => {
  //   new window.google.translate.TranslateElement(
  //     {
  //       pageLanguage: "en",
  //       includedLanguages: "mr,hi,en", // Add the languages you want to support (Marathi and Hindi)
  //       autoDisplay: false,
  //     },
  //     "google_translate_element"
  //   );
  // };
  // useEffect(() => {
  //   var addScript = document.createElement("script");
  //   addScript.setAttribute(
  //     "src",
  //     "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
  //   );
  //   document.body.appendChild(addScript);
  //   window.googleTranslateElementInit = googleTranslateElementInit;
  // }, []);
  const googleTranslateElementInit = () => {
    console.log("Initializing Google Translate");
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        includedLanguages: "mr,hi",
        autoDisplay: false,
      },
      "google_translate_element"
    );
  };
  
  // ...
  
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  
    // Define the callback function globally
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);
  
  return (
    <>
      <div className="bg-translater">
        <div id="google_translate_element"></div>
      </div>

      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/product" Component={Product} />
        <Route path="/gallery" Component={Gallery} />
        <Route path="/contact" Component={Contact} />
        <Route path="/order" Component={Order} />
      </Routes>
    </>
  );
};

export default App;
