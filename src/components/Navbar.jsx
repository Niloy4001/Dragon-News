import React from 'react';
import { Link } from 'react-router-dom';
import user from '../assets/user.png'

function Navbar() {
    return (
        <nav className="flex justify-between items-center pt-4 ">
            <div></div>
            {/* Middle Side Links */}
            <div className="flex space-x-4 text-gray-600">
                <Link to={'/'} className="hover:text-black">Home</Link>
                <Link className="hover:text-black">About</Link>
                <Link className="hover:text-black">Career</Link>
            </div>

            {/* Right Side (Login Button and Icon) */}
            <div className="flex items-center space-x-2">
                <img src={user} alt="" /> {/* User icon */}
                <Link to={'/auth'} className="btn bg-gray-800 text-white hover:bg-gray-900 rounded-none">Login</Link>
            </div>
        </nav>
    );
}

export default Navbar;
