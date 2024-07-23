// THIS COMPONENT IS WHERE THE USER CAN SELECT A CATEGORY
import React, { useContext } from 'react';
import { FormStateContext } from '../helpers/FormContext';
import { useNavigate } from 'react-router-dom';
import '../styles/HowTo.css'; 

export default function HowTo () {
  const {setFormStatus, setStep,setPrompt} = useContext(FormStateContext);
  const navigate = useNavigate();

  const handleBack = () => {
    setFormStatus('home');
    setStep(0);
    navigate("/");
  }
  
  const handleNext = () => {
    setFormStatus('skill');
    setStep(2);
    navigate("/skill/2");
  }

  const handleCategorySelect = (category) => {
    setPrompt(category); 
    setFormStatus('skill'); 
    setStep(2); 
    navigate("/skill/2");
};


  return (
    <div className="how-to container">
        <div>
            <h2 id="howTo">Choose a category</h2>
        </div>

        <div className="col">
        <div className="row">
            <div className='col card slide-in' onClick={() => handleCategorySelect('Health')}>
              <img className="icon d-flex justify-content-start" src="/health_icon.png" alt="health symbol"/>
              <h6 className="card-title" id='health'>Health</h6>
            </div>
            <div className='col card slide-in' onClick={() => handleCategorySelect('Career')}>
              <img className="icon d-flex justify-content-start" src="/work.png" alt="career symbol"/>
              <h6 className="card-title" id='career'>Career</h6>
            </div>
        </div>

        <div className="row">
          <div className='col card slide-in' onClick={() => handleCategorySelect('Technology')}>
            <img className="icon d-flex justify-content-start" src="/technology.png" alt="technology symbol"/>
            <h6 className="card-title" id='technology'>Technology</h6>
          </div>
          <div className='col card slide-in' onClick={() => handleCategorySelect('Relationships')}>
            <img className="icon d-flex justify-content-start" src="/relationships.png" alt="relationships symbol" />
            <h6 className="card-title" id='relationships'>Relationships</h6>
          </div>
        </div>
        <div className="row">
          <div className='col card slide-in' onClick={() => handleCategorySelect('Finance')}>
              <img className="icon d-flex justify-content-start" src="/finance.png" alt="finance symbol" />
              <h6 className="card-title" id='finance'>Finance</h6>
            </div>
            <div className='col card slide-in' onClick={() => handleCategorySelect('Education')}>
              <img className="icon d-flex justify-content-start" src="/education.png" alt="education symbol" />
              <h6 className="card-title" id='education'>Education</h6>
            </div>
        </div>
        <div className="progress">
          <div className="progress-bar" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
          </div>
       </div>
        <div className="row">
            <button className='col form-btn' onClick={handleBack}>Back</button>
            <p className='col d-flex justify-content-center align-items-center' id='step1'>1</p>
            <button id="next-btn" className='col form-btn' onClick={handleNext} disabled>Next</button>
        </div>
      </div>
    </div>
  );
}
