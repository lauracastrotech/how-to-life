// Login.jsx

import React from 'react';
import LoginForm from '../components/LoginForm';
import '../styles/Login.css'; 
import { useEffect } from 'react';
const Login = () => {
    useEffect(() => {
        $('#exampleModalCenter').modal('show');
    
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
                    <h5 className="modal-title" id="exampleModalLongTitle">Login</h5>
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
        
        
        // Bianca's code
        // <div classNameNameName="wrapper">
        //     <div classNameNameName="title-text">
        //         <div classNameNameName="title login">Login Form</div>
        //         <div classNameNameName="title signup">Signup Form</div>
        //     </div>
        //     <div classNameNameName="form-container">
        //         <div classNameNameName="slide-controls">
        //             <input type="radio" name="slide" id="login" defaultChecked />
        //             <input type="radio" name="slide" id="signup" />
        //             <label htmlFor="login" classNameNameName="slide login">Login</label>
        //             <label htmlFor="signup" classNameNameName="slide signup">Signup</label>
        //             <div classNameNameName="slider-tab"></div>
        //         </div>
        //         <div classNameNameName="form-inner">
        //             <LoginForm />
        //         </div>
        //     </div>
        // </div>
    );
}

export default Login;
