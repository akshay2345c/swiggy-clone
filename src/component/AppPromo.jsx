import React from "react";
import "./Apppromo.css";
import Footer from "./Footer.jsx";

const AppPromotion = () => {
  return (
    <>
      <section className="app-promo-section">
        <div className="promo-content">
          <div className="text-content">
            <img src="/images/logo.svg" alt="" className="logopromo" />
            <h1>Get the Swiggy App now!</h1>
            <p>For best offers and discounts curated specially for you.</p>
          </div>
          <div className="qr-box">
            <img src="/images/phone.png" alt="" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AppPromotion;
