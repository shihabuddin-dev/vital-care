import React from 'react';
import Doctor from './Doctor';

const Doctors = ({doctors}) => {
  
    return (
        <div className='mt-12 space-y-8 md:space-y-10'>
            <div className='text-center space-y-4 '>
                <h2 className='text-3xl md:text-4xl font-semibold'>Our Best Doctors</h2>
                <p className='text-gray-800 md:w-9/12 mx-auto'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
                </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    doctors.map(doctor => <Doctor key={doctor.id} doctor={doctor} />)
                }
            </div>


        </div>
    );
};

export default Doctors;