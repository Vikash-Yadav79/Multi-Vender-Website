// import React from "react";
// import { useNavigate } from "react-router-dom";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// function Home(props) {
//   const navigate = useNavigate();

//   // Array of services with paths corresponding to the routes
//   const exploreServices = [
//     { img: props.exploreImages.exploreImg1, label: "Plumber", path: "/plumber" },
//     { img: props.exploreImages.exploreImg2, label: "Doctor", path: "/doctors" },
//     { img: props.exploreImages.exploreImg3, label: "Accountant", path: "/accountent" },
//     { img: props.exploreImages.exploreImg4, label: "AC Repair", path: "/acrepair" }
//   ];

//   const popularServices = exploreServices.slice(0, 3); // Select any 3 services for Popular Services

//   // Function to handle click and navigate to the corresponding page
//   const handleServiceClick = (path) => {
//     navigate(path);
//   };

//   const renderServiceSection = (services, sectionLabel) => (
//     <div className={`section ${sectionLabel.toLowerCase()}`}>
//       <div className="container">
//         <div className="section-header">
//           <h3 className="title">
//             {sectionLabel} <span>Services</span>
//           </h3>
//           <p className="text">Explore our top-rated services that clients love.</p>
//         </div>
//         <div className={`row ${sectionLabel.toLowerCase()}_slider`}>
//           <Slider {...props.sliderSetting.exploreImagesSettings}>
//             {services.map((item, index) => (
//               <div key={index} className="px-2 slide_item">
//                 <div className="explore_box">
//                   <div className="explore_image">
//                     <div
//                       className="d-flex h-100"
//                       onClick={() => handleServiceClick(item.path)}
//                       style={{ cursor: 'pointer' }}
//                     >
//                       <img src={item.img} alt={item.label} className="image-fit" />
//                     </div>
//                   </div>
//                   <div className="explore_text">
//                     <div className="rating">
//                       <i className="bi-star-fill"></i>
//                       <i className="bi-star-fill"></i>
//                       <i className="bi-star-fill"></i>
//                       <i className="bi-star-fill"></i>
//                       <i className="bi-star"></i>
//                     </div>
//                     <h5 className="title">
//                       <div
//                         onClick={() => handleServiceClick(item.path)}
//                         style={{ cursor: 'pointer' }}
//                       >
//                         {item.label}
//                       </div>
//                     </h5>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <>
//       {/* Banner Section */}
//       <div className="single_banner section-bg">
//         <div className="relative text-center">
//           <div className="container">
//             <div className="banner_text">
//               <h1 className="title">
//                 Discover Services <span className="thm-color-one fw-lighter">Near You</span>
//               </h1>
//               <p className="subtitle">Home Delivery, Lead and Rent</p>
//             </div>
//             <div className="row justify-content-center">
//               <div className="col-lg-10">
//                 <div className="banner_form">
//                   <div className="input-group">
//                     <input
//                       type="text"
//                       className="form-control"
//                       placeholder="What are you looking for?"
//                       autoComplete="off"
//                       required
//                     />
//                     <select className="form-control custom-select" required>
//                       <option value="" disabled selected>Select a Category</option>
//                       <option value="electronics">Electronics</option>
//                       <option value="fashion">Fashion</option>
//                       <option value="home_appliances">Home Appliances</option>
//                       <option value="books">Books</option>
//                       <option value="toys">Toys</option>
//                     </select>
//                     <input
//                       type="text"
//                       className="form-control location_input"
//                       placeholder="Location"
//                       autoComplete="off"
//                       required
//                     />
//                     <div className="input-group-append ms-lg-3 ms-sm-2 mb-xl-30">
//                       <button type="submit" className="thm-btn w-100">
//                         <i className="fal fa-search"></i> Search
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <form className="row justify-content-center banner_form g-2">
//               {exploreServices.map((item, index) => (
//                 <div key={index} className="col-auto">
//                   <div className="form-group form-radio">
//                     <input
//                       className="form-radio-input"
//                       type="radio"
//                       name="category"
//                       value={item.label}
//                       id={`radio_${index}`}
//                     />
//                     <label className="form-radio-label" htmlFor={`radio_${index}`}>
//                       <div>
//                         <img src={item.img} alt="" style={{ height: "100px" }} />
//                         <p className="mb-0 py-1">{item.label}</p>
//                       </div>
//                     </label>
//                   </div>
//                 </div>
//               ))}
//             </form>
//           </div>
//         </div>
//         <span className="left_skew"></span>
//         <span className="right_skew"></span>
//       </div>

//       {/* Explore Section - Showing 4 services */}
//       {renderServiceSection(exploreServices, "Explore")}

//       {/* Popular Services Section - Showing 3 services */}
//       {renderServiceSection(popularServices, "Popular")}

//       {/* How It Works Section */}
//       <section className="section-padding section-bg-fix section-how-it-works">
//         <div className="container">
//           <div className="section-header text-white">
//             <h3 className="title">
//               How it <span>Works</span>
//             </h3>
//             <p className="text">Explore our top-rated services that clients love.</p>
//           </div>
//           <div className="row justify-content-center">
//             {/* Sample Work Items */}
//             <div className="col-lg-4 col-md-6">
//               <div className="hw_it_works_box">
//                 <div className="icon">
//                   <i className="fal fa-search"></i>
//                 </div>
//                 <div className="text">
//                   <h6 className="title mb-1">Search Services</h6>
//                   <p className="mb-0">Sed consequat sapien faus quam bibendum convallis.</p>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-4 col-md-6">
//               <div className="hw_it_works_box">
//                 <div className="icon">
//                   <i className="fas fa-user-cog"></i>
//                 </div>
//                 <div className="text">
//                   <h6 className="title mb-1">Choose Services</h6>
//                   <p className="mb-0">Sed consequat sapien faus quam bibendum convallis.</p>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-4 col-md-6">
//               <div className="hw_it_works_box">
//                 <div className="icon">
//                   <i className="fal fa-money-bill-alt"></i>
//                 </div>
//                 <div className="text">
//                   <h6 className="title mb-1">Payment</h6>
//                   <p className="mb-0">Sed consequat sapien faus quam bibendum convallis.</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Home;
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home(props) {
  const navigate = useNavigate();
  const [exploreServices, setExploreServices] = useState([]);
  const [popularServices, setPopularServices] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch services data from the API
  useEffect(() => {
    axios.get('https://amanyademo.in.net/e_vendor_app/api/get-all-service-listing')
      .then((response) => {
        const data = response.data;
        if (data.status) {
          setExploreServices(data.ServicesListings);
          setPopularServices(data.ServicesListings.slice(0, 3));
        } else {
          console.error("Failed to fetch services:", data.message);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  // Function to handle click and navigate to the corresponding page
  const handleServiceClick = (category) => {
    navigate(`/service-professionals/${category}`);
  };

  const renderServiceSection = (services, sectionLabel) => (
    <div className={`section ${sectionLabel.toLowerCase()}`}>
      <div className="container">
        <div className="section-header">
          <h3 className="title">
            {sectionLabel} <span>Services</span>
          </h3>
          <p className="text">Explore our top-rated services that clients love.</p>
        </div>
        <div className={`row ${sectionLabel.toLowerCase()}_slider`}>
          <Slider {...props.sliderSetting.exploreImagesSettings}>
            {services.map((item, index) => (
              <div key={index} className="px-2 slide_item">
                <div className="explore_box">
                  <div
                    className="d-flex h-100"
                    onClick={() => handleServiceClick(item.job_profile)}
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      src={`https://amanyademo.in.net/e_vendor_app/public/upload/${item.image}`}
                      alt={item.job_profile}
                      style={{ height: "100%" }}
                    />
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
                      <div
                        onClick={() => handleServiceClick(item.id)}
                        style={{ cursor: "pointer" }}
                      >
                        {item.job_profile}
                      </div>
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
                      <option value="" disabled selected>Select a Category</option>
                      <option value="electronics">Electronics</option>
                      <option value="fashion">Fashion</option>
                      <option value="home_appliances">Home Appliances</option>
                      <option value="books">Books</option>
                      <option value="toys">Toys</option>
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
              {exploreServices.map((item, index) => (
                <div key={index} className="col-auto">
                  <div className="form-group form-radio">
                    <input
                      className="form-radio-input"
                      type="radio"
                      name="category"
                      value={item.job_profile}
                      id={`radio_${index}`}
                    />
                    <label className="form-radio-label" htmlFor={`radio_${index}`}>
                      <div>
                        <img
                          src={`https://amanyademo.in.net/e_vendor_app/public/upload/${item.image}`}
                          alt={item.job_profile}
                          style={{ height: "100px" }}
                        />
                        <p className="mb-0 py-1">{item.job_profile}</p>
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

      {/* Explore Section - Showing 4 services */}
      {renderServiceSection(exploreServices, "Explore")}

      {/* Popular Services Section - Showing 3 services */}
      {renderServiceSection(popularServices, "Popular")}

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



















