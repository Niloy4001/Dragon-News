import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/firebase.config';
export const AuthContext = createContext()



const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()

    // Create User With Email and Password
    const createUserWithEmailPassword = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(res => {console.log(res.user);})
        .catch(err => {console.log(err.message);})
    }



    // Log In User With Email and Password
    const logInUserWithEmailPassword = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then(res => {console.log(res.user);})
        .catch(err => {console.log(err.message);})
    }

    const contextInfo = {
        user,
        createUserWithEmailPassword,
        logInUserWithEmailPassword,
    }
    return (
        <AuthContext.Provider value={contextInfo}>
            {children}
        </AuthContext.Provider>

    );
};

export default AuthProvider;