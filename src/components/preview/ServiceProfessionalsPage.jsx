import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import LoginModal from './LoginModal'; // Import the modal component

const ServiceProfessionalsPage = () => {
    const { category } = useParams();
    const [serviceProviders, setServiceProviders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showModal, setShowModal] = useState(false); // State to manage modal visibility
    const navigate = useNavigate(); // Hook for navigation

    useEffect(() => {
        if (!category) {
            // Handle the case where category is undefined or empty
            setLoading(false);
            setError("Category is not specified.");
            return;
        }

        // Fetch professionals based on the category
        axios.get(`https://amanyademo.in.net/e_vendor_app/api/get-service-provider-by-job-profile/${category}`)
            .then((response) => {
                if (response.data.status) {
                    setServiceProviders(response.data.service_providers);
                } else {
                    console.error("Failed to fetch service providers:", response.data.message);
                    setError(response.data.message || "Failed to fetch service providers.");
                }
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setError("An error occurred while fetching data.");
                setLoading(false);
            });
    }, [category]);

    const handleMoreDetailsClick = (id) => {
        const isLoggedIn = localStorage.getItem("authToken"); // Check if the user is logged in

        if (isLoggedIn) {
            // If logged in, navigate to the individual details page
            navigate(`/individualdetail/${id}`);
        } else {
            // If not logged in, show the login modal
            setShowModal(true);
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="service-professionals-page">
            <div className="professionals-list">
                <div className="doctor-grid">
                    {serviceProviders.map(doctor => (
                        <div className="doctor-card" key={doctor.id}>
                            <img
                                src={`https://amanyademo.in.net/e_vendor_app/public/upload/${doctor.profile_picture}`}
                                alt={doctor.name}
                                className="doctor-image"
                            />
                            <div className="doctor-info">
                                <h3 className="doctor-name">{doctor.name}</h3>
                                <p className="doctor-experience">{doctor.experience} of Experience</p>
                                <p className="doctor-specialization">Specialization: {doctor.specialization}</p>
                                <button
                                    className="more-details-button"
                                    onClick={() => handleMoreDetailsClick(doctor.id)}
                                >
                                    More Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal for prompting login */}
            <LoginModal show={showModal} handleClose={handleCloseModal} />
        </div>
    );
};

export default ServiceProfessionalsPage;
