// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// // Slider settings
// const sliderSettings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 3000,
// };

// function Services() {
//   const [error, setError] = useState([]);
//   const [services, setServices] = useState([]);
//   const [testimonials, setTestimonials] = useState([
//     {
//       img: 'path/to/old-testimonial-image1.jpg',
//       comment: 'This is an old testimonial comment.',
//       name: 'John Doe',
//       location: 'New York'
//     },
//     {
//       img: 'path/to/old-testimonial-image2.jpg',
//       comment: 'Another old testimonial comment.',
//       name: 'Jane Smith',
//       location: 'Los Angeles'
//     }
//   ]);

//   useEffect(() => {
//     fetch('https://amanyademo.in.net/e_vendor_app/api/get-all-service')
//       .then(response => {
//         console.log('Response Status:', response.status);
//         console.log('Response URL:', response.url);

//         // Check if response is HTML
//         if (response.headers.get('content-type')?.includes('text/html')) {
//           return response.text().then(text => {
//             console.error('HTML Response:', text);
//             setError('Expected JSON, but received HTML');
//             throw new Error('Expected JSON, but received HTML');
//           });
//         }

//         // Attempt to parse as JSON
//         return response.json();
//       })
//       .then(data => {
//         // Check if the response contains an error or invalid structure
//         if (data.status !== true) {
//           throw new Error(data.message || 'Unexpected response format');
//         }

//         // Check if `Services` is an array and not empty
//         if (!Array.isArray(data.Services)) {
//           throw new Error('Expected `Services` to be an array');
//         }

//         setServices(data.Services);
//       })
//       .catch(err => {
//         console.error('Error fetching data:', err);
//         setError(err.message || 'An unknown error occurred');
//       });
//   }, []);
//   return (
//     <>
//       {/* Subheader Start */}
//       <div className="section-bg section-padding subheader">
//         <div className="container">
//           <div className="row">
//             <div className="col-12">
//               <h1 className="page-title">Services</h1>
//               <nav aria-label="breadcrumb">
//                 <ol className="breadcrumb">
//                   <li className="breadcrumb-item">
//                     <Link to="/home">Home</Link>
//                   </li>
//                   <li className="breadcrumb-item active" aria-current="page">
//                     Services
//                   </li>
//                 </ol>
//               </nav>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Subheader End */}

//       {/* Services Start */}
//       <section className="section-padding">
//         <div className="container">
//           <div className="row">
//             {services.map(service => (
//               <div className="col-lg-3 col-sm-6" key={service.id}>
//                 <div className="service_box">
//                   <img
//                     src={`https://amanyademo.in.net/e_vendor_app/public/upload/${service.image}`}
//                     alt={service.job_profile}
//                   />
//                   <h5 className="title">
//                     <Link to="/services">{service.job_profile}</Link>
//                   </h5>
//                   {/* <p className="mb-0 text fw-500">
//                     <span className="thm-color-one">${service.price || 'Price Not Available'}</span>
//                     Start From
//                   </p> */}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//       {/* Services End */}

//       {/* How It Works Start */}
//       <section className="section-padding section-bg-fix section-how-it-works">
//         <div className="container">
//           <div className="section-header text-white">
//             <h3 className="title">
//               How it <span>Works</span>
//             </h3>
//             <p className="text">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//             </p>
//           </div>
//           <div className="row justify-content-center">
//             <div className="col-lg-4 col-md-6">
//               <div className="hw_it_works_box">
//                 <div className="icon">
//                   <i className="fal fa-search"></i>
//                 </div>
//                 <div className="text">
//                   <h6 className="title mb-1">Search Restaurant</h6>
//                   <p className="mb-0">
//                     Sed consequat sapien faus quam bibendum convallis.
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-4 col-md-6">
//               <div className="hw_it_works_box">
//                 <div className="icon">
//                   <i className="fal fa-hamburger"></i>
//                 </div>
//                 <div className="text">
//                   <h6 className="title mb-1">Choose Menu</h6>
//                   <p className="mb-0">
//                     Sed consequat sapien faus quam bibendum convallis.
//                   </p>
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
//                   <p className="mb-0">
//                     Sed consequat sapien faus quam bibendum convallis.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* How It Works End */}

//       {/* Testimonials Start */}
//       <section className="section section-bg no-overlay">
//         <div className="container">
//           <div className="section-header">
//             <h3 className="title">
//               What Clients <span>say</span>
//             </h3>
//             <p className="text">
//               Our clients have shared their positive experiences working with us. Here are some of their testimonials:
//             </p>
//           </div>
//           <div className="row testimonial_slider">
//             <Slider {...sliderSettings}>
//               {testimonials.map((testimonial, index) => (
//                 <div className="px-3 slide_item" key={index}>
//                   <div className="testimonial_item">
//                     <div className="author_image">
//                       <img
//                         src={testimonial.img}
//                         alt="img"
//                         className="image-fit"
//                       />
//                     </div>
//                     <div className="testimonial_text">
//                       <p className="comment">
//                         {testimonial.comment}
//                       </p>
//                       <div className="author_info">
//                         <h6 className="name mb-0">{testimonial.name}</h6>
//                         <p>{testimonial.location}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </Slider>
//           </div>
//         </div>
//       </section>
//       {/* Testimonials End */}
//     </>
//   );
// }

// export default Services;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Slider settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

function Services() {
  const [error, setError] = useState([]);
  const [services, setServices] = useState([]);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    // Fetch services
    fetch('https://amanyademo.in.net/e_vendor_app/api/get-all-service')
      .then(response => response.json())
      .then(data => setServices(data.Services))
      .catch(err => console.error('Error fetching services:', err));

    // Fetch testimonials from the API
    fetch('https://admin.amanyademo.in.net/api/testimonials')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch testimonials');
        }
        return response.json();
      })
      .then(data => setTestimonials(data))
      .catch(err => {
        console.error('Error fetching testimonials:', err);
        setError('Failed to load testimonials');
      });
  }, []);

  return (
    <>
      {/* Subheader Start */}
      <div className="section-bg section-padding subheader">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="page-title">Services</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/home">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Services
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* Subheader End */}

      {/* Services Start */}
      <section className="section-padding">
        <div className="container">
          <div className="row">
            {services.map(service => (
              <div className="col-lg-3 col-sm-6" key={service.id}>
                <div className="service_box">
                  <img
                    src={`https://amanyademo.in.net/e_vendor_app/public/upload/${service.image}`}
                    alt={service.job_profile}
                  />
                  <h5 className="title">
                    <Link to="/services">{service.job_profile}</Link>
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Services End */}

      {/* Testimonials Start */}
      <section className="section section-bg no-overlay">
        <div className="container">
          <div className="section-header">
            <h3 className="title">
              What Clients <span>say</span>
            </h3>
            <p className="text">
              Our clients have shared their positive experiences working with us. Here are some of their testimonials:
            </p>
          </div>
          <div className="row testimonial_slider">
            <Slider {...sliderSettings}>
              {testimonials.map((testimonial, index) => (
                <div className="px-3 slide_item" key={index}>
                  <div className="testimonial_item">
                    <div className="author_image">
                      <img
                        src={testimonial.img}
                        alt="img"
                        className="image-fit"
                      />
                    </div>
                    <div className="testimonial_text">
                      <p className="comment">
                        {testimonial.comment}
                      </p>
                      <div className="author_info">
                        <h6 className="name mb-0">{testimonial.name}</h6>
                        <p>{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
      {/* Testimonials End */}
    </>
  );
}

export default Services;

