/* eslint-disable no-undef */
// Login.jsx

import React from 'react';
import LoginForm from '../components/LoginForm';
import '../styles/Login.css'; 
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    // const navigate = useNavigate();
    useEffect(() => {
        // This manually shows modal
        $('#loginModalCenter').modal('show');
        // navigate('/'); this is causing the form to be uncentered
      return () => {
      }
    }, [])
    
    return (
        
        <div>
            {/* <!-- Modal Demo--> */}
            <div className="modal fade" id="loginModalCenter" tabIndex="-1" role="dialog" aria-labelledby="loginModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title" id="loginModalLongTitle">Login</h1>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
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
        // <div classNameNameNameName="wrapper">
        //     <div classNameNameNameName="title-text">
        //         <div classNameNameNameName="title login">Login Form</div>
        //         <div classNameNameNameName="title signup">Signup Form</div>
        //     </div>
        //     <div classNameNameNameName="form-container">
        //         <div classNameNameNameName="slide-controls">
        //             <input type="radio" name="slide" id="login" defaultChecked />
        //             <input type="radio" name="slide" id="signup" />
        //             <label htmlFor="login" classNameNameNameName="slide login">Login</label>
        //             <label htmlFor="signup" classNameNameNameName="slide signup">Signup</label>
        //             <div classNameNameNameName="slider-tab"></div>
        //         </div>
        //         <div classNameNameNameName="form-inner">
        //             <LoginForm />
        //         </div>
        //     </div>
        // </div> 