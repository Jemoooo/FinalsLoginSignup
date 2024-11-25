import React from 'react';
import './App.css';

const Gallery2 = () => {
  const images = [
    'images/interior1.png',
    'images/interior2.png',
    'images/interior3.png',
    'images/interior4.png',
    'images/interior5.png',
    'images/interior6.png',
    'images/interior7.png',
    'images/interior8.png',
  ];

  return (
    <section className="ftco-section bg-light" id="gallery">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title normal-title">
              <div className="row justify-content-center mb-5 pb-2">
                <div className="col-md-12 text-center heading-section ftco-animate">
                  <span className="subheading">Gallery</span>
                  <h2 className="mb-4"> What's Inside?</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          {images.map((src, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-6 p-0">
              <div className="gallery__pic">
                <img src={src} alt={`interior ${index + 1}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery2;
