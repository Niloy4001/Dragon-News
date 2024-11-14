import React from 'react';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Social() {
    return (
        <div className="p-4 space-y-4">
            {/* Login with Google and GitHub */}
            <div>
                <h2 className="text-lg font-semibold mb-2">Login With</h2>
                <button className="btn btn-outline w-full flex items-center justify-center space-x-2 mb-2">
                    <FaGoogle className="text-blue-500" />
                    <span>Login with Google</span>
                </button>
                <button className="btn btn-outline w-full flex items-center justify-center space-x-2">
                    <FaGithub className="text-gray-700" />
                    <span>Login with Github</span>
                </button>
            </div>

            {/* Social Media Links */}
            <div>
                <h2 className="text-lg font-semibold mb-2">Find Us On</h2>
                <div className="space-y-2">
                    <div className="flex items-center space-x-2 p-2 border rounded-lg">
                        <FaFacebook className="text-blue-600" />
                        <span>Facebook</span>
                    </div>
                    <div className="flex items-center space-x-2 p-2 border rounded-lg">
                        <FaTwitter className="text-blue-400" />
                        <span>Twitter</span>
                    </div>
                    <div className="flex items-center space-x-2 p-2 border rounded-lg">
                        <FaInstagram className="text-pink-500" />
                        <span>Instagram</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Social;
