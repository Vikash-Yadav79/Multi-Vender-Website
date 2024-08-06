import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"



function Home(props) {

  const [exploreImages,SetExploreImages]=useState([
    {
      img:props.exploreImages.exploreImg1,
      label:"Carpenter"
    },
    {
      img:props.exploreImages.exploreImg2,
      label:"Plumber"
    },
    {
      img:props.exploreImages.exploreImg3,
      label:"Accountant"
    },
    {
      img:props.exploreImages.exploreImg4,
      label:"Doctor"
    },
    {
      img:props.exploreImages.exploreImg5,
      label:"Mechanic"
    },
  ])
  const [servicesImg,SetServicesImages]=useState([
    {
      img:props.exploreImages.exploreImg1,
      label:"Carpenter"
    },
    {
      img:props.exploreImages.exploreImg2,
      label:"Plumber"
    },
    {
      img:props.exploreImages.exploreImg3,
      label:"Accountant"
    },
    {
      img:props.exploreImages.exploreImg4,
      label:"Doctor"
    },
   
  ])
  const [listingImg,SetListingImages]=useState([
    {
      img:props.exploreImages.exploreImg1,
      label:"Carpenter"
    },
    {
      img:props.exploreImages.exploreImg2,
      label:"Plumber"
    },
    {
      img:props.exploreImages.exploreImg3,
      label:"Plumber"
    },
    
    {
      img:props.exploreImages.exploreImg4,
      label:"Doctor"
    },
    {
      img:props.exploreImages.exploreImg1,
      label:"Carpenter"
    },
    {
      img:props.exploreImages.exploreImg2,
      label:"Plumber"
    },
    {
      img:props.exploreImages.exploreImg3,
      label:"Plumber"
    },
    
    {
      img:props.exploreImages.exploreImg4,
      label:"Doctor"
    },
    {
      img:props.exploreImages.exploreImg1,
      label:"Carpenter"
    },
   
  ])
  const [testmonialImages,SetTestmonialImages]=useState([
    {
      img:props.testimonialImages.testimonialImg1
    },
    {
      img:props.testimonialImages.testimonialImg2
    },
    
  ])

  return (
    <>
      {/* <!-- Banner Start --> */}
      <div className="single_banner section-bg">
        <div className="relative text-center">
          <div className="container">
            <div className="banner_text">
              <h1 className="title">
                Discover Services
                <span className="thm-color-one fw-lighter"> Near You</span>
              </h1>
              <p className="subtitle">Home Delivery, Lead and Rent</p>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="banner_form">
                  <div className="input-group">
                    <input
                      type="text"
                      name="#"
                      className="form-control"
                      placeholder="What are you looking for?"
                      autoComplete="off"
                      required
                    />
                    <select
                      className="form-control custom-select"
                      name="#"
                      required
                    >
                      <option selected>All Categories</option>
                      <option value="option 1">Option 1</option>
                      <option value="option 2">Option 2</option>
                      <option value="option 3">Option 3</option>
                    </select>
                    <input
                      type="text"
                      name="#"
                      className="form-control location_input"
                      placeholder="Location"
                      autoComplete="off"
                      required
                    />
                    <div className="input-group-append ms-lg-3 ms-sm-2 mb-xl-30">
                      <button type="submit" className="thm-btn w-100">
                        <i className="fal fa-search"></i>
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <form className="row justify-content-center banner_form g-2">
              {
                exploreImages.map((items,index)=>{
                  return(
                    <>
                    <div className="col-auto">
                <div className="form-group form-radio">
                  <input
                    className="form-radio-input"
                    type="radio"
                    name="category"
                    value="Hotels & Travels"
                    id="radio_one"
                  />
                  <label className="form-radio-label" for="radio_one">
                    <div>
                      <img src={items.img} alt="" style={{height:"100px"}}/>
                      <p className="mb-0 py-1">{items.label}</p>
                    </div>
                  </label>
                </div>
              </div>
                    </>
                  )
                })
              }
            
            </form>
          </div>
        </div>
        <span className="left_skew"></span>
        <span className="right_skew"></span>
      </div>
      {/* <!-- Banner End --> */}
      {/* <!-- Explore Start --> */}
      <section className="section">
        <div className="container ">
          <div className="section-header">
            <h3 className="title">
              Most Popular <span>Services</span>
            </h3>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </p>
          </div>
         
          <div className="row explore_slider">
            
            {/*<!-- item -->*/}
           
           <Slider {...props.sliderSetting.exploreImagesSettings}>
           {
              exploreImages.map((items)=>{
                return (<div className="px-2 slide_item">
                  <div className="explore_box">
                    <div className="explore_image">
                      <Link to="/Explore" className="d-flex h-100">
                        <img
                          src={items.img}
                          alt="img"
                          className="image-fit"
                        />
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
                        <Link to="/Explore">{items.label}</Link>
                      </h5>
                    </div>
                    
                  </div>
                </div>)
              })

            }
           </Slider>
         
            {/*<!-- item -->*/}
          </div>
        
        </div>
      </section>
      {/* <!-- Explore End --> */}
      {/* <!-- services Start --> */}
      <section className="section-padding section-bg no-overlay">
        <div className="container">
          <div className="section-header">
            <h3 className="title">
              Best <span>services</span>
            </h3>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </p>
          </div>
          <div className="row">
            {/*<!-- item -->*/}
            {
              servicesImg.map((items,index)=>{
                return(
                  <>
                  <div className="col-lg-3 col-sm-6">
              <div className="service_box">
                <div className="icon">
                  <img src={items.img} alt="" />
                </div>
                <h5 className="title">
                  <Link to="/services">{items.label}</Link>
                </h5>
                
              </div>
            </div>
                  </>
                )
              })
            }
            
         
          </div>
        </div>
      </section>
      {/* <!-- services End --> */}
      {/* <!-- Listings Start --> */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <h3 className="title">
              Popular <span>Services</span>
            </h3>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </p>
          </div>
          <div className="row">
            {/*<!-- item -->*/}
            {
              listingImg.map((items,index)=>{
                return(
                  <>
                  <div className="col-lg-4 col-md-6">
              <div className="listing_box">
                <div className="listing_image">
                  <Link to="/listing_details" className="d-flex h-100">
                    <img
                      src={items.img}
                      alt="img"
                      className="image-fit"
                    />
                  </Link>
                </div>
                <div className="listing_caption">
                  <h4 className="title">
                    <Link to="/listing_details">{items.label}</Link>
                  </h4>
                  {/* <ul className="listing_meta">
                    <li>
                      <i className="fas fa-map-marker-alt"></i>
                      Popular restaurant in London
                    </li>
                    <li>
                      <i className="bi-telephone-fill"></i>
                      +86 521-245-5692
                    </li>
                    <li>
                      <i className="fas fa-clock"></i>
                      10 Jan 2022
                    </li>
                  </ul> */}
                </div>
                <div className="listing_footer">
                 {/*  <div className="action_btn">
                    <button type="button" className="listing_btn">
                      <i className="bi-cart3 icon"></i>
                      Shopping
                    </button>
                  </div> */}
                  <div className="rating style_two">
                    <i className="bi-star-fill"></i>
                    <i className="bi-star-fill"></i>
                    <i className="bi-star-fill"></i>
                    <i className="bi-star-fill"></i>
                    <i className="bi-star"></i>
                  </div>
                </div>
              </div>
            </div>
                  </>
                )
              })
            }
           
            
            
          </div>
        </div>
      </section>
      {/* <!-- Listings End --> */}
      {/* <!-- How It Works Start --> */}
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
                  <h6 className="title mb-1">Search Services</h6>
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
                <i class="fas fa-user-cog"></i>
                </div>
                <div className="text">
                  <h6 className="title mb-1">Choose Services</h6>
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
      <section className="section section-bg no-overlay testimonial">
        <div className="container">
          <div className="section-header">
            <h3 className="title">
              What Clients <span>say</span>
            </h3>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </p>
          </div>
          <div className="row testimonial_slider">
           
            {/*<!-- item -->*/}
            <Slider {...props.sliderSetting.testmonialImagesSetting}>
              {
                testmonialImages.map((items)=>{
                  return(
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
      {/* <!-- Testimonials End -->
    <!-- Listings Start --> */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <h3 className="title">
              Latest <span>News</span>
            </h3>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </p>
          </div>
          <div className="row justify-content-center">
            {/*<!-- item -->*/}
            <article className="col-lg-4 col-md-6 post">
              <div className="post_wrapper">
                <div className="post_image">
                  <Link to="/blog_details" className="d-flex h-100">
                    <img
                      src={props.blogImages.blogImg1}
                      alt="img"
                      className="image-fit"
                    />
                  </Link>
                </div>
                <div className="post_caption">
                  <ul className="post_meta">
                    <li>
                      <i className="fal fa-user-circle"></i>
                      <Link to="/blog_grid">by Admin</Link>
                    </li>
                    <li>
                      <i className="fal fa-comments"></i>
                      <Link to="/blog_details">2 Comments</Link>
                    </li>
                  </ul>
                  <div className="post_date">
                    10 <br /> Jan
                  </div>
                  <h2 className="post_title">
                    <Link to="/blog_details">
                      Greek yogurt breakfast bowls with toppings
                    </Link>
                  </h2>
                  <p className="post_desc mb-0">
                    It with just a touch of sauce. saucy riff, more in the style
                    of takeout American Chinese kung pao. The sauce makes it
                    perfect for eating with rice.{" "}
                  </p>
                </div>
              </div>
            </article>
            {/*<!-- item -->*/}
            <article className="col-lg-4 col-md-6 post">
              <div className="post_wrapper">
                <div className="post_image">
                  <Link to="/blog_details" className="d-flex h-100">
                    <img
                      src={props.blogImages.blogImg2}
                      alt="img"
                      className="image-fit"
                    />
                  </Link>
                </div>
                <div className="post_caption">
                  <ul className="post_meta">
                    <li>
                      <i className="fal fa-user-circle"></i>
                      <Link to="/blog_grid">by Admin</Link>
                    </li>
                    <li>
                      <i className="fal fa-comments"></i>
                      <Link to="/blog_details">2 Comments</Link>
                    </li>
                  </ul>
                  <div className="post_date">
                    9 <br /> Jan
                  </div>
                  <h2 className="post_title">
                    <Link to="/blog_details">
                      Broad beans, tomato, garlic & cheese bruschetta
                    </Link>
                  </h2>
                  <p className="post_desc mb-0">
                    It with just a touch of sauce. saucy riff, more in the style
                    of takeout American Chinese kung pao. The sauce makes it
                    perfect for eating with rice.{" "}
                  </p>
                </div>
              </div>
            </article>
            {/*<!-- item -->*/}
            <article className="col-lg-4 col-md-6 post">
              <div className="post_wrapper">
                <div className="post_image">
                  <Link to="/blog_details" className="d-flex h-100">
                    <img
                      src={props.blogImages.blogImg3}
                      alt="img"
                      className="image-fit"
                    />
                  </Link>
                </div>
                <div className="post_caption">
                  <ul className="post_meta">
                    <li>
                      <i className="fal fa-user-circle"></i>
                      <Link to="/blog_grid">by Admin</Link>
                    </li>
                    <li>
                      <i className="fal fa-comments"></i>
                      <Link to="/blog_details">2 Comments</Link>
                    </li>
                  </ul>
                  <div className="post_date">
                    8 <br /> Jan
                  </div>
                  <h2 className="post_title">
                    <Link to="/blog_details">
                      Make authentic Italian margherita pizza at home
                    </Link>
                  </h2>
                  <p className="post_desc mb-0">
                    It with just a touch of sauce. saucy riff, more in the style
                    of takeout American Chinese kung pao. The sauce makes it
                    perfect for eating with rice.{" "}
                  </p>
                </div>
              </div>
            </article>
            {/*<!-- item -->*/}
          </div>
        </div>
      </section>
      {/* <!-- Listings End -->
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
      {/* <!-- Newsletter End -->*/}
    </>
  );
}

export default Home;
