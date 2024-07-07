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
    <div className="question">
      <div className="container col">
        <div className="row">
            <h1>How to...</h1>
        </div>
        <div className="row">
            <p className="card col-6">Health</p>
            <p className="card col-6">Career</p>
        </div>
        <div className="row">
            <p className="card col-6">Technology</p>
            <p className="card col-6">Relationships</p>
        </div>
        <div className="row">
            <p className="card col-6">Finance</p>
            <p className="card col-6">Education</p>
        </div>
        <div className="row">
            <button className='col-4'>Back</button>
            <button className='col-4'>1</button>
            <button className='col-4'>Next</button>
        </div>
      </div>
    </div>
  );
}

export default Home;