import React from 'react';
import './App.css';


const testimonials = [
  
  {
    text: "Two thumbs up for their great tasting burgers!!! Thank you Hotguy Burgers & Salad for providing us with fantastic food and a wonderful service!",
    name: "Eliza Cristobal-Cruz",
    position: "Customer",
    image: "images/person2.jpg",
  },
  {
    text: "Worth the wait! their panchos and hotguy classic burger was spot on! Very flavourful! good packaging as well. Will surely order again🍔🍔🍔",
    name: "Nikka Mendoza Romero",
    position: "Customer",
    image: "images/person3.jpg",
  },
  {
    text: "One of the best burger stores here in Cainta! I recommend their Ohana is love Burger 🍔 so tasty and so good! Thank you so much Hotguy Burger! 🙏🏻",
    name: "Yam Boco",
    position: "Customer",
    image: "images/person4.jpg",
  },
  {
    text: "I am not a big fan of burgers but these guys have converted me for their burger is the best tasting I had so far. Great food plus great price equals a returning customer. An art in a bun!!!",
    name: "Jheng Del Rosario",
    position: "Customer",
    image: "images/person5.jpg",
  },
];

const Testimonial = () => {
  return (
    <section className="ftco-section testimony-section img" id="testimonial">
      <div className="overlay"></div>
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-md-7 text-center heading-section heading-section-white ftco-animate">
            <span className="subheading">Testimonials</span>
            <h2 className="mb-3">Happy Clients</h2>
          </div>
        </div>
        <div className="row ftco-animate">
          <div className="col-md-12">
            <div className="carousel-testimony owl-carousel ftco-owl">
              {testimonials.map((testimonial, index) => (
                <div className="item" key={index}>
                  <div className="testimony-wrap py-4">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-quote-left"></span>
                    </div>
                    <div className="text">

                      <div className="d-flex align-items-center">
                        <div
                          className="user-img"
                          style={{ backgroundImage: `url(${testimonial.image})` }}
                        ></div>
                        <div className="pl-3">
                          <p className="mb-4">{testimonial.text}</p>
                          <p className="name">{testimonial.name}</p>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
