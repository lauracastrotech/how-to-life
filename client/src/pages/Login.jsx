// Login.jsx

import React from 'react';
import LoginForm from '../components/LoginForm';
import '../styles/Login.css'; 
const Login = () => {
    return (
        <div className="wrapper">
            <div className="title-text">
                <div className="title login">Login Form</div>
                <div className="title signup">Signup Form</div>
            </div>
            <div className="form-container">
                <div className="slide-controls">
                    <input type="radio" name="slide" id="login" defaultChecked />
                    <input type="radio" name="slide" id="signup" />
                    <label htmlFor="login" className="slide login">Login</label>
                    <label htmlFor="signup" className="slide signup">Signup</label>
                    <div className="slider-tab"></div>
                </div>
                <div className="form-inner">
                    <LoginForm />
                </div>
            </div>
        </div>
    );
}

export default Login;
