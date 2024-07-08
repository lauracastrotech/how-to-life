/* eslint-disable no-unused-vars */
import React from 'react';
import { useContext } from 'react';
import { FormStateContext } from '../helpers/FormContext';

export default function Objective () {
  const {formStatus, setFormStatus, step, setStep} = useContext(FormStateContext);
   
  const handleBack = () => {
    setFormStatus('skill');
    setStep(2);
  }
  
  const handleNext = () => {
    setFormStatus('answer');
    setStep(4);
  }

  return (
    <div className="objective">
      <div className="container col">
        <div className="row">
            <h2>Wonderful! Now, for the best response tell us more about you. Why is this skill important to you? What is your objective?</h2>
        </div>
        <hr />
        <div className="row">
            <form>
              <div className="form-floating">
                <textarea className="form-control" placeholder="In your own words, describe the skill that you want to learn about today" id="custom-skill"></textarea>
              <label htmlFor="custom-skill">Comments</label>
              </div>
            </form>
        </div>
        <div className="row">
            <button className='col-4' onClick={handleBack}>Back</button>
            <p className='col-4'>3</p>
            <button className='col-4' onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  );
}
