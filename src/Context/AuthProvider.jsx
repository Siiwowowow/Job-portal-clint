import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.init';


const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    // Function to signup create a new user
    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //function to sign in an existing user
    const signInUser=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    } 
    //function to social login the user
    const googleSignInUser=()=>{
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
    }
    //function to sign out the user
    const signOutUser=()=>{
        setLoading(true);
        return signOut(auth);
    }
    //function Auth 
    useEffect(() => {
        const unSubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false);

        })
        return () => {
            unSubscribe();
        }
    },[])  
    const authInfo={
        createUser, 
        loading,
        signInUser ,
        user,
        signOutUser,
        googleSignInUser
        
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;