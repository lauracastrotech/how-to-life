/* eslint-disable no-undef */
// Login.jsx

import React from 'react';
import LoginForm from '../components/LoginForm';
import '../styles/Login.css'; 
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    useEffect(() => {
        // This manually shows modal
        $('#loginModalCenter').modal('show');
      return () => {
      }
    }, [])

    const handleClose = () => {
        // This hides modal when user clicks close
        $('#loginModalCenter').modal('hide');
        navigate('/');
    }
    
    return (
        <div>
            {/* <!-- Modal Demo--> */}
            <div className="modal fade" id="loginModalCenter" tabIndex="-1" role="dialog" aria-labelledby="loginModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header d-flex justify-content-between">
                            <h1 className="modal-title" id="loginModalLongTitle">Login</h1>
                            
                            <img id='close' src='/close.png' onClick={handleClose}/>
                        </div>

                        <div className="modal-body">
                            <LoginForm />
                        </div>
                        <div className="modal-footer d-flex justify-content-center">
                            {/* Need to link to signup form */}
                            <div id="signup-link">Not a member? <a href="#">Sign up now</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;


  // Bianca's code
        // <div className="wrapper">
        //     <div className="title-text">
        //         <div className="title login">Login Form</div>
        //         <div className="title signup">Signup Form</div>
        //     </div>
        //     <div className="form-container">
        //         <div className="slide-controls">
        //             <input type="radio" name="slide" id="login" defaultChecked />
        //             <input type="radio" name="slide" id="signup" />
        //             <label htmlFor="login" className="slide login">Login</label>
        //             <label htmlFor="signup" className="slide signup">Signup</label>
        //             <div className="slider-tab"></div>
        //         </div>
        //         <div className="form-inner">
        //             <LoginForm />
        //         </div>
        //     </div>
        // </div> 