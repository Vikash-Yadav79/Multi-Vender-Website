import './AccountantManPage.css';
import React from 'react'
import { useParams } from 'react-router-dom';

const plumbers = {
  1:{
    id: 1,
    name: 'James Pipe',
    experience: '12 years',
    specialization: 'Residential Plumbing',
    image: 'https://via.placeholder.com/150',
  },
  2:{
    id: 2,
    name: 'Michael Leak',
    experience: '10 years',
    specialization: 'Commercial Plumbing',
    image: 'https://via.placeholder.com/150',
  },
  3:{
    id: 3,
    name: 'David Faucet',
    experience: '8 years',
    specialization: 'Drain Cleaning',
    image: 'https://via.placeholder.com/150',
  },
 4: {
    id: 4,
    name: 'Steven Valve',
    experience: '15 years',
    specialization: 'Pipe Installation',
    image: 'https://via.placeholder.com/150',
  },
 5: {
    id: 5,
    name: 'Robert Shower',
    experience: '11 years',
    specialization: 'Water Heater Repair',
    image: 'https://via.placeholder.com/150',
  },
 6: {
    id: 6,
    name: 'Charles Sink',
    experience: '9 years',
    specialization: 'Emergency Plumbing',
    image: 'https://via.placeholder.com/150',
  },
  7:{
    id: 7,
    name: 'William Drain',
    experience: '13 years',
    specialization: 'Sewer Line Repair',
    image: 'https://via.placeholder.com/150',
  },
 8: {
    id: 8,
    name: 'John Pipewrench',
    experience: '7 years',
    specialization: 'Leak Detection',
    image: 'https://via.placeholder.com/150',
  },
};
const PlumberDetailPage = () => {
    const { id } = useParams();
    const plumber = plumbers[id];

    if (!plumber) {
        return <p>Plumber not found</p>;
    }

    return (
        <div className="plumber-detail-page">
            <div className="container">
                <h1 className="plumber-name">{plumber.name}</h1>
                <img src={plumber.image} alt={plumber.name} className="plumber-image" />
                <p className="plumber-experience">{plumber.experience} of Experience</p>
                <p className="plumber-specialization">Specialization: {plumber.specialization}</p>
            </div>
        </div>
    );
};

export default PlumberDetailPage;