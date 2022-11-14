import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../firebase/firebase.config';
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();
    //signup
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //login
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    //update user!
    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo);
    }
    //logout
    const logout = ()=> {
        setLoading(true);
        return signOut(auth);
    }
    //google
    const withGoogle = ()=> {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }
    //observer
    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=> {
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return ()=> unsubscribe();
    },[]) 
    const authInfo = { createUser, signIn, user, logout, updateUser, loading , withGoogle};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;