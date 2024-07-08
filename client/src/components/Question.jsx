import React from 'react';
import { useContext } from 'react';
import { FormStateContext } from '../helpers/FormContext';

export default function Question () {
  const {formStatus, setFormStatus, step, setStep} = useContext(FormStateContext);
   
  const handleBack = () => {
    setFormStatus('home');
    setStep(0);
  }
  
  const handleNext = () => {
    setFormStatus('skill');
    setStep(2);
  }

  return (
    <div className="question">
      <div className="container col bg-primary">
        <div className="row bg-warning m-2">
            <h1>How to...</h1>
        </div>
        <div className="row bg-success m-2">
            <p className="card col-lg-6">Health</p>
            <p className="card col-lg-6">Career</p>
        </div>
        <div className="row bg-success m-2">
            <p className="card col-6">Technology</p>
            <p className="card col-6">Relationships</p>
        </div>
        <div className="row bg-success m-2">
            <p className="card col-6">Finance</p>
            <p className="card col-6">Education</p>
        </div>
        <div className="row bg-success m-2">
            <button className='col-4' onClick={handleBack}>Back</button>
            <p className='col-4 bg-danger'>1</p>
            <button className='col-4' onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  );
}
