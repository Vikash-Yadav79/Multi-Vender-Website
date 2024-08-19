import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Api from '../Api';

function Register() {
  const { type } = useParams(); // Get the registration type from the URL
  console.log('Register component type:', type); // Debug log
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const { name, email, phone, gender, password } = formData;
    const newErrors = {};

    if (!name) newErrors.name = "Name is required";
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email address is invalid";
    }
    if (!phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(phone)) {
      newErrors.phone = "Phone number is invalid";
    }
    if (!gender) newErrors.gender = "Gender is required";
    if (!password) newErrors.password = "Password is required";

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    try {
      const apiEndpoint = type === "service-provider"
        ? "/create-service-provider"
        : "/create-user";

      const response = await Api.post(apiEndpoint, formData);

      // Assuming the response data is in the expected format
      if (response.data.status === false) {
        // Map errors to the appropriate fields or display them generically
        const apiErrors = response.data.errors.reduce((acc, error) => {
          // Customize this logic based on how you want to map errors to fields
          if (error.includes("email")) acc.email = error;
          if (error.includes("phone")) acc.phone = error;
          // Add more mapping as needed
          return acc;
        }, {});

        setErrors(apiErrors);
      } else {
        alert(response.data.message);
        navigate("/login");
      }
    } catch (error) {
      console.error("Registration failed:", error.response?.data || error);
      setErrors({ apiError: "Registration failed. Please try again." });
    }
  };


  return (
    <>
      <div className="section-bg section-padding subheader">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="page-title">
                Register as {type === "service-provider" ? "Service Provider" : "User"}
              </h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/home">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Register / SignUp
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="sign_in_up_box thm-bg-color-light">
                <h3>SignUp as {type === "service-provider" ? "Service Provider" : "User"}</h3>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group">
                        <label>Name</label>
                        <input
                          type="text"
                          name="name"
                          className="form-control form-control-custom"
                          placeholder="Name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                        {errors.name && (
                          <small className="text-danger">{errors.name}</small>
                        )}
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label>Email</label>
                        <input
                          type="email"
                          name="email"
                          className="form-control form-control-custom"
                          placeholder="Email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                        {errors.email && (
                          <small className="text-danger">{errors.email}</small>
                        )}
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label>Phone</label>
                        <input
                          type="text"
                          name="phone"
                          className="form-control form-control-custom"
                          placeholder="Phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                        {errors.phone && (
                          <small className="text-danger">{errors.phone}</small>
                        )}
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label>Gender</label>
                        <select
                          name="gender"
                          className="form-control form-control-custom"
                          value={formData.gender}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                        {errors.gender && (
                          <small className="text-danger">{errors.gender}</small>
                        )}
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label>Password</label>
                        <input
                          type="password"
                          name="password"
                          className="form-control form-control-custom"
                          placeholder="Password"
                          value={formData.password}
                          onChange={handleChange}
                          required
                        />
                        {errors.password && (
                          <small className="text-danger">{errors.password}</small>
                        )}
                      </div>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="thm-btn w-100">
                        SignUp
                      </button>
                      {errors.apiError && (
                        <p className="mt-3 mb-0 text-center text-danger fw-500">
                          {errors.apiError}
                        </p>
                      )}
                      <p className="mt-3 mb-0 text-center fw-500">
                        Already have an account?{" "}
                        <Link to="/login" className="thm-color-one">
                          Login
                        </Link>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;
