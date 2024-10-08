
// Here the user asks a question or selects a suggestion about a specific skill that the user wants to learn
import 'animate.css';
import { useEffect, useState, useContext } from 'react';
import { FormStateContext } from '../helpers/FormContext';
import { useNavigate } from 'react-router-dom';
import '../styles/Skill.css'; 

export default function Skill() {
    const { formStatus, setFormStatus, setStep, setPrompt, prompt } = useContext(FormStateContext);
    const [suggestions, setSuggestions] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
      const fetchSuggestions = async (category) => {
          const url = `http://127.0.0.1:3000/api/suggestions/${category}`;
          console.log('Fetching suggestions from:', url);
          try {
              const response = await fetch(url);
              if (!response.ok) {
                  throw new Error('Failed to fetch suggestions');
              }
              const data = await response.json();
              setSuggestions(data);
          } catch (error) {
              console.error('Error fetching suggestions:', error);
          }
      };

        if (formStatus === 'skill' && prompt) {
            fetchSuggestions(prompt);
        }
    }, [formStatus, prompt]);

    const handleBack = () => { 
        setFormStatus('how-to');
        setStep(1);
        navigate("/howto/1");
    };

    const handleNext = () => {
        setFormStatus('objective');
        setStep(3);
        navigate("/objective/3");

    };

    const handleSuggestionClick = (question) => {
      setPrompt(question); 
      setFormStatus('objective'); 
      setStep(3); 
      navigate('/objective/3');
  };

    return (
        <div className="skill">
            <div className="container col col-md-6">
                <div className="row animate__animated animate__fadeInLeft">
                    <h2>Tell us more about the skill that you want to learn.</h2>
                </div>
                <div className="row animate__animated animate__fadeInLeft">
                <form>
                        <div className="form-floating">
                            <textarea
                                className="form-control"
                                placeholder="Describe the skill you want to learn"
                                id="custom-skill"
                                value={prompt}
                                onChange={(e) => setPrompt(e.target.value)}
                            ></textarea>

                            <label htmlFor="custom-skill">Write your own question about...</label>
                        </div>
                    </form>
                </div>
                <div className="row animate__animated animate__fadeInLeft">
                    <h5>Not sure? Try out one of these.</h5>
                </div>
                    
                {suggestions.map((suggestion, index) => (
                    <div className="row animate__animated animate__fadeInLeft" key={index}>
                        <p
                            className="card col suggestion"
                            onClick={() => handleSuggestionClick(suggestion.question)}
                        >
                            {suggestion.question}
                        </p>
                    </div>
                ))}
                <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className="row">
                    <button className='col form-btn' onClick={handleBack}>Back</button>
                    <p className='col d-flex justify-content-center align-items-center' id='step2'>2</p>

                    <button className='col form-btn' onClick={handleNext}>Next</button>
                </div>
            </div>
        </div>
    );
}
