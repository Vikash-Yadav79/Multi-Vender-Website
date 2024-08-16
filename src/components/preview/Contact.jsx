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
    messsage: Yup.string().required("Message is required"),
  });

  // Function to handle form submission
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    axios.post("https://admin.amanyademo.in.net/api/get-quotes", values)
      .then(response => {
        console.log(response.data);
        alert(response.data.message);
        resetForm();
      })
      .catch(error => {
        // Log the complete error object for debugging
        console.error("There was an error sending the message!", error);

        // Print detailed error information
        if (error.response) {
          // Server responded with a status other than 2xx
          console.error("Response data:", error.response.data);
          console.error("Response status:", error.response.status);
          console.error("Response headers:", error.response.headers);
          alert(`Error: ${error.response.data.message || "An error occurred!"}`);
        } else if (error.request) {
          // Request was made but no response was received
          console.error("Request data:", error.request);
          alert("No response from server. Please try again later.");
        } else {
          // Something else caused the error
          console.error("Error message:", error.message);
          alert(`Error: ${error.message}`);
        }

        console.error("Error configuration:", error.config);
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
                    messsage: "",
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
                              name="messsage"
                              className="form-control form-control-custom"
                              placeholder="Message"
                              autoComplete="off"
                            />
                            <ErrorMessage name="messsage" component="div" className="text-danger" />
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
    </>
  );
}

export default Contact;
