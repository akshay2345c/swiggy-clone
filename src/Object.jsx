import React from "react";
import "./Object.css";
import Fooditem from "./component/fooditem";
import Restaurants from "./component/Restaurants";
import AppPromotion from "./component/AppPromo";

const Object = () => {
  const homecard = [
    {
      title: "FOOD DELIVERY",
      heading: "FROM RESTAURANTS",
      discount: "UP TO 60% OFF ",

      sidearro: "/images/HOME_CARD1.png",
      img: "/images/sidearrow.png",
    },
    {
      title: "INSTAMART",
      heading: "INSTANT GROCERY",
      sidearro: "/images/HOME_CARD2.png",
      discount: "UP TO 60% OFF ",
      img: "/images/sidearrow.png",
    },
    {
      title: "DINEOUT",
      heading: "EAT OUT & SAVE MORE",
      discount: "UP TO 50% OFF ",
      sidearro: "/images/HOME_CARD3.png",
      img: "/images/sidearrow.png",
    },
    {
      title: "GENIE",
      heading: "PIC-UP & DREOP",

      sidearro: "/images/HOME_CARD4.png",
      img: "/images/sidearrow.png",
    },
  ];

  const fooditems = [
    {
      image: "sectiontwo1",
    },
    {
      image: "sectiontwo2",
    },
    {
      image: "sectiontwo3",
    },
    {
      image: "sectiontwo4",
    },
    {
      image: "sectiontwo5",
    },
    {
      image: "sectiontwo6",
    },
    {
      image: "sectiontwo7",
    },
    {
      image: "sectiontwo8",
    },
    {
      image: "sectiontwo9",
    },
    {
      image: "sectiontwo10",
    },
    {
      image: "sectiontwo11",
    },
    {
      image: "sectiontwo12",
    },
    {
      image: "sectiontwo13",
    },
    {
      image: "sectiontwo14",
    },
    {
      image: "sectiontwo15",
    },
    {
      image: "sectiontwo16",
    },
    {
      image: "sectiontwo17",
    },
    {
      image: "sectiontwo18",
    },

    {
      image: "sectiontwo20",
    },
    {
      image: "sectiontwo21",
    },
  ];

  const dineoutRestaurants = [
    {
      id: 1,
      name: "Creamy Heaven Ice Cream",
      image: "/images/restaurents1.jpg",
      rating: 4.6,
      cuisine: "Desserts, Beverages",
      location: "Salabatpura, Surat",
      costForTwo: "₹300",
      offers: ["Flat 20% off on pre-booking", "Up to 10% off with bank offers"],
      distance: "2.7 km",
      bookingAvailable: true,
      tags: ["GIRF SPECIAL"],
    },
    {
      id: 2,
      name: "Broast N Rolls",
      image: "/images/restaurents2.jpg",
      rating: 4.5,
      cuisine: "Fast Food",
      location: "Begampura, Surat",
      costForTwo: "₹500",
      offers: ["Flat 30% off on pre-booking", "Up to 10% off with bank offers"],
      distance: "3.5 km",
      bookingAvailable: true,
      tags: ["GIRF SPECIAL"],
    },
    {
      id: 3,
      name: "Classic Chicken Mamna",
      image: "/images/restaurents3.jpg",
      rating: 3.4,
      cuisine: "North Indian, Mughlai",
      location: "Zampa Bazar, Surat",
      costForTwo: "₹500",
      offers: ["Flat 15% off on walk-in", "Up to 10% off with bank offers"],
      distance: "3.1 km",
      bookingAvailable: true,
      tags: [],
    },
    {
      id: 4,
      name: "The Lime Tree",
      image: "/images/restaurents4.jpg",
      rating: 4.3,
      cuisine: "North Indian, Indian Cuisine",
      location: "Ring Road, Surat",
      costForTwo: "₹500",
      offers: ["Flat 25% off on pre-booking", "Up to 10% off with bank offers"],
      distance: "3.9 km",
      bookingAvailable: true,
      tags: [],
    },
    {
      id: 5,
      name: "Radhe Dhokla",
      image: "/images/restaurents5.jpg",
      rating: 4.8,
      cuisine: "North Indian, Gujarati",
      location: "Rustampura, Surat",
      costForTwo: "₹200",
      offers: ["Flat 10% off on walk-in", "Up to 10% off with bank offers"],
      distance: "1.9 km",
      bookingAvailable: false,
      tags: ["GIRF SPECIAL"],
    },
    {
      id: 6,
      name: "Blue Coriander",
      image: "/images/restaurents6.jpg",
      rating: 3.9,
      cuisine: "Continental, North Indian",
      location: "Hotel Lords Plaza, New Textile Market, Surat",
      costForTwo: "₹1000",
      offers: ["Flat 35% off on pre-booking", "Up to 10% off with bank offers"],
      distance: "3.9 km",
      bookingAvailable: true,
      tags: ["GIRF SPECIAL"],
    },
    {
      id: 7,
      name: "Saladish",
      image: "/images/restaurents7.jpg",
      rating: 4.6,
      cuisine: "Healthy Food, Fast Food",
      location: "Begampura, Surat",
      costForTwo: "₹500",
      offers: ["Flat 15% off on walk-in", "Up to 10% off with bank offers"],
      distance: "3.2 km",
      bookingAvailable: true,
      tags: [],
    },
    {
      id: 8,
      name: "Together & Co. by Hilton",
      image: "/images/restaurents8.jpg",
      rating: 4.9,
      cuisine: "North Indian, Continental",
      location: "Hilton Garden Inn, Sufi Baug, Surat",
      costForTwo: "₹1000",
      offers: ["Flat 10% off on walk-in", "Up to 10% off with bank offers"],
      distance: "4.8 km",
      bookingAvailable: true,
      tags: [],
    },
    {
      id: 9,
      name: "Bismillah",
      image: "/images/restaurents9.jpg",
      rating: 4.3,
      cuisine: "Beverages, Desserts",
      location: "Railway Colony, Surat",
      costForTwo: "₹300",
      offers: ["Flat 10% off on walk-in", "Up to 10% off with bank offers"],
      distance: "4.7 km",
      bookingAvailable: true,
      tags: [],
    },
    {
      id: 10,
      name: "51 Rainbow Ice Cream",
      image: "/images/restaurents10.jpg",
      rating: 4.2,
      cuisine: "Beverages, Desserts",
      location: "New Textile Market, Surat",
      costForTwo: "₹500",
      offers: ["Flat 25% off on pre-booking", "Up to 10% off with bank offers"],
      distance: "4.7 km",
      bookingAvailable: true,
      tags: [],
    },
  ];

  return (
    <>
      <div className="home_card_main">
        {homecard.map((item, index) => (
          <div key={index} className="home_card">
            <div className="text_class">
              <h3>{item.title}</h3>
              <p>{item.heading}</p>
              <div className="discount">
                <h4>{item.discount}</h4>
              </div>
            </div>
            <img
              src={item.sidearro}
              alt=""
              srcset=""
              style={{
                width: "150px",
                height: "150px",
                position: "absolute",
                bottom: "0%",
                right: "0%",
              }}
            />
            <img
              src={item.img}
              alt=""
              srcset=""
              style={{
                width: "50px",
                height: "50px",
                position: "absolute",
                bottom: "5%",
                left: "5%",
              }}
            />
          </div>
        ))}
      </div>
      <Fooditem fooditem={fooditems} />

      <Restaurants dineoutRestaurants={dineoutRestaurants} />
      <AppPromotion />
    </>
  );
};

export default Object;
