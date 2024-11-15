import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from '../firebase/firebase.config';
export const AuthContext = createContext()



const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    // useEffect(() => {
    //     console.log(user);

    // }, [user])

    // Create User With Email and Password
    const createUserWithEmailPassword = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(res => { console.log('sign up'); })
            .catch(err => { console.log(err.message); })
    }



    // Log In User With Email and Password
    const logInUserWithEmailPassword = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(res => { console.log('log in'); })
            .catch(err => { console.log(err.message); })
    }


    // add observer on log in or log out 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser)
            }
            else{
                setUser(null)
            }
        })
        return () => {
            unsubscribe()
        }
    })


    // sing out 
    const sign_Out = () => {
        signOut(auth)
            .then(res => { console.log('sign out'); })
            .catch(err => { console.log(err.message); })

    }



    // context info
    const contextInfo = {
        user,
        createUserWithEmailPassword,
        logInUserWithEmailPassword,
        sign_Out,
    }
    return (
        <AuthContext.Provider value={contextInfo}>
            {children}
        </AuthContext.Provider>

    );
};

export default AuthProvider;