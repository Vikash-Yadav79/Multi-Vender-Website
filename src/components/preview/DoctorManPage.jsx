import React from 'react';
import './AccountantManPage.css';
import { Link } from 'react-router-dom';

const doctors = [
  {
    id: 1,
    name: 'Dr. Emma Watson',
    experience: '10 years',
    specialization: 'Cardiologist',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Dr. John Doe',
    experience: '8 years',
    specialization: 'Neurologist',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Dr. Jane Smith',
    experience: '12 years',
    specialization: 'Pediatrician',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    name: 'Dr. Robert Brown',
    experience: '9 years',
    specialization: 'Dermatologist',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 5,
    name: 'Dr. Susan Davis',
    experience: '15 years',
    specialization: 'Orthopedic Surgeon',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 6,
    name: 'Dr. Michael Wilson',
    experience: '7 years',
    specialization: 'General Practitioner',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 7,
    name: 'Dr. Linda Garcia',
    experience: '5 years',
    specialization: 'Gynecologist',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 8,
    name: 'Dr. William Martinez',
    experience: '11 years',
    specialization: 'Oncologist',
    image: 'https://via.placeholder.com/150',
  },
];

const DoctorManPage = () => {
  return (
    <div className="doctor-page">
      <div className="container">
        <h1 className="page-title">Our Medical Professionals</h1>
        <p className="page-description">
          Meet our experienced team of doctors, each specializing in different areas to provide you with the best medical care.
        </p>
        <div className="doctor-grid">
          {doctors.map(doctor => (
            <div className="doctor-card" key={doctor.id}>
              <img src={doctor.image} alt={doctor.name} className="doctor-image" />
              <div className="doctor-info">
                <h3 className="doctor-name">{doctor.name}</h3>
                <p className="doctor-experience">{doctor.experience} of Experience</p>
                <p className="doctor-specialization">Specialization: {doctor.specialization}</p>
                <Link to={`/doctorDetails/${doctor.id}`} className="more-details-button">
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

export default DoctorManPage;
