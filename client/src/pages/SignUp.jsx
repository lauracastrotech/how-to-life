import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import SignUpForm from '../components/SignUpForm';
import '../styles/SignUp.css'; 

const SignUp = () => {
    const navigate = useNavigate();
    useEffect(() => {
        // This manually shows modal
        $('#signupModalCenter').modal('show');
      return () => {
      }
    }, [])

    const handleClose = () => {
        // This hides modal when user clicks close
        $('#signupModalCenter').modal('hide');
        navigate('/');
    }
    return (
        <div>
            {/* <!-- Modal Demo--> */}
            <div className="modal fade" id="signupModalCenter" tabIndex="-1" role="dialog" aria-labelledby="signupModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header d-flex justify-content-between">
                            <h1 className="modal-title" id="signupModalLongTitle">Sign Up</h1>
                            
                            <img id='close' src='/close.png' onClick={handleClose}/>
                        </div>

                        <div className="modal-body">
                            <SignUpForm />
                        </div>
                        <div className="modal-footer d-flex justify-content-center">
                            {/* Need to link to login form */}
                            <div id="login-link">Already a member? <a href="#">Login</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;

// Bianca's code
{/* <div className="wrapper">
            <div className="title-text">
                <div className="title login">Login Form</div>
                <div className="title signup">Signup Form</div>
            </div>
            <div className="form-container">
                <div className="slide-controls">
                    <input type="radio" name="slide" id="login" />
                    <input type="radio" name="slide" id="signup" defaultChecked />
                    <label htmlFor="login" className="slide login">Login</label>
                    <label htmlFor="signup" className="slide signup">Signup</label>
                    <div className="slider-tab"></div>
                </div>
                <div className="form-inner">
                    <SignUpForm />
                </div>
            </div>
        </div> */}