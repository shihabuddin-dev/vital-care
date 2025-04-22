import React, { useState } from 'react';
import Button from './ui/Button';
import heroImage1 from '../assets/banner-img-1.png'
import heroImage2 from '../assets/banner-img-2.jpg'

const Hero = ({ setDoctors, data }) => {
    const [searchText, setSearchText] = useState('')
    const handleSearchText = (e, text) => {
        e.preventDefault()

        const searchDrData = data.filter(data => data.name.toLowerCase().includes(text.toLowerCase()))
        setDoctors(searchDrData)
    }
    return (
        <div className='bg-linear-to-b from-[#efefef] to-white border-2 border-white py-8 md:py-12 space-y-6 md:space-y-8 rounded-2xl px-2'>
            {/* header part  */}
            <div className='text-center space-y-4 '>
                <h2 className='text-4xl md:text-5xl font-semibold md:font-bold md:leading-14 md:w-8/12 mx-auto'>Dependable Care, Backed by Trusted Professionals.</h2>
                <p className='text-gray-800 md:w-10/12 mx-auto'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
                </p>
            </div>
            <form
                onSubmit={(e) => {
                    handleSearchText(e, searchText)
                    setSearchText('')
                }
                }
                className='flex gap-4 flex-col md:flex-row justify-center items-center'>

                <input
                    onChange={(e) => setSearchText(e.target.value)
                    }
                    type="text"
                    placeholder='Search by Dr name or Speciality of doctorate' className='border shadow px-4 py-2 w-2/3 md:w-1/3 rounded-4xl bg-white border-gray-300 focus:outline-[#176AE5]' />
                <Button type='submit' label='Search Now' />
            </form>
            <div className='flex justify-center items-center flex-col md:flex-row gap-4'>
                <img className='w-full md:w-5/12 md:h-78 object-cover rounded-2xl' src={heroImage2} alt="" />
                <img className='w-full md:w-5/12 md:h-78 object-cover rounded-2xl' src={heroImage1} alt="" />
            </div>
        </div>
    );
};

export default Hero;