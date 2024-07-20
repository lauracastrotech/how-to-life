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
        $('#exampleModalCenter').modal('show');
        // navigate('/'); this is causing the form to be uncentered
      return () => {
      }
    }, [])
    
    return (
        
        <div>
            {/* <!-- Modal Demo--> */}
      
            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <LoginForm />
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
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