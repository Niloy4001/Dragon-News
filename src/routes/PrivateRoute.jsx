import React, { useContext } from 'react';
import { AuthContext } from '../components/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const {pathname} = useLocation()
    // console.log(pathname);
    
    const { user ,loading } = useContext(AuthContext)

    if (loading) {
        return (
            <div className='min-h-screen flex justify-center items-center'>
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        )
    }

    if(!user){
        return <Navigate state={pathname} to={'/auth'}></Navigate>
    }
        
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;