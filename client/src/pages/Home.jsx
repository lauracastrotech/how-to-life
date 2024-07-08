import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { FormStateContext } from '../helpers/FormContext';
import './Home.css'; 

export default function Home () {
    const {formStatus, setFormStatus, step, setStep} = useContext(FormStateContext);
   
  const handleGetStarted = () => {
    setFormStatus('how-to');
    setStep(1);
    console.log(step);
    console.log('in click event function');
  }
  
  return (
    <div className="progressive-form">
      <div className="container bg-warning">
        <div className='home row'>
          <div className='col-6'>
            <h1 className='bg-primary'>Welcome!</h1>
            <p className='bg-light'>How to life helps you get the best resources for all those life skills that they didn&apos;t teach you in high school. Here&apos;s how it works</p>
          </div>
          <div className='col-6'>
            {/* Need to add divs for card and card-body then add card-text to <p> elements */}
            <p className='card bg-success'>Step 1: Choose a category. There can be many different ways to learn something. Help us narrow down your search.</p>
            <p className='card bg-success'>Step 2: Select a skill. In a few words, you can tell us the skill that you would like to learn.</p>
            <p className='card bg-success'>Step 3: Share your objective. The more details that you give us, the better your answers will be.</p>
          </div>
          <button onClick = {() => handleGetStarted()}>Get started</button>
        </div> 
      </div>
    </div>
  );
}
