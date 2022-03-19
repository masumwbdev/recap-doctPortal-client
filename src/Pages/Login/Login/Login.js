import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const {googleAuth} = useAuth();
    return (
        <div>
            <h1>Please login</h1>
            <button onClick={googleAuth} >Google Sign in</button>
        </div>
    );
};

export default Login;