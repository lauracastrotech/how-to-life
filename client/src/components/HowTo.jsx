import React, { useContext } from 'react';
import { FormStateContext } from '../helpers/FormContext';

export default function HowTo() {
    const { setFormStatus, setStep, setPrompt } = useContext(FormStateContext);

  const handleBack = () => {
    setFormStatus('home');
    setStep(0);
  }
  
  const handleNext = () => {

    setFormStatus('skill');
    setStep(2);
  }

  const handleCategorySelect = (category) => {
    setPrompt(category); 
    setFormStatus('skill'); 
    setStep(2); 
};


  return (
    <div className="how-to">
      <div className="container col bg-primary">
        <div className="row bg-warning m-2">
            <h1>How to...</h1>
        </div>
        <div className="row bg-success m-2">
        <button className="btn-group btn col-6" onClick={() => handleCategorySelect('Health')}>Health</button>
        <button className="btn-group btn col-6" onClick={() => handleCategorySelect('Career')}>Career</button>
        </div>
        <div className="row bg-success m-2">
        <button className="btn-group btn col-6" onClick={() => handleCategorySelect('Technology')}>Technology</button>
        <button className="btn-group btn col-6" onClick={() => handleCategorySelect('Relationships')}>Relationships</button>
        </div>
        <div className="row bg-success m-2">
        <button className="btn-group btn col-6" onClick={() => handleCategorySelect('Finance')}>Finance</button>
        <button className="btn-group btn col-6" onClick={() => handleCategorySelect('Education')}>Education</button>
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
