import React, { useState } from 'react';
import axios from 'axios';

const SignUpForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        try {
            const response = await axios.post('/api/auth/register', { email, password, firstName });
            console.log(response.data);
            setSuccessMessage('You have signed up successfully');
        } catch (error) {
            setError('Registration failed');
        }
    };

    return (
        <div className='container form-group'>
            <form id='signup' className="signup" onSubmit={handleSubmit}>
                <div className="field">
                    <input 
                    type="text" 
                    className='form-control'
                    id='firstName'
                    placeholder="First Name" 
                    required value={firstName} 
                    autoComplete="text" 
                    onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div className="field">
                    <input 
                    type="email" 
                    className='form-control'
                    id='email'
                    placeholder="Email Address" 
                    required value={email} 
                    autoComplete="email" 
                    onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="field">
                    <input 
                    type="password" 
                    className='form-control'
                    id='password'
                    placeholder="Password" 
                    required value={password} 
                    autoComplete="password" 
                    onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="field">
                    <input 
                    type="password" 
                    className='form-control'
                    id='confirmedPassword'
                    placeholder="Confirm password" 
                    required value={confirmPassword}
                    autoComplete="password"  
                    onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
                {error && <div className="error">{error}</div>}
                <div className="field">
                    <button type="submit" className="btn btn-sm"> Register
                    </button>
                </div>
            </form>
        </div>
    );
}

export default SignUpForm;

// Bianca Code
{/* <form className="signup" onSubmit={handleSubmit}>
               <div className="field">
                <input 
                type="text" 
                placeholder="First Name" 
                required value={firstName} 
                autoComplete="text" 
                onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div className="field">
                <input 
                type="email" 
                placeholder="Email Address" 
                required value={email} 
                autoComplete="email" 
                onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="field">
                <input 
                type="password" 
                placeholder="Password" 
                required value={password} 
                autoComplete="password" 
                onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="field">
                <input 
                type="password" 
                placeholder="Confirm password" 
                required value={confirmPassword}
                autoComplete="password"  
                onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>
            {error && <div className="error">{error}</div>}
            <div className="field btn">
                <div className="btn-layer"></div>
                <input type="submit" value="Signup" />
            </div>
        </form> */}