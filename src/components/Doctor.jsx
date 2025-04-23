import React from 'react';
import { Link } from 'react-router';

const Doctor = ({doctor}) => {
    const { id,image_url, name,availability_days, qualifications, registration_number, experience } = doctor || {}
    const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
    const isAvailable = availability_days.includes(today);
    return (
        <div className='border-2 border-gray-200 rounded-2xl p-4 md:p-6 flex flex-col items-center justify-center gap-4 md:gap-6 shadow hover:shadow-lg duration-700 transform hover:-translate-y-1 bg-white'>
            <div>
                <img className='w-60 md:w-78 h-52 md:h-68 mx-auto object-cover rounded-2xl border-2 border-gray-200' src={image_url} alt="" />
            </div>
            <div className='space-y-2'>
                <div className='flex gap-2 flex-col xl:flex-row justify-left items-center'>
                    <button className={`px-2 py-1 rounded-4xl ${isAvailable ? 'bg-[#09982F1A] text-[#09982F]' : 'bg-[#FFA00033] text-[#FFA000]'}`} >{isAvailable ? 'Available' : 'Unavailable'}</button>
                    <button className='bg-[#176AE51A] text-[#176AE5] px-2 py-1 rounded-4xl'>{experience}</button>
                </div>
                <h3 className='text-2xl font-semibold'>{name}</h3>
                <p className='text-lg text-[#0F0F0F99]'>{qualifications}</p>
                <p className='text-[#0F0F0FB3] flex items-center gap-2'><span className='text-xl'>®</span> Reg No: {registration_number}</p>
               <div className='grid text-center'>
               <Link to={`doctor-details/${id}`} className='cursor-pointer hover:bg-[#176AE5] hover:text-white text-[#176AE5] duration-900 transform hover:-translate-y-1 border-2 border-[#176AE533] py-1 w-full rounded-4xl'>
                   View Details
                </Link>
               </div>
            </div>
        </div>
    );
};

export default Doctor;