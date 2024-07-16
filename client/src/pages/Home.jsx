import React, { useContext } from 'react';
import { FormStateContext } from '../helpers/FormContext';
import HowTo from '../components/HowTo';
import Skill from '../components/Skill';
import Objective from '../components/Objective';
import Answer from '../components/Answer';
import './Home.css'; 

export default function Home() {
  const { formStatus, setFormStatus, step, setStep } = useContext(FormStateContext);

  const handleGetStarted = () => {
    setFormStatus('how-to');
    setStep(1);
  };

  return (
    <div className="progressive-form">
      {formStatus === "home" && step === 0 && (
        <div className="container bg-warning">
          <div className='home row'>
            <div className='col-6'>
              <h1 className='bg-primary'>Welcome!</h1>
              <p className='bg-light'>How to life helps you get the best resources for all those life skills that they didn&apos;t teach you in high school. Here&apos;s how it works</p>
            </div>
            <div className='col-6'>
              <p className='card bg-success'>Step 1: Choose a category. There can be many different ways to learn something. Help us narrow down your search.</p>
              <p className='card bg-success'>Step 2: Select a skill. In a few words, you can tell us the skill that you would like to learn.</p>
              <p className='card bg-success'>Step 3: Share your objective. The more details that you give us, the better your answers will be.</p>
            </div>
            <hr />
            <button onClick={handleGetStarted}>Get started</button>
          </div> 
        </div>
      )}
      {formStatus === "how-to" && step === 1 && <HowTo />}
      {formStatus === "skill" && step === 2 && <Skill />}
      {formStatus === "objective" && step === 3 && <Objective />}
      {formStatus === "answer" && <Answer />}
    </div>
  );
}
