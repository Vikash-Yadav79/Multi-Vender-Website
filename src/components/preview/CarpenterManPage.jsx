import React from 'react'
import './AccountantManPage.css';


const carpenters = [
  {
    id: 1,
    name: 'John Carpenter',
    experience: '15 years',
    specialization: 'Furniture Design',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Michael Woods',
    experience: '10 years',
    specialization: 'Cabinet Making',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'David Hammer',
    experience: '12 years',
    specialization: 'Woodworking',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    name: 'Steven Plane',
    experience: '8 years',
    specialization: 'Custom Furniture',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 5,
    name: 'Robert Nail',
    experience: '20 years',
    specialization: 'Deck Building',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 6,
    name: 'James Saw',
    experience: '9 years',
    specialization: 'Wood Carving',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 7,
    name: 'William Chisel',
    experience: '14 years',
    specialization: 'Fine Woodworking',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 8,
    name: 'Charles Timber',
    experience: '11 years',
    specialization: 'Flooring',
    image: 'https://via.placeholder.com/150',
  },
];

const CarpenterManPage = () => {
  return (
    <div className="carpenter-page">
      <div className="container">
        <h1 className="page-title">Our Skilled Carpenters</h1>
        <p className="page-description">
          Meet our experienced team of carpenters, each specializing in different areas to provide you with top-notch woodworking services.
        </p>
        <div className="carpenter-grid">
          {carpenters.map(carpenter => (
            <div className="carpenter-card" key={carpenter.id}>
              <img src={carpenter.image} alt={carpenter.name} className="carpenter-image" />
              <div className="carpenter-info">
                <h3 className="carpenter-name">{carpenter.name}</h3>
                <p className="carpenter-experience">{carpenter.experience} of Experience</p>
                <p className="carpenter-specialization">Specialization: {carpenter.specialization}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CarpenterManPage;

