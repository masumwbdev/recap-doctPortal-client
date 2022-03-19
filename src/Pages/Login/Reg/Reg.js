import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Nav from '../../../Shared/Nav/Nav';

const Reg = () => {
    const { googleAuth, registerUser } = useAuth();
    const [loginData, setLoginData] = useState({});
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }
    const handleLoginSubmit = e => {
        if(loginData.password !== loginData.password2){
            alert('password did not matched')
            return;
        }
        registerUser(loginData.email, loginData.password)
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
                    <input type="password" placeholder='Re-type password' name='password2' onChange={handleOnChange} />
                    <br /><br />
                    <button type='submit' className='btn btn-sm btn-dark fw-bold'>Register</button>
                </form>
                <p>New user? please <Link to="/login">Login</Link></p>
                <button className='btn btn-sm btn-dark fw-bold mt-4' onClick={googleAuth} >Google Sign in</button>
            </div>
        </div>
    );
};

export default Reg;