import React, { useEffect, useState } from 'react';
import Doctor from './Doctor';
import Button from './ui/Button';

const Doctors = ({ doctors }) => {
const [doctorsData, setDoctorsData]=useState(doctors)
const [showAll,setShowAll]=useState(false)
useEffect(()=>{
    if(showAll) return setDoctorsData(doctors)
    else return setDoctorsData(doctors.slice(0,6))

},[showAll,doctors])



    return (
        <div className='mt-12 space-y-8 md:space-y-10'>
            <div className='text-center space-y-4 '>
                <h2 className='text-3xl md:text-4xl font-semibold'>Our Best Doctors</h2>
                <p className='text-gray-800 md:w-9/12 mx-auto'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
                </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    doctorsData.map(doctor => <Doctor key={doctor.id} doctor={doctor} />)
                }
            </div>
            <div className='text-center'>
                <Button onClick={()=>{
                    setShowAll(!showAll)
                    showAll && window.scrollTo(0,820)
                }} label={showAll? 'Show Less' : 'Show All'} />
            </div>

        </div>
    );
};

export default Doctors;