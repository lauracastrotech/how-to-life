import React, { useContext, useEffect, useState } from 'react';
import '../styles/Profile.css';
import { FormStateContext } from '../helpers/FormContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Profile = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(FormStateContext);
  const [user, setUser] = useState({});
  const [greeting, setGreeting] = useState('');

  const userId = localStorage.getItem('user_id');
  const token = localStorage.getItem('token');
  console.log(`Loggedin user id: ${userId}`)
  console.log(`Loggedin user token: ${token}`)

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

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate('/');
  };
 
  return (
    <div className="container mt-4 animate__animated animate__fadeIn">
      <div className="row mb-4-custom">
        <div className="col text-center">
          <h1 className="title animate__animated animate__heartBeat">{greeting}, {user.first_name} ! <i class="fa-regular fa-face-smile"></i></h1>
        </div>
      </div>
      <div className="welcome-msg">
      <p>
      Here you can review your search history and revisit our guides to help you master new skills. 🚀
      </p>
    </div>
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
};

export default Profile;
