import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail, updateProfile, GithubAuthProvider } from "firebase/auth";
import { auth } from '../firebase/firebase.config';
export const AuthContext = createContext()
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // Create User With Email and Password
    const createUserWithEmailPassword = (email, password) => {
    
       return createUserWithEmailAndPassword(auth, email, password)
    }



    // Log In User With Email and Password
    const logInUserWithEmailPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
            
    }

    // Log in with google
    const logInByGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }


    // Log in with gitHub
    const logInByGithub = () =>{
        return signInWithPopup(auth, githubProvider)
    }


    // handle password reset
    const passwordReset = (email) =>{
        return sendPasswordResetEmail(auth, email)
    }



    // Update user's profile
    const updateUserProfile = (name, photo) =>{
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }


    // add observer on log in or log out 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser)
            }
            else {
                setUser(null)
            }
            setLoading(false)
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
        loading,
        logInByGoogle,
        passwordReset,
        updateUserProfile,
        logInByGithub,
    }
    return (
        <AuthContext.Provider value={contextInfo}>
            {children}
        </AuthContext.Provider>

    );
};

export default AuthProvider;