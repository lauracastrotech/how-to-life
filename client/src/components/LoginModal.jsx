import React, { useEffect } from 'react';
import LoginForm from './LoginForm';


const LoginModal = ({ onLoginSuccess }) => {
  
  return (
    
        
    <div classNameName="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
      <div classNameName="modal-dialog">
        <div classNameName="modal-content">
          <div classNameName="modal-header">
            <h5 classNameName="modal-title" id="loginModalLabel">Login</h5>
            <button type="button" classNameName="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div classNameName="modal-body">
            <LoginForm onLoginSuccess={onLoginSuccess} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
