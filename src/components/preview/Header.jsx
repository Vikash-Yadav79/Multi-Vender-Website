import React, { useState } from "react";
// import logo from "./assest/images/simpexLogo.jpg";
// import logo_two from "./assest/images/logo_two.png";
import companyLogo from "./assest/images/companyLogo.jpg"
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import toast from "react-hot-toast";

import axios from "axios";

function Navbar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const options = [
    "ACCOUNTANT",
    "ACTUARY",
    "ADVISOR",
    "AIDE",
    "ANIMATOR",
    "ARCHER",
    "ARTIST",
    "ASTRONAUT",
    "ASTRONOMER",
    "ATHLETE",
    "ATTORNEY",
    "AUCTIONEER",
    "AUTHOR",
    "AC REPAIR",
   
  ];

  const [jobOptions, setJobOptions] = useState(options.sort());

  const [formData, setFormData] = useState({
    NAME: "",
    EMAIL: "",
    PHONE: "",
    CATEGORIES: "",
    JOB_PROFILE: "",
    // IMAGE: "",
    // VIDEO: "",
  });



  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://amanyademo.in.net/e_vendor_app/api/create-service-listing",
        formData
      );

      if (response.status === 201) {
        toast.success("List Added Successfully...");
        handleClose();
      } else {
        toast.info(`List added with status ${response.status}`);
        handleClose();
      }
    } catch (error) {
      if (error.response) {
        // Server responded with an error
        console.error('Error response data:', error.response.data);
        console.error('Error response status:', error.response.status);
        console.error('Error response headers:', error.response.headers);

        const { message, errors } = error.response.data;

        // Show the general error message
        toast.error(`Error: ${message || 'An error occurred'}`);

        // Display validation errors if available
        if (errors && Array.isArray(errors)) {
          errors.forEach((err, index) => {
            // Assuming errors is an array of strings
            toast.error(`Validation Error ${index + 1}: ${err}`);
          });
        } else if (typeof errors === 'object') {
          // Assuming errors is an object with field-specific messages
          for (const [field, errorMessages] of Object.entries(errors)) {
            errorMessages.forEach((errorMessage, index) => {
              toast.error(`${field}: ${errorMessage}`);
            });
          }
        }
      } else if (error.request) {
        // Network error (request was made but no response received)
        console.error('Error request data:', error.request);
        toast.error('No response received from server.');
      } else {
        // Error setting up the request
        console.error('Error message:', error.message);
        toast.error(`Error: ${error.message}`);
      }

      handleClose();
    }
  };



  return (
    <>
      {/* <!-- Header Start --> */}
      <header className="header can-sticky">
        <div className="container ">
          <div className="header_inner">
            {/* <!-- logo --> */}
            <div className="logo">
              <Link to="/" className="d-flex h-100">
                {/* <img src={logo} alt="logo" className="image-fit-contain" /> */}
                <img src={companyLogo} alt="logo" className="image-fit-contain" />
              </Link>
            </div>
            {/* <!-- logo --> */}
            {/* <!-- Nav & Actions --> */}
            <div className="nav_actions">
              {/* <!-- Navigation --> */}
              <nav className="navigation">
                <ul className="main-menu">
                  <li className="menu-item">
                    <Link to="/home" className="active">
                      Home
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/explore">Explore</Link>
                  </li>
                
                  <li className="menu-item ">
                    <Link to="/blog_details">Blog</Link>
                  
                  </li>
                  <li className="menu-item menu-item-has-children">
                    <Link to="#">Services</Link>
                    <ul className="sub-menu">
                      <li className="menu-item">
                        <Link to="/services"> All Services</Link>
                      </li>
                    
                    </ul>
                  </li>
                  <li className="menu-item">
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </nav>
              {/*      <!-- Navigation --> */}
              {/*  <!-- Header Actions --> */}
              <div className="header_actions">
                <ul>
                  <li>
                    <Link to="/login" className="login_btn">
                      <i className="fal fa-user-circle me-2"></i>
                      Sign In
                    </Link>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="thm-btn btn-rounded"
                      onClick={handleShow}
                    >
                      <i className="bi-plus"></i>
                      <Link to="/listing" className="text-light">
                        Add Listing
                      </Link>
                    </button>
                  </li>
                </ul>
                <div className="hamburger">
                  <div className="hamburger_btn">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
              {/* <!-- Header Actions --> */}
            </div>
            {/*     <!-- Nav & Actions --> */}
          </div>
        </div>
      </header>
      {/*  <!-- Header End --> */}

      {/* modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Listing</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="NAME"
                placeholder="NAME"
                className="form-control"
                value={formData.NAME}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="EMAIL"
                placeholder="EMAIL"
                className="form-control"
                value={formData.EMAIL}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                name="PHONE"
                placeholder="PHONE"
                className="form-control"
                value={formData.PHONE}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <select
                name="CATEGORIES"
                className="form-control"
                onChange={handleChange}
              >
                <option value="">CATEGORIES</option>
                <option value="SERVICES">SERVICES</option>
                <option value="LEASE">LEASE</option>
                <option value="RENT">RENT</option>
                <option value="PROFESSIONAL">PROFESSIONAL</option>
              </select>
            </div>
            <div className="form-group">
              <select
                name="JOB_PROFILE"
                className="form-control"
                onChange={handleChange}
              >
                <option value="">LIST YOUR JOB PROFILE</option>
                {jobOptions.map((items, index) => {
                  return (
                    <option value={items} key={index}>
                      {items}
                    </option>
                  );
                })}
              </select>
            </div>
            <Modal.Footer>
              <Button variant="secondary" className="text-light" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" type="submit" className="text-light">
                Add
              </Button>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Navbar;
