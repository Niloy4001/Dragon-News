import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const Auth = () => {
    return (
        // <div className='bg-[#F3F3F3]'>
        <div className='bg-black'>
            <header className='w-11/12 mx-auto py-5'>
                <Navbar></Navbar>
            </header>
            <section className='w-11/12 mx-auto h-[calc(100lvh-104px)] flex justify-center items-center'>
                <Outlet></Outlet>
            </section>
        </div>
    );
};

export default Auth;