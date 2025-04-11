import React from "react";
import "../component/fooditem.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Fooditem = ({ fooditem }) => {
  const settings = {
    dots: false, // Removed dots for pagination
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    rows: 2,
    center: true,

    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          rows: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          rows: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 2,
        },
      },
    ],
  };

  return (
    <section className="fooditem">
      <div className="fooditemWrapper">
        <div className="fooditemMain">
          <Slider {...settings}>
            {fooditem.map((item, index) => (
              <div key={index} className="iteammain">
                <img
                  src={`/images/${item.image}.png`}
                  alt={item.name || "food"}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Fooditem;
