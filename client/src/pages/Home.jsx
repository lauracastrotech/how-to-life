// THIS COMPONENT PROVIDES A BRIEF DESCRIPTION OF THE FORM
import { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FormStateContext } from '../helpers/FormContext';
import HowTo from '../components/HowTo';
import Skill from '../components/Skill';
import Objective from '../components/Objective';
import Answer from '../components/Answer';
import '../styles/Home.css'; 
import 'animate.css';


export default function Home() {
  const { formStatus, setFormStatus, step, setStep } = useContext(FormStateContext);
  const {formView, stepView} = useParams();


  useEffect(() => {
    if(formView && stepView){
      setFormStatus(formView);
      setStep(Number(stepView));
      console.log(formStatus);
    }
    else{
      setFormStatus("home");
      setStep(0);
      console.log(formStatus);
    }
  }, [formView, stepView])
  
  const navigate = useNavigate();
  
  const handleGetStarted = () => {
    navigate('/howto/1');
  };

  return (
    <div>
      {(formStatus === "home" && step === 0) && (
        <div className="home">
          <div className='row'>
            <div className='col-md-6 col-lg-6 animate__animated  animate__fadeInLeft'>
              <h1 id='welcome'>Welcome friend,</h1>
              <p id="description">How to life is your go-to resource for mastering essential skills you may not have learned in school or just in general. We understand that navigating adulthood can be daunting, whether it&apos;s managing finances, cooking nutritious meals, or understanding complex paperwork. It&apos;s a tool that helps you create a prompt that we&apos;ll send to some fancy AI that will give you the best guide. <br/></p><hr/>
              <h5 className='d-flex justify-content-end'>Here&apos;s how it works.</h5>
            </div>
            <div className='col-md-6 col-lg-6 animate__animated  animate__fadeInRight'>
              <div id="one" className="card">
                <p className='card-title'>1 | Category</p>
                <p className='card-body'>Setup your prompt by selecting an area of interest.</p>
              </div>
              <div id="two" className="card">
                <p className='card-title'>2 | Skill</p>
                <p className='card-body'>Tell us about what you want to learn.</p>
              </div>
              <div id="three" className="card">
                <p className='card-title'>3 | Objective</p>
                <p className='card-body'>Give us some context. The more details the better.</p>
              </div>
              <button className="btn btn-sm" id='get-started' onClick={handleGetStarted}>Get started</button> 
            </div>
          </div> 
        </div>
      )}
      {formStatus === "howto" && step === 1 && <HowTo />}
      {formStatus === "skill" && step === 2 && <Skill />}
      {formStatus === "objective" && step === 3 && <Objective />}
      {formStatus === "answer" && <Answer />}
    </div>
  );
}
