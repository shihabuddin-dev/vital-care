import React, { useState } from 'react';
import Hero from '../components/Hero';
import Doctors from '../components/Doctors';
import { useLoaderData } from 'react-router';
import Service from '../components/Service';

const Home = () => {
    const data = useLoaderData()
    const [doctors,setDoctors]=useState(data)
    return (
        <div>
            <title>Home || Vital Care</title>
               <Hero setDoctors={setDoctors} data={data}/>
              <Doctors doctors={doctors}/>
              <Service/>
        </div>
    );
};

export default Home;