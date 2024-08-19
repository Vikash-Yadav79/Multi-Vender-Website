import React from 'react';
import { Link } from 'react-router-dom';
import './AccountantManPage.css';

const accountants = [
  {
    id: 1,
    name: 'John Doe',
    experience: '10 years',
    specialization: 'Tax Accounting',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Jane Smith',
    experience: '8 years',
    specialization: 'Corporate Finance',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Robert Brown',
    experience: '5 years',
    specialization: 'Forensic Accounting',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    name: 'Emily White',
    experience: '12 years',
    specialization: 'Auditing',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 5,
    name: 'Michael Green',
    experience: '7 years',
    specialization: 'Management Accounting',
    image: 'https://via.placeholder.com/150',
  },
];

const AccountantManPage = () => {
  return (
    <div className="accountant-page">
      <div className="container">
        <h1 className="page-title">Our Accountants</h1>
        <p className="page-description">
          Meet our team of expert accountants, each with years of experience and specialized knowledge in various fields of accounting.
        </p>
        <div className="accountants-grid">
          {accountants.map(accountant => (
            <div className="accountant-card" key={accountant.id}>
              <img src={accountant.image} alt={accountant.name} className="accountant-image" />
              <div className="accountant-info">
                <h3 className="accountant-name">{accountant.name}</h3>
                <p className="accountant-experience">{accountant.experience} of Experience</p>
                <p className="accountant-specialization">Specialization: {accountant.specialization}</p>
                <Link to={`/accountant/${accountant.id}`} className="more-details-button">
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

export default AccountantManPage;
