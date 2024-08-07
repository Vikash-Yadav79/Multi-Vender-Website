import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Api from "../Api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    let errors = {};
    let isValid = true;

    if (!email) {
      isValid = false;
      errors["email"] = "Please enter your email.";
    } else if (typeof email !== "undefined") {
      const pattern = new RegExp(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
      );
      if (!pattern.test(email)) {
        isValid = false;
        errors["email"] = "Please enter valid email.";
      }
    }

    if (!password) {
      isValid = false;
      errors["password"] = "Please enter your password.";
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      setLoading(true);

      try {
        const response = await Api.post("https://api.example.com/login", {
          email,
          password,
        });

        if (response.data.success) {
          navigate("/dashboard"); // Redirect to dashboard or desired page
        } else {
          alert(response.data.message);
        }
      } catch (error) {
        console.error("There was an error logging in!", error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <>
      <div className="section-bg section-padding subheader">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="page-title">Login / SignIn</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/home">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Login / SignIn
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
                <h3>Log In</h3>
                <div className="row">
                  <div className="col-md-6">
                    <button type="button" className="thm-btn w-100 mb-xl-30">
                      <i className="fab fa-facebook-f ms-0 me-4"></i>
                      Login with Facebook
                    </button>
                  </div>
                  <div className="col-md-6">
                    <button type="button" className="thm-btn w-100 mb-xl-30">
                      <i className="fab fa-google ms-0 me-4"></i>
                      Login with Google
                    </button>
                  </div>
                </div>
                <span className="divider_text">Or Login with</span>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group">
                        <label>Email/username</label>
                        <input
                          type="email"
                          name="email"
                          className="form-control form-control-custom"
                          placeholder="Email I'd"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          autoComplete="off"
                          required
                        />
                        <div className="text-danger">{errors.email}</div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label>
                          Password{" "}
                          <Link to="/forgot" className="thm-color-one">
                            Forgot Password?
                          </Link>
                        </label>
                        <input
                          type="password"
                          name="password"
                          className="form-control form-control-custom"
                          id="password_value"
                          placeholder="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          autoComplete="off"
                          required
                        />
                        <div className="text-danger">{errors.password}</div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group mb-3">
                        <div className="custom-control form-check-radio me-sm-2 d-flex">
                          <input
                            type="radio"
                            className="form-check-input"
                            id="radioValidation"
                          />
                          <label
                            className="form-check-label ms-2"
                            htmlFor="radioValidation"
                          >
                            Remember me
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        type="submit"
                        className="thm-btn w-100"
                        disabled={loading}
                      >
                        {loading ? "Logging in..." : "Login"}
                      </button>
                      <p className="mt-3 mb-0 text-center fw-500">
                        Don't have an account?{" "}
                        <Link to="/register" className="thm-color-one">
                          Register
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

      <section className="newsletter_box down">
        <div className="container">
          <div className="section section-bg no-overlay">
            <div className="section-header">
              <h3 className="title">
                Our <span>Newsletter</span>
              </h3>
              <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </p>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-10">
                <div className="input-group">
                  <input
                    type="email"
                    name="#"
                    className="form-control"
                    placeholder="Enter Email Address"
                    autoComplete="off"
                    required
                  />
                  <div className="input-group-append">
                    <button type="submit" className="thm-btn h-100">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
