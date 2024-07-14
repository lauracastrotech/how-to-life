import React, { useState, useHistory } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/auth/login', { email, password });
            console.log('Login response:', response.data); 
            localStorage.setItem('token', response.data.token);
        } catch (error) {
            console.error('Login error:', error);
            console.log('Login error response:', error.response); 
            setError('Invalid email or password');
        }
    };

    return (
        <form className="login" onSubmit={handleSubmit}>
            <div className="field">
                <input type="email" placeholder="Email Address" required value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="field">
                <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            {error && <div className="error">{error}</div>}
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
