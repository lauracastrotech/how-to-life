// This is the component where chatGpt response renders

// GET method for history => this is tied to backend, create list of cards where each card has text that is a question that the user previously asked

// This is where the text-to-speech icon will live

/*
step 1 user sees form instructions
step 2 user selects a category
step 2a once a category is clicked, add category to prompt, send category name to suggestions api, store popular question in state
user clicks next
step 3 render response from suggestions api req, add question/or custom question to prompt state
user clicks next
step 4 user types in objective/more context, add to prompt state
user clicks submit - onClick send prompt to POST api and the reqponse to this request will be rendered in answer component (maybe this call is a useEffect in answer from chatGPT)
*/

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