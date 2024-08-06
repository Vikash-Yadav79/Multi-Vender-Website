import React from 'react'

function Listing_Details(props) {
  return (
    <>
      
    {/* <!-- Subheader Start --> */}
    <div className="section-bg section-padding subheader" >
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="page-title">Listing Details</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/home">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Listing Details</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Subheader End -->
    <!-- Section Start --> */}
    <section className="section-padding">
        <div className="container">
            <div className="row flex-lg-row-reverse">
                <aside className="col-lg-4">
                    <div className="listing_sidebar style_two">
                        <div className="sidebar_inner">
                            {/*<!-- item -->*/}
                            <div className="sidebar_widget">
                                <h5 className="widget_title"><i className="fal fa-calendar-alt icon"></i> Book A Reservation</h5>
                                <div className="widget_inner">
                                    <form>
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="form-group">
                                                    <input type="date" name="#" className="form-control form-control-custom" placeholder="Search" autoComplete="off" required/>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="form-group">
                                                    <input type="time" name="#" className="form-control form-control-custom" placeholder="Search" autoComplete="off" required/>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label>Adult</label>
                                                    <div className="quantity">
                                                        <button className="btn qty-mins" type="button"><i className="fal fa-minus"></i></button>
                                                        <input type="text" name="#" value="3" autoComplete="off" readonly=""/>
                                                        <button className="btn qty-add" type="button"><i className="fal fa-plus"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label>Children</label>
                                                    <div className="quantity">
                                                        <button className="btn qty-mins" type="button"><i className="fal fa-minus"></i></button>
                                                        <input type="text" name="#" value="2" autoComplete="off" readonly=""/>
                                                        <button className="btn qty-add" type="button"><i className="fal fa-plus"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <button type="submit" className="thm-btn w-100 mb-xl-20">Book Now</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {/*<!-- item -->*/}
                            <div className="sidebar_widget">
                                <h5 className="widget_title"><i className="fal fa-clock icon"></i> Opening Hours</h5>
                                <div className="widget_inner">
                                    <ul className="categories">
                                        <li>
                                            <a href="/listing_grid">
                                                Monday
                                                <span>11:00 AM - 8:00 PM</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/listing_grid">
                                                Tuesday
                                                <span>11:00 AM - 8:00 PM</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/listing_grid">
                                                Wednesday
                                                <span>11:00 AM - 8:00 PM</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/listing_grid">
                                                Thursday
                                                <span>11:00 AM - 8:00 PM</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/listing_grid">
                                                Friday
                                                <span>11:00 AM - 8:00 PM</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/listing_grid">
                                                Saturday
                                                <span>11:00 AM - 8:00 PM</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/listing_grid">
                                                Sunday
                                                <span>Closes</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/*<!-- item -->*/}
                            <div className="sidebar_widget">
                                <h5 className="widget_title"><i className="fal fa-image icon"></i> Gallery</h5>
                                <div className="widget_inner">
                                    <ul className="gallery row g-3">
                                        <li className="col-4">
                                            <img src={props.listingImages.galleryImg1} alt="img" className="image-fit"/>
                                        </li>
                                        <li className="col-4">
                                            <img src={props.listingImages.galleryImg2} alt="img" className="image-fit"/>
                                        </li>
                                        <li className="col-4">
                                            <img src={props.listingImages.galleryImg3} alt="img" className="image-fit"/>
                                        </li>
                                        <li className="col-4">
                                            <img src={props.listingImages.galleryImg4} alt="img" className="image-fit"/>
                                        </li>
                                        <li className="col-4">
                                            <img src={props.listingImages.galleryImg5} alt="img" className="image-fit"/>
                                        </li>
                                        <li className="col-4">
                                            <img src={props.listingImages.galleryImg6} alt="img" className="image-fit"/>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/*<!-- item -->*/}
                            <div className="sidebar_widget">
                                <h5 className="widget_title"><i className="fal fa-check-square icon"></i> Recent Listings</h5>
                                <div className="widget_inner">
                                    <ul className="recent_post">
                                        {/*<!-- item -->*/}
                                        <li>
                                            <div className="post_thumb">
                                                <a href="/listing_details">
                                                    <img src={props.listingImages.listingImg1} className="image-fit" alt="img" />
                                                </a>
                                            </div>
                                            <div className="post_caption">
                                                <h6 className="post_title"><a href="/listing_details">Pizza Recipe.</a></h6>
                                                <p className="post_date">London</p>
                                                <div className="rating">
                                                    <i className="bi-star-fill"></i>
                                                    <i className="bi-star-fill"></i>
                                                    <i className="bi-star-fill"></i>
                                                    <i className="bi-star-fill"></i>
                                                    <i className="bi-star-fill"></i>
                                                </div>
                                            </div>
                                        </li>
                                        {/*<!-- item -->*/}
                                        <li>
                                            <div className="post_thumb">
                                                <a href="/listing_details">
                                                    <img src={props.listingImages.listingImg2} className="image-fit" alt="img"/>
                                                </a>
                                            </div>
                                            <div className="post_caption">
                                                <h6 className="post_title"><a href="/listing_details">Party Corner.</a></h6>
                                                <p className="post_date">San Francisco</p>
                                                <div className="rating">
                                                    <i className="bi-star-fill"></i>
                                                    <i className="bi-star-fill"></i>
                                                    <i className="bi-star-fill"></i>
                                                    <i className="bi-star-fill"></i>
                                                    <i className="bi-star-fill"></i>
                                                </div>
                                            </div>
                                        </li>
                                        {/*<!-- item -->*/}
                                        <li>
                                            <div className="post_thumb">
                                                <a href="/listing_details">
                                                    <img src={props.listingImages.listingImg3} className="image-fit" alt="img"/>
                                                </a>
                                            </div>
                                            <div className="post_caption">
                                                <h6 className="post_title"><a href="/listing_details">City Palace.</a></h6>
                                                <p className="post_date">Brooklyn</p>
                                                <div className="rating">
                                                    <i className="bi-star-fill"></i>
                                                    <i className="bi-star-fill"></i>
                                                    <i className="bi-star-fill"></i>
                                                    <i className="bi-star-fill"></i>
                                                    <i className="bi-star-fill"></i>
                                                </div>
                                            </div>
                                        </li>
                                        {/*<!-- item -->*/}
                                        <li>
                                            <div className="post_thumb">
                                                <a href="/listing_details">
                                                    <img src={props.listingImages.listingImg4} className="image-fit" alt="img"/>
                                                </a>
                                            </div>
                                            <div className="post_caption">
                                                <h6 className="post_title"><a href="/listing_details">Easter Plaza.</a></h6>
                                                <p className="post_date">New York</p>
                                                <div className="rating">
                                                    <i className="bi-star-fill"></i>
                                                    <i className="bi-star-fill"></i>
                                                    <i className="bi-star-fill"></i>
                                                    <i className="bi-star-fill"></i>
                                                    <i className="bi-star-fill"></i>
                                                </div>
                                            </div>
                                        </li>
                                        {/*<!-- item -->*/}
                                    </ul>
                                </div>
                            </div>
                            {/*<!-- item -->*/}
                            <div className="sidebar_widget">
                                <h5 className="widget_title"><i className="fal fa-map-marker-alt icon"></i> Location</h5>
                                <div className="widget_inner">
                                    <ul className="contact">
                                        <li>
                                            <a href="#">
                                                <i className="fal fa-map-marker-alt"></i>
                                                14 Prospect Row, Bury St. Edmunds
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fal fa-phone"></i>
                                                (+347) 123 456 7890
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fal fa-envelope"></i>
                                                example@example.com
                                            </a>
                                        </li>
                                    </ul>
                                    <h6 className="mb-2">Share Listing</h6>
                                    <ul className="social">
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-linkedin-in"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/*<!-- item -->*/}
                        </div>
                    </div>
                </aside>
                <div className="col-lg-8">
                    <div className="listing_details_box">
                        <h4 className="bar_title">Hyper olau Restaurant</h4>
                        <ul className="contact">
                            <li>
                                <a href="#">
                                    <i className="fal fa-map-marker-alt"></i>
                                    14 Prospect Row, Bury St. Edmunds
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fal fa-phone"></i>
                                    (+347) 123 456 7890
                                </a>
                            </li>
                        </ul>
                        <div className="rating">
                            <i className="bi-star-fill"></i>
                            <i className="bi-star-fill"></i>
                            <i className="bi-star-fill"></i>
                            <i className="bi-star-fill"></i>
                            <i className="bi-star-fill"></i>
                        </div>
                    </div>
                    <div className="listing_details_box">
                        <h4 className="bar_title">Listing Description</h4>
                        <p className="mb-xl-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                        <p className="mb-xl-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo</p>
                        <p className="mb-xl-20">Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                        <ul className="contact_info">
                            <li>
                                <a href="#">
                                    <i className="fal fa-phone me-1"></i>
                                    (+347) 123 456 7890
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fal fa-envelope me-1"></i>
                                    example@example.com
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fal fa-globe me-1"></i>
                                    www.domainname.com
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="listing_details_box">
                        <h4 className="bar_title">Location</h4>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3703.5056482171144!2d73.71688411431217!3d21.838023365035575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39601d55e43af21f%3A0xb8e23c01a1f6eb18!2sStatue%20of%20Unity!5e0!3m2!1sen!2sin!4v1639550284244!5m2!1sen!2sin" className="border-0 w-100 relative listing_map" id="map"></iframe>
                    </div>
                    <div className="listing_details_box">
                        <h4 className="bar_title">Listing Tags</h4>
                        <ul className="contact_info">
                            <a href="#">
                                <i className="fal fa-tag me-1"></i>
                                Restaurant
                            </a>
                            <a href="#">
                                <i className="fal fa-tag me-1"></i>
                                Hotels
                            </a><a href="#">
                                <i className="fal fa-tag me-1"></i>
                                Dining
                            </a><a href="#">
                                <i className="fal fa-tag me-1"></i>
                                Brunch
                            </a>
                        </ul>
                    </div>
                    <div className="listing_details_box">
                        <h4 className="bar_title">18 Reviews</h4>
                        <div className="comment_box">
                            <ul className="comments">
                                <li className="comment">
                                    <article>
                                        <div className="comment_image">
                                            <img src={props.listingImages.blogImgAuthor_1} alt="img" className="image-fit"/>
                                            <button type="button" className="reply_btn thm-btn btn-small thm-bg-color-two">
                                                Reply
                                            </button>
                                        </div>
                                        <div className="comment_text">
                                            <h6 className="title">Anna Deo</h6>
                                            <div className="comment_date">10 Dec 2022</div>
                                            <div className="rating style_two">
                                                <i className="bi-star-fill"></i>
                                                <i className="bi-star-fill"></i>
                                                <i className="bi-star-fill"></i>
                                                <i className="bi-star-fill"></i>
                                                <i className="bi-star-fill"></i>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                        </div>
                                    </article>
                                    <ul className="comments children">
                                        <li className="comment">
                                            <article>
                                                <div className="comment_image">
                                                    <img src={props.listingImages.blogImgAuthor_2} alt="img" className="image-fit"/>
                                                    <button type="button" className="reply_btn thm-btn btn-small thm-bg-color-two">
                                                        Reply
                                                    </button>
                                                </div>
                                                <div className="comment_text">
                                                    <h6 className="title">Jhon Deo</h6>
                                                    <div className="comment_date">10 Dec 2022</div>
                                                    <div className="rating style_two">
                                                        <i className="bi-star-fill"></i>
                                                        <i className="bi-star-fill"></i>
                                                        <i className="bi-star-fill"></i>
                                                        <i className="bi-star-fill"></i>
                                                        <i className="bi-star-fill"></i>
                                                    </div>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                                </div>
                                            </article>
                                        </li>
                                    </ul>
                                </li>
                                <li className="comment">
                                    <article>
                                        <div className="comment_image">
                                            <img src={props.listingImages.blogImgAuthor_3} alt="img" className="image-fit"/>
                                            <button type="button" className="reply_btn thm-btn btn-small thm-bg-color-two">
                                                Reply
                                            </button>
                                        </div>
                                        <div className="comment_text">
                                            <h6 className="title">Anna Wright</h6>
                                            <div className="comment_date">10 Dec 2022</div>
                                            <div className="rating style_two">
                                                <i className="bi-star-fill"></i>
                                                <i className="bi-star-fill"></i>
                                                <i className="bi-star-fill"></i>
                                                <i className="bi-star-fill"></i>
                                                <i className="bi-star-fill"></i>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                        </div>
                                    </article>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="listing_details_box">
                        <h4 className="bar_title">Leave A Reply</h4>
                        <form className="form_style style_two">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" name="#" placeholder="Your Full Name" className="form-control form-control-custom" autoComplete="off"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="email" name="#" placeholder="Your Email" className="form-control form-control-custom" autoComplete="off"/>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <textarea rows="5" name="#" placeholder="Write Message" className="form-control form-control-custom" autoComplete="off"></textarea>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <button type="submit" className="thm-btn w-100">
                                        Leave Comment
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
   {/*  <!-- Section End -->
    <!-- Newsletter Start --> */}
    <section className="newsletter_box down">
        <div className="container">
            <div className="section section-bg no-overlay" >
                <div className="section-header">
                    <h3 className="title">Our <span>Newsletter</span></h3>
                    <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10">
                        <div className="input-group">
                            <input type="email" name="#" className="form-control" placeholder="Enter Email Address" autoComplete="off" required/>
                            <div className="input-group-append">
                                <button type="submit" className="thm-btn h-100">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
   {/*  <!-- Newsletter End --> */}

    </>
  )
}

export default Listing_Details
