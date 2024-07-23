/* eslint-disable no-unused-vars */

import 'animate.css';
import DotLoader from 'react-spinners/DotLoader';
import React, { useContext, useState } from 'react';
import { FormStateContext } from '../helpers/FormContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Objective.css'; 

export default function Objective() {
  const [loading, setLoading] = useState(false);
  const { setFormStatus, setStep, prompt, setPrompt, answer, setAnswer } = useContext(FormStateContext);
  const navigate = useNavigate();

  const userId = localStorage.getItem('userId') || ''; 
  const token = localStorage.getItem('token') || ''; 

  const handleSubmit = async (event) => {
    event.preventDefault(); 
    setLoading(true);

    console.log('Submitting prompt with token:', token);
    console.log('userId:', userId);
    console.log('prompt:', prompt);

    try {
      // Send the prompt value to the API
      const { data } = await axios.post('http://localhost:3000/api/index/ai-answer', 
        { userId, prompt }, 
        { headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` } }
      );
        
      console.log("Data response from prompt post method", data);
      setAnswer(data.answer); 
      setFormStatus('answer');
      setStep(4);
      setLoading(false);
      navigate("/answer/4");

    } catch (error) {
      console.error('Error submitting prompt:', error);
      setLoading(false);
    }
  };

  // Handle changes in the prompt textarea
  const handleChange = (event) => {
    setPrompt(event.target.value);
  };

  // Handle the back button click
  const handleBack = () => {
    setFormStatus('skill');
    setStep(2);
    navigate("/skill/2");
  };
  
  return (
    <div className="objective">
      {loading && (
        <div className='d-flex flex-column justify-content-center align-items-center'>
          <DotLoader color='#b7c6e7' size={150}/>
        </div>
      )}
      {!loading && (
        <div className="container col">
          <div className="row animate__animated animate__fadeInLeft">
            <h2>Almost there, we need some context. The more information you give me the better the response.</h2>
          </div>
          <div className="row animate__animated animate__fadeInLeft">
            <form onSubmit={handleSubmit}>
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
              <div className="row">
                <button type="button" className='col form-btn' onClick={handleBack}>Back</button>
                <p className='col d-flex justify-content-center align-items-center' id='step2'>3</p>
                <button type="submit" className='col form-btn'>Submit</button>
              </div> 
            </form>
          </div>
          <div className="progress">
            <div className="progress-bar" role="progressbar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      )}
    </div>
  );
}
