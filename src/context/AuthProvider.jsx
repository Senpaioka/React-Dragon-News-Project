import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
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
        signWithGmail,
        logoutUser,
    }

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>    
    );
}

export default AuthProvider;