import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <>
      {/* <!-- Subheader Start --> */}
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
      {/* <!-- Subheader End -->
    <!-- Section Start --> */}
      <section className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="sign_in_up_box thm-bg-color-light">
                <h3>SignUp</h3>
                <div className="row">
                  <div className="col-md-6">
                    <button type="button" className="thm-btn w-100 mb-xl-30">
                      <i className="fab fa-facebook-f ms-0 me-4"></i>
                      SignUp with Facebook
                    </button>
                  </div>
                  <div className="col-md-6">
                    <button type="button" className="thm-btn w-100 mb-xl-30">
                      <i className="fab fa-google ms-0 me-4"></i>
                      SignUp with Google
                    </button>
                  </div>
                </div>
                <span className="divider_text">Or SignUp with</span>
                <form action="#" method="POST">
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group">
                        <label>Username</label>
                        <input
                          type="text"
                          name="#"
                          className="form-control form-control-custom"
                          placeholder="Username"
                          value="Username"
                          autoComplete="off"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label>Email I'd</label>
                        <input
                          type="email"
                          name="#"
                          className="form-control form-control-custom"
                          placeholder="Email I'd"
                          value="example@example.com"
                          autoComplete="off"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label>Password</label>
                        <input
                          type="password"
                          name="#"
                          className="form-control form-control-custom"
                          id="password_value"
                          placeholder="password"
                          value="password"
                          autoComplete="off"
                          required=""
                        />
                        <button
                          id="password_eye"
                          className="fal fa-eye"
                          type="button"
                        >
                          <span></span>
                        </button>
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
                            for="radioValidation"
                          >
                            Remember me
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="thm-btn w-100">
                        SignUp
                      </button>
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
      {/*  <!-- Section End -->
    <!-- Newsletter Start --> */}
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
      {/*  <!-- Newsletter End --> */}
    </>
  );
}

export default Register;
