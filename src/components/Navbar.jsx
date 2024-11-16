import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import userImg from '../assets/user.png'
import { AuthContext } from './AuthProvider';

function Navbar() {
    const { user, sign_Out } = useContext(AuthContext)
    // console.log(user);

    return (
        <nav className="flex justify-between items-center pt-4 ">
            <div className='text-xl font-semibold'>
                <p>{user?.displayName && user.displayName} </p>
            </div>
            {/* Middle Side Links */}
            <div className="flex space-x-4 text-gray-600">
                <Link to={'/'} className="hover:text-black">Home</Link>
                <Link to={'/about'} className="hover:text-black">About</Link>
                <Link to={'/career'} className="hover:text-black">Career</Link>
            </div>

            {/* Right Side (Login Button and Icon) */}
            <div className="flex items-center space-x-2">
                <img src={user?.photoURL ? user.photoURL : userImg} alt="" className='w-11 h-11 rounded-full' /> {/* User icon */}
                {
                    user ?
                        <Link onClick={sign_Out} className="btn bg-gray-800 text-white hover:bg-gray-900 rounded-none">Log Out</Link>
                        :
                        <Link to={'/auth'} className="btn bg-gray-800 text-white hover:bg-gray-900 rounded-none">Login</Link>
                }
                {/* <Link to={'/auth'} className="btn bg-gray-800 text-white hover:bg-gray-900 rounded-none">Login</Link> */}
            </div>
        </nav>
    );
}

export default Navbar;
