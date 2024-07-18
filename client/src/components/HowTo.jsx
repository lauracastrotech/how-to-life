// THIS COMPONENT IS WHERE THE USER CAN SELECT A CATEGORY

import React from 'react';
import { useContext } from 'react';
import { FormStateContext } from '../helpers/FormContext';
import '../styles/HowTo.css'; 

export default function HowTo () {
  const {setFormStatus, setStep,} = useContext(FormStateContext);

  const handleBack = () => {
    setFormStatus('home');
    setStep(0);
  }
  
  const handleNext = () => {

    // setPrompt(category);

    setFormStatus('skill');
    setStep(2);
  }

  return (
    <div className="how-to container">
        <div>
            <h1 id="howTo">How to...</h1>
        </div>
        <div className="col">
        <div className="row">
            <div className='col card slide-in'>
              <img className="icon d-flex justify-content-start" src="/health_icon.png" alt="health symbol" />
              <p className="card-title">Health</p>
            </div>
            <div className='col card slide-in'>
              <img className="icon d-flex justify-content-start" src="/work.png" alt="career symbol" />
              <p className="card-title">Career</p>
            </div>
        </div>

        <div className="row">
          <div className='col card slide-in'>
            <img className="icon d-flex justify-content-start" src="/technology.png" alt="technology symbol" />
            <p className="card-title">Technology</p>
          </div>
          <div className='col card slide-in'>
            <img className="icon d-flex justify-content-start" src="/relationships.png" alt="relationships symbol" />
            <p className="card-title">Relationships</p>
          </div>
        </div>
        <div className="row">
          <div className='col card slide-in'>
              <img className="icon d-flex justify-content-start" src="/finance.png" alt="finance symbol" />
              <p className="card-title">Finance</p>
            </div>
            <div className='col card slide-in'>
              <img className="icon d-flex justify-content-start" src="/education.png" alt="education symbol" />
              <p className="card-title">Education</p>
            </div>
        </div>
        <div className="progress">
          <div className="progress-bar" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <div className="row">
            <button className='col btn btn-sm' onClick={handleBack}>Back</button>
            <p className='col d-flex justify-content-center align-items-center' id='step1'>1</p>
            <button className='col btn btn-sm' onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  );
}
