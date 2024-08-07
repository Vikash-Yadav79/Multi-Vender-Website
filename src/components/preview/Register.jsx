import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Api from "../Api";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const { username, email, password } = formData;
    const newErrors = {};

    if (!username) newErrors.username = "Username is required";
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email address is invalid";
    }
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
      // Assuming your base URL is already set up in Axios
      const response = await Api.post("/api/register", formData);
      console.log("Registration successful:", response.data);
      // Redirect to login page or dashboard after successful registration
      navigate("/login");
    } catch (error) {
      console.error("Registration failed:", error);
      setErrors({ apiError: "Registration failed. Please try again." });
    }
  };

  return (
    <>
      <div className="section-bg section-padding subheader">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="page-title">Register / SignUp</h1>
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
                <h3>SignUp</h3>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group">
                        <label>Username</label>
                        <input
                          type="text"
                          name="username"
                          className="form-control form-control-custom"
                          placeholder="Username"
                          value={formData.username}
                          onChange={handleChange}
                          required
                        />
                        {errors.username && (
                          <small className="text-danger">{errors.username}</small>
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
