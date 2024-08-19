import React from 'react';
import { useParams } from 'react-router-dom';
import './AccountantManPage.css';

const acRepairDetails = {
    1: {
        name: 'Alex Johnson',
        experience: '6 years',
        specialization: 'Residential AC Repair',
        image: 'https://via.placeholder.com/150',
        description: 'Alex specializes in residential AC repair, providing reliable and efficient services to ensure your home stays comfortable.'
    },
    2: {
        name: 'Maria Garcia',
        experience: '9 years',
        specialization: 'Commercial AC Maintenance',
        image: 'https://via.placeholder.com/150',
        description: 'Maria focuses on commercial AC maintenance, helping businesses maintain optimal performance of their air conditioning systems.'
    },
    3: {
        id: 3,
        name: 'James Williams',
        experience: '4 years',
        specialization: 'AC Installation',
        image: 'https://via.placeholder.com/150',
    },
    4: {
        id: 4,
        name: 'Patricia Brown',
        experience: '8 years',
        specialization: 'Central AC Systems',
        image: 'https://via.placeholder.com/150',
    },
    5: {
        id: 5,
        name: 'Robert Jones',
        experience: '7 years',
        specialization: 'AC Troubleshooting',
        image: 'https://via.placeholder.com/150',
    },
    6: {
        id: 6,
        name: 'Linda Davis',
        experience: '5 years',
        specialization: 'Ductless AC Repair',
        image: 'https://via.placeholder.com/150',
    },
    7: {
        id: 7,
        name: 'Michael Wilson',
        experience: '10 years',
        specialization: 'Emergency AC Services',
        image: 'https://via.placeholder.com/150',
    },
    8: {
        id: 8,
        name: 'Sarah Martinez',
        experience: '3 years',
        specialization: 'Preventive Maintenance',
        image: 'https://via.placeholder.com/150',
    },
};

const AcRepairDetailPage = () => {
    const { id } = useParams();
    const professional = acRepairDetails[id];

    if (!professional) {
        return <p>Professional not found</p>;
    }

    return (
        <div className="ac-repair-detail-page">
            <div className="container">
                <h1 className="professional-name">{professional.name}</h1>
                <img src={professional.image} alt={professional.name} className="professional-image" />
                <p className="professional-experience">{professional.experience} of Experience</p>
                <p className="professional-specialization">Specialization: {professional.specialization}</p>
                <p className="professional-description">{professional.description}</p>
            </div>
        </div>
    );
}

export default AcRepairDetailPage;
