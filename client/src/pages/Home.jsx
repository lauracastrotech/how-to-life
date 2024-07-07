import React from 'react';
import './Home.css'; 

const Home = () => {
  // Initialize context that controls state of how to life progressive form

  // For mobile view, there should be a contatiner 
    // h1
    // paragraph
    // card 1 choose a topic
    // card 2 pick or add a skill
    // card 3 context or objective - this answers the why of what they want to learn
    // button next (no border, text decoration underline)


  return (
    <div className="home">
      <h1>Welcome to How-to-life!</h1>
      {/* 
        Question component
        Skill component
        Objective component 
        Answer component
      */}
    </div>
  );
}

export default Home;