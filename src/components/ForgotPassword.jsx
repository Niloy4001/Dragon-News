import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';


const ForgotPassword = () => {
    const {passwordReset} = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        passwordReset(email)
        

    }
    return (
        <div className="card bg-white w-full max-w-lg p-6 shrink-0 ">
            <h1 className='text-4xl text-[#403F3F] font-semibold text-center'>Reset your password</h1>
            <form className="card-body" onSubmit={handleSubmit}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl text-[#403F3F] font-semibold ">Email</span>
                    </label>
                    <input type="email" placeholder="Enter your email address" name='email' className="input input-bordered bg-[#F3F3F3] border-none" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-[#403F3F] text-white text-xl hover:bg-[#403F3F]">Send Reset Email</button>
                </div>
            </form>
        </div>
    );
};

export default ForgotPassword;