import React from 'react';
import Suggestions from '../components/Suggestions';
import './Home.css'; 

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to How-to-life!</h1>
      <Suggestions/>

    </div>
  );
}

export default Home;