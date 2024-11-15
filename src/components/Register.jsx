import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="card bg-white w-full max-w-lg p-6 shrink-0 ">
            <h1 className='text-4xl text-[#403F3F] font-semibold text-center'>Register your account</h1>
            <form className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl text-[#403F3F] font-semibold ">Name</span>
                    </label>
                    <input type="name" placeholder="Enter your name address" className="input input-bordered bg-[#F3F3F3] border-none" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl text-[#403F3F] font-semibold ">Photo Link</span>
                    </label>
                    <input type="text" placeholder="https://i.ibb.co/61D8xbL/logo.png" className="input input-bordered bg-[#F3F3F3] border-none"  />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl text-[#403F3F] font-semibold ">Email</span>
                    </label>
                    <input type="email" placeholder="Enter your email address" className="input input-bordered bg-[#F3F3F3] border-none" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl text-[#403F3F] font-semibold ">Password</span>
                    </label>
                    <input type="password" placeholder="Enter your password" className="input input-bordered bg-[#F3F3F3] border-none" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-[#403F3F] text-white text-xl hover:bg-[#403F3F]">Register</button>
                </div>
                <p className='text-center mt-3 text-base text-[#706F6F] font-semibold '>Already Have An Account ? <Link to={'/auth/'} className='text-red-600'> Login</Link></p>
            </form>
        </div>
    );
};

export default Register;