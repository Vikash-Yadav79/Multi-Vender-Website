import React from "react";
import { Link } from "react-router-dom";

function Explore(props) {
  return (
    <>
      {/* <!-- Subheader Start --> */}
      <div
        className="section-bg section-padding subheader"
        
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="page-title">Explore</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/home">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Explore
                  </li>
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
          <div className="row">
            {/*<!-- Item -->*/}
            <div className="col-lg-3 col-sm-6">
              <div className="explore_box">
                <div className="explore_image">
                  <Link to="#" className="d-flex h-100">
                    <img
                      src={props.exploreImages.exploreImg1}
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
                    <Link to="#">Denmark</Link>
                  </h5>
                </div>
                <span className="listing_badge thm-btn btn-small">20 Listings</span>
              </div>
            </div>
            {/*<!-- Item -->*/}
            <div className="col-lg-3 col-sm-6">
              <div className="explore_box">
                <div className="explore_image">
                  <Link to="#" className="d-flex h-100">
                    <img
                      src={props.exploreImages.exploreImg2}
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
                    <Link to="#">Chicago</Link>
                  </h5>
                </div>
                <span className="listing_badge thm-btn btn-small">30 Listings</span>
              </div>
            </div>
            {/*<!-- Item -->*/}
            <div className="col-lg-3 col-sm-6">
              <div className="explore_box">
                <div className="explore_image">
                  <Link to="#" className="d-flex h-100">
                    <img
                      src={props.exploreImages.exploreImg3}
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
                    <Link to="#">Denver</Link>
                  </h5>
                </div>
                <span className="listing_badge thm-btn btn-small">10 Listings</span>
              </div>
            </div>
            {/*<!-- Item -->*/}
            <div className="col-lg-3 col-sm-6">
              <div className="explore_box">
                <div className="explore_image">
                  <Link to="#" className="d-flex h-100">
                    <img
                      src={props.exploreImages.exploreImg4}
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
                    <Link to="#">Los Vegas</Link>
                  </h5>
                </div>
                <span className="listing_badge thm-btn btn-small">25 Listings</span>
              </div>
            </div>
            {/*<!-- Item -->*/}
            <div className="col-lg-3 col-sm-6">
              <div className="explore_box">
                <div className="explore_image">
                  <Link to="#" className="d-flex h-100">
                    <img
                      src={props.exploreImages.exploreImg5}
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
                    <Link to="#">San Diego</Link>
                  </h5>
                </div>
                <span className="listing_badge thm-btn btn-small">30 Listings</span>
              </div>
            </div>
            {/*<!-- Item -->*/}
            <div className="col-lg-3 col-sm-6">
              <div className="explore_box">
                <div className="explore_image">
                  <Link to="#" className="d-flex h-100">
                    <img
                      src={props.exploreImages.exploreImg6}
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
                    <Link to="#">New York</Link>
                  </h5>
                </div>
                <span className="listing_badge thm-btn btn-small">40 Listings</span>
              </div>
            </div>
            {/*<!-- Item -->*/}
            <div className="col-lg-3 col-sm-6">
              <div className="explore_box">
                <div className="explore_image">
                  <Link to="#" className="d-flex h-100">
                    <img
                      src={props.exploreImages.exploreImg7}
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
                    <Link to="#">Denmark</Link>
                  </h5>
                </div>
                <span className="listing_badge thm-btn btn-small">20 Listings</span>
              </div>
            </div>
            {/*<!-- Item -->*/}
            <div className="col-lg-3 col-sm-6">
              <div className="explore_box">
                <div className="explore_image">
                  <Link to="#" className="d-flex h-100">
                    <img
                      src={props.exploreImages.exploreImg8}
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
                    <Link to="#">Chicago</Link>
                  </h5>
                </div>
                <span className="listing_badge thm-btn btn-small">30 Listings</span>
              </div>
            </div>
            {/*<!-- Item -->*/}
            <div className="col-lg-3 col-sm-6">
              <div className="explore_box">
                <div className="explore_image">
                  <Link to="#" className="d-flex h-100">
                    <img
                      src={props.exploreImages.exploreImg9}
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
                    <Link to="#">Denver</Link>
                  </h5>
                </div>
                <span className="listing_badge thm-btn btn-small">10 Listings</span>
              </div>
            </div>
            {/*<!-- Item -->*/}
            <div className="col-lg-3 col-sm-6">
              <div className="explore_box">
                <div className="explore_image">
                  <Link to="#" className="d-flex h-100">
                    <img
                      src={props.exploreImages.exploreImg10}
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
                    <Link to="#">Los Vegas</Link>
                  </h5>
                </div>
                <span className="listing_badge thm-btn btn-small">25 Listings</span>
              </div>
            </div>
            {/*<!-- Item -->*/}
            <div className="col-lg-3 col-sm-6">
              <div className="explore_box">
                <div className="explore_image">
                  <Link to="#" className="d-flex h-100">
                    <img
                      src={props.exploreImages.exploreImg11}
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
                    <Link to="#">San Diego</Link>
                  </h5>
                </div>
                <span className="listing_badge thm-btn btn-small">30 Listings</span>
              </div>
            </div>
            {/*<!-- Item -->*/}
            <div className="col-lg-3 col-sm-6">
              <div className="explore_box">
                <div className="explore_image">
                  <Link to="#" className="d-flex h-100">
                    <img
                      src={props.exploreImages.exploreImg12}
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
                    <Link to="#">New York</Link>
                  </h5>
                </div>
                <span className="listing_badge thm-btn btn-small">40 Listings</span>
              </div>
            </div>
            {/*<!-- Item -->*/}
          </div>
          {/* <!-- pagination --> */}
          <div className="row">
            <div className="col-12">
              <nav>
                <ul className="pagination">
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      Previous
                    </Link>
                  </li>
                  <li className="page-item active">
                    <Link className="page-link" to="#">
                      1
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      2
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      3
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      Next
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          {/* <!-- pagination --> */}
        </div>
      </section>
      {/* <!-- Section End -->
    <!-- Newsletter Start --> */}
      <section className="newsletter_box down">
        <div className="container">
          <div
            className="section section-bg no-overlay newsletter"
            
          >
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
      {/* <!-- Newsletter End --> */}
    </>
  );
}

export default Explore;
