import '../styles/Profile.css';
import { useContext } from 'react';
import { FormStateContext } from '../helpers/FormContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  /*useEffect to get history when user isLoggedIn

  */
  const navigate = useNavigate();
  const {setIsLoggedIn} = useContext(FormStateContext);
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate('/');
  }
  
  return (
    <div>
      <h2>Profile Page</h2>
      <button className='btn' onClick={handleLogout}>Logout</button>
      
    </div>
  );
}

export default Profile;