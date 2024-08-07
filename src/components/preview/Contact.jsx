import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import contact from './assest/images/contact/contact_image.jpg';

const Contact = () => {
  // Validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string()
      .matches(/^[A-Za-z\s]+$/, "Name should only contain letters")
      .required("Full Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^\d{10}$/, "Phone No. must be exactly 10 digits")
      .required("Phone No. is required"),
    subject: Yup.string().required("Subject is required"),
    msg: Yup.string().required("Message is required"),
  });

  // Function to handle form submission
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    axios.post("http://localhost:8000/contact.php", values)
      .then(response => {
        console.log(response.data);
        alert("Message sent successfully!");
        resetForm();
      })
      .catch(error => {
        console.error("There was an error sending the message!", error);
        alert("There was an error sending your message.");
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <>
      <div className="section-bg section-padding subheader">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="page-title">Contact Us</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/home">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Contact Us
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <section className="section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="contact_form">
                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    phone: "",
                    subject: "",
                    msg: "",
                  }}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({ isSubmitting }) => (
                    <Form>
                      <div className="section-header text-start">
                        <h3 className="title">
                          Get In <span>Touch</span>
                        </h3>
                        <p className="text">
                          We’d love to hear from you! Whether you have a question, feedback, or need assistance, feel free to reach out.
                        </p>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <Field
                              type="text"
                              name="name"
                              className="form-control form-control-custom"
                              placeholder="Full Name"
                              autoComplete="off"
                            />
                            <ErrorMessage name="name" component="div" className="text-danger" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <Field
                              type="email"
                              name="email"
                              className="form-control form-control-custom"
                              placeholder="Email ID"
                              autoComplete="off"
                            />
                            <ErrorMessage name="email" component="div" className="text-danger" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <Field
                              type="text"
                              name="phone"
                              className="form-control form-control-custom"
                              placeholder="Phone No."
                              autoComplete="off"
                            />
                            <ErrorMessage name="phone" component="div" className="text-danger" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <Field
                              type="text"
                              name="subject"
                              className="form-control form-control-custom"
                              placeholder="Subject"
                              autoComplete="off"
                            />
                            <ErrorMessage name="subject" component="div" className="text-danger" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <Field
                              as="textarea"
                              rows="5"
                              name="msg"
                              className="form-control form-control-custom"
                              placeholder="Message"
                              autoComplete="off"
                            />
                            <ErrorMessage name="msg" component="div" className="text-danger" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <button type="submit" className="thm-btn w-100" disabled={isSubmitting}>
                            Submit
                          </button>
                        </div>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact_image">
                <img src={contact} alt="img" className="image-fit" />
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
                Stay updated with our latest news and offers.
              </p>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-10">
                <div className="input-group">
                  <input
                    type="email"
                    name="email"
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

export default Contact;
