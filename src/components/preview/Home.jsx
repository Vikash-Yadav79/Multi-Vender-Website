import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home(props) {
  const imageData = [
    { img: props.exploreImages.exploreImg1, label: "Carpenter" },
    { img: props.exploreImages.exploreImg2, label: "Plumber" },
    { img: props.exploreImages.exploreImg3, label: "Accountant" },
    { img: props.exploreImages.exploreImg4, label: "Doctor" },
    { img: props.exploreImages.exploreImg5, label: "Mechanic" }
  ];

  const renderImageSection = (images, sectionLabel) => (
    <div className={`section ${sectionLabel.toLowerCase()}`}>
      <div className="container">
        <div className="section-header">
          <h3 className="title">{sectionLabel} <span>Services</span></h3>
          <p className="text">Explore our top-rated services that clients love.</p>
        </div>
        <div className={`row ${sectionLabel.toLowerCase()}_slider`}>
          <Slider {...props.sliderSetting.exploreImagesSettings}>
            {images.map((item, index) => (
              <div key={index} className="px-2 slide_item">
                <div className="explore_box">
                  <div className="explore_image">
                    <Link to="/Explore" className="d-flex h-100">
                      <img src={item.img} alt="img" className="image-fit" />
                    </Link>
                  </div>
                  <div className="explore_text">
                    <div className="rating">
                      <i className="bi-star-fill"></i>
                      <i className="bi-star-fill"></i>
                      <i className="bi-star-fill"></i>
                      <i className="bi-star-fill"></i>
                      <i className="bi-star"></i>
                    </div>
                    <h5 className="title">
                      <Link to="/Explore">{item.label}</Link>
                    </h5>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Banner Section */}
      <div className="single_banner section-bg">
        <div className="relative text-center">
          <div className="container">
            <div className="banner_text">
              <h1 className="title">
                Discover Services <span className="thm-color-one fw-lighter">Near You</span>
              </h1>
              <p className="subtitle">Home Delivery, Lead and Rent</p>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="banner_form">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="What are you looking for?"
                      autoComplete="off"
                      required
                    />
                    <select className="form-control custom-select" required>
                      <option selected>All Categories</option>
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </select>
                    <input
                      type="text"
                      className="form-control location_input"
                      placeholder="Location"
                      autoComplete="off"
                      required
                    />
                    <div className="input-group-append ms-lg-3 ms-sm-2 mb-xl-30">
                      <button type="submit" className="thm-btn w-100">
                        <i className="fal fa-search"></i> Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <form className="row justify-content-center banner_form g-2">
              {imageData.map((item, index) => (
                <div key={index} className="col-auto">
                  <div className="form-group form-radio">
                    <input
                      className="form-radio-input"
                      type="radio"
                      name="category"
                      value={item.label}
                      id={`radio_${index}`}
                    />
                    <label className="form-radio-label" htmlFor={`radio_${index}`}>
                      <div>
                        <img src={item.img} alt="" style={{ height: "100px" }} />
                        <p className="mb-0 py-1">{item.label}</p>
                      </div>
                    </label>
                  </div>
                </div>
              ))}
            </form>
          </div>
        </div>
        <span className="left_skew"></span>
        <span className="right_skew"></span>
      </div>

      {/* Sections Rendering */}
      {renderImageSection(imageData.slice(0, 4), "Explore")}
      {renderImageSection(imageData.slice(0, 4), "Services")}
      {renderImageSection(imageData, "Listings")}

      {/* How It Works Section */}
      <section className="section-padding section-bg-fix section-how-it-works">
        <div className="container">
          <div className="section-header text-white">
            <h3 className="title">
              How it <span>Works</span>
            </h3>
            <p className="text">Explore our top-rated services that clients love.</p>
          </div>
          <div className="row justify-content-center">
            {/* Sample Work Items */}
            <div className="col-lg-4 col-md-6">
              <div className="hw_it_works_box">
                <div className="icon">
                  <i className="fal fa-search"></i>
                </div>
                <div className="text">
                  <h6 className="title mb-1">Search Services</h6>
                  <p className="mb-0">Sed consequat sapien faus quam bibendum convallis.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="hw_it_works_box">
                <div className="icon">
                  <i className="fas fa-user-cog"></i>
                </div>
                <div className="text">
                  <h6 className="title mb-1">Choose Services</h6>
                  <p className="mb-0">Sed consequat sapien faus quam bibendum convallis.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="hw_it_works_box">
                <div className="icon">
                  <i className="fal fa-money-bill-alt"></i>
                </div>
                <div className="text">
                  <h6 className="title mb-1">Payment</h6>
                  <p className="mb-0">Sed consequat sapien faus quam bibendum convallis.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
}

export default Home;
