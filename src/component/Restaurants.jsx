import React from "react";
import "./restaurants.css";
import Slider from "react-slick";
const Restaurants = ({ dineoutRestaurants }) => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    rows: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          rows: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          rows: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="resmain">
        <Slider {...settings}>
          {dineoutRestaurants.map((restaurant) => (
            <div key={restaurant.id} className="restaurant-card">
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="restaurant-image"
              />
              <div className="restaurant-info">
                <h3 className="restaurant-name">{restaurant.name}</h3>
                <p className="restaurant-meta">{restaurant.cuisine}</p>
                <p className="restaurant-meta">{restaurant.location}</p>
                <div className="restaurant-details">
                  <span className="rating">⭐ {restaurant.rating}</span>
                  <span className="distance">{restaurant.distance}</span>
                </div>
                <p className="cost">Cost for Two: {restaurant.costForTwo}</p>
                {restaurant.offers.length > 0 && (
                  <p className="offer">{restaurant.offers[0]}</p>
                )}
                {restaurant.bookingAvailable && (
                  <p className="booking-tag">Table Booking Available</p>
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Restaurants;
