// THIS COMPONENT IS WHERE THE USER CAN SELECT A CATEGORY
import React, { useContext } from 'react';
import { FormStateContext } from '../helpers/FormContext';
import { useNavigate } from 'react-router-dom';
import '../styles/HowTo.css'; 

export default function HowTo () {
  const {setFormStatus, setStep,setPrompt} = useContext(FormStateContext);
  const navigate = useNavigate();
  console.log("anything");

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
};


  return (
    <div className="how-to container">
        <div>
            <h1 id="howTo">How to...</h1>
        </div>

        <div className="col">
        <div className="row">
            <div className='col card slide-in'>
              <img className="icon d-flex justify-content-start" src="/health_icon.png" alt="health symbol" onClick={() => handleCategorySelect('Health')}/>
              <p className="card-title">Health</p>
            </div>
            <div className='col card slide-in'>
              <img className="icon d-flex justify-content-start" src="/work.png" alt="career symbol" onClick={() => handleCategorySelect('Career')}/>
              <p className="card-title">Career</p>
            </div>
        </div>

        <div className="row">
          <div className='col card slide-in'>
            <img className="icon d-flex justify-content-start" src="/technology.png" alt="technology symbol" onClick={() => handleCategorySelect('Technology')}/>
            <p className="card-title">Technology</p>
          </div>
          <div className='col card slide-in'>
            <img className="icon d-flex justify-content-start" src="/relationships.png" alt="relationships symbol" onClick={() => handleCategorySelect('Relationships')}/>
            <p className="card-title">Relationships</p>
          </div>
        </div>
        <div className="row">
          <div className='col card slide-in'>
              <img className="icon d-flex justify-content-start" src="/finance.png" alt="finance symbol" onClick={() => handleCategorySelect('Finance')}/>
              <p className="card-title">Finance</p>
            </div>
            <div className='col card slide-in'>
              <img className="icon d-flex justify-content-start" src="/education.png" alt="education symbol" onClick={() => handleCategorySelect('Education')}/>
              <p className="card-title">Education</p>
            </div>
        </div>
        <div className="progress">
          <div className="progress-bar" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>

//         <div className="row bg-success m-2">
//         <button className="btn-group btn col-6" onClick={() => handleCategorySelect('Health')}>Health</button>
//         <button className="btn-group btn col-6" onClick={() => handleCategorySelect('Career')}>Career</button>
//         </div>
//         <div className="row bg-success m-2">
//         <button className="btn-group btn col-6" onClick={() => handleCategorySelect('Technology')}>Technology</button>
//         <button className="btn-group btn col-6" onClick={() => handleCategorySelect('Relationships')}>Relationships</button>
//         </div>
//         <div className="row bg-success m-2">
//         <button className="btn-group btn col-6" onClick={() => handleCategorySelect('Finance')}>Finance</button>
//         <button className="btn-group btn col-6" onClick={() => handleCategorySelect('Education')}>Education</button>

//         </div>
        <div className="row">
            <button className='col btn btn-sm' onClick={handleBack}>Back</button>
            <p className='col d-flex justify-content-center align-items-center' id='step1'>1</p>
            <button className='col btn btn-sm' onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  );
}
