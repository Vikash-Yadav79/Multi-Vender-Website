import React from 'react';
import { useParams } from 'react-router-dom';
import './AccountantManPage.css';

// Sample data; replace with actual data fetching logic
const accountantDetails = {
    1: {
        name: 'John Doe',
        experience: '10 years',
        specialization: 'Tax Accounting',
        image: 'https://via.placeholder.com/150',
        description: 'John has extensive experience in tax accounting, helping clients save on taxes and manage their financials effectively.'
    },
    2: {
        name: 'Jane Smith',
        experience: '8 years',
        specialization: 'Corporate Finance',
        image: 'https://via.placeholder.com/150',
        description: 'Jane specializes in corporate finance, offering strategic advice to help businesses grow and manage their finances.'
    },
    3: {
        id: 3,
        name: 'Robert Brown',
        experience: '5 years',
        specialization: 'Forensic Accounting',
        image: 'https://via.placeholder.com/150',
    },
    4: {
        id: 4,
        name: 'Emily White',
        experience: '12 years',
        specialization: 'Auditing',
        image: 'https://via.placeholder.com/150',
    },
    5: {
        id: 5,
        name: 'Michael Green',
        experience: '7 years',
        specialization: 'Management Accounting',
        image: 'https://via.placeholder.com/150',
    },
};

const AccountantDetailsPage = () => {
    const { id } = useParams();
    const accountant = accountantDetails[id];

    if (!accountant) {
        return <p>Accountant not found</p>;
    }

    return (
        <div className="accountant-detail-page">
            <div className="container">
                <h1 className="accountant-name">{accountant.name}</h1>
                <img src={accountant.image} alt={accountant.name} className="accountant-image" />
                <p className="accountant-experience">{accountant.experience} of Experience</p>
                <p className="accountant-specialization">Specialization: {accountant.specialization}</p>
                <p className="accountant-description">{accountant.description}</p>
                <p className="accountant-services">Number of Services Delivered: {/* Fetch or set the number of services delivered */}</p>
            </div>
        </div>
    );
}

export default AccountantDetailsPage;
