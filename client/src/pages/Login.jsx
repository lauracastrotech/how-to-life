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
                            <LoginForm hideModal = {handleClose}/>
                        </div>
                        <div className="modal-footer d-flex justify-content-center">
                            <div id="signup-link">Not a member? <a href="/signup">Sign up now</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;

