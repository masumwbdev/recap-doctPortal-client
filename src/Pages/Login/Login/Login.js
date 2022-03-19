import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Nav from '../../../Shared/Nav/Nav';

const Login = () => {
    const { googleAuth } = useAuth();
    const [loginData, setLoginData] = useState({});
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }
    const handleLoginSubmit = e => {
        e.preventDefault();
    }
    return (
        <div>
            <Nav />
            <div className="text-center">
                <h4 className='my-5'>Please login</h4>
                <form onSubmit={handleLoginSubmit}>
                    <input type="email" placeholder='Your email' name='email' onChange={handleOnChange} />
                    <br /><br />
                    <input type="password" placeholder='Password' name='password' onChange={handleOnChange} />
                    <br /><br />
                    <button type='submit' className='btn btn-sm btn-dark fw-bold'>Login</button>
                </form>
                <p>Already logged in? please <Link to="/register">Register</Link></p>
                <button className='btn btn-sm btn-dark fw-bold mt-4' onClick={googleAuth} >Google Sign in</button>
            </div>
        </div>
    );
};

export default Login;