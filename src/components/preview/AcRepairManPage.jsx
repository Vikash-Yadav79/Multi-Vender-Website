import React from 'react';
import { Link } from 'react-router-dom';
import './AccountantManPage.css';

const acRepairProfessionals = [
    {
        id: 1,
        name: 'Alex Johnson',
        experience: '6 years',
        specialization: 'Residential AC Repair',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 2,
        name: 'Maria Garcia',
        experience: '9 years',
        specialization: 'Commercial AC Maintenance',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 3,
        name: 'James Williams',
        experience: '4 years',
        specialization: 'AC Installation',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 4,
        name: 'Patricia Brown',
        experience: '8 years',
        specialization: 'Central AC Systems',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 5,
        name: 'Robert Jones',
        experience: '7 years',
        specialization: 'AC Troubleshooting',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 6,
        name: 'Linda Davis',
        experience: '5 years',
        specialization: 'Ductless AC Repair',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 7,
        name: 'Michael Wilson',
        experience: '10 years',
        specialization: 'Emergency AC Services',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 8,
        name: 'Sarah Martinez',
        experience: '3 years',
        specialization: 'Preventive Maintenance',
        image: 'https://via.placeholder.com/150',
    },
];

const AcRepairManPage = () => {
    return (
        <div className="ac-repair-page">
            <div className="container">
                <h1 className="page-title">Our AC Repair Professionals</h1>
                <p className="page-description">
                    Meet our experienced team of AC repair professionals, each specializing in different areas to keep your air conditioning systems running smoothly.
                </p>
                <div className="ac-repair-grid">
                    {acRepairProfessionals.map(professional => (
                        <div className="ac-repair-card" key={professional.id}>
                            <img src={professional.image} alt={professional.name} className="ac-repair-image" />
                            <div className="ac-repair-info">
                                <h3 className="ac-repair-name">{professional.name}</h3>
                                <p className="ac-repair-experience">{professional.experience} of Experience</p>
                                <p className="ac-repair-specialization">Specialization: {professional.specialization}</p>
                                <Link to={`/acrepair/${professional.id}`} className="more-details-button">
                                    More Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AcRepairManPage;
