import React, { useState, useHistory, useContext } from 'react';
import { FormStateContext } from '../helpers/FormContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/LoginForm.css'
const LoginForm = ({hideModal}) => {
    
    const {setIsLoggedIn} = useContext(FormStateContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/auth/login', { email, password });
            console.log('Login response:', response.data); 
            localStorage.setItem('token', response.data.token);
            setIsLoggedIn(true);
            hideModal();
            navigate('/profile')
        } catch (error) {
            console.error('Login error:', error);
            console.log('Login error response:', error.response); 
            setEmail('');
            setPassword('');
            setError('Oops, invalid email or password. Try again.');
        }
    };

    return (
        <div className='container form-group'>
            <form id="login" onSubmit={handleSubmit}>
                <div className="field form-floating">
                    <input 
                        type="email" 
                        className='form-control'
                        id='email'
                        placeholder="Email Address" 
                        required value={email} 
                        autoComplete="email" 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    <label htmlFor="email">Email</label>
                </div>
                <div className="field form-floating">
                    <input 
                        type="password" 
                        className='form-control'
                        id='password'
                        placeholder="Password" 
                        required value={password} 
                        autoComplete="password" 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                    <label htmlFor="password">Password</label>
                </div>
                {error && <div className="error">{error}</div>}
                <div className="pass-link">
                    <a href="#">Forgot password?</a>
                </div>
                <div className='field'>   
                    <button type='submit' className='form-btn'>Login</button>
                </div>
                {/* Added this to the centered modal <div className="signup-link">Not a member? <a href="#">Signup now</a></div> */}
            </form>
        </div>
    );
}

export default LoginForm;
