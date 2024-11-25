import React, { useState } from 'react';
import './App.css'; // Assuming you save the CSS as Order.css

const Order = () => {
  const [selectedBurger, setSelectedBurger] = useState('');
  const [selectedBento, setSelectedBento] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);

  const handleBurgerChange = (event) => {
    const price = event.target.value;
    setSelectedBurger(price);
    calculateTotal(price, selectedBento);
  };

  const handleBentoChange = (event) => {
    const price = event.target.value;
    setSelectedBento(price);
    calculateTotal(selectedBurger, price);
  };

  const calculateTotal = (burgerPrice, bentoPrice) => {
    const total = parseFloat(burgerPrice || 0) + parseFloat(bentoPrice || 0);
    setTotalPrice(total);
  };

  const showAlertOrder = () => {
    alert("We Received your Order! Please wait for our confirmation call.");
  };

  return (
    <section 
      className="ftco-section img" 
      id="order" 
      style={{ 
        backgroundImage: 'url(images/orderbg.jpg)', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}
    >
      <div className="container">
        <div className="row d-flex">
          <div className="col-md-7 makereservation p-4 px-md-5 pb-md-5">
            <div className="heading-section mb-5 text-center">
              <span className="subheading">Order</span>
              <h2 className="mb-4">Your Burger</h2>
            </div>
            <form action="#">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="example" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="example@gmail.com" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Address</label>
                    <input type="text" className="form-control" placeholder="example address" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Phone</label>
                    <input type="text" className="form-control" placeholder="09*******" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Burger</label>
                    <div className="select-wrap one-third">
                      <select onChange={handleBurgerChange} className="form-control">
                        <option value="150">Bacon Mushroom melt</option>
                        <option value="160">Ohana is love</option>
                        <option value="190">Spam Melt Burger</option>
                        <option value="150">Lalu Feisty Burger</option>
                        <option value="200">Batits Hot Burger</option>
                        <option value="200">Bops Spicy Burger</option>
                        <option value="230">Seven Cheeselove Burger</option>
                        <option value="230">Jams Wolf Burger</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Bento</label>
                    <div className="select-wrap one-third">
                      <select onChange={handleBentoChange} className="form-control">
                        <option value="80">1. Fries and Onion Rings</option>
                        <option value="80">2. Nuggets and Fries</option>
                        <option value="80">3. Nuggets and Onions Rings</option>
                        <option value="90">4. Mozzastick & Fries</option>
                        <option value="90">5. Mozzastick & Onion Rings</option>
                        <option value="90">6. Mozzastick & Nuggets</option>
                        <option value="100">Custom</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div id="orderSummary" className="mb-3 col-md-12">
                  <h4>Order Summary</h4>
                  <ul>
                    <li>Burger: ₱ <span>{selectedBurger}</span></li>
                    <li>Bento: ₱ <span>{selectedBento}</span></li>
                    <li><b>Total:</b> ₱ <span>{totalPrice}</span></li>
                  </ul>
                </div>
                <div className="col-md-12 mt-3 text-center">
                  <button type="button" className="btn btn-primary py-3 px-5" onClick={showAlertOrder}>
                    Order Your Food
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;