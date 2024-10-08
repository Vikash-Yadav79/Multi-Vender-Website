import React, { useState } from "react";
// import logo from './assest/images/simpexLogo.jpg';
import companyLogo from "./assest/images/companyLogo.jpg"
import { Link } from "react-router-dom";

function Footer() {
  const [subscribers_email, setSubscribers_email] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubscribe = (event) => {
    event.preventDefault();
    fetch('https://admin.amanyademo.in.net/api/subscriber', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ subscribers_email }),
    })
      .then(response => {
        if (!response.ok) {
          return response.json().then(err => Promise.reject(err));
        }
        return response.json();
      })
      .then(data => {
        setSuccess('You have successfully subscribed!');
        setError(null);
      })
      .catch(err => {
        setError(err.message || 'Failed to subscribe');
        setSuccess(null);
      });
  };

  return (
    <>
      <section className="newsletter_box down">
        <div className="container">
          <div className="section section-bg no-overlay">
            <div className="section-header">
              <h3 className="title">Stay Updated</h3>
              <p className="text">Subscribe to our newsletter and be the first to know about the latest news, offers, and updates from us.</p>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-10">
                <form onSubmit={handleSubscribe}>
                  <div className="input-group">
                    <input
                      type="subscribers_email"
                      value={subscribers_email}
                      onChange={(e) => setSubscribers_email(e.target.value)}
                      className="form-control"
                      placeholder="Enter Email Address"
                      autoComplete="off"
                      required
                    />
                    <div className="input-group-append">
                      <button type="submit" className="thm-btn h-100">Subscribe</button>
                    </div>
                  </div>
                  {error && <p className="text-danger">{error}</p>}
                  {success && <p className="text-success">{success}</p>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Footer Start --> */}
      <footer className="footer section-padding section-bg">
        <div className="container">
          <div className="row">
            {/*<!-- item -->*/}
            <div className="col-lg-3 col-sm-6">
              <div className="ft_widgets">
                <div className="ft_about">
                  <div className="ft_logo">
                    <Link to="/">
                      <img
                        src={companyLogo}
                        alt="logo"
                        className="image-fit-contain"
                      />
                    </Link>
                  </div>
                  <p>
                    Enjoyed your stay at Amanya ra Softech? Share your moments with us.
                    Follow us on SocialMedia and use
                  </p>
                  <ul className="ft_social">
                    <li>
                      <Link to="https://www.facebook.com/amanyarasoftech" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="https://x.com/AmanyaSoftech" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.instagram.com/amanyarasoftech/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.linkedin.com/company/amanya-softech/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*<!-- item -->*/}
            <div className="col-lg-3 col-sm-6">
              <div className="ft_widgets">
                <h5 className="ft_title">Useful Links</h5>
                <ul className="ft_menu">
                  <li>
                    <Link to="/home">Home</Link>
                  </li>
                  <li>
                    <Link to="/services">Services</Link>
                  </li>
                  <li>
                    <Link to="/blog_grid">Blog</Link>
                  </li>
                  <li>
                    <Link to="#">FAQ's</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link to="/privacy_policy">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/*<!-- item -->*/}
            <div className="col-lg-3 col-sm-6">
              <div className="ft_widgets">
                <h5 className="ft_title">Company</h5>
                <ul className="ft_menu">
                  <li>
                    <Link to="/Listing_Grid">Shopping</Link>
                  </li>
                  <li>
                    <Link to="/Listing_Grid">Beauty</Link>
                  </li>
                  <li>
                    <Link to="/Listing_Grid_Right">Fitness</Link>
                  </li>
                  <li>
                    <Link to="/Listing_Grid_Left">Food</Link>
                  </li>
                  <li>
                    <Link to="/Listing_Grid_Right">Hotels</Link>
                  </li>
                  <li>
                    <Link to="/Listing_Grid">Travelling</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/*<!-- item -->*/}
            <div className="col-lg-3 col-sm-6">
              <div className="ft_widgets">
                <h5 className="ft_title">Contact Us</h5>
                <p>
                  We are here to assist you with any inquiries or support you may need.
                </p>
                <ul className="ft_contact ft_menu">
                  <li>
                    <Link to="#">
                      <i className="fas fa-phone-volume"></i>
                      +91 9686391081
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fas fa-envelope"></i>
                      amanyarasoftech@gmail.com
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fas fa-map-marker-alt"></i>
                      SA 13/46 KM,ASHOKA ENCLAVE,KHAJUHI SARNATH, Varanasi, India
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/*<!-- item -->*/}
          </div>
        </div>
      </footer>
      {/* <!-- Footer End --> */}

      {/* <!-- Copyright Start --> */}
      <div className="thm-bg-color-one">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="copyright">
                <p className="mb-0">
                  Copyright ©{" "}
                  <Link to="#" className="text-white fw-500">
                    amanyarasoftech@gmail.com
                  </Link>{" "}
                  <span id="year">2022</span>. All Right Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Copyright End --> */}
      <Link to="#" data-target="html" className="back-to-top ft-sticky">
        <i className="fal fa-chevron-up"></i>
      </Link>
    </>
  );
}

export default Footer;
