import 'animate.css';
import React from 'react';
import { useContext } from 'react';
import { FormStateContext } from '../helpers/FormContext';
import '../styles/Skill.css'; 

export default function Question () {
  const {formStatus, setFormStatus, step, setStep, prompt, setPrompt} = useContext(FormStateContext);
   
  // use effect to run callback function that assigns categoryChosen to category which should be added to pompt + skills input
  
  // Return to previous section on click
  const handleBack = () => {
    setFormStatus('how-to');
    setStep(1);
  }
  
  // Continue to next section on click
  const handleNext = () => {
    setFormStatus('objective');
    setStep(3);
  }

  return (
    <div className="skill">
      <div className="container col">
        <div className="row">
            <h2 className='animate__animated animate__fadeInLeft'>Awesome! Describe a skill that you want to learn.</h2>
        </div>
        <div className="row">
            <form>
              <div className="form-floating">
                <textarea className="form-control animate__animated animate__fadeInLeft" id="custom-skill"></textarea>
              </div>
            </form>
        </div>
        {/* This is where Bianca debugs to pull questions */}
        <div className="row">
            <p className="card colanimate__animated animate__fadeInLeft ">Popular Question placeholder</p>
        </div>
        <div className="row">
            <p className="card col animate__animated animate__fadeInLeft">Popular Question placeholder</p>
        </div>
        <div className="progress">
          <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <div className="row">
            <button className='col btn btn-sm' onClick={handleBack}>Back</button>
            <p className='col d-flex justify-content-center align-items-center' id='step2'>2</p>
            <button className='col btn btn-sm' onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  );
}
