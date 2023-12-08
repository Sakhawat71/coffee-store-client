import PropTypes from 'prop-types';
import { createContext, useState } from "react";
import { auth } from '../firebase/firebase.config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    
    const [user,setUser] = useState([]);
    const [loading ,setLoading] = useState(true);

    const createUserEmailPass = (email ,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }


    const userInfo ={
        user,
        setUser,
        createUserEmailPass,
        loading,
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children : PropTypes.node,
};

