import React, { useContext, useEffect, useState } from 'react';
import '../styles/Profile.css';
import { FormStateContext } from '../helpers/FormContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Profile = ({ userId }) => {
  
  const navigate = useNavigate();
  const {setIsLoggedIn} = useContext(FormStateContext);
  const [user, setUser] = useState({}); 
  const [greeting, setGreeting] = useState(''); 


  useEffect(() => {
    const fetchUserData = async () => {
      if (!userId) {
        console.error('userId is not defined'); // Add this log
        return; 
      }
      try {
        const response = await axios.get(`/api/auth/users/${userId}`);
        setUser(response.data);
        console.log(response.data.data[0]);
        setUserGreeting();
      } catch (error) {
        console.error('Error fetching user data: ', error);
      }
    };
    if (userId) {
      fetchUserData();
    }
  }, [userId]);


  //sets a greeting message based on the current time of day
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
  
  
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate('/');
  }

  return (
      <div className="container mt-5 animate__animated animate__fadeIn">
        <div className="row mb-4">
          <div className="col text-center">
            <h1 className="title animate__animated animate__heartBeat">{greeting}, {user.first_name}!</h1>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-md-10 mx-auto">
            <div className="card border-primary mb-3 animate__animated animate__fadeIn">
              <div className="card-header">Your Information:</div>
              <div className="card-body text-center">
                <p className="info-container"><strong>Name:</strong> {user.first_name}</p>
                <p className="info-container"><strong>Email:</strong> {user.email}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-md-10 mx-auto">
            <div className="card border-success mb-3 animate__animated animate__fadeIn">
              <div className="card-header">History:</div>
              <div className="card-body">
                <p className="card-text">history</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mb-4">
          <button className="btn btn-outline-secondary mx-2" onClick={handleLogout}>Logout</button>
        </div>
      </div>
  );
}  

export default Profile;