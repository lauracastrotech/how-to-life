import React from 'react';
import SignUpForm from './SignUpForm';

const SignUpModal = () => {
  return (
    <div
      className="modal fade"
      id="signupModal"
      tabIndex="-1"
      aria-labelledby="signupModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="signupModalLabel">Sign Up</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <SignUpForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpModal;
