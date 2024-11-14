import React from 'react';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

const Marque = () => {
    return (
        <div className='bg-[#F3F3F3] flex gap-3 items-center p-4'>
            <p className='btn rounded-none bg-[#D72050] text-white'>Latest</p>

            <Marquee className="space-x-6" pauseOnHover>
                <Link>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, distinctio.</Link>
                <Link>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, distinctio.</Link>
                <Link>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, distinctio.</Link>
                <Link>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, distinctio.</Link>
            </Marquee>

        </div>
    );
};

export default Marque;