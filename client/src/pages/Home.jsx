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
    <div className="container">
      {formStatus === "home" && step === 0 && (
        <div className="home">
          <div className='row'>
            <div className='col-md-6'>
              <h1 id='welcome'>Welcome!</h1>
              <p id="description">How to life is a tool that helps you create a prompt for all those life skills that they didn&apos;t teach you in high school. Here&apos;s how it works.</p>
            </div>
            <div className='col-md-6'>
              <div className="card">
                <p className='card-title'>1 | Category</p>
                <p className='card-body'>Setup your prompt by selecting an area of interest.</p>
              </div>
              <div className="card">
                <p className='card-title'>2 | Skill</p>
                <p className='card-body'>Tell us about what you want to learn.</p>
              </div>
              <div className="card">
                <p className='card-title'>3 | Objective</p>
                <p className='card-body'>Give us some context. The more details the better.</p>
              </div>
              <hr />
              <button className="btn btn-sm" id='get-started' onClick={handleGetStarted}>Get started</button> 
            </div>
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
