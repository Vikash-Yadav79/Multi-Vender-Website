import React from "react";
import { Link } from "react-router-dom";

function Explore(props) {
  return (
    <>
      {/* <!-- Subheader Start --> */}
      <div className="section-bg section-padding subheader">
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
          {/* <!-- Header for Explore Items --> */}
          <div className="section-header">
            <h3 className="title">
              Discover Our <span>Featured Locations</span>
            </h3>
            <p className="text">
              Explore our curated selection of top destinations. Click on each location to view available listings and more details.
            </p>
          </div>

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
          </div>
        </div>
      </section>
    </>
  );
}

export default Explore;
