import React, { createContext, useState } from 'react';
export const AuthContext = createContext()



const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()

    const contextInfo = {
        user
    }
    return (
        <AuthContext.Provider value={contextInfo}>
            {children}
        </AuthContext.Provider>

    );
};

export default AuthProvider;