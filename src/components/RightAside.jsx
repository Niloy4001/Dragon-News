import React from 'react';
import Social from './Social';
import Qzone from './Qzone';
import add from '../assets/bg.png'

const RightAside = () => {
    return (
        <div className='flex flex-col gap-4'>
            <Social></Social>
            <Qzone></Qzone>
            <div><img src={add} className='w-full' alt="" /></div>
        </div>
    );
};

export default RightAside;