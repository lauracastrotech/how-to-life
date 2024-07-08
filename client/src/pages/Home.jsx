import React from 'react';
import './Home.css'; 

const Home = () => {
  // Initialize context that controls state of how to life progressive form
    // if formStatus === "home", show home component step 0
    // if formStatus === "question", show question component step 1
    // if formStatus === "skill", show skill component step 2
    // if formStatus === "objective", show objective component step 3
    // if formStatus === "answer", show answer component step 4
  
  // Initialize context that controls the next and back button
    // if stepStatus === 0, show question component
    // if stepStatus === 1, show question component
    // if stepStatus === 2, show question component
    // if stepStatus === 3, show question component

    // if next is clicked, go to the next step
    // if back is clicked, go to the previous step

  // For mobile view, there should be a contatiner 
    // h1
    // paragraph
    // card 1 choose a topic
    // card 2 pick or add a skill
    // card 3 context or objective - this answers the why of what they want to learn
    // button next (no border, text decoration underline)


  return (
    <div className="home">
      <div className="container">
        <h1 className='text-primary'>Welcome!</h1>
        <p>How to life helps you get the best resources for all those life skills that they didn't teach you in high school. Here's how it works</p>
        <p className='card'>Step 1: Choose a category. There can be many different ways to learn something. Help us narrow down your search.</p>
        <p className='card'>Step 2: Select a skill. In a few words, you can tell us the skill that you would like to learn.</p>
        <p className='card'>Step 3: Share your objective. The more details that you give us, the better your answers will be.</p>
        <button>Get started</button>
        {/* 
          Question component
          Skill component
          Objective component 
          Answer component
        */}
      </div>
    </div>
  );
}

export default Home;