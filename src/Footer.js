import React from 'react';
import './App.css';

function Footer() {
  const showAlertSubscribe = () => {
    alert("You are now subscribed to the monthly newsletter!");
  };

  return (
    <section className="ftco-footer ftco-bg-dark ftco-section">
      <div className="container">
        <div className="row mb-5">
          {/* Column 1 */}
          <div className="col-md-6 col-lg-3">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">BiteSpace</h2>
              <p>All BiteSpace burgers are handcrafted with 100% beef patty with our signature dressing & sauces, Made fresh daily.<br /><br />@BiteSpace<br />094511565632</p>
              <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-3">
                <li className="ftco-animate"><a href="https://www.facebook.com/hotguyburgerandsalad"><span className="fa fa-facebook"></span></a></li>
                <li className="ftco-animate"><a href="https://twitter.com/hotguyburgers"><span className="fa fa-twitter"></span></a></li>
                <li className="ftco-animate"><a href="https://www.instagram.com/hotguyburgers/?hl=en"><span className="fa fa-instagram"></span></a></li>
              </ul>
            </div>
          </div>

          {/* Column 2 */}
          <div className="col-md-6 col-lg-3">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Open Hours</h2>
              <ul className="list-unstyled open-hours">
                <li className="d-flex"><span>Monday</span><span>10:00 - 02:00</span></li>
                <li className="d-flex"><span>Tuesday</span><span>10:00 - 02:00</span></li>
                <li className="d-flex"><span>Wednesday</span><span>10:00 - 02:00</span></li>
                <li className="d-flex"><span>Thursday</span><span>10:00 - 02:00</span></li>
                <li className="d-flex"><span>Friday</span><span>10:00 - 02:00</span></li>
                <li className="d-flex"><span>Saturday</span><span>10:00 - 02:00</span></li>
                <li className="d-flex"><span>Sunday</span><span>10:00 - 02:00</span></li>
              </ul>
            </div>
          </div>

          {/* Column 3 */}
          <div className="col-md-6 col-lg-3">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Instagram</h2>
              <div className="thumb d-sm-flex">
                <a href="https://www.instagram.com/hotguyburgers/" className="thumb-menu img" style={{ backgroundImage: 'url(images/insta1.jpg)' }} aria-label="Hotguy Burgers Instagram Post 1">
                  <span className="sr-only">Hotguy Burgers Instagram Post 1</span>
                </a>
                <a href="https://www.instagram.com/hotguyburgers/" className="thumb-menu img" style={{ backgroundImage: 'url(images/insta2.jpg)' }} aria-label="Hotguy Burgers Instagram Post 2">
                  <span className="sr-only">Hotguy Burgers Instagram Post 2</span>
                </a>
                <a href="https://www.instagram.com/hotguyburgers/" className="thumb-menu img" style={{ backgroundImage: 'url(images/insta3.jpg)' }} aria-label="Hotguy Burgers Instagram Post 3">
                  <span className="sr-only">Hotguy Burgers Instagram Post 3</span>
                </a>
              </div>
              <div className="thumb d-sm-flex">
                <a href="https://www.instagram.com/hotguyburgers/" className="thumb-menu img" style={{ backgroundImage: 'url(images/insta4.jpg)' }} aria-label="Hotguy Burgers Instagram Post 4">
                  <span className="sr-only">Hotguy Burgers Instagram Post 4</span>
                </a>
                <a href="https://www.instagram.com/hotguyburgers/" className="thumb-menu img" style={{ backgroundImage: 'url(images/insta5.jpg)' }} aria-label="Hotguy Burgers Instagram Post 5">
                  <span className="sr-only">Hotguy Burgers Instagram Post 5</span>
                </a>
                <a href="https://www.instagram.com/hotguyburgers/" className="thumb-menu img" style={{ backgroundImage: 'url(images/insta6.jpg)' }} aria-label="Hotguy Burgers Instagram Post 6">
                  <span className="sr-only">Hotguy Burgers Instagram Post 6</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 4 */}
          <div className="col-md-6 col-lg-3">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Newsletter</h2>
              <p>To get burger catalogue every month by subscribing below.</p>
              <form className="subscribe-form">
                <div className="form-group">
                  <input type="text" className="form-control mb-2 text-center" placeholder="example@gmail.com" />
                  <button
                    type="button"
                    className="form-control submit px-3"
                    onClick={showAlertSubscribe}
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;