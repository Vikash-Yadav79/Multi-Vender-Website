import './AccountantManPage.css';
import React from 'react'
import { Link } from 'react-router-dom';
const plumbers = [
  {
    id: 1,
    name: 'James Pipe',
    experience: '12 years',
    specialization: 'Residential Plumbing',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Michael Leak',
    experience: '10 years',
    specialization: 'Commercial Plumbing',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'David Faucet',
    experience: '8 years',
    specialization: 'Drain Cleaning',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    name: 'Steven Valve',
    experience: '15 years',
    specialization: 'Pipe Installation',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 5,
    name: 'Robert Shower',
    experience: '11 years',
    specialization: 'Water Heater Repair',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 6,
    name: 'Charles Sink',
    experience: '9 years',
    specialization: 'Emergency Plumbing',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 7,
    name: 'William Drain',
    experience: '13 years',
    specialization: 'Sewer Line Repair',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 8,
    name: 'John Pipewrench',
    experience: '7 years',
    specialization: 'Leak Detection',
    image: 'https://via.placeholder.com/150',
  },
];

const PlumberManPage = () => {
  return (
    <div className="plumber-page">
      <div className="container">
        <h1 className="page-title">Our Experienced Plumbers</h1>
        <p className="page-description">
          Meet our team of skilled plumbers, each with years of experience in providing top-quality plumbing services.
        </p>
        <div className="plumber-grid">
          {plumbers.map(plumber => (
            <div className="plumber-card" key={plumber.id}>
              <img src={plumber.image} alt={plumber.name} className="plumber-image" />
              <div className="plumber-info">
                <h3 className="plumber-name">{plumber.name}</h3>
                <p className="plumber-experience">{plumber.experience} of Experience</p>
                <p className="plumber-specialization">Specialization: {plumber.specialization}</p>
                <Link to={`/plumberDetail/${plumber.id}`} className="more-details-button">
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

export default PlumberManPage;
