import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';


const Header = () => {
    return (
        <div className='flex flex-col items-center gap-3 pt-14 pb-7'>
            <div>
                <img src={logo} alt="" />
            </div>
            <h2 className='font-normal text-lg text-[#706F6F]'>Journalism Without Fear or Favour</h2>
            <div className='font-normal text-lg text-[#403F3F]'>
            {format(new Date(), 'EEEE, MMMM do, yyyy')}
            </div>
        </div>
    );
};

export default Header;