import React, { useState, useEffect } from "react";
import "./OrderNow.css";
import "bootstrap/dist/css/bootstrap.min.css";
import loogo from "../HomePage/Images/loogo.webp";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
export default function OrderNow() {
  const [activeInput, setActiveInput] = useState(false);
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [activeSlide, setActiveSlide] = useState(1);

  const [formData, setFormData] = useState({
    productName: "",
    productQuantity: "",
    purchaseDate: "",
    paymentType: "",
    customerName: "",
    phoneNumber: "",
    email: "",
    address: "",
  });

  const handleInputFocus = () => {
    setActiveInput(true);
  };

  const handleInputBlur = (e) => {
    if (e.target.value === "") {
      setActiveInput(false);
    }
  };

  const handleToggleClick = () => {
    setIsSignUpMode(!isSignUpMode);
  };

  const handleBulletClick = (index) => {
    setActiveSlide(index);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAlert = () => {
    if (isSignUpMode) {
      const { productName, productQuantity, purchaseDate, paymentType } =
        formData;
      if (productName && productQuantity && purchaseDate && paymentType) {
        alert("Order has been confirmed");
      } else {
        alert("Please fill all the fields");
      }
    }
  };

  useEffect(() => {
    // Auto-play the carousel every 3 seconds
    const interval = setInterval(() => {
      const nextSlide = activeSlide === 3 ? 1 : activeSlide + 1;
      setActiveSlide(nextSlide);
    }, 3000);
    return () => clearInterval(interval);
  }, [activeSlide]);

  return (
    <main style={{backgroundColor:"#f1f6fb"}} className={isSignUpMode ? "sign-up-mode" : ""}>
      <div className="box">
        <div className="inner-box">
          <div className="forms-wrap">
            <form className={isSignUpMode ? "sign-up-form form-order" : "sign-in-form form-order"}>
              <div className="logo">
                <img src={loogo} alt="easyclass" />
                <h4>N & T Cattle Feed</h4>
              </div>
              <div className="heading">
                <h2>{isSignUpMode ? "Product Details" : "Customer Details"}</h2>
              </div>
              <div className="actual-form">
                <div className={`input-wrap ${activeInput ? "active" : ""}`}>
                  <input
                    type={isSignUpMode ? "text" : "email"}
                    minLength="4"
                    className="input-field"
                    autoComplete="off"
                    placeholder={isSignUpMode ? "" : "Customer Name"}
                    required
                    name={isSignUpMode ? "productName" : "customerName"}
                    value={
                      isSignUpMode
                        ? formData.productName
                        : formData.customerName
                    }
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  />
                  {isSignUpMode && (
                    <select
                      className="input-field payment-option"
                      // required
                      // name="paymentType"
                      // value={formData.paymentType}
                      // onChange={handleInputChange}
                      // onFocus={handleInputFocus}
                      // onBlur={handleInputBlur}
                    >
                      <option value="">Select Product Type</option>
                      <option value="creditCard">Sarki Pend</option>
                      <option value="paypal">Indranil Goli</option>
                      <option value="paypal">Khapari Pend</option>
                      <option value="bankTransfer">Wheat Bran Atta</option>
                      <option value="paypal">Wheat Bran Bussa</option>
                    </select>
                  )}
                </div>

                <div className={`input-wrap ${activeInput ? "active" : ""}`}>
                  <input
                    type="text"
                    minLength="4"
                    className="input-field"
                    autoComplete="off"
                    placeholder={
                      isSignUpMode ? "Product Quantity" : "Phone Number"
                    }
                    required
                    name={isSignUpMode ? "productQuantity" : "phoneNumber"}
                    value={
                      isSignUpMode
                        ? formData.productQuantity
                        : formData.phoneNumber
                    }
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  />
                </div>

                <div className={`input-wrap ${activeInput ? "active" : ""}`}>
                  <input
                    type={isSignUpMode ? "text" : "email"}
                    minLength="4"
                    className="input-field"
                    autoComplete="off"
                    placeholder={isSignUpMode ? "" : "Email"}
                    required
                    name={isSignUpMode ? "paymentType" : "email"}
                    value={isSignUpMode ? formData.paymentType : formData.email}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  />
                  {isSignUpMode && (
                    <select
                      className="input-field payment-option"
                      // required
                      // name="paymentType"
                      // value={formData.paymentType}
                      // onChange={handleInputChange}
                      // onFocus={handleInputFocus}
                      // onBlur={handleInputBlur}
                    >
                      <option value="">Select Payment Type</option>
                      <option value="creditCard">Credit Card</option>
                      <option value="paypal">PayPal</option>
                      <option value="bankTransfer">Bank Transfer</option>
                    </select>
                  )}
                </div>

                <div className={`input-wrap ${activeInput ? "active" : ""}`}>
                  <input
                    type={isSignUpMode ? "date" : "text"}
                    minLength="4"
                    className="input-field"
                    autoComplete="off"
                    placeholder={
                      isSignUpMode ? "Purches Date" : "Deliviry Address"
                    }
                    required
                    name={isSignUpMode ? "purchaseDate" : "address"}
                    value={
                      isSignUpMode ? formData.purchaseDate : formData.address
                    }
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  />
                </div>

                <div className=" flex justify-content-between">
                  <Button
                  style={{backgroundColor:"black"}}
                    onClick={handleToggleClick}
                    value={isSignUpMode ? "Previous" : "Next"}
                    variant="contained"
                  >
                    {isSignUpMode ? "Previous" : "Next"}{" "}
                  </Button>

                  {isSignUpMode && (
                    <Button
                      style={{backgroundColor:"black"}}
                      variant="contained"
                      onClick={handleAlert}
                      endIcon={<SendIcon />}
                    >
                      Send
                    </Button>
                  )}
                </div>

                <p className="text">{/* ... Terms of service text */}</p>
              </div>
            </form>
          </div>
          <div className="carousel">
            <div className="images-wrapper">
              <img
                src="https://images.robertharding.com/zoom/RM/RH/VERTICAL/869-4045.jpg"
                className={`image img-1 ${activeSlide === 1 ? "show" : ""}`}
                alt=""
              />
              <img
                src="https://media.istockphoto.com/id/1205477580/photo/cows-in-stable-germany.jpg?s=612x612&w=0&k=20&c=xsuEQfpbVIgoc903X15O1pQMD3_KrprZS1f0LBe9FVQ="
                className={`image img-2 ${activeSlide === 2 ? "show" : ""}`}
                alt=""
              />
              <img
                src="https://images.robertharding.com/zoom/RF/TI/VERTICAL/1178-11367.jpg"
                className={`image img-3 ${activeSlide === 3 ? "show" : ""}`}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
