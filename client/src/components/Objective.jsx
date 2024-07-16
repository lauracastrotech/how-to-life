/* eslint-disable no-unused-vars */
import React from 'react';
import { useContext, useState } from 'react';
import { FormStateContext } from '../helpers/FormContext';
import axios from 'axios';

export default function Objective ({answer, setAnswer}) {
  const {formStatus, setFormStatus, step, setStep} = useContext(FormStateContext); //removed prompt and setPrompt for testing
  const [prompt, setPrompt] = useState('');

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
        <div className="row">
            <h2>Objective </h2>
        </div>
        <hr />
        <div className="row">
            <form>
              <div className="form-floating">
                <textarea
                className="form-control" 
                name="prompt" 
                value={prompt} 
                onChange={handleChange}
                placeholder="In your own words, describe the skill that you want to learn about today" 
                id="custom-skill"
                ></textarea>
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
