/* eslint-disable no-unused-vars */

//Objectitve > This section of the form collects more context and has the submit button to send the prompt to the API

import 'animate.css';
import React from 'react';
import { useContext, useState } from 'react';
import { FormStateContext } from '../helpers/FormContext';
import axios from 'axios';
import '../styles/Objective.css'; 

export default function Objective () {
  const {setFormStatus, setStep, prompt, setPrompt, answer, setAnswer} = useContext(FormStateContext);

  // Create temporary user id variable to test axios post, once login authentication complete you will need to update
   
function handleChange(event) {
    const value = event.target.value;
    console.log('New value:', value)
    // const name = event.target.name; => is this one needed?
    setPrompt(value);
  }

  const handleBack = () => {
    setFormStatus('skill');
    setStep(2);
  }
  
  // Send prompt to api

  const handleSubmit = async () => {
    console.log("Submitting prompt:", prompt);

    try {
      console.log("Payload:", { prompt })
      //sends the prompt value to the api
      const { data } = await axios.post('/api/index/ai-answer', 
      { prompt }, 
      { headers: { 'Content-Type': 'application/json' } });

      console.log("Data response from prompt post method", data);
      setAnswer(data.answer); 

      setFormStatus('answer');
      setStep(4);
    } catch (error) {
      console.log(`That didn't work \n${error}`);
    }
  }
// } catch (error) {
//   if (error.response) {
//     console.log('Response data:', error.response.data);
//   } else if (error.request) {
//     console.log('Request data:', error.request);
//   } else {
//     console.log('Error message:', error.message);
//   }
//   console.log('Config:', error.config);
// }
// }

  return (
    <div className="objective">
      <div className="container col">
        <div className="row animate__animated animate__fadeInLeft">
            <h2>How do you best learn, why do you need to learn this skill now, what outcome do you hope that you will have, when do you need to do this by.</h2>
        </div>
        <div className="row animate__animated animate__fadeInLeft">
            <form>
              <div className="form-floating">
                <textarea
                className="form-control" 
                name="prompt" 
                value={prompt} 
                onChange={handleChange}
                id="custom-skill"
                ></textarea>
             
              </div>
            </form>
        </div>
        <div className="progress">
          <div className="progress-bar" role="progressbar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <div className="row">
            <button className='col btn btn-sm' onClick={handleBack}>Back</button>
            <p className='col d-flex justify-content-center align-items-center' id='step2'>3</p>
            <button className='col btn btn-sm' onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
}
