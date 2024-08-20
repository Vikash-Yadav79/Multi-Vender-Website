// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// function Explore() {
//   const [services, setServices] = useState([]);
//   const [error, setError] = useState("");

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
//       {/* <!-- Subheader Start --> */}
//       <div className="section-bg section-padding subheader">
//         <div className="container">
//           <div className="row">
//             <div className="col-12">
//               <h1 className="page-title">Explore</h1>
//               <nav aria-label="breadcrumb">
//                 <ol className="breadcrumb">
//                   <li className="breadcrumb-item">
//                     <Link to="/home">Home</Link>
//                   </li>
//                   <li className="breadcrumb-item active" aria-current="page">
//                     Explore
//                   </li>
//                 </ol>
//               </nav>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* <!-- Subheader End --> */}

//       {/* <!-- Section Start --> */}
//       <section className="section-padding">
//         <div className="container">
//           {/* <!-- Header for Explore Items --> */}
//           <div className="section-header">
//             <h3 className="title">
//               Discover Our <span>Featured Locations</span>
//             </h3>
//             <p className="text">
//               Explore our curated selection of top destinations. Click on each location to view available listings and more details.
//             </p>
//           </div>

//           {/* <!-- Display error if any --> */}
//           {error && (
//             <div className="error-message">
//               <p>{error}</p>
//             </div>
//           )}

//           <div className="row">
//             {services.map((service) => (
//               <div className="col-lg-3 col-sm-6" key={service.id}>
//                 <div className="explore_box">
//                   <div className="explore_image">
//                     <Link to={`/service/${service.id}`} className="d-flex h-100">
//                       <img
//                         src={`https://amanyademo.in.net/e_vendor_app/public/upload/${service.image}`}
//                         alt={service.job_profile}
//                         className="image-fit"
//                       />
//                     </Link>
//                   </div>
//                   <div className="explore_text">
//                     <div className="rating">
//                       {[...Array(5)].map((_, i) => (
//                         <i
//                           className={`bi-star${i < service.rating ? '-fill' : ''}`}
//                           key={i}
//                         ></i>
//                       ))}
//                     </div>
//                     <h5 className="title">
//                       <Link to={`/service/${service.id}`}>{service.job_profile}</Link>
//                     </h5>
//                   </div>
//                   <span className="listing_badge thm-btn btn-small">
//                     {service.listings} Listings
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Explore;

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Explore() {
  const [services, setServices] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://amanyademo.in.net/e_vendor_app/api/get-all-service-listing')
      .then(response => {
        console.log('Response Status:', response.status);
        console.log('Response URL:', response.url);

        // Check if response is HTML
        if (response.headers.get('content-type')?.includes('text/html')) {
          return response.text().then(text => {
            console.error('HTML Response:', text);
            setError('Expected JSON, but received HTML');
            throw new Error('Expected JSON, but received HTML');
          });
        }

        // Attempt to parse as JSON
        return response.json();
      })
      .then(data => {
        // Check if the response contains an error or invalid structure
        if (data.status !== true) {
          throw new Error(data.message || 'Unexpected response format');
        }

        // Check if `Services` is an array and not empty
        if (!Array.isArray(data.ServicesListings)) {
          throw new Error('Expected `Services` to be an array');
        }

        setServices(data.ServicesListings);
      })
      .catch(err => {
        console.error('Error fetching data:', err);
        setError(err.message || 'An unknown error occurred');
      });
  }, []);

  // Function to handle service click
  const handleServiceClick = (category) => {
    navigate(`/service-professionals/${category}`);
  };

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
      {/* <!-- Subheader End --> */}

      {/* <!-- Section Start --> */}
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

          {/* <!-- Display error if any --> */}
          {error && (
            <div className="error-message">
              <p>{error}</p>
            </div>
          )}

          <div className="row">
            {services.map((service) => (
              <div className="col-lg-3 col-sm-6" key={service.id}>
                <div className="explore_box">
                  <div className="explore_image">
                    <div
                      className="d-flex h-100"
                      onClick={() => handleServiceClick(service.job_profile)}
                      style={{ cursor: 'pointer' }}
                    >
                      <img
                        src={`https://amanyademo.in.net/e_vendor_app/public/upload/${service.image}`}
                        alt={service.job_profile}
                        className="image-fit"
                      />
                    </div>
                  </div>
                  <div className="explore_text">
                    <div className="rating">
                      {[...Array(5)].map((_, i) => (
                        <i
                          className={`bi-star${i < service.rating ? '-fill' : ''}`}
                          key={i}
                        ></i>
                      ))}
                    </div>
                    <h5 className="title">
                      <div
                        onClick={() => handleServiceClick(service.id)}
                        style={{ cursor: 'pointer' }}
                      >
                        {service.job_profile}
                      </div>
                    </h5>
                  </div>
                  <span className="listing_badge thm-btn btn-small">
                    {service.listings} Listings
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Explore;
