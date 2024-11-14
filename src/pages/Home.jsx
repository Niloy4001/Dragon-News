import React from 'react';
import Header from '../components/Header';
import Marque from '../components/Marque';
import Navbar from '../components/Navbar';
import LeftAside from '../components/LeftAside';
// import NewsCards from '../components/NewsCards';
import RightAside from '../components/RightAside';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div className='font-poppins'>
            <header className='w-11/12 mx-auto'>
                <Header></Header>
            </header>
            <section className='w-11/12 mx-auto'>
                <Marque></Marque>
            </section>
            <section className='w-11/12 mx-auto'>
                <Navbar></Navbar>
            </section>
            <section className='w-11/12 mx-auto'>
                <div className='grid grid-cols-4 gap-6 pt-20'>
                    {/* left aside */}
                    <aside className='col-span-1'>
                        <LeftAside></LeftAside>
                    </aside>
                    {/* middle section */}
                    <div className='col-span-2'>
                        {/* <NewsCards></NewsCards> */}
                        <Outlet></Outlet>
                    </div>
                    {/* right aside */}
                    <aside className='col-span-1'>
                        <RightAside></RightAside>
                    </aside>
                </div>
            </section>

        </div>
    );
};

export default Home;