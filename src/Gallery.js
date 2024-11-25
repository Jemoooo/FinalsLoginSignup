import React from 'react';
import './App.css';

const Gallery = () => {
  const images = [
    'images/dish1.jpg',
    'images/dish2.jpg',
    'images/dish3.jpg',
    'images/dish4.jpg',
    'images/dish5.jpg',
    'images/dish6.jpg',
    'images/dish7.jpg',
    'images/dish8.jpg',
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
                  <h2 className="mb-4">Our Hot Picked Burgers</h2>
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
                <img src={src} alt={`Dish ${index + 1}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
