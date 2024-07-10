/* eslint-disable no-unused-vars */
import React from 'react';
import { useContext } from 'react';
import { FormStateContext } from '../helpers/FormContext';
import axios from 'axios';

export default function Objective () {
  const {formStatus, setFormStatus, step, setStep, prompt, setPrompt, asnwer, setAnswer} = useContext(FormStateContext);
   
function handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    setPrompt(value);
    console.log('name => ', name, 'value => ', value);
    console.log('prompt => ', prompt);
  }

  const handleBack = () => {
    setFormStatus('skill');
    setStep(2);
  }
  
  // Send prompt to api
  const handleSubmit = async () => {
    // POST api method to send prompt 
    try {
      const {data} = await axios('api/index/ai-answer', {
        method: "POST",
        data: prompt
      });
      console.log("data response from prompt post method");
    } 
    
    catch (error) {
      console.log(`That didn't work \n${error}`);
    }
    setFormStatus('answer');
    setStep(4);
  }

  return (
    <div className="objective">
      <div className="container col">
        <div className="row">
            <h2>Here's your How To Life step-by-step guide in the world of [value of category state goes here] </h2>
        </div>
        <hr />
        <div className="row">
            <form>
              <div className="form-floating">
                <textarea className="form-control" name="prompt" value={prompt} onChange={handleChange}placeholder="In your own words, describe the skill that you want to learn about today" id="custom-skill"></textarea>
              <label htmlFor="custom-skill">Comments</label>
              </div>
            </form>
        </div>
        <div className="row">
            <button className='col-4' onClick={handleBack}>Back</button>
            <p className='col-4'>3</p>
            <button className='col-4' onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
}
