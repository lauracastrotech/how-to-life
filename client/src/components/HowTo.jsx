import React from 'react';
import { useContext } from 'react';
import { FormStateContext } from '../helpers/FormContext';

export default function HowTo () {
  const {setFormStatus, setStep,} = useContext(FormStateContext);

  const handleBack = () => {
    setFormStatus('home');
    setStep(0);
  }
  
  const handleNext = () => {
    setFormStatus('skill');
    setStep(2);
  }

  return (
    <div className="how-to">
      <div className="container col bg-primary">
        <div className="row bg-warning m-2">
            <h1>How to...</h1>
        </div>
        <div className="row bg-success m-2">
            <button className="btn-group btn col-6">Health</button>
            <button className="btn-group btn col-6">Career</button>
        </div>
        <div className="row bg-success m-2">
            <button className="btn-group btn col-6">Technology</button>
            <button className="btn-group btn col-6">Relationships</button>
        </div>
        <div className="row bg-success m-2">
            <button className="btn-group btn col-6">Finance</button>
            <button className="btn-group btn col-6">Education</button>
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
