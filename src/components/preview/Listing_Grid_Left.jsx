import React from 'react'
import { Link } from 'react-router-dom'

function Listing_Grid_Left(props) {
  return (
    <>
  
   {/*{<!-- Subheader Start --> */}
    <div class="section-bg section-padding subheader">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="page-title">Listing Grid Left</h1>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/home">Home</Link></li>
                            <li class="breadcrumb-item active" aria-current="page">Listing Grid Left</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Subheader End -->
    <!-- Section Start --> */}
    <section class="section-padding">
        <div class="container">
            <div class="row">
                <aside class="col-lg-4">
                    <div class="listing_sidebar">
                        <div class="sidebar_inner">
                            {/*<!-- item -->*/}
                            <div class="sidebar_widget">
                                <h5 class="widget_title">Filter Apply</h5>
                                <div class="widget_inner">
                                    <form>
                                        <div class="form-group">
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <i class="fal fa-search"></i>
                                                </div>
                                                <input type="text" name="#" class="form-control form-control-custom" placeholder="Search" autoComplete="off" required/>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <i class="fal fa-map-marker-alt"></i>
                                                </div>
                                                <input type="text" name="#" class="form-control form-control-custom" placeholder="Location" autoComplete="off" required/>
                                            </div>
                                        </div>
                                        <div class="form-group mb-0">
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <i class="fal fa-user"></i>
                                                </div>
                                                <input type="text" name="#" class="form-control form-control-custom" placeholder="Employer" autoComplete="off" required/>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <h5 class="widget_title">Filter By Tag</h5>
                                <div class="widget_inner">
                                    <ul class="categories">
                                        <li>
                                            <Link to="/listing_grid">
                                                Internet
                                                <span>(28+)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/listing_grid">
                                                Heating
                                                <span>(39+)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/listing_grid">
                                                Icon
                                                <span>(76+)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/listing_grid">
                                                Organic
                                                <span>(47+)</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/listing_grid">
                                                Medicine
                                                <span>(36+)</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div class="widget_inner">
                                    <button type="submit" class="thm-btn w-100 mb-xl-30">Filter Apply</button>
                                </div>
                            </div>
                            {/*<!-- item -->*/}
                        </div>
                    </div>
                </aside>
                <div class="col-lg-8">
                    <div class="row">
                        <div class="col-12">
                            <div class="page_actions">
                                <div class="row">
                                    <div class="col-lg-9 col-md-10">
                                        <form class="row justify-content-center">
                                            <div class="col-sm-4 col">
                                                <div class="form-group">
                                                    <select class="form-control form-control-custom custom-select w-100">
                                                        <option selected>Default Filters</option>
                                                        <option value="Option 1">Option 1</option>
                                                        <option value="Option 2">Option 2</option>
                                                        <option value="Option 3">Option 3</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-sm-4 col">
                                                <div class="form-group">
                                                    <select class="form-control form-control-custom custom-select w-100">
                                                        <option selected>Employer</option>
                                                        <option value="Option 1">Option 1</option>
                                                        <option value="Option 2">Option 2</option>
                                                        <option value="Option 3">Option 3</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-sm-4 col">
                                                <div class="form-group">
                                                    <select class="form-control form-control-custom custom-select w-100">
                                                        <option selected>More Filters</option>
                                                        <option value="Option 1">Option 1</option>
                                                        <option value="Option 2">Option 2</option>
                                                        <option value="Option 3">Option 3</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="col-lg-3 col-md-2">
                                        <ul class="box_layout">
                                            <li class="active">
                                                <button type="button">
                                                    <i class="fas fa-th"></i>
                                                </button>
                                            </li>
                                            <li>
                                                <button type="button">
                                                    <i class="fas fa-bars"></i>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        {/*<!-- item -->*/}
                        <div class="col-md-6">
                            <div class="listing_box">
                                <div class="listing_image">
                                    <Link to="/listing_grid" class="d-flex h-100">
                                        <img src={props.listingImages.listingImg1} alt="img" class="image-fit"/>
                                    </Link>
                                </div>
                                <div class="listing_caption">
                                    <h4 class="title"><Link to="/listing_grid">Pizza Recipe</Link></h4>
                                    <ul class="listing_meta">
                                        <li>
                                            <i class="fas fa-map-marker-alt"></i>
                                            Popular restaurant in London
                                        </li>
                                        <li>
                                            <i class="bi-telephone-fill"></i>
                                            +86 521-245-5692
                                        </li>
                                        <li>
                                            <i class="fas fa-clock"></i>
                                            10 Jan 2022
                                        </li>
                                    </ul>
                                </div>
                                <div class="listing_footer">
                                    <div class="action_btn">
                                        <button type="button" class="listing_btn">
                                            <i class="bi-cart3 icon"></i>
                                            Shopping
                                        </button>
                                    </div>
                                    <div class="rating style_two">
                                        <i class="bi-star-fill"></i>
                                        <i class="bi-star-fill"></i>
                                        <i class="bi-star-fill"></i>
                                        <i class="bi-star-fill"></i>
                                        <i class="bi-star"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*<!-- item -->*/}
                        <div class="col-md-6">
                            <div class="listing_box">
                                <div class="listing_image">
                                    <Link to="/listing_grid" class="d-flex h-100">
                                        <img src={props.listingImages.listingImg2} alt="img" class="image-fit"/>
                                    </Link>
                                </div>
                                <div class="listing_caption">
                                    <h4 class="title"><Link to="/listing_grid">Party Corner</Link></h4>
                                    <ul class="listing_meta">
                                        <li>
                                            <i class="fas fa-map-marker-alt"></i>
                                            Popular restaurant in San Francisco
                                        </li>
                                        <li>
                                            <i class="bi-telephone-fill"></i>
                                            +86 521-245-5692
                                        </li>
                                        <li>
                                            <i class="fas fa-clock"></i>
                                            9 Jan 2022
                                        </li>
                                    </ul>
                                </div>
                                <div class="listing_footer">
                                    <div class="action_btn">
                                        <button type="button" class="listing_btn">
                                            <i class="bi-cart3 icon"></i>
                                            Shopping
                                        </button>
                                    </div>
                                    <div class="rating style_two">
                                        <i class="bi-star-fill"></i>
                                        <i class="bi-star-fill"></i>
                                        <i class="bi-star-fill"></i>
                                        <i class="bi-star-fill"></i>
                                        <i class="bi-star"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*<!-- item -->*/}
                        <div class="col-md-6">
                            <div class="listing_box">
                                <div class="listing_image">
                                    <Link to="/listing_grid" class="d-flex h-100">
                                        <img src={props.listingImages.listingImg3} alt="img" class="image-fit"/>
                                    </Link>
                                </div>
                                <div class="listing_caption">
                                    <h4 class="title"><Link to="/listing_grid">City Palace</Link></h4>
                                    <ul class="listing_meta">
                                        <li>
                                            <i class="fas fa-map-marker-alt"></i>
                                            Popular restaurant in Brooklyn
                                        </li>
                                        <li>
                                            <i class="bi-telephone-fill"></i>
                                            +86 521-245-5692
                                        </li>
                                        <li>
                                            <i class="fas fa-clock"></i>
                                            8 Jan 2022
                                        </li>
                                    </ul>
                                </div>
                                <div class="listing_footer">
                                    <div class="action_btn">
                                        <button type="button" class="listing_btn">
                                            <i class="bi-cart3 icon"></i>
                                            Shopping
                                        </button>
                                    </div>
                                    <div class="rating style_two">
                                        <i class="bi-star-fill"></i>
                                        <i class="bi-star-fill"></i>
                                        <i class="bi-star-fill"></i>
                                        <i class="bi-star-fill"></i>
                                        <i class="bi-star"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*<!-- item -->*/}
                        <div class="col-md-6">
                            <div class="listing_box">
                                <div class="listing_image">
                                    <Link to="/listing_grid" class="d-flex h-100">
                                        <img src={props.listingImages.listingImg4} alt="img" class="image-fit"/>
                                    </Link>
                                </div>
                                <div class="listing_caption">
                                    <h4 class="title"><Link to="/listing_grid">Easter Plaza</Link></h4>
                                    <ul class="listing_meta">
                                        <li>
                                            <i class="fas fa-map-marker-alt"></i>
                                            Popular restaurant in New York City
                                        </li>
                                        <li>
                                            <i class="bi-telephone-fill"></i>
                                            +86 521-245-5692
                                        </li>
                                        <li>
                                            <i class="fas fa-clock"></i>
                                            7 Jan 2022
                                        </li>
                                    </ul>
                                </div>
                                <div class="listing_footer">
                                    <div class="action_btn">
                                        <button type="button" class="listing_btn">
                                            <i class="bi-cart3 icon"></i>
                                            Shopping
                                        </button>
                                    </div>
                                    <div class="rating style_two">
                                        <i class="bi-star-fill"></i>
                                        <i class="bi-star-fill"></i>
                                        <i class="bi-star-fill"></i>
                                        <i class="bi-star-fill"></i>
                                        <i class="bi-star"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*<!-- item -->*/}
                        <div class="col-md-6">
                            <div class="listing_box">
                                <div class="listing_image">
                                    <Link to="/listing_grid" class="d-flex h-100">
                                        <img src={props.listingImages.listingImg5} alt="img" class="image-fit"/>
                                    </Link>
                                </div>
                                <div class="listing_caption">
                                    <h4 class="title"><Link to="/listing_grid">Gym Ground</Link></h4>
                                    <ul class="listing_meta">
                                        <li>
                                            <i class="fas fa-map-marker-alt"></i>
                                            Popular restaurant in Alaska
                                        </li>
                                        <li>
                                            <i class="bi-telephone-fill"></i>
                                            +86 521-245-5692
                                        </li>
                                        <li>
                                            <i class="fas fa-clock"></i>
                                            6 Jan 2022
                                        </li>
                                    </ul>
                                </div>
                                <div class="listing_footer">
                                    <div class="action_btn">
                                        <button type="button" class="listing_btn">
                                            <i class="bi-cart3 icon"></i>
                                            Shopping
                                        </button>
                                    </div>
                                    <div class="rating style_two">
                                        <i class="bi-star-fill"></i>
                                        <i class="bi-star-fill"></i>
                                        <i class="bi-star-fill"></i>
                                        <i class="bi-star-fill"></i>
                                        <i class="bi-star"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*<!-- item -->*/}
                        <div class="col-md-6">
                            <div class="listing_box">
                                <div class="listing_image">
                                    <Link to="/listing_grid" class="d-flex h-100">
                                        <img src={props.listingImages.listingImg6} alt="img" class="image-fit"/>
                                    </Link>
                                </div>
                                <div class="listing_caption">
                                    <h4 class="title"><Link to="/listing_grid">Miyami Sea</Link></h4>
                                    <ul class="listing_meta">
                                        <li>
                                            <i class="fas fa-map-marker-alt"></i>
                                            Popular restaurant in california
                                        </li>
                                        <li>
                                            <i class="bi-telephone-fill"></i>
                                            +86 521-245-5692
                                        </li>
                                        <li>
                                            <i class="fas fa-clock"></i>
                                            5 Jan 2022
                                        </li>
                                    </ul>
                                </div>
                                <div class="listing_footer">
                                    <div class="action_btn">
                                        <button type="button" class="listing_btn">
                                            <i class="bi-cart3 icon"></i>
                                            Shopping
                                        </button>
                                    </div>
                                    <div class="rating style_two">
                                        <i class="bi-star-fill"></i>
                                        <i class="bi-star-fill"></i>
                                        <i class="bi-star-fill"></i>
                                        <i class="bi-star-fill"></i>
                                        <i class="bi-star"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*<!-- item -->*/}
                    </div>
                    {/* <!-- pagination --> */}
                    <div class="row">
                        <div class="col-12">
                            <nav>
                                <ul class="pagination">
                                    <li class="page-item">
                                        <Link class="page-link" to="#">
                                            Previous
                                        </Link>
                                    </li>
                                    <li class="page-item active"><Link class="page-link" to="#">1</Link></li>
                                    <li class="page-item"><Link class="page-link" to="#">2</Link></li>
                                    <li class="page-item"><Link class="page-link" to="#">3</Link></li>
                                    <li class="page-item">
                                        <Link class="page-link" to="#">
                                            Next
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    {/* <!-- pagination --> */}
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Section End -->
    <!-- Newsletter Start --> */}
    {/* <section class="newsletter_box down">
        <div class="container">
            <div class="section section-bg no-overlay">
                <div class="section-header">
                    <h3 class="title">Our <span>Newsletter</span></h3>
                    <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-8 col-md-10">
                        <div class="input-group">
                            <input type="email" name="#" class="form-control" placeholder="Enter Email Address" autoComplete="off" required/>
                            <div class="input-group-append">
                                <button type="submit" class="thm-btn h-100">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> */}
    {/* <!-- Newsletter End --> */}

    </>
  )
}

export default Listing_Grid_Left
