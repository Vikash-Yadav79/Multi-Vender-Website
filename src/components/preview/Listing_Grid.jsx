import React from 'react'
import { Link } from 'react-router-dom'

function Listing_Grid(props) {
  return (
    <>
    
    {/* <!-- Subheader Start --> */}
    <div className="section-bg section-padding subheader">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="page-title">Listing Grid</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Listing Grid</li>
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
                <div className="col-12">
                    <div className="page_actions">
                        <div className="row">
                            <div className="col-lg-8 col-md-10">
                                <form className="row justify-content-center">
                                    <div className="col-sm-4 col">
                                        <div className="form-group">
                                            <select className="form-control form-control-custom custom-select w-100">
                                                <option selected>Default Filters</option>
                                                <option value="Option 1">Option 1</option>
                                                <option value="Option 2">Option 2</option>
                                                <option value="Option 3">Option 3</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 col">
                                        <div className="form-group">
                                            <select className="form-control form-control-custom custom-select w-100">
                                                <option selected>Employer</option>
                                                <option value="Option 1">Option 1</option>
                                                <option value="Option 2">Option 2</option>
                                                <option value="Option 3">Option 3</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 col">
                                        <div className="form-group">
                                            <select className="form-control form-control-custom custom-select w-100">
                                                <option selected>More Filters</option>
                                                <option value="Option 1">Option 1</option>
                                                <option value="Option 2">Option 2</option>
                                                <option value="Option 3">Option 3</option>
                                            </select>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-4 col-md-2">
                                <ul className="box_layout">
                                    <li className="active">
                                        <button type="button">
                                            <i className="fas fa-th"></i>
                                        </button>
                                    </li>
                                    <li>
                                        <button type="button">
                                            <i className="fas fa-bars"></i>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                {/*<!-- item -->*/}
                <div className="col-lg-4 col-md-6">
                    <div className="listing_box">
                        <div className="listing_image">
                            <Link to="listing_details" className="d-flex h-100">
                                <img src={props.listingImages.listingImg1} alt="img" className="image-fit"/>
                            </Link>
                        </div>
                        <div className="listing_caption">
                            <h4 className="title"><Link to="listing_details">Pizza Recipe</Link></h4>
                            <ul className="listing_meta">
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
                            </ul>
                        </div>
                        <div className="listing_footer">
                            <div className="action_btn">
                                <button type="button" className="listing_btn">
                                    <i className="bi-cart3 icon"></i>
                                    Shopping
                                </button>
                            </div>
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
                {/*<!-- item -->*/}
                <div className="col-lg-4 col-md-6">
                    <div className="listing_box">
                        <div className="listing_image">
                            <Link to="listing_details" className="d-flex h-100">
                                <img src={props.listingImages.listingImg2} alt="img" className="image-fit"/>
                            </Link>
                        </div>
                        <div className="listing_caption">
                            <h4 className="title"><Link to="listing_details">Party Corner</Link></h4>
                            <ul className="listing_meta">
                                <li>
                                    <i className="fas fa-map-marker-alt"></i>
                                    Popular restaurant in San Francisco
                                </li>
                                <li>
                                    <i className="bi-telephone-fill"></i>
                                    +86 521-245-5692
                                </li>
                                <li>
                                    <i className="fas fa-clock"></i>
                                    9 Jan 2022
                                </li>
                            </ul>
                        </div>
                        <div className="listing_footer">
                            <div className="action_btn">
                                <button type="button" className="listing_btn">
                                    <i className="bi-cart3 icon"></i>
                                    Shopping
                                </button>
                            </div>
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
                {/*<!-- item -->*/}
                <div className="col-lg-4 col-md-6">
                    <div className="listing_box">
                        <div className="listing_image">
                            <Link to="listing_details" className="d-flex h-100">
                                <img src={props.listingImages.listingImg3} alt="img" className="image-fit"/>
                            </Link>
                        </div>
                        <div className="listing_caption">
                            <h4 className="title"><Link to="listing_details">City Palace</Link></h4>
                            <ul className="listing_meta">
                                <li>
                                    <i className="fas fa-map-marker-alt"></i>
                                    Popular restaurant in Brooklyn
                                </li>
                                <li>
                                    <i className="bi-telephone-fill"></i>
                                    +86 521-245-5692
                                </li>
                                <li>
                                    <i className="fas fa-clock"></i>
                                    8 Jan 2022
                                </li>
                            </ul>
                        </div>
                        <div className="listing_footer">
                            <div className="action_btn">
                                <button type="button" className="listing_btn">
                                    <i className="bi-cart3 icon"></i>
                                    Shopping
                                </button>
                            </div>
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
                {/*<!-- item -->*/}
                <div className="col-lg-4 col-md-6">
                    <div className="listing_box">
                        <div className="listing_image">
                            <Link to="listing_details" className="d-flex h-100">
                                <img src={props.listingImages.listingImg4} alt="img" className="image-fit"/>
                            </Link>
                        </div>
                        <div className="listing_caption">
                            <h4 className="title"><Link to="listing_details">Easter Plaza</Link></h4>
                            <ul className="listing_meta">
                                <li>
                                    <i className="fas fa-map-marker-alt"></i>
                                   Popular restaurant in New York City
                                </li>
                                <li>
                                    <i className="bi-telephone-fill"></i>
                                    +86 521-245-5692
                                </li>
                                <li>
                                    <i className="fas fa-clock"></i>
                                    7 Jan 2022
                                </li>
                            </ul>
                        </div>
                        <div className="listing_footer">
                            <div className="action_btn">
                                <button type="button" className="listing_btn">
                                    <i className="bi-cart3 icon"></i>
                                    Shopping
                                </button>
                            </div>
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
                {/*<!-- item -->*/}
                <div className="col-lg-4 col-md-6">
                    <div className="listing_box">
                        <div className="listing_image">
                            <Link to="listing_details" className="d-flex h-100">
                                <img src={props.listingImages.listingImg5} alt="img" className="image-fit"/>
                            </Link>
                        </div>
                        <div className="listing_caption">
                            <h4 className="title"><Link to="listing_details">Gym Ground</Link></h4>
                            <ul className="listing_meta">
                                <li>
                                    <i className="fas fa-map-marker-alt"></i>
                                    Popular restaurant in Alaska
                                </li>
                                <li>
                                    <i className="bi-telephone-fill"></i>
                                    +86 521-245-5692
                                </li>
                                <li>
                                    <i className="fas fa-clock"></i>
                                    6 Jan 2022
                                </li>
                            </ul>
                        </div>
                        <div className="listing_footer">
                            <div className="action_btn">
                                <button type="button" className="listing_btn">
                                    <i className="bi-cart3 icon"></i>
                                    Shopping
                                </button>
                            </div>
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
                {/*<!-- item -->*/}
                <div className="col-lg-4 col-md-6">
                    <div className="listing_box">
                        <div className="listing_image">
                            <Link to="listing_details" className="d-flex h-100">
                                <img src={props.listingImages.listingImg6} alt="img" className="image-fit"/>
                            </Link>
                        </div>
                        <div className="listing_caption">
                            <h4 className="title"><Link to="listing_details">Miyami Sea</Link></h4>
                            <ul className="listing_meta">
                                <li>
                                    <i className="fas fa-map-marker-alt"></i>
                                    Popular restaurant in california
                                </li>
                                <li>
                                    <i className="bi-telephone-fill"></i>
                                    +86 521-245-5692
                                </li>
                                <li>
                                    <i className="fas fa-clock"></i>
                                    5 Jan 2022
                                </li>
                            </ul>
                        </div>
                        <div className="listing_footer">
                            <div className="action_btn">
                                <button type="button" className="listing_btn">
                                    <i className="bi-cart3 icon"></i>
                                    Shopping
                                </button>
                            </div>
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
                {/*<!-- item -->*/}
                <div className="col-lg-4 col-md-6">
                    <div className="listing_box">
                        <div className="listing_image">
                            <Link to="listing_details" className="d-flex h-100">
                                <img src={props.listingImages.listingImg7} alt="img" className="image-fit"/>
                            </Link>
                        </div>
                        <div className="listing_caption">
                            <h4 className="title"><Link to="listing_details">Pizza Recipe</Link></h4>
                            <ul className="listing_meta">
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
                            </ul>
                        </div>
                        <div className="listing_footer">
                            <div className="action_btn">
                                <button type="button" className="listing_btn">
                                    <i className="bi-cart3 icon"></i>
                                    Shopping
                                </button>
                            </div>
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
                {/*<!-- item -->*/}
                <div className="col-lg-4 col-md-6">
                    <div className="listing_box">
                        <div className="listing_image">
                            <Link to="listing_details" className="d-flex h-100">
                                <img src={props.listingImages.listingImg8} alt="img" className="image-fit"/>
                            </Link>
                        </div>
                        <div className="listing_caption">
                            <h4 className="title"><Link to="listing_details">Party Corner</Link></h4>
                            <ul className="listing_meta">
                                <li>
                                    <i className="fas fa-map-marker-alt"></i>
                                    Popular restaurant in San Francisco
                                </li>
                                <li>
                                    <i className="bi-telephone-fill"></i>
                                    +86 521-245-5692
                                </li>
                                <li>
                                    <i className="fas fa-clock"></i>
                                    9 Jan 2022
                                </li>
                            </ul>
                        </div>
                        <div className="listing_footer">
                            <div className="action_btn">
                                <button type="button" className="listing_btn">
                                    <i className="bi-cart3 icon"></i>
                                    Shopping
                                </button>
                            </div>
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
                {/*<!-- item -->*/}
                <div className="col-lg-4 col-md-6">
                    <div className="listing_box">
                        <div className="listing_image">
                            <Link to="listing_details" className="d-flex h-100">
                                <img src={props.listingImages.listingImg9} alt="img" className="image-fit"/>
                            </Link>
                        </div>
                        <div className="listing_caption">
                            <h4 className="title"><Link to="listing_details">City Palace</Link></h4>
                            <ul className="listing_meta">
                                <li>
                                    <i className="fas fa-map-marker-alt"></i>
                                    Popular restaurant in Brooklyn
                                </li>
                                <li>
                                    <i className="bi-telephone-fill"></i>
                                    +86 521-245-5692
                                </li>
                                <li>
                                    <i className="fas fa-clock"></i>
                                    8 Jan 2022
                                </li>
                            </ul>
                        </div>
                        <div className="listing_footer">
                            <div className="action_btn">
                                <button type="button" className="listing_btn">
                                    <i className="bi-cart3 icon"></i>
                                    Shopping
                                </button>
                            </div>
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
                {/*<!-- item -->*/}
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
                            <li className="page-item active"><Link className="page-link" to="#">1</Link></li>
                            <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                            <li className="page-item"><Link className="page-link" to="#">3</Link></li>
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
            <div className="section section-bg no-overlay">
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
    {/* <!-- Newsletter End --> */}
   
    </>
  )
}

export default Listing_Grid
