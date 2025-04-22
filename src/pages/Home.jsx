import React, { useState } from 'react';
import Hero from '../components/Hero';
import Doctors from '../components/Doctors';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData()
    const [doctors,setDoctors]=useState(data)
    

    return (
        <div>
               <Hero setDoctors={setDoctors} data={data}/>
              <Doctors doctors={doctors}/>
        </div>
    );
};

export default Home;