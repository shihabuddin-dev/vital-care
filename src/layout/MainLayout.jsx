import React from 'react';
import Nav from '../components/Nav';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div>
        <div className="bg-[#efefef]">
        <Nav />
        </div>
            <div className="bg-[#efefef]">
                <div className='container mx-auto px-4 py-5 md:px-6 lg:px-12 '>
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;