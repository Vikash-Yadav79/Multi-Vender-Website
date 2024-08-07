/* components */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Explore from "./Explore";
import Footer from "./Footer";
import Listing_Grid from "./Listing_Grid";
import Listing_Grid_Left from "./Listing_Grid_Left";
import Listing_Grid_Right from "./Listing_Grid_Right";
import Listing_Details from "./Listing_Details";
import Blog_Grid from "./Blog_Grid";
import Blog_Grid_Left from "./Blog_Grid_Left";
import Blog_Grid_Right from "./Blog_Grid_Right";
import Blog_Details from "./Blog_Details";
import Services from "./Services";
import Register from "./Register";
import Login from "./Login";
import Contact from "./Contact";
import ForgotPassword from "./ForgotPassword";

/* explore section images */
import exploreImg1 from "./assest/images/explore/carpenter.png";
// import exploreImg2 from './assest/images/explore/carpenter.png';
import exploreImg2 from "./assest/images/explore/plumber.png";
import exploreImg3 from "./assest/images/explore/accountant.png";
import exploreImg4 from "./assest/images/explore/Doctor.png";
import exploreImg5 from "./assest/images/explore/mechanic.png";
import exploreImg6 from "./assest/images/explore/6.jpg";
import exploreImg7 from "./assest/images/explore/7.jpg";
import exploreImg8 from "./assest/images/explore/8.jpg";
import exploreImg9 from "./assest/images/explore/9.jpg";
import exploreImg10 from "./assest/images/explore/10.jpg";
import exploreImg11 from "./assest/images/explore/11.jpg";
import exploreImg12 from "./assest/images/explore/12.jpg";

/* listings section images */
import listingImg1 from "./assest/images/listings/1.jpg";
import listingImg2 from "./assest/images/listings/2.jpg";
import listingImg3 from "./assest/images/listings/3.jpg";
import listingImg4 from "./assest/images/listings/4.jpg";
import listingImg5 from "./assest/images/listings/5.jpg";
import listingImg6 from "./assest/images/listings/6.jpg";
import listingImg7 from "./assest/images/listings/7.jpg";
import listingImg8 from "./assest/images/listings/8.jpg";
import listingImg9 from "./assest/images/listings/9.jpg";

/* testimonials section images */
import testimonialImg1 from "./assest/images/testimonials/1.jpg";
import testimonialImg2 from "./assest/images/testimonials/2.jpg";
/* blog section images */
import blogImg1 from "./assest/images/blog/1.jpg";
import blogImg2 from "./assest/images/blog/2.jpg";
import blogImg3 from "./assest/images/blog/3.jpg";
import blogImg4 from "./assest/images/blog/4.jpg";
import blogImg5 from "./assest/images/blog/5.jpg";
import blogImg6 from "./assest/images/blog/6.jpg";
import blogImg7 from "./assest/images/blog/7.jpg";
import blogImg8 from "./assest/images/blog/8.jpg";
import blogImg9 from "./assest/images/blog/9.jpg";
import blogImgAuthor_1 from "./assest/images/blog/author_1.jpg";
import blogImgAuthor_2 from "./assest/images/blog/author_2.jpg";
import blogImgAuthor_3 from "./assest/images/blog/author_3.jpg";
/* gallery images */
import galleryImg1 from "./assest/images/gallery/1.jpg";
import galleryImg2 from "./assest/images/gallery/2.jpg";
import galleryImg3 from "./assest/images/gallery/3.jpg";
import galleryImg4 from "./assest/images/gallery/4.jpg";
import galleryImg5 from "./assest/images/gallery/5.jpg";
import galleryImg6 from "./assest/images/gallery/6.jpg";
import Privacy_Policy from "./Privacy_Policy";
import ShoppingPage from "../ShoppingPage";




function Controller() {
  var exploreImagesSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  var testmonialImagesSetting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Router>
        <Header />
        <Routes>

          <Route
            path="/"
            element={
              <Home
                exploreImages={{
                  exploreImg1,
                  exploreImg2,
                  exploreImg3,
                  exploreImg4,
                  exploreImg5,
                }}
                listingImages={{
                  listingImg1,
                  listingImg2,
                  listingImg3,
                  listingImg4,
                  listingImg5,
                  listingImg6,
                }}
                testimonialImages={{ testimonialImg1, testimonialImg2 }}
                blogImages={{ blogImg1, blogImg2, blogImg3 }}
                sliderSetting={{
                  exploreImagesSettings,
                  testmonialImagesSetting,
                }}
              />
            }
          />
          <Route
            path="/home"
            element={
              <Home
                exploreImages={{
                  exploreImg1,
                  exploreImg2,
                  exploreImg3,
                  exploreImg4,
                  exploreImg5,
                }}
                listingImages={{
                  listingImg1,
                  listingImg2,
                  listingImg3,
                  listingImg4,
                  listingImg5,
                  listingImg6,
                }}
                testimonialImages={{ testimonialImg1, testimonialImg2 }}
                blogImages={{ blogImg1, blogImg2, blogImg3 }}
                sliderSetting={{
                  exploreImagesSettings,
                  testmonialImagesSetting,
                }}
              />
            }
          />
          <Route
            path="/explore"
            element={
              <Explore
                exploreImages={{
                  exploreImg1,
                  exploreImg2,
                  exploreImg3,
                  exploreImg4,
                  exploreImg5,
                  exploreImg6,
                  exploreImg7,
                  exploreImg8,
                  exploreImg9,
                  exploreImg10,
                  exploreImg11,
                  exploreImg12,
                }}
              />
            }
          />
          <Route
            path="/hotel"
            element={
              // eslint-disable-next-line react/jsx-pascal-case
              <Listing_Grid
                listingImages={{
                  listingImg1,
                  listingImg2,
                  listingImg3,
                  listingImg4,
                  listingImg5,
                  listingImg6,
                  listingImg7,
                  listingImg8,
                  listingImg9,
                }}
              />
            }
          />
          <Route
            path="/listing_grid_left"
            element={
              // eslint-disable-next-line react/jsx-pascal-case
              <Listing_Grid_Left
                listingImages={{
                  listingImg1,
                  listingImg2,
                  listingImg3,
                  listingImg4,
                  listingImg5,
                  listingImg6,
                }}
              />
            }
          />
          <Route
            path="/listing_grid_right"
            element={
              // eslint-disable-next-line react/jsx-pascal-case
              <Listing_Grid_Right
                listingImages={{
                  listingImg1,
                  listingImg2,
                  listingImg3,
                  listingImg4,
                  listingImg5,
                  listingImg6,
                }}
              />
            }
          />
          <Route
            path="/listing_details"
            element={
              // eslint-disable-next-line react/jsx-pascal-case
              <Listing_Details
                listingImages={{
                  listingImg1,
                  listingImg2,
                  listingImg3,
                  listingImg4,
                  blogImgAuthor_1,
                  blogImgAuthor_2,
                  blogImgAuthor_3,
                  galleryImg1,
                  galleryImg2,
                  galleryImg3,
                  galleryImg4,
                  galleryImg5,
                  galleryImg6,
                }}
              />
            }
          />
          <Route
            path="/blog_grid"
            element={
              // eslint-disable-next-line react/jsx-pascal-case
              <Blog_Grid
                blogImages={{
                  blogImg1,
                  blogImg2,
                  blogImg3,
                  blogImg4,
                  blogImg5,
                  blogImg6,
                  blogImg7,
                  blogImg8,
                  blogImg9,
                }}
              />
            }
          />
          <Route
            path="/blog_grid_left"
            element={
              // eslint-disable-next-line react/jsx-pascal-case
              <Blog_Grid_Left
                blogImages={{
                  blogImg1,
                  blogImg2,
                  blogImg3,
                  blogImg4,
                  blogImg5,
                  blogImg6,
                }}
              />
            }
          />
          <Route
            path="/blog_grid_right"
            element={
              // eslint-disable-next-line react/jsx-pascal-case
              <Blog_Grid_Right
                blogImages={{
                  blogImg1,
                  blogImg2,
                  blogImg3,
                  blogImg4,
                  blogImg5,
                  blogImg6,
                }}
              />
            }
          />
          <Route
            path="/blog_details"
            element={
              // eslint-disable-next-line react/jsx-pascal-case
              <Blog_Details
                blogImages={{
                  blogImg1,
                  blogImg2,
                  blogImg4,
                  blogImgAuthor_1,
                  blogImgAuthor_2,
                  blogImgAuthor_3,
                }}
              />
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Forgot" element={<ForgotPassword />} />
          <Route
            path="/services"
            element={
              <Services
                testimonialImages={{ testimonialImg1, testimonialImg2 }}
                sliderSetting={testmonialImagesSetting}
              />
            }
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shopping" element={<ShoppingPage />} />
          <Route path="/privacy_policy" element={<Privacy_Policy />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default Controller;
