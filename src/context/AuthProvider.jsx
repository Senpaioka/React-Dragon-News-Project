import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, createUserWithEmailAndPassword, updateProfile, sendEmailVerification, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import {AuthContext} from '../context/AuthContext';
import {auth} from '../firebase/firebase.config';
import { useState, useEffect } from 'react';


const provider = new GoogleAuthProvider();
provider.addScope('email');
auth.useDeviceLanguage();


function AuthProvider({children}) {

    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState('');
    const [user, setUser] = useState(null);
    const [isMessage, setIsMessage] = useState('');

    // gmail authentication
    function signWithGmail() {
        setIsLoading(true);
        setIsError('');
        return signInWithPopup(auth, provider)
        .then(result => {
            const currentUser = result.user;
            setUser(currentUser);
        })
        .catch(error => setIsError(error.message))
        .finally(() => setIsLoading(false));
    }


    // email and password authentication
    function registerWithEmailAndPassword(name, url, email, password) {
        
        setIsError('');
        setIsLoading(true);

        return createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            // getting user
            const currentUser = result.user;
            // updating user info
            return updateProfile(currentUser, {
                displayName: name,
                photoURL: url,
            })
            .then(() => {
                // sending email for verification
                 return sendEmailVerification(currentUser)
                 .then(() => {
                    setIsMessage('Please Verify Email. Check Your Email !');
                    // setting user
                    setUser({...currentUser, displayName: name, photoURL: url});
                 })
            })
        })
        .catch(error => setIsError(error.message))
        .finally(() => setIsLoading(false));
    }



    // signin with email and password
    function loginVerifiedUser(email, password){
        setIsError('');
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
            const currentUser = result.user;
            setUser(currentUser);
        })
        .catch(error => setIsError(error.message))
        .finally(() => setIsLoading(false));
    }


    // forget password
    function passwordResetOnForget(email){
        setIsLoading(true);
        setIsError('')
        sendPasswordResetEmail(auth, email)
        .then(() => {
            setIsMessage('Email Sent! Reset Your Password.')
        })
        .catch(error => setIsError(error.message))
        .finally(() => setIsLoading(false));
    }


    // logout
    function logoutUser() {
        setIsLoading(true);
        setIsError('');
        return signOut(auth)
        .then(() => setUser(null))
        .catch(error => setIsError(error.message))
        .finally(() => setIsLoading(false));
    }

    // tracking user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setIsLoading(false);
        });

        return () => unsubscribe();
    },[])


    // info 
    const userInfo = {
        user,
        isLoading,
        isError,
        isMessage,
        signWithGmail,
        logoutUser,
        registerWithEmailAndPassword,
        loginVerifiedUser,
        passwordResetOnForget
    }

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>    
    );
}

export default AuthProvider;