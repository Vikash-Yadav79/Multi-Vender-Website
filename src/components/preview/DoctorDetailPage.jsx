// import React from 'react';
// import { useParams } from 'react-router-dom';
// import './AccountantManPage.css';

// const doctorDetails = {
//     1: {
//         id: 1,
//         name: 'Dr. Emma Watson',
//         experience: '10 years',
//         specialization: 'Cardiologist',
//         image: 'https://via.placeholder.com/150',
//     },
//     2: {
//         id: 2,
//         name: 'Dr. John Doe',
//         experience: '8 years',
//         specialization: 'Neurologist',
//         image: 'https://via.placeholder.com/150',
//     },
//     3: {
//         id: 3,
//         name: 'Dr. Jane Smith',
//         experience: '12 years',
//         specialization: 'Pediatrician',
//         image: 'https://via.placeholder.com/150',
//     },
//     4: {
//         id: 4,
//         name: 'Dr. Robert Brown',
//         experience: '9 years',
//         specialization: 'Dermatologist',
//         image: 'https://via.placeholder.com/150',
//     },
//     5: {
//         id: 5,
//         name: 'Dr. Susan Davis',
//         experience: '15 years',
//         specialization: 'Orthopedic Surgeon',
//         image: 'https://via.placeholder.com/150',
//     },
//     6: {
//         id: 6,
//         name: 'Dr. Michael Wilson',
//         experience: '7 years',
//         specialization: 'General Practitioner',
//         image: 'https://via.placeholder.com/150',
//     },
//     7: {
//         id: 7,
//         name: 'Dr. Linda Garcia',
//         experience: '5 years',
//         specialization: 'Gynecologist',
//         image: 'https://via.placeholder.com/150',
//     },
//     8: {
//         id: 8,
//         name: 'Dr. William Martinez',
//         experience: '11 years',
//         specialization: 'Oncologist',
//         image: 'https://via.placeholder.com/150',
//     },
// };
// const DoctorDetailPage = () => {
//     const { id } = useParams();
//     const doctor = doctorDetails[id];

//     if (!doctor) {
//         return <p>Doctor not found</p>;
//     }

//     return (
//         <div className="doctor-detail-page">
//             <div className="container">
//                 <h1 className="doctor-name">{doctor.name}</h1>
//                 <img src={doctor.image} alt={doctor.name} className="doctor-image" />
//                 <p className="doctor-experience">{doctor.experience} of Experience</p>
//                 <p className="doctor-specialization">Specialization: {doctor.specialization}</p>
//             </div>
//         </div>
//     );
// }

// export default DoctorDetailPage;

