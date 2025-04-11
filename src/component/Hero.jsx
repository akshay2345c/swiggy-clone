import React from "react";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { LuMapPin } from "react-icons/lu";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

import "./hero.css";
import Object from "../Object";

const Hero = () => {
  return (
    <>
      <section className="bgcolor">
        <div
          style={{
            position: "relative",
            height: "100vh",
          }}
        >
          <header className="header displayflex">
            <div className="header_left">
              <img
                src="/images/logo.png"
                alt="Swiggy Logo"
                style={{ color: "white" }}
              />
            </div>
            <div className="header_right displayflex">
              <a href="#">Swiggy Corporate</a>
              <a href="#">Partner with us</a>
              <a className="button" href="#">
                Get the App{" "}
                <LuSquareArrowOutUpRight
                  style={{
                    paddingLeft: "5px",
                  }}
                />
              </a>
              <a className="bbg button" href="#">
                Sign in
              </a>
            </div>
          </header>

          <div className="middele_section">
            <div className="middle_header">
              Order food &amp; groceries. Discover best restaurants. Swiggy it!
              <div className="searchclass">
                <div className="location-container" style={{ width: "250px" }}>
                  <LuMapPin className="iconfill" />
                  <input
                    type="text"
                    placeholder="Enter your location"
                    className="location-input"
                  />
                  <MdOutlineKeyboardArrowDown className="iconfill" />
                </div>
                <div className="location-container" style={{ width: "430px" }}>
                  <input
                    type="text"
                    placeholder="Search for restaurant, item or more"
                    className="location-input"
                  />
                  <CiSearch className="iconfill" />
                </div>
              </div>
            </div>
          </div>
          <Object />
          <img
            src="/images/Veggies_new.png"
            alt="Veggies"
            style={{
              position: "absolute",
              top: "15%",
              left: "0%",
              width: "250px",
              height: "500px",
            }}
          />
          <img
            src="/images/Sushi_replace.png"
            alt="Sushi"
            style={{
              position: "absolute",
              top: "15%",
              right: "0%",
              width: "250px",
              height: "500px",
            }}
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
