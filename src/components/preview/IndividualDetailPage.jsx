import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './AccountantManPage.css';

const IndividualDetailPage = () => {
    const { id } = useParams();
    const [doctor, setDoctor] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch the doctor details based on the id
        axios.get(`https://amanyademo.in.net/e_vendor_app/api/get-one-service-provider/${id}`)
            .then(response => {
                if (response.data.status) {
                    setDoctor(response.data.ServiceProviders);
                } else {
                    setError(response.data.message);
                }
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
                setError("An error occurred while fetching the details.");
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!doctor) {
        return <p>Doctor not found</p>;
    }

    return (
        <div className="doctor-detail-page">
            <div className="container">
                <h1 className="doctor-name">{doctor.name}</h1>
                <img
                    src={doctor.profile_picture ? `https://amanyademo.in.net/e_vendor_app/public/upload/${doctor.profile_picture}` : 'https://via.placeholder.com/150'}
                    alt={doctor.name}
                    className="doctor-image"
                />
                <p className="doctor-experience">Experience: {doctor.experience || 'N/A'} years</p>
                <p className="doctor-specialization">Specialization: {doctor.specialization || 'N/A'}</p>
                <p className="doctor-email">Email: {doctor.email || 'N/A'}</p>
                <p className="doctor-phone">Phone: {doctor.phone || 'N/A'}</p>
                <p className="doctor-gender">Gender: {doctor.gender || 'N/A'}</p>
            </div>
        </div>
    );
}

export default IndividualDetailPage;
