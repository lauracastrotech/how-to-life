// LoginForm.jsx

import React from 'react';

const LoginForm = () => {
    return (
        <form className="login">
            <div className="field">
                <input type="text" placeholder="Email Address" required />
            </div>
            <div className="field">
                <input type="password" placeholder="Password" required />
            </div>
            <div className="pass-link"><a href="#">Forgot password?</a></div>
            <div className="field btn">
                <div className="btn-layer"></div>
                <input type="submit" value="Login" />
            </div>
            <div className="signup-link">Not a member? <a href="#">Signup now</a></div>
        </form>
    );
}

export default LoginForm;
