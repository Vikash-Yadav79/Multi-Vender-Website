import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Api from "../Api";

function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const validateForm = () => {
        const newErrors = {};

        if (!email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Email address is invalid";
        }

        return newErrors;
    };

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        try {
            const response = await Api.post("/api/forgot-password", { email });
            console.log("Password reset email sent:", response.data);
            setMessage("Password reset link has been sent to your email.");
        } catch (error) {
            console.error("Password reset failed:", error);
            setErrors({ apiError: "Password reset failed. Please try again." });
        }
    };

    return (
        <>
            <div className="section-bg section-padding subheader">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="page-title">Forgot Password</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/home">Home</Link>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Forgot Password
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
                                <h3>Forgot Password</h3>
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label>Email</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    className="form-control form-control-custom"
                                                    placeholder="Enter your email"
                                                    value={email}
                                                    onChange={handleChange}
                                                    required
                                                />
                                                {errors.email && (
                                                    <small className="text-danger">{errors.email}</small>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button type="submit" className="thm-btn w-100">
                                                Send Reset Link
                                            </button>
                                            {message && (
                                                <p className="mt-3 mb-0 text-center text-success fw-500">
                                                    {message}
                                                </p>
                                            )}
                                            {errors.apiError && (
                                                <p className="mt-3 mb-0 text-center text-danger fw-500">
                                                    {errors.apiError}
                                                </p>
                                            )}
                                            <p className="mt-3 mb-0 text-center fw-500">
                                                Remember your password?{" "}
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

export default ForgotPassword;
