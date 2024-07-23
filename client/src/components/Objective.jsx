/* eslint-disable no-unused-vars */

//Objectitve > This section of the form collects more context and has the submit button to send the prompt to the API

import 'animate.css';
import DotLoader from "react-spinners/DotLoader";
import React from 'react';
import { useContext, useState } from 'react';
import { FormStateContext } from '../helpers/FormContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Objective.css'; 

export default function Objective () {
  const [loading, setLoading] = useState(false);
  const {setFormStatus, setStep, prompt, setPrompt, answer, setAnswer} = useContext(FormStateContext);
  const navigate = useNavigate();

  // Create temporary user id variable to test axios post, once login authentication complete you will need to update
   
function handleChange(event) {
    const value = event.target.value;
    setPrompt(value);
  }

  const handleBack = () => {
    setFormStatus('skill');
    setStep(2);
    navigate("/skill/2");

  }
  
  // Send prompt to api
  const handleSubmit = async () => {
    console.log("Submitting prompt:", prompt);
    setLoading(true);
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
      setLoading(false);
      navigate("/answer/4");

    } catch (error) {
      console.log(`That didn't work \n${error}`);
    }
  }

  return (
    <div className="objective">
      {loading && <div className='d-flex flex-column justify-content-center align-items-center'>
                <DotLoader color='#b7c6e7' size={150}/>
            </div> }
      {!loading && <div className="container col">
        <div className="row animate__animated animate__fadeInLeft">
              <h2>Almost there, we need some context. The more information you give me the better the response.</h2>
          </div>
          <div className="row animate__animated animate__fadeInLeft">
              <form>
                <div className="form-floating">
                  <textarea
                  className="form-control" 
                  name="prompt" 
                  value={prompt} 
                  onChange={handleChange}
                  id="custom-objective"
                  ></textarea>
                  <label htmlFor="custom-objective">Give us all the details...</label>
                </div>
              </form>
          </div>
          <div className="progress">
            <div className="progress-bar" role="progressbar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div className="row">
              <button className='col form-btn' onClick={handleBack}>Back</button>
              <p className='col d-flex justify-content-center align-items-center' id='step2'>3</p>
              <button className='col form-btn' onClick={handleSubmit}>Submit</button>
          </div> 
      </div>
      }
    </div>
  );
}
