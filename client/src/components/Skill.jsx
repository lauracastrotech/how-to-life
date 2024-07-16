import React from 'react';
import { useContext } from 'react';
import { FormStateContext } from '../helpers/FormContext';

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
            <h2>Tell us more about the skill that you want to learn. <br /> Here are some ideas if you&apos;re not sure</h2>
        </div>
        <hr />
        <div className="row">
            <p className="card col">Popular Question placeholder</p>
        </div>
        <div className="row">
            <p className="card col">Popular Question placeholder</p>
        </div>
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
            <p className='col-4'>2</p>
            <button className='col-4' onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  );
}
