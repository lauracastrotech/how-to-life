import React, { useEffect, useState, useContext } from 'react';
import { FormStateContext } from '../helpers/FormContext';

export default function Skill() {
    const { formStatus, setFormStatus, setStep, setPrompt, prompt } = useContext(FormStateContext);
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
      const fetchSuggestions = async (category) => {
          const url = `http://localhost:3000/api/suggestions/${category}`;
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
    };

    const handleNext = () => {
        setFormStatus('objective');
        setStep(3);
    };

    //handle suggestionsonclick
    const handleSuggestionClick = (question) => {
      setPrompt(question); 
      setFormStatus('objective'); 
      setStep(3); 
  };

    return (
        <div className="skill">
            <div className="container col">
                <div className="row">
                    <h2>Tell us more about the skill that you want to learn.</h2>
                </div>
                <hr />
                {suggestions.map((suggestion, index) => (
                    <div className="row" key={index}>
                        <p
                            className="card col suggestion"
                            onClick={() => handleSuggestionClick(suggestion.question)}
                        >
                            {suggestion.question}
                        </p>
                    </div>
                ))}
                <div className="row">
                <form>
                        <div className="form-floating">
                            <textarea
                                className="form-control"
                                placeholder="Describe the skill you want to learn"
                                id="custom-skill"
                                value={prompt}
                                onChange={(e) => setPrompt(e.target.value)}
                            ></textarea>
                            <label htmlFor="custom-skill">Comments</label>
                        </div>
                    </form>
                </div>
                <div className="row">
                    <button className='col-4' onClick={handleBack}>Back</button>
                    <p className='col-4'>2</p>
                    {formStatus === 'skill' && (
                        <button className='col-4' onClick={handleNext}>Next</button>
                    )}
                </div>
            </div>
        </div>
    );
}
