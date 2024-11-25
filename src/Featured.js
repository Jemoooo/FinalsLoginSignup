import React from 'react';
import './App.css';

const Featured = () => {
  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="featured">
              <div className="row">
                <div className="col-md-3">
                  <div className="featured-menus ftco-animate">
                    <div className="menu-img img" style={{ backgroundImage: 'url(/images/b1.jpg)' }}></div>
                    <div className="text text-center">
                      <h3>Burgers</h3>
                      <p><span>Beef Patty</span>, <span>Bacon</span>, <span>Cheese</span>, <span>Mushroom</span></p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                    <div className="featured-menus ftco-animate">
                      <div className="menu-img img" style={{ backgroundImage: 'url(/images/b2.jpeg)' }}></div>
                      <div className="text text-center">
                        <h3>Wings</h3>
                        <p><span>Buffalo</span>, <span>Honey glaze</span>, <span>Garlic Parmesan</span></p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="featured-menus ftco-animate">
                      <div className="menu-img img" style={{ backgroundImage: 'url(/images/b3.jpg)' }}></div>
                      <div className="text text-center">
                        <h3>Sides</h3>
                        <p><span>Salads</span>, <span>Fries</span>, <span>Mozasticks</span>, <span>Nuggets</span></p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="featured-menus ftco-animate">
                      <div className="menu-img img" style={{ backgroundImage: 'url(/images/b4.jpg)' }}></div>
                      <div className="text text-center">
                        <h3>Icecream</h3>
                        <p><span>Chocolate</span>, <span>Cookies and Cream</span>, <span>Strawberry</span>, <span>ChocoMint</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}

export default Featured;
