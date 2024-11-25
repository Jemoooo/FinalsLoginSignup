import React from 'react';
import './App.css';

const AboutUs = () => {
  return (
    <section className="ftco-wrap-about" id="about">
      <div className="intro">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="intro_content">
                <div className="intro_subtitle page_subtitle">About Us</div>
                <div className="intro_title">
                  <h2>BiteSpace Story</h2>
                </div>
                <div className="intro_text">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-4 col-md-6 intro_col">
                  <div className="intro_image"><img src="images/intro1.jpg" alt="intro" /></div>
                </div>
                <div className="col-xl-4 col-md-6 intro_col">
                  <div className="intro_image"><img src="images/intro2.jpg" alt="intro" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
