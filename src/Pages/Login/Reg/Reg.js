import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Nav from '../../../Shared/Nav/Nav';

const Reg = () => {
    const { user, authError, googleAuth, registerUser, isLoading } = useAuth();
    const [loginData, setLoginData] = useState({});
    const navigate = useNavigate();
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)
        console.log(newLoginData)
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('password did not matched')
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, navigate)
        e.preventDefault();
    }
    return (
        <div>
            <Nav />
            <div className="text-center">
                <h4 className='my-5'>Please login</h4>
                {!isLoading &&
                    <form onSubmit={handleLoginSubmit}>
                        <input type="text" placeholder='Your name' name='name' onBlur={handleOnBlur} />
                        <br /><br />
                        <input type="email" placeholder='Your email' name='email' onBlur={handleOnBlur} />
                        <br /><br />
                        <input type="password" placeholder='Password' name='password' onBlur={handleOnBlur} />
                        <br /><br />
                        <input type="password" placeholder='Re-type password' name='password2' onBlur={handleOnBlur} />
                        <br /><br />
                        <button type='submit' className='btn btn-sm btn-dark fw-bold'>Register</button>
                    </form>}
                {isLoading && <p>Loading...</p>}
                {user?.email && <p>User added successfully</p>}
                {authError && <p>{authError}</p>}
                <p>New user? please <Link to="/login">Login</Link></p>
                <button className='btn btn-sm btn-dark fw-bold mt-4' onClick={googleAuth} >Google Sign in</button>
            </div>
        </div>
    );
};

export default Reg;