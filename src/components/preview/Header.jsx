
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import toast from "react-hot-toast";
import axios from "axios";
import companyLogo from "./assest/images/companyLogo.jpg";
import './Header.css'; // Import a custom CSS file for additional styling

function Navbar() {
  const [show, setShow] = useState(false);
  const [userRole, setUserRole] = useState(""); // State to hold the user role
  const [username, setUsername] = useState(""); // State to hold the username
  const navigate = useNavigate(); // To redirect users after logout
  const login_profile = JSON.parse(localStorage.getItem("serviceProvidersProfile"));
  const loginData = login_profile.ServiceProviders;
  useEffect(() => {
    const role = localStorage.getItem("userRole");
    const email = localStorage.getItem("userEmail");
    setUserRole(role);
    setUsername(email ? email.split('@')[0] : ""); // Display only the part before '@'


  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const options = [
    "ACCOUNTANT", "ACTUARY", "ADVISOR", "AIDE", "ANIMATOR",
    "ARCHER", "ARTIST", "ASTRONAUT", "ASTRONOMER", "ATHLETE",
    "ATTORNEY", "AUCTIONEER", "AUTHOR", "AC REPAIR"
  ];

  const [jobOptions, setJobOptions] = useState(options.sort());
  const [formData, setFormData] = useState({
    user_id: loginData.id,
    catgory_id: "",
    job_profile: "",
    profile_image: ""
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

      if (response.data.status === true) {
        alert(response.data.message);
        handleClose();
        setFormData({
          user_id: loginData.id,
          catgory_id: 3,
          job_profile: "",
        });
      } else if (response.data.status === false) {
        // Handle validation errors
        if (response.data.errors && response.data.errors.length > 0) {
          response.data.errors.forEach(error => {
            toast.error(error); // Display each error
          });
        } else {
          toast.error(response.data.message || "Validation Error");
        }
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occurred while adding the listing");
    }
  };


  const handleLogout = () => {
    // Clear user data from local storage
    localStorage.removeItem("userEmail");
    localStorage.removeItem("authToken");
    localStorage.removeItem("userRole");

    // Redirect to login page
    navigate("/login");
  };



  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src={companyLogo}
              alt="Logo"
              style={{ height: "50px", width: "50px" }}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/explore">
                  Explore
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              {!username ? (
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Sign In
                  </Link>
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <span className="nav-link">Welcome, {username}</span>
                  </li>
                  <li className="nav-item">
                    <Button variant="primary" onClick={handleLogout} className="mx-2">
                      Logout
                    </Button>
                  </li>
                  {userRole === "service_provider" && (
                    <li className="nav-item">
                      <Button variant="primary" onClick={handleShow} className="mx-2">
                        Add Listing
                      </Button>
                    </li>
                  )}
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Your Service Listing</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"

                className="form-control"
                placeholder="Your Name"
                value={loginData.name}
              // onChange={handleChange}

              />

            </div>
            <div className="form-group">
              <input
                type="email"

                className="form-control"
                placeholder="Your Email"
                value={loginData.email}
                readOnly={true}
              />
            </div>
            <div className="form-group">
              <input
                type="text"

                className="form-control"
                placeholder="Your Phone"
                value={loginData.phone}
                readOnly={true}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="catgory_id"
                className="form-control"
                placeholder="Categories"
                value={formData.catgory_id}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <select
                name="job_profile"
                className="form-control"
                onChange={handleChange}
                value={formData.job_profile}
                required
              >
                <option value="">List Your Job Profile</option>
                {jobOptions.map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" type="submit">
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
