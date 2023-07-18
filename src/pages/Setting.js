import React from "react";
import Slider from "react-slick";

function Setting() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 2,
    // autoplay: true,
    autoplaySpeed: 500,
    // cssEase: "ease",
    // pauseOnHover: true
    // autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  let m = [];
  for (let i = 0; i <= 10; i++) {
    m.push(i);
  }

  return (
    <div className="sliderBox">
      <h2> Multiple items </h2>
      <Slider {...settings}>
        {m.map((item) => {
          return (
            <div>
              <div className="sliderItem">{item}</div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Setting;
