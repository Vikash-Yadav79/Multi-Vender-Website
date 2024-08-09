import React from "react";
import { Link } from "react-router-dom";

function Fitness(props) {
    return (
        <>
            {/* <!-- Subheader Start --> */}
            <div className="section-bg section-padding subheader">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="page-title">Fitness</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/home">Home</Link>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Fitness
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
                    {/* <!-- Header for Fitness Items --> */}
                    <div className="section-header">
                        <h3 className="title">
                            Discover Our <span>Featured Fitness Programs</span>
                        </h3>
                        <p className="text">
                            Explore our curated selection of top fitness programs. Click on each program to view available classes and more details.
                        </p>
                    </div>

                    <div className="row">
                        {/*<!-- Item -->*/}
                        <div className="col-lg-3 col-sm-6">
                            <div className="explore_box">
                                <div className="explore_image">
                                    <Link to="#" className="d-flex h-100">
                                        <img
                                            src="https://example.com/fitnessImg1.jpg"
                                            alt="Yoga"
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
                                        <Link to="#">Yoga</Link>
                                    </h5>
                                </div>
                                <span className="listing_badge thm-btn btn-small">15 Programs</span>
                            </div>
                        </div>
                        {/*<!-- Item -->*/}
                        <div className="col-lg-3 col-sm-6">
                            <div className="explore_box">
                                <div className="explore_image">
                                    <Link to="#" className="d-flex h-100">
                                        <img
                                            src="https://example.com/fitnessImg2.jpg"
                                            alt="Pilates"
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
                                        <Link to="#">Pilates</Link>
                                    </h5>
                                </div>
                                <span className="listing_badge thm-btn btn-small">10 Programs</span>
                            </div>
                        </div>
                        {/*<!-- Item -->*/}
                        <div className="col-lg-3 col-sm-6">
                            <div className="explore_box">
                                <div className="explore_image">
                                    <Link to="#" className="d-flex h-100">
                                        <img
                                            src="https://example.com/fitnessImg3.jpg"
                                            alt="CrossFit"
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
                                        <Link to="#">CrossFit</Link>
                                    </h5>
                                </div>
                                <span className="listing_badge thm-btn btn-small">20 Programs</span>
                            </div>
                        </div>
                        {/*<!-- Item -->*/}
                        <div className="col-lg-3 col-sm-6">
                            <div className="explore_box">
                                <div className="explore_image">
                                    <Link to="#" className="d-flex h-100">
                                        <img
                                            src="https://example.com/fitnessImg4.jpg"
                                            alt="HIIT"
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
                                        <Link to="#">HIIT</Link>
                                    </h5>
                                </div>
                                <span className="listing_badge thm-btn btn-small">18 Programs</span>
                            </div>
                        </div>
                        {/*<!-- Additional Items -->*/}
                        {/* Repeat the above blocks with different images and titles */}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Fitness;
