import React from 'react'
import { Link } from 'react-router-dom'

function Blog_Grid_Right(props) {
  return (
    <>
    
   {/*  <!-- Subheader Start --> */}
    <div className="section-bg section-padding subheader" >
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="page-title">Blog Grid Right</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Blog Grid Right</li>
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
            <div className="row flex-lg-row-reverse">
                <aside className="col-lg-4">
                    <div className="sidebar">
                        <div className="sidebar_inner">
                            {/*<!-- item -->*/}
                            <div className="sidebar_widget">
                                <h5 className="widget_title">Search</h5>
                                <form action="#" method="POST">
                                    <div className="input-group">
                                        <input type="text" name="#" className="form-control form-control-custom" placeholder="Search keywords..." autoComplete="off" required=""/>
                                        <div className="input-group-append">
                                            <button type="submit" className="thm-btn">
                                                <i className="fal fa-search me-0"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            {/*<!-- item -->*/}
                            <div className="sidebar_widget">
                                <h5 className="widget_title">Category</h5>
                                <ul className="categories">
                                    <li>
                                        <Link to="/blog_grid">Fitness <span>(267)</span></Link>
                                    </li>
                                    <li>
                                        <Link to="/blog_grid">Health <span>(50)</span></Link>
                                    </li>
                                    <li>
                                        <Link to="/blog_grid">Lifestyle <span>(78)</span></Link>
                                    </li>
                                    <li>
                                        <Link to="/blog_grid">Nutrition <span>(95)</span></Link>
                                    </li>
                                    <li>
                                        <Link to="/blog_grid">Sport <span>(15)</span></Link>
                                    </li>
                                    <li>
                                        <Link to="/blog_grid">Science <span>(65)</span></Link>
                                    </li>
                                    <li>
                                        <Link to="/blog_grid">Training <span>(62)</span></Link>
                                    </li>
                                    <li>
                                        <Link to="/blog_grid">Program <span>(85)</span></Link>
                                    </li>
                                </ul>
                            </div>
                            {/*<!-- item -->*/}
                            <div className="sidebar_widget">
                                <h5 className="widget_title">Recent Post</h5>
                                <ul className="recent_post">
                                    {/*<!-- item -->*/}
                                    <li>
                                        <div className="post_thumb">
                                            <Link to="/blog_details">
                                                <img src={props.blogImages.blogImg1} className="image-fit" alt="img"/>
                                            </Link>
                                        </div>
                                        <div className="post_caption">
                                            <h6 className="post_title"><Link to="/blog_details">Greek yogurt breakfast bowls with toppings</Link></h6>
                                            <p className="post_date">10 Jan 2022</p>
                                        </div>
                                    </li>
                                    {/*<!-- item -->*/}
                                    <li>
                                        <div className="post_thumb">
                                            <Link to="/blog_details">
                                                <img src={props.blogImages.blogImg2} className="image-fit" alt="img"/>
                                            </Link>
                                        </div>
                                        <div className="post_caption">
                                            <h6 className="post_title"><Link to="/blog_details">Broad beans, tomato, garlic & cheese bruschetta</Link></h6>
                                            <p className="post_date">9 Jan 2022</p>
                                        </div>
                                    </li>
                                    {/*<!-- item -->*/}
                                    <li>
                                        <div className="post_thumb">
                                            <Link to="/blog_details">
                                                <img src={props.blogImages.blogImg3} className="image-fit" alt="img"/>
                                            </Link>
                                        </div>
                                        <div className="post_caption">
                                            <h6 className="post_title"><Link to="/blog_details">Make authentic Italian margherita pizza at home</Link></h6>
                                            <p className="post_date">8 Jan 2022</p>
                                        </div>
                                    </li>
                                    {/*<!-- item -->*/}
                                </ul>
                            </div>
                            {/*<!-- item -->*/}
                            <div className="sidebar_widget">
                                <h5 className="widget_title">Tags</h5>
                                <div className="tags_cloud">
                                    <Link to="/blog_grid">Fitness </Link>
                                    <Link to="/blog_grid">Health</Link>
                                    <Link to="/blog_grid">Lifestyle</Link>
                                    <Link to="/blog_grid">Nutrition</Link>
                                    <Link to="/blog_grid">Sport</Link>
                                    <Link to="/blog_grid">Science</Link>
                                    <Link to="/blog_grid">Training</Link>
                                    <Link to="/blog_grid">Program</Link>
                                </div>
                            </div>
                            {/*<!-- item -->*/}
                        </div>
                    </div>
                </aside>
                <div className="col-lg-8">
                    <div className="row">
                        {/*<!-- item -->*/}
                        <article className="col-md-6 post">
                            <div className="post_wrapper">
                                <div className="post_image">
                                    <Link to="/blog_details" className="d-flex h-100">
                                        <img src={props.blogImages.blogImg1} alt="img" className="image-fit"/>
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
                                        <Link to="/blog_details">Greek yogurt breakfast bowls with toppings</Link>
                                    </h2>
                                    <p className="post_desc mb-0">It with just a touch of sauce. saucy riff, more in the style of takeout American Chinese kung pao. The sauce makes it perfect for eating with rice. </p>
                                </div>
                            </div>
                        </article>
                        {/*<!-- item -->*/}
                        <article className="col-md-6 post">
                            <div className="post_wrapper">
                                <div className="post_image">
                                    <Link to="/blog_details" className="d-flex h-100">
                                        <img src={props.blogImages.blogImg2} alt="img" className="image-fit"/>
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
                                        <Link to="/blog_details">Broad beans, tomato, garlic & cheese bruschetta</Link>
                                    </h2>
                                    <p className="post_desc mb-0">It with just a touch of sauce. saucy riff, more in the style of takeout American Chinese kung pao. The sauce makes it perfect for eating with rice. </p>
                                </div>
                            </div>
                        </article>
                        {/*<!-- item -->*/}
                        <article className="col-md-6 post">
                            <div className="post_wrapper">
                                <div className="post_image">
                                    <Link to="/blog_details" className="d-flex h-100">
                                        <img src={props.blogImages.blogImg3} alt="img" className="image-fit"/>
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
                                        <Link to="/blog_details">Make authentic Italian margherita pizza at home</Link>
                                    </h2>
                                    <p className="post_desc mb-0">It with just a touch of sauce. saucy riff, more in the style of takeout American Chinese kung pao. The sauce makes it perfect for eating with rice. </p>
                                </div>
                            </div>
                        </article>
                        {/*<!-- item -->*/}
                        <article className="col-md-6 post">
                            <div className="post_wrapper">
                                <div className="post_image">
                                    <Link to="/blog_details" className="d-flex h-100">
                                        <img src={props.blogImages.blogImg4} alt="img" className="image-fit"/>
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
                                        7 <br /> Jan
                                    </div>
                                    <h2 className="post_title">
                                        <Link to="/blog_details">We Have Excellent Of Quality Japanese Food</Link>
                                    </h2>
                                    <p className="post_desc mb-0">It with just a touch of sauce. saucy riff, more in the style of takeout American Chinese kung pao. The sauce makes it perfect for eating with rice. </p>
                                </div>
                            </div>
                        </article>
                        {/*<!-- item -->*/}
                        <article className="col-md-6 post">
                            <div className="post_wrapper">
                                <div className="post_image">
                                    <Link to="/blog_details" className="d-flex h-100">
                                        <img src={props.blogImages.blogImg5} alt="img" className="image-fit"/>
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
                                        6 <br /> Jan
                                    </div>
                                    <h2 className="post_title">
                                        <Link to="/blog_details">Different spice for a Different cheese bruschetta</Link>
                                    </h2>
                                    <p className="post_desc mb-0">It with just a touch of sauce. saucy riff, more in the style of takeout American Chinese kung pao. The sauce makes it perfect for eating with rice. </p>
                                </div>
                            </div>
                        </article>
                        {/*<!-- item -->*/}
                        <article className="col-md-6 post">
                            <div className="post_wrapper">
                                <div className="post_image">
                                    <Link to="/blog_details" className="d-flex h-100">
                                        <img src={props.blogImages.blogImg6} alt="img" className="image-fit"/>
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
                                        5 <br /> Jan
                                    </div>
                                    <h2 className="post_title">
                                        <Link to="/blog_details">Celebrating the awesomeness of food.</Link>
                                    </h2>
                                    <p className="post_desc mb-0">It with just a touch of sauce. saucy riff, more in the style of takeout American Chinese kung pao. The sauce makes it perfect for eating with rice. </p>
                                </div>
                            </div>
                        </article>
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
                   {/*  <!-- pagination --> */}
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
  {/*   <!-- Newsletter End --> */}

    </>
  )
}

export default Blog_Grid_Right
