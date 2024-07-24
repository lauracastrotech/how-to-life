import '../styles/Profile.css';
import { useContext } from 'react';
import { FormStateContext } from '../helpers/FormContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Profile = () => {
  /*
    const userId = localStorage.setItem('user_id',user_id);

    useEffect to get history when user isLoggedIn
    const loadHistory = async (e) => {
        e.preventDefault();
        try {
            const response = await axios(`/user-history/{userId}`){
              data: ????
            }
            console.log(response.data[0]);

        } catch (error) {
            console.error('Profile history error:', error);
        }
    };
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