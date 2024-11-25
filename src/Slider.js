import React from 'react';
import './App.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slider = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      interval={3000}
      emulateTouch
    >
      <div>
        <img src="/images/burgerBg.png" alt="Burger and Salad" />
        <div className="slidess">
          <span className="subheading">BiteSpace</span>
          <h1 className="mb-4">Burger and Salad</h1>
        </div>
      </div>
      <div>
        <img src="/images/SteakBg.png" alt="Wings and Steak" />
        <div className="slidess">
          <span className="subheading">BiteSpace</span>
          <h1 className="mb-4">Wings and Steak</h1>
        </div>
      </div>
      <div>
        <img src="/images/icecreambg1.png" alt="Milkshake and Ice cream" />
        <div className="slidess">
          <span className="subheading">BiteSpace</span>
          <h1 className="mb-4">Milkshake and Ice cream</h1>
        </div>
      </div>
      <div>
        <img src="/images/breakfast2.png" alt="All day Breakfast" />
        <div className="slidess">
          <span className="subheading">BiteSpace</span>
          <h1 className="mb-4">All day Breakfast</h1>
        </div>
      </div>
    </Carousel>
  );
}

export default Slider;
