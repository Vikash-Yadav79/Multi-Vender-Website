import React from "react";
import { Link } from "react-router-dom";
/* contact image */
// import contact from "./assets/images/contact/contact_image.jpg";
import contact from './assest/images/contact/contact_image.jpg'

function Contact() {
  return (
    <>
      {/*     <!-- Subheader Start --> */}
      <div className="section-bg section-padding subheader">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="page-title">Contact Us</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/home">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Contact Us
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/*  <!-- Subheader End -->
    <!-- Section Start --> */}
      <section className="section-padding">
        <div className="container">
          <div className="row justify-content-center">
            {/*<!-- item -->*/}
            <div className="col-lg-4 col-md-6">
              <div className="contact_info_box section-bg firstBg">
                <div className="icon">
                  <i className="fal fa-map-marker-alt"></i>
                </div>
                <p className="text">
                  13th Street. 47 W 13th St, New York, 10011, USA
                </p>
              </div>
            </div>
            {/*<!-- item -->*/}
            <div className="col-lg-4 col-md-6">
              <div className="contact_info_box section-bg secondBg">
                <div className="icon">
                  <i className="fal fa-phone"></i>
                </div>
                <Link to="tel:(+347)1234567890" className="text">
                  (+347) 123 4567 890
                </Link>
                <p className="text">Mon-Sat 9:00am-5:00pm</p>
              </div>
            </div>
            {/*<!-- item -->*/}
            <div className="col-lg-4 col-md-6">
              <div className="contact_info_box section-bg thirdBg">
                <div className="icon">
                  <i className="fal fa-envelope"></i>
                </div>
                <Link to="mailto:example@example.com" className="text">
                  example@example.com
                </Link>
                <p className="text">24 X 7 online support</p>
              </div>
            </div>
            {/*<!-- item -->*/}
          </div>
        </div>
      </section>
      {/* <!-- Section End -->
    <!-- Section Start --> */}
      <section className="section-padding pt-0">
        <div className="container">
          <div className="row g-0">
            <div className="col-lg-8">
              <div className="contact_form">
                <form action="http://localhost:8000/contact.php" method="POST">
                  <div className="section-header text-start">
                    <h3 className="title">
                      Get In <span>Touch</span>
                    </h3>
                    <p className="text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          className="form-control form-control-custom"
                          placeholder="Full Name"
                          autoComplete="off"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          className="form-control form-control-custom"
                          placeholder="Email I'd"
                          autoComplete="off"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="phone"
                          className="form-control form-control-custom"
                          placeholder="Phone No."
                          autoComplete="off"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="subject"
                          className="form-control form-control-custom"
                          placeholder="Subject"
                          autoComplete="off"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea
                          rows="5"
                          name="msg"
                          className="form-control form-control-custom"
                          placeholder="Message"
                          autoComplete="off"
                          required=""
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <button type="submit" className="thm-btn w-100">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact_image">
                <img
                  src={contact}
                  alt="img"
                  className="image-fit"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*     <!-- Section End -->
    <!-- Newsletter Start --> */}
      <section className="newsletter_box down">
        <div className="container">
          <div className="section section-bg no-overlay">
            <div className="section-header">
              <h3 className="title">
                Our <span>Newsletter</span>
              </h3>
              <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </p>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-10">
                <div className="input-group">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter Email Address"
                    autoComplete="off"
                    required
                  />
                  <div className="input-group-append">
                    <button type="submit" className="thm-btn h-100">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  <!-- Newsletter End --> */}
    </>
  );
}

export default Contact;
