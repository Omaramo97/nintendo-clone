import React from "react";
import bestData from "./bestData";
import Carousal from "react-multi-carousel";

function DigitalBestSellers(track) {
  const responsive = {
    Large: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      partialVisibilityGutter: 40,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="digital-list">
      <h1>Digital Best Sellers</h1>

      <Carousal
        arrows
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite={false}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
        showDots={false}
        sliderClass=""
        swipeable
      >
        {bestData.map((slide) => {
          return (
            <div className="new-container">
              <img src={slide.img} alt="Abc" className="image"></img>

              <h3>{slide.title}</h3>

              <h3>{slide.cost}</h3>

              {<h3>{slide.system}</h3>}
            </div>
          );
        })}
      </Carousal>
    </div>
  );
}
export default DigitalBestSellers;
