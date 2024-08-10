import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function Services(props) {
  const [testmonialImages, SetTestmonialImages] = useState([
    {
      img: props.testimonialImages.testimonialImg1
    },
    {
      img: props.testimonialImages.testimonialImg2
    },

  ])

  return (
    <>
      {/*    <!-- Subheader Start --> */}
      <div className="section-bg section-padding subheader">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="page-title">Services</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/home">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Services
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Subheader End -->
    <!-- Services Start --> */}
      <section className="section-padding">
        <div className="container">
          <div className="row">
            {/*<!-- item -->*/}
            <div className="col-lg-3 col-sm-6">
              <div className="service_box">
                <div className="icon">
                  <i className="fal fa-coffee"></i>
                </div>
                <h5 className="title">
                  <Link to="/services">Royal Breakfast</Link>
                </h5>
                <p className="mb-0 text fw-500">
                  <span className="thm-color-one">$15</span>
                  Start From
                </p>
              </div>
            </div>
            {/*<!-- item -->*/}
            <div className="col-lg-3 col-sm-6">
              <div className="service_box">
                <div className="icon">
                  <i className="fal fa-cookie"></i>
                </div>
                <h5 className="title">
                  <Link to="/services">Royal Brunch</Link>
                </h5>
                <p className="mb-0 text fw-500">
                  <span className="thm-color-one">$22</span>
                  Start From
                </p>
              </div>
            </div>
            {/*<!-- item -->*/}
            <div className="col-lg-3 col-sm-6">
              <div className="service_box">
                <div className="icon">
                  <i className="fal fa-pizza"></i>
                </div>
                <h5 className="title">
                  <Link to="/services">Royal Lunch</Link>
                </h5>
                <p className="mb-0 text fw-500">
                  <span className="thm-color-one">$28</span>
                  Start From
                </p>
              </div>
            </div>
            {/*<!-- item -->*/}
            <div className="col-lg-3 col-sm-6">
              <div className="service_box">
                <div className="icon">
                  <i className="fal fa-hamburger"></i>
                </div>
                <h5 className="title">
                  <Link to="/services">Royal Dinner</Link>
                </h5>
                <p className="mb-0 text fw-500">
                  <span className="thm-color-one">$30</span>
                  Start From
                </p>
              </div>
            </div>
            {/*<!-- item -->*/}
          </div>
        </div>
      </section>
      {/* <!-- Services End -->
    <!-- How It Works Start --> */}
      <section className="section-padding section-bg-fix section-how-it-works">
        <div className="container">
          <div className="section-header text-white">
            <h3 className="title">
              How it <span>Works</span>
            </h3>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </p>
          </div>
          <div className="row justify-content-center">
            {/*<!-- item -->*/}
            <div className="col-lg-4 col-md-6">
              <div className="hw_it_works_box">
                <div className="icon">
                  <i className="fal fa-search"></i>
                </div>
                <div className="text">
                  <h6 className="title mb-1">Search Resturant</h6>
                  <p className="mb-0">
                    Sed consequat sapien faus quam bibendum convallis.{" "}
                  </p>
                </div>
              </div>
            </div>
            {/*<!-- item -->*/}
            <div className="col-lg-4 col-md-6">
              <div className="hw_it_works_box">
                <div className="icon">
                  <i className="fal fa-hamburger"></i>
                </div>
                <div className="text">
                  <h6 className="title mb-1">Choose Menu</h6>
                  <p className="mb-0">
                    Sed consequat sapien faus quam bibendum convallis.{" "}
                  </p>
                </div>
              </div>
            </div>
            {/*<!-- item -->*/}
            <div className="col-lg-4 col-md-6">
              <div className="hw_it_works_box">
                <div className="icon">
                  <i className="fal fa-money-bill-alt"></i>
                </div>
                <div className="text">
                  <h6 className="title mb-1">Payment</h6>
                  <p className="mb-0">
                    Sed consequat sapien faus quam bibendum convallis.{" "}
                  </p>
                </div>
              </div>
            </div>
            {/*<!-- item -->*/}
          </div>
        </div>
      </section>
      {/* <!-- How It Works End -->
    <!-- Testimonials Start --> */}
      <section className="section section-bg no-overlay ">
        <div className="container">
          <div className="section-header">
            <h3 className="title">
              What Clients <span>say</span>
            </h3>
            <p className="text">
              Our clients have shared their positive experiences working with us. Here are some of their testimonials:
            </p>
          </div>
          <div className="row testimonial_slider">
            {/*<!-- item -->*/}
            <Slider {...props.sliderSetting}>
              {
                testmonialImages.map((items) => {
                  return (
                    <div className="px-3 slide_item">
                      <div className="testimonial_item">
                        <div className="author_image">
                          <img
                            src={items.img}
                            alt="img"
                            className="image-fit"
                          />
                        </div>
                        <div className="testimonial_text">
                          <p className="comment">
                            His room, a proper human room although a little too small,
                            lay peacefully between its four familiar walls. One
                            morning,...{" "}
                          </p>
                          <div className="author_info">
                            <h6 className="name mb-0">Williams Son</h6>
                            <p>New York City</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })
              }

            </Slider>
            {/*<!-- item -->*/}
          </div>
        </div>
      </section>
      {/*  <!-- Testimonials End -->
    <!-- Newsletter Start --> */}
      <section className="newsletter_box down section pb-0">
        <div className="container">
          <div className="section section-bg no-overlay">
            <div className="section-header">
              <h3 className="title">
                Our <span>Newsletter</span>
              </h3>
              <p className="text">
                Subscribe to our newsletter to get the latest updates, promotions, and insights delivered directly to your inbox. Don’t miss out on exclusive content and offers!
              </p>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-10">
                <div className="input-group">
                  <input
                    type="email"
                    name="#"
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

export default Services;