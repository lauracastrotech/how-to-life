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
            <div className="modal fade" id="signupModalCenter" tabIndex="-1" role="dialog" aria-labelledby="signupModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header d-flex justify-content-between">
                            <h1 className="modal-title" id="signupModalLongTitle">Sign Up</h1>
                            
                            <img id='close' src='/close.png' onClick={handleClose}/>
                        </div>

                        <div className="modal-body">
                            <SignUpForm hideModal = {handleClose}/>
                        </div>
                        <div className="modal-footer d-flex justify-content-center">
                            <div id="login-link">Already a member? <a href="/login">Login</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
