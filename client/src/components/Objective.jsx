import React from 'react';

export default function Objective () {
  // Initialize context that controls state of how to life progressive form
    // if formStatus === "question", show question component step 1
   
  // Initialize context that controls the next and back button
    // if stepStatus === 1, show question component
   
    // if next is clicked, go to the next step
    // if back is clicked, go to the previous step

  return (
    <div className="question">
      <div className="container col">
        <div className="row">
            <h1>How to...</h1>
        </div>
        <div className="row">
            <p className="card col-lg-6">Health</p>
            <p className="card col-lg-6">Career</p>
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
