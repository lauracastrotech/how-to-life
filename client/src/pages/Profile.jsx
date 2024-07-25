import { useContext, useEffect, useState } from 'react';
import '../styles/Profile.css';
import { FormStateContext } from '../helpers/FormContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Profile = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(FormStateContext);
  const [user, setUser] = useState({});
  const [greeting, setGreeting] = useState('');
  const [userHistory, setUserHistory] = useState([])

  const userId = localStorage.getItem('user_id');
  const token = localStorage.getItem('token');
  console.log(`Loggedin user id: ${userId}`)
  console.log(`Loggedin user token: ${token}`)

    useEffect(() => {
      const loadHistory = async () => {
        try {
            const response = await axios(`api/index/user-history/${userId}`);
            console.log(response.data);
            setUserHistory(response.data);
        } catch (error) {
            console.error('Profile history error:', error);
        }
    };
    
    loadHistory();

    }, [userId])
  
  useEffect(() => {
    const fetchUserData = async () => {
      if (!userId || !token) {
        console.error('userId or token is not defined');
        return;
      }

      try {
        const response = await axios.get(`/api/auth/users/${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.data) {
          setUser(response.data[0]); 
          setUserGreeting(); 
        } else {
          console.error('No user data found');
        }
      } catch (error) {
        console.error('Error: ', error);
      }
    };

    fetchUserData();
  }, [userId, token]);


  const setUserGreeting = () => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      setGreeting('Good Morning');
    } else if (currentHour < 18) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good Evening');
    }
  };

  const formatAnswer = (answer) => {
    const cleanText = answer.replace(/^\d+\.\s+/gm, '').replace(/\*\*/g, ''); 
    const lines = cleanText.split('\n').filter(line => line.trim() !== '');
   
    return (
      <ol>
        {lines.map((line, index) => (
          <li key={index}>{line}</li>
        ))}
      </ol>
    );
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate('/');
  };
 
  return (
    <div className="container mt-4 animate__animated animate__fadeIn">
      <div className="row mb-4-custom">
        <div className="col text-center">
          <h1 className="title animate__animated animate__heartBeat">{greeting}, {user.first_name} ! <i className="fa-regular fa-face-smile"></i></h1>
        </div>
      </div>
      <div className="welcome-msg">
        <p>
        Here you can review your search history and revisit our guides to help you master new skills. 🚀
        </p>
      </div>
      {/* Your Information */}
      <div className="row mb-4">
        <div className="col-md-10 mx-auto">
          <div className="card border-primary mb-3 animate__animated animate__fadeIn">
            <div className="card-header">Your Information:</div>
            <div className="card-body text-center">
            <p className="info-container"><i className="fas fa-user"></i> {user.first_name}</p>
            <p className="info-container"><i className="fas fa-envelope"></i> {user.email}</p>
            </div>
          </div>
        </div>
      </div>
      {/* History */}
      <div className="row mb-4">
        <div className="col-md-10 mx-auto">
          <div className="animate__animated animate__fadeIn">
            <h2 className='d-flex justify-content-center'>History</h2>
          </div>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  {formatAnswer(userHistory[0].question)}
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  {formatAnswer(userHistory[0].answer)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Logout */}
      <div className="row justify-content-center mb-4">
        <button className="btn btn-outline-secondary mx-2" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Profile;
