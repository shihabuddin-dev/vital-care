import React from 'react';
import Nav from '../components/Nav';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div>
            <Nav />
            <div className='container mx-auto px-4 py-5 md:px-6 lg:px-12 bg-[#efefef]'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;