import React from 'react';
import './App.css';

const Menu = () => {
  const menuItems = [
    {
      category: "Cheesy Burgers",
      items: [
        {
          name: "Bacon Mushroom Melt",
          price: "₱150",
          description: ["Beef Patty", "Double Cheese", "Mushroom", "Bacon"],
          img: "images/burger1.png"
        },
        {
          name: "Spam Melt Burger",
          price: "₱260",
          description: ["Beef Patty", "Spam", "Cheese", "Uncle Chiz Lava"],
          img: "images/burger2.png"
        },
        {
          name: "Ohana is Love",
          price: "₱160",
          description: ["Beef Patty", "Cheese", "Lettuce", "Pineapple", "Bacon"],
          img: "images/burger3.png"
        }
      ]
    },
    {
      category: "Spicy Burgers",
      items: [
        {
          name: "Lalu Feisty Burger",
          price: "₱150",
          description: ["Beef Patty", "Cheese", "Caramelized Onion", "Hotguy Spicy Sauce"],
          img: "images/burger4.png"
        },
        {
          name: "Batits Hot Burger",
          price: "₱200",
          description: ["Beef Patty", "Lettuce", "Onion Rings", "Bacon", "Hotguy Spicy Sauce"],
          img: "images/burger5.png"
        },
        {
          name: "Bops Spicy Burger",
          price: "₱200",
          description: ["Beef Patty", "Veggies", "Egg", "Bacon", "Caramelized Onion", "Hotguy Spicy Sauce"],
          img: "images/burger6.png"
        }
      ]
    },
    {
      category: "Salad",
      items: [
        {
          name: "Chicken Leafy Salad",
          price: "₱170",
          description: ["Chicken", "Lettuce", "Carrots", "Corn"],
          img: "images/salad1.jpg"
        },
        {
          name: "Kani Leafy Salad",
          price: "₱140",
          description: ["Lettuce", "Crab Stick", "Mango"],
          img: "images/salad3.jpg"
        },
        {
          name: "Garden Salad",
          price: "₱100",
          description: ["Lettuce", "Breadcrumbs"],
          img: "images/salad2.jpg"
        }
      ]
    }
  ];

  return (
    <section className="ftco-section" id="menu">
      <div className="container-fluid px-4">
        <div className="row justify-content-center mb-5 pb-2">
          <div className="col-md-7 text-center heading-section">
            <span className="subheading">Specialities</span>
            <h2 className="mb-4">Our Menu</h2>
          </div>
        </div>
        <div className="row">
          {menuItems.map((menu, index) => (
            <div className="col-md-6 col-lg-4 menu-wrap" key={index}>
              <div className="heading-menu text-center">
                <h3>{menu.category}</h3>
              </div>
              {menu.items.map((item, i) => (
                <div className="menus d-flex" key={i}>
                  <div
                    className="menu-img img"
                    style={{ backgroundImage: `url(${item.img})` }}
                  ></div>
                  <div className="text">
                    <div className="d-flex">
                      <div className="one-half">
                        <h3>{item.name}</h3>
                      </div>
                      <div className="one-forth">
                        <span className="price">{item.price}</span>
                      </div>
                    </div>
                    <p>{item.description.map((desc, idx) => <span key={idx}>{desc}, </span>)}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Menu;
