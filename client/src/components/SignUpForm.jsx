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
        <form className="signup" onSubmit={handleSubmit}>
               <div className="field">
                <input type="text" placeholder="First Name" required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div className="field">
                <input type="email" placeholder="Email Address" required value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="field">
                <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="field">
                <input type="password" placeholder="Confirm password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>
            {error && <div className="error">{error}</div>}
            <div className="field btn">
                <div className="btn-layer"></div>
                <input type="submit" value="Signup" />
            </div>
        </form>
    );
}

export default SignUpForm;
